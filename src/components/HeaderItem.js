import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeaderItem({ icon, title, isActive, clickHandle }) {
  return (
    <div className="header-item" style={{backgroundColor:isActive ? '#FFFFFF' : ''}} onClick={clickHandle}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "1rem",
        }}
      >
        <FontAwesomeIcon
          icon={icon}
          color={isActive ? "#7038A4" : "#9A9FA6"}
          style={{ marginRight: "13px" }}
        />
        <h4
          style={{
            marginTop: "2px",
            color: isActive ? "black" : "#9A9FA6",
            fontWeight: isActive ? "bold" : "normal"
          }}
        >
          {title}
        </h4>
      </div>
    </div>
  );
}

export default HeaderItem;
