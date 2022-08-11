import React from "react";
import Control from "../../components/Control";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function index({ data }) {
  return (
    <div style={{ width: "80%" }}>
      <Control title={"Ordre de Mission"} data={data} />
    </div>
  );
}

export const getServerSideProps = async () => {
  let data = await prisma.ordre_de_mission.findMany();
  if(data.length === 0){
    data = [{
      num_ordre_miss:"",
      annee:"",
      matricule:"",
      des_code:"",
      date_depart:"",
      heure_depart:"",
      date_retour:"",
      heure_retour:"",
      mt_code:"",
      motif:"",
      frais_divers:"",
      nbr_jour:""
    }]
  }
  return {
    props: { data },
  };
};
