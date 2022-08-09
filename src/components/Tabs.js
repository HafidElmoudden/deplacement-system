export default function Tabs({ valueChanger }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "30px",
        backgroundColor: "#F7F7F7",
      }}
    >
      <div onClick={() => valueChanger(0)}>
        <h3>Apercu</h3>
      </div>
      <div onClick={() => valueChanger(1)}>
        <h3 >Ajouter</h3>
      </div>
      <div onClick={() => valueChanger(2)}>
        <h3 >Modifier</h3>
      </div>
      <div onClick={() => valueChanger(3)}>
        <h3>Consulter</h3>
      </div>
    </div>
  );
}
