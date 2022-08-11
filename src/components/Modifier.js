import Input from "./Input";
import Button from "./Button";
import {
  faMagnifyingGlass,
  faRotateLeft,
  faCheck,
  faRotateRight,
  faX
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Modal } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Modifier({ data }) {
  const [inputsInfo, setInputsInfo] = useState([]);
  const [id, setId] = useState("");
  const [showModifyPanel, setShowModifyPanel] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  async function modifierItem(data, inputs, route, id) {
    const myData = { data: data, inputs: inputs, route: route, id: id };
    const response = await fetch("/api/modifier", {
      method: "POST",
      body: JSON.stringify(myData)
    });

    // if (!response.ok) {
    //   throw new Error(response.statusText);
    // }

    if (response.status == 310) {
      const message = await response.json();
      setErrorModalMessage(message.message);
      setError(true);
      setShowModal(true);
    }

    // return await response.json();
  }

  async function existCheck(data, inputs, route, id) {
    const myData = { data: data, inputs: inputs, route: route, id: id };
    const response = await fetch("/api/exist", {
      method: "POST",
      body: JSON.stringify(myData)
    });

    if (response.status == 310) {
      const message = await response.json();
      setErrorModalMessage(message.message);
      setError(true);
      setShowModal(true);
    }

    if (response.status == 200) {
      setShowModifyPanel(true);
    }
  }

  function getInputsValue() {
    if (typeof window !== "undefined") {
      setId(document.querySelector(".control-input").value);
      if ( document.querySelector(".control-input").value === "") {
        setErrorModalMessage("Le champ de recherche est vide !");
        setError(true);
        setShowModal(true);
        return;
      }
      document.querySelectorAll(".control-input").forEach((e, i) => {
        if (e.value != "" && i != 0)
          setInputsInfo((oldArray) => [...oldArray, e.value]);
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
        await modifierItem(
          Object.keys(data[0]),
          inputsInfo,
          router.pathname,
          id
        );
    };
    itemsGather();
  }, [inputsInfo]);

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
            <Input label={Object.keys(data[0])[0]} style={{ width: "60%" }} />
          </div>
          <Button
            title="Trouver"
            type="primary"
            icon={faMagnifyingGlass}
            clickHandler={async () => {
              if (typeof window !== "undefined") {
                if (document.querySelector(".control-input").value !== "") {
                  await existCheck(
                    Object.keys(data[0]),
                    inputsInfo,
                    router.pathname,
                    document.querySelector(".control-input").value
                  );
                } else {
                  setErrorModalMessage("Le champ de recherche est vide !");
                  setError(true);
                  setShowModal(true);
                  setShowModifyPanel(false);
                }
              }
            }}
          />
          <Button
            title="Effacer"
            type="secondary"
            icon={faRotateRight}
            clickHandler={clearAllInputs}
          />
        </div>

        {showModifyPanel && (
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
              {Object.keys(data[0]).map((e, i) => {
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
                title="Modifier"
                icon={faCheck}
                type="primary"
                clickHandler={() => {
                  getInputsValue();
                }}
              />
            </div>
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
