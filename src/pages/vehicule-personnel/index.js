import React from "react";
import Control from "../../components/Control";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function index({ data }) {
  return (
    <div style={{ width: "80%" }}>
      <Control title={"Vehicule Personnel"} data={data} />
    </div>
  );
}

export const getServerSideProps = async () => {
  let data = await prisma.vehicule_personnel.findMany();
  if(data.length === 0){
    data = [{
      veh_matricule:"",
      veh_marque:"",
      puiss_code:""
    }]
  }

  return {
    props: { data },
  };
};
