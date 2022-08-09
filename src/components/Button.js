import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Button({ title, clickHandler, type, icon }) {
  return (
    <div
      onClick={clickHandler}
      className="control-button"
      style={{ backgroundColor: type == "primary" ? "#136534" : "#9e9fa6" }}
    >
      <FontAwesomeIcon
        icon={icon}
        // width="30px"
        // height="40px"
        style={{ fontSize: "16px", fontWeight: "bold", marginRight: "10px" }}
        color="#FFFFFF"
      />
      <h3 style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "15px" }}>
        {title}
      </h3>
    </div>
  );
}
