import React from "react";

function Home() {
  return (
    <div style={{ display:'flex',justifyContent:'center',flexDirection:'column',marginLeft: "40px" }}>
      <img src={require("../../public/alomrane-big.png").default.src} width={300}/>
      <h1 className="welcomeText">Bienvenue,</h1>
      <h1>À Alomrane système de gestion des déplacements</h1>
      {/* <p style={{fontSize:'20px', fontWeight:"bold", marginTop:'15px'}}>Une application qui vise à gérer tous les déplacements des salariés dans toute l'entreprise Alomrane</p> */}
    </div>
  );
}

export default Home;
