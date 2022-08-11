import React from "react";
import Control from "../../components/Control";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function index({ data }) {
  return (
    <div style={{ width: "80%" }}>
      <Control title={"Destinations"} data={data} />
    </div>
  );
}

export const getServerSideProps = async () => {
  let data = await prisma.destinations.findMany();
  if(data.length === 0){
    data = [{
      des_code:"",
      nom_ville:"",
      distance_aller_retour:""
    }]
  }
  return {
    props: { data },
  };
};
