export default function Input({ label, readOnly }) {
  console.log(readOnly)
  return (
    <div>
      <h5 style={{ marginLeft: "5px" }}>{label} :</h5>
      {
        readOnly?
        <input className="control-input" readOnly/>
        :
        <input className="control-input" />

      }
    </div>
  );
}
