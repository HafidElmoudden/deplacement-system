import Input from "./Input";
import Button from "./Button";
import {
  faMagnifyingGlass,
  faRotateLeft,
  faCheck,
  faRotateRight,
  faX
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Consulter({ data }) {
  const router = useRouter();
  const [showModifyPanel, setShowModifyPanel] = useState(false);
  const [selectValue, setSelectValue] = useState(Object.keys(data[0])[0]);
  const [showModal, setShowModal] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState(false);
  const [error, setError] = useState(false);
  const [inputsInfo, setInputsInfo] = useState([]);
  const [fetchedData, setFetchedData] = useState(false);
  const [searchValue, setSearchValue] = useState();
  const selectHandler = (e) => {
    setSelectValue(e.target.value);
  };

  async function consulterItem(route, search, searchValue) {
    setInputsInfo([])
    if (typeof window !== "undefined") {
      if (document.querySelector(".control-input").value === "") {
        setErrorModalMessage("Le champ de recherche est vide !");
        setError(true);
        setShowModal(true);
        return;
      }

      const myData = {
        route: route,
        search: search,
        searchValue: document.querySelector(".control-input").value
      };
      const response = await fetch("/api/consulter", {
        method: "POST",
        body: JSON.stringify(myData)
      });
      const message = await response.json();
      if (response.status == 310) {
        setErrorModalMessage(message.message);
        setError(true);
        setShowModal(true);
        return;
      }

      if(message == null){
        setErrorModalMessage("L'élément introuvable!");
        setError(true);
        setShowModal(true);
        return;  
      }
      setFetchedData(message);
    }

    // if (!response.ok) {
    //   throw new Error(response.statusText);
    // }
  }

  // CHECK: CAN CLEAR ALL INPUTS INCLUDED OTHER TABS
  function clearAllInputs() {
    if (typeof window !== "undefined") {
      document.querySelectorAll(".control-input").forEach((e) => {});
    }
  }

  return (
    <>
      <div style={{ marginTop: "25px" }}>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Input
              label={selectValue}
              style={{ width: "60%" }}
              consulter={true}
            />
            <select
              className="control-select"
              value={selectValue}
              onChange={selectHandler}
              style={{
                width: "150px",
                backgroundColor: "#E93D4B",
                color: "#FFFFFF",
                height: "37px",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
                fontWeight: "bold",
                outline: "none",
                border: "none",
                textIndent:"10px"
              }}
            >
              {Object.keys(data[0]).map((e) => {
                return (
                  <>
                    <option>{e}</option>
                  </>
                );
              })}
            </select>
          </div>
          <Button
            title="Trouver"
            type="primary"
            icon={faMagnifyingGlass}
            clickHandler={async () => {
              await consulterItem(router.pathname, selectValue, searchValue);
            }}
          />
          <Button
            title="Effacer"
            type="secondary"
            icon={faRotateRight}
            clickHandler={() => {
              console.log("man pls work")
              // if(typeof windows != "undefined"){
                document.querySelector('.control-input').value = "";
              // }
            }}
          />
        </div>

        {fetchedData && (
          <div style={{ marginTop: "90px" }}>
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
              {Object.keys(fetchedData).map((e, i) => {
                return (
                  <Input
                    label={e}
                    value={Object.values(fetchedData)[i]}
                    readOnly={true}
                  />
                );
              })}
            </div>
            {/* <div style={{ marginRight: "10px" }}>
              <Button title="Modifier" icon={faCheck} type="primary" />
            </div> */}
          </div>
        )}
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
            outline:"none",
            broder:"none"
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
