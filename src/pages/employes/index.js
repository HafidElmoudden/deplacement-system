import React from "react";
import Control from "../../components/Control";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function index({ data }) {
  return (
    <div style={{ width: "80%" }}>
      <Control title={"Employés"} data={data} />
    </div>
  );
}

export const getServerSideProps = async () => {
  let data = await prisma.employes.findMany();
  if(data.length === 0){
    data = [{
      matricule:"",
      nom:"",
      prenom:"",
      cod_gra:"",
      banq_code:"",
      num_virement_banq:"",
      veh_matricule:""
    }]
  }
  return {
    props: { data },
  };
};
