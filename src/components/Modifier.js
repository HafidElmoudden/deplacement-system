import Input from "./Input";
import Button from "./Button";
import {
  faMagnifyingGlass,
  faRotateLeft,
  faCheck,
  faRotateRight
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Modifier() {
  const [showModifyPanel, setShowModifyPanel] = useState(false);
  return (
    <div style={{ marginTop: "25px" }}>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Input label={"banq_cod"} style={{ width: "60%" }} />
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
              flex: "2 0 21%"
            }}
          >
            <Input label="banq_cod" />
            <Input label="banq_cod" />
            <Input label="banq_cod" />
            <Input label="banq_cod" />
            <Input label="banq_cod" />
            <Input label="banq_cod" />
          </div>
          <div style={{ marginRight: "10px" }}>
            <Button title="Modifier" icon={faCheck} type="primary" />
          </div>
        </div>
      )}
    </div>
  );
}
