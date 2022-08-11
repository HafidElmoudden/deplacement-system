import React from "react";
import Control from "../../components/Control";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function index({ data }) {
  return (
    <div style={{ width: "80%" }}>
      <Control title={"Grades"} data={data} />
    </div>
  );
}

export const getServerSideProps = async () => {
  let data = await prisma.grades.findMany();
  if(data.length === 0){
    data = [{
      cod_gra:"",
      int_gra:"",
    }]
  }
  return {
    props: { data },
  };
};
