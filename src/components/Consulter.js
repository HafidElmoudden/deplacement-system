import Input from "./Input";
import Button from "./Button";
import {
  faMagnifyingGlass,
  faRotateLeft,
  faCheck,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Consulter({ data }) {
  const [showModifyPanel, setShowModifyPanel] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectValue, setSelectValue] = useState(Object.keys(data[0])[0]);
  const selectHandler = (e) => {
    setSelectValue(e.target.value);
  };
  return (
    <>
      <div style={{ marginTop: "25px" }}>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
            clickHandler={() => setShowModifyPanel(true)}
          />
          <Button title="Effacer" type="secondary" icon={faRotateRight} />
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
                flex: "2 0 21%",
              }}
            >
              {Object.keys(data[0]).map((e, i) => {
                return (
                  <>
                    <Input label={e.toString()} key={i} readOnly={true} />
                  </>
                );
              })}
            </div>
            {/* <div style={{ marginRight: "10px" }}>
              <Button title="Modifier" icon={faCheck} type="primary" />
            </div> */}
          </div>
        )}
      </div>
    </>
  );
}
