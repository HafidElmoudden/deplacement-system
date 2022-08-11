import React from "react";
import Control from "../../components/Control";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function index({ data }) {
  return (
    <div style={{ width: "80%" }}>
      <Control title={"Puissances Fiscales"} data={data} />
    </div>
  );
}

export const getServerSideProps = async () => {
  let data = await prisma.puissances_fiscales.findMany();
  if(data.length === 0){
    data = [{
      puiss_code:"",
      libelle:"",
      taux:""
    }]
  }
  return {
    props: { data },
  };
};
