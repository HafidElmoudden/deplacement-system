import { useState } from "react";

export default function Input({ label, readOnly, consulter, value }) {
  const [inputValue, setInputValue] = useState(null);
  return (
    <div>
      <h5 style={{ marginLeft: "5px" }}>{label} :</h5>
      {readOnly ? (
        <input
          className={
            consulter ? "control-input consulter-search-input" : "control-input"
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
