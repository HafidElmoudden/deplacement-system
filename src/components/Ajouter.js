import Button from "./Button";
import Input from "./Input";
import {
  faCheck,
  faRotateLeft,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

async function addItem(data, inputs, route) {
  const myData = { data: data, inputs: inputs, route: route };
  const response = await fetch("/api/ajouter", {
    method: "POST",
    body: JSON.stringify(myData),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  // return await response.json();
}

export default function Ajouter({ data }) {
  const [inputsInfo, setInputsInfo] = useState([]);
  const keys = Object.keys(data[0]);
  const router = useRouter();

  function getInputsValue() {
    if (typeof window !== "undefined") {
      document.querySelectorAll(".control-input").forEach((e, i) => {
        if (e.value != "")
          setInputsInfo((oldArray) => [...oldArray, e.value]);
      });
      console.log("inputsinfo : ", inputsInfo);
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
      console.log("useEffect: ", Object.keys(data[0]), inputsInfo);
      if (inputsInfo.length != 0)
        await addItem(Object.keys(data[0]), inputsInfo, router.pathname);
    };
    itemsGather();
  }, [inputsInfo]);

  return (
    <div style={{ marginTop: "25px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-between",
          gap: "20px",
          flex: "2 0 21%",
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
        {/* <Input label="banq_cod" />
        <Input label="banq_cod" />
        <Input label="banq_cod" />
        <Input label="banq_cod" />
        <Input label="banq_cod" />
        <Input label="banq_cod" /> */}
      </div>
      <div style={{ marginRight: "10px" }}>
        <Button
          title="Valider"
          icon={faCheck}
          type="primary"
          clickHandler={async () => {
            getInputsValue();
            console.log("button clickkeeed!!!! outside! : ", inputsInfo);

            // clearAllInputs();
          }}
        />
        <Button title="Effacer" icon={faRotateRight} />
      </div>
    </div>
  );
}
