import React from "react";
import Control from "../../components/Control";

function index() {
  const Data = [
    { banq_code: 1, banq_nom: "CIH" },
    { banq_code: 2, banq_nom: "Banque Populaire" },
    { banq_code: 3, banq_nom: "BMCI" },
    { banq_code: 4, banq_nom: "ALBARID BANK" }
  ];
  return (
    <div style={{ width: "80%" }}>
      <Control title={"Banques"} data={Data} />
    </div>
  );
}

export default index;
