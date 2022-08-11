import React from "react";
import Control from "../../components/Control";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function index({ data }) {
  return (
    <div style={{ width: "80%" }}>
      <Control title={"Banques"} data={data} />
    </div>
  );
}

export const getServerSideProps = async () => {
  let data = await prisma.banques.findMany();
  if(data.length === 0){
    data = [{
      banq_code:"",
      banq_nom:"",
    }]
  }
  return {
    props: { data },
  };
};
