import Button from "./Button";
import Input from "./Input";
import {
  faCheck,
  faRotateLeft,
  faRotateRight
} from "@fortawesome/free-solid-svg-icons";

export default function Ajouter() {
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
        <Button title="Valider" icon={faCheck} type="primary" />
        <Button title="Effacer" icon={faRotateRight} />
      </div>
    </div>
  );
}
