export default function Input({ label }) {
  return (
    <div>
      <h5 style={{ marginLeft: "5px" }}>{label} :</h5>
      <input className="control-input" />
    </div>
  );
}
