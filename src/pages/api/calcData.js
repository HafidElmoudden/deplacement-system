// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export default async function modiferHandler(req, res) {
    let fraisDivers = await prisma.frais_standards.findMany();
    let puissancesFiscales = await prisma.puissances_fiscales.findMany();
    let employes = await prisma.employes.findMany();
  
    let calcData = {
      fraisDivers: fraisDivers,
      puissancesFiscales: puissancesFiscales,
      employes: employes
    }

    res.status(200).json(calcData)
}
