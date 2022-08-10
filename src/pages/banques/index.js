import React from "react";
import Control from "../../components/Control";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function index({ data }) {
  const Data = [
    { banq_cod: 1, banq_name: "CIH" },
    { banq_cod: 2, banq_name: "BMCE" },
    { banq_cod: 3, banq_name: "BMCI" },
    { banq_cod: 4, banq_name: "ALBARID BANK" },
    { banq_cod: 5, banq_name: "Bank Poupulaire" },
    { banq_cod: 6, banq_name: "Paypal" },
    { banq_cod: 7, banq_name: "Payoneer" }
  ];
  return (
    <div style={{ width: "80%" }}>
      <Control title={"Banques"} data={data} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const data = await prisma.banques.findMany();
  // console.log(data);
  return {
    props: { data },
  };
};
