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

export default function Ajouter({ data }) {
  const [inputsInfo, setInputsInfo] = useState([]);
  const keys = Object.keys(data[0]);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState(false);
  const [error, setError] = useState(false);

  async function addItem(data, inputs, route) {
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
    if (typeof window !== "undefined") {
      for (let single_input of document.querySelectorAll(".control-input")) {
        console.log("readOnly?", single_input.readOnly);
        if (!single_input.readOnly && single_input.value === "") {
          setErrorModalMessage("Un ou plusieurs champs sont vides!");
          setError(true);
          setShowModal(true);
          return;
        }
      }
      document.querySelectorAll(".control-input").forEach((e, i) => {
        if (e.value != "") setInputsInfo((oldArray) => [...oldArray, e.value]);
      });
    }
  }

  // CHECK: CAN CLEAR ALL INPUTS INCLUDED OTHER TABS
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
                {i == 0 ? (
                  <Input label={e.toString()} key={i} readOnly={true} />
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
            alignItems: "center"
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
