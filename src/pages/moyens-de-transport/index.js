import React from "react";
import Control from "../../components/Control";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function index({ data }) {
  return (
    <div style={{ width: "80%" }}>
      <Control title={"Moyens de Transport"} data={data} />
    </div>
  );
}

export const getServerSideProps = async () => {
  let data = await prisma.moyens_de_transport.findMany();
  if(data.length === 0){
    data = [{
      mt_code:"",
      libelle:"",
    }]
  }
  return {
    props: { data },
  };
};
