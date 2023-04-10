import Button from "./Button";
import Input from "./Input";
import {
  faCheck,
  faRotateLeft,
  faRotateRight,
  faX
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "@mui/material";
import moment from 'moment';


export default function Ajouter({ data }) {
  const [inputsInfo, setInputsInfo] = useState([]);
  const keys = Object.keys(data[0]);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState(false);
  const [error, setError] = useState(false);

  async function existCheck(data, inputs, route, id) {
    const myData = { data: data, inputs: inputs, route: route, id: id };
    const response = await fetch("/api/exist", {
      method: "POST",
      body: JSON.stringify(myData)
    });

    if (response.status == 310) {
      const message = await response.json();
      setErrorModalMessage("Frais divers calculation echoé.");
      setError(true);
      setShowModal(true);
    }

    if (response.status == 200) {
      const res = await response.json();
      console.log("exist check = ", res);
      return res.data;
    }
  }

  var DateDiff = {
 
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return Math.floor((t2-t1)/(24*3600*1000));
    },
 
    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000*7));
    },
 
    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();
 
        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },
 
    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}

  const fraisDiverCalc = async (data) => {
    let calcData = await fetch("/api/calcData").then((res) => res.json())
    let searchedData = calcData.employes.find((el) => el.matricule == data[1]);
    let res = 0;
    console.log('searched data : ',searchedData)
    console.log("data : " , data);
    console.log("calcData : ", calcData);
    let _fraisStandards = calcData.fraisDivers.find((e) => e.categ === searchedData.cod_gra);
    console.log('frais standarsdsdsd : ', _fraisStandards);
    let dateDepart = {
      yearDepart: data[3].split("/")[0],
      monthDepart: data[3].split("/")[1],
      dayDepart: data[3].split("/")[2],
      hoursDepart: data[4].split(":")[0],
      minutesDepart: data[4].split(":")[1]
    }

    let dateRetour = {
      yearDepart: data[5].split("/")[0],
      monthDepart: data[5].split("/")[1],
      dayDepart: data[5].split("/")[2],
      hoursDepart: data[6].split(":")[0],
      minutesDepart: data[6].split(":")[1]
    }

    let _dateDepart = new Date(dateDepart.yearDepart, dateDepart.monthDepart, dateDepart.dayDepart);
    let _dateRetour = new Date(dateRetour.yearDepart, dateRetour.monthDepart, dateRetour.dayDepart);
    let daysDiff = DateDiff.inDays(_dateDepart, _dateRetour)

    console.log("days between : ", daysDiff);
    res += daysDiff * _fraisStandards.dejeun + daysDiff * _fraisStandards.diner + daysDiff * _fraisStandards.decouch; 
    if(Number(dateRetour.hoursDepart) >= 12 && Number(dateRetour.hoursDepart) < 18){
      res += _fraisStandards.dejeun;
    } else if (Number(dateRetour.hoursDepart) >= 20 && Number(dateRetour.hoursDepart) <= 23 ){
      res += _fraisStandards.diner;
    }
    console.log(res);
    return {days: daysDiff, fraisDivers: res};
  }
  async function addItem(data, inputs, route) {
    if (route === "/ordre-de-mission") {
      let frais_divers = await fraisDiverCalc(inputs);
      inputs[9] = frais_divers.fraisDivers;
      inputs[10] = frais_divers.days;
      console.log('works ?? xd : ',inputs);
    }

    const myData = { data: data, inputs: inputs, route: route };
    const response = await fetch("/api/ajouter", {
      method: "POST",
      body: JSON.stringify(myData)
    });

    // if (!response.ok) {
    //   throw new Error(response.statusText);
    // }

    const message = await response.json();
    if (response.status == 310) {
      setErrorModalMessage(message.message);
      setError(true);
      setShowModal(true);
      return;
    }

    // return await response.json();
  }
  function getInputsValue() {
    setInputsInfo([])
    if (typeof window !== "undefined") {
      for (let single_input of document.querySelectorAll(".control-input")) {
        if (!single_input.readOnly && single_input.value === "") {
          setErrorModalMessage("Un ou plusieurs champs sont vides!");
          setError(true);
          setShowModal(true);
          return;
        }
      }

      document.querySelectorAll(".control-input").forEach((e, i) => {
        if (e.value != "")
          setInputsInfo((oldArray) => [...oldArray, e.value]);
      });
    }
  }

  function clearAllInputs() {
    if (typeof window !== "undefined") {
      document.querySelectorAll(".control-input").forEach((e) => {
        e.value = "";
      });
    }
  }

  useEffect(() => {
    const itemsGather = async () => {
      if (inputsInfo.length != 0)
        await addItem(Object.keys(data[0]), inputsInfo, router.pathname);
    };
    itemsGather();
  }, [inputsInfo]);

  return (
    <>
      <div style={{ marginTop: "25px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "space-between",
            gap: "20px",
            flex: "2 0 21%"
          }}
        >
          {keys.map((e, i) => {
            return (
              <>
                {(i == 0 || e.toString() === "frais_divers" || e.toString() === "nbr_jour") ? (
                  <Input label={e.toString()} key={i} readOnly={(e.toString() === "veh_matricule" || e.toString() === "matricule") ? false : true} />
                ) : (
                  <Input label={e.toString()} key={i} />
                )}
              </>
            );
          })}
        </div>
        <div style={{ marginRight: "10px" }}>
          <Button
            title="Valider"
            icon={faCheck}
            type="primary"
            clickHandler={() => {
              getInputsValue();
            }}
          />
          <Button
            title="Effacer"
            icon={faRotateRight}
            clickHandler={clearAllInputs}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center"
        }}
      >
        <Modal
          open={showModal}
          onClose={() => {
            setShowModal(false);
            setError(false);
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            outline: "none",
            broder: "none"
          }}
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              width: "30%",
              height: "23%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px"
            }}
          >
            {error ? (
              <>
                <FontAwesomeIcon
                  icon={faX}
                  color="red"
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginRight: "15px"
                  }}
                />
                <h3>{errorModalMessage}</h3>
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  icon={faCheck}
                  color="green"
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    marginRight: "15px"
                  }}
                />
                <h1>Opération réussie!</h1>
              </>
            )}
          </div>
        </Modal>
      </div>
    </>
  );
}


