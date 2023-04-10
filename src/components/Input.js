import { useState } from "react";

export default function Input({ label, readOnly, consulter, value }) {
  const [inputValue, setInputValue] = useState(null);
  if(label === "frais_divers")
    return;
  if(label === "nbr_jour")
    return;

  return (
    <div>
      <h5 style={{ marginLeft: "5px" }}>{label} :</h5>
      {readOnly ? (
        <input
          className={
            consulter ? "control-input consulter-search-input" : "control-input cursor-block"
          }
          readOnly
          value={inputValue === null ? value : inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      ) : (
        <input
          className={
            consulter ? "control-input consulter-search-input" : "control-input"
          }
          value={inputValue === null ? value : inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
    </div>
  );
}
