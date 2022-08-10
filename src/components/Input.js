import { useRef } from "react";

export default function Input({ label, readOnly }) {
  let inputContent = useRef(0);
  console.log('meow', inputContent)
  return (
    <div>
      <h5 style={{ marginLeft: "5px" }}>{label} :</h5>
      {
        readOnly?
        <input ref={inputContent} className="control-input" readOnly/>
        :
        <input ref={inputContent} className="control-input" />

      }
    </div>
  );
}
