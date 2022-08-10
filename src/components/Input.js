export default function Input({ label, readOnly, consulter, value }) {
  console.log(readOnly);
  return (
    <div>
      <h5 style={{ marginLeft: "5px" }}>{label} :</h5>
      {readOnly ? (
        <input
          className={
            consulter ? "control-input consulter-search-input" : "control-input"
          }
          readOnly
          value={value ? value : undefined}
        />
      ) : (
        <input
          className={
            consulter ? "control-input consulter-search-input" : "control-input"
          }
          value={value ? value : undefined}
        />
      )}
    </div>
  );
}
