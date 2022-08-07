import React from 'react';
import { PrismaClient } from '@prisma/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import Home from '../components/Home';
import Head from 'next/head';
const prisma = new PrismaClient();

function index({grades}) {
  console.log(grades)
  return (
    <div style={{display:'flex', flexDirection:'row', backgroundColor:'#FFFFFF'}}>
      <Head>
        <title>Alomrane</title>
      </Head>
      <Header/>
      <Home/>
    </div>
  );
}

export async function getServerSideProps(){
  const grades = await prisma.grades.findMany();
  return {
    props:{
      grades: grades
    }
  }
}

export default index;
