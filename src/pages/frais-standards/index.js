import React from "react";
import Control from "../../components/Control";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function index({ data }) {
  return (
    <div style={{ width: "80%" }}>
      <Control title={"Frais Standards"} data={data} />
    </div>
  );
}

export const getServerSideProps = async () => {
  let data = await prisma.frais_standards.findMany();
  if(data.length === 0){
    data = [{
      categ:"",
      dejeun:"",
      diner:"",
      decouch:""
    }]
  }
  return {
    props: { data },
  };
};
