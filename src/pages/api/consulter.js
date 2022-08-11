// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export default async function consulterHandler(req, res) {
  const data = JSON.parse(req.body);
  console.log("data", data);
  let whereCond;
  let dataFound;
  switch (data.route) {
    case "/banques":
      whereCond = {};

      whereCond[data.search] = Number(data.searchValue)
        ? Number(data.searchValue)
        : data.searchValue;

      try {
        console.log("we got: ", whereCond);
        dataFound = await prisma.banques.findFirst({
          where: whereCond
        });
        res.status(200).json(dataFound);
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }

      break;
    case "/destinations":
      whereCond = {};

      whereCond[data.search] = Number(data.searchValue)
        ? Number(data.searchValue)
        : data.searchValue;

      try {
        dataFound = await prisma.destinations.findFirst({
          where: whereCond
        });
        res.status(200).json(dataFound);
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }

      break;
    case "/employes":
      whereCond = {};

      whereCond[data.search] = Number(data.searchValue)
        ? Number(data.searchValue)
        : data.searchValue;

      try {
        dataFound = await prisma.employes.findFirst({
          where: whereCond
        });
        res.status(200).json(dataFound);
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }

      break;
    case "/frais-standards":
      whereCond = {};

      whereCond[data.search] = Number(data.searchValue)
        ? Number(data.searchValue)
        : data.searchValue;

      try {
        dataFound = await prisma.frais_standards.findFirst({
          where: whereCond
        });
        res.status(200).json(dataFound);
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }

      break;
    case "/grades":
      whereCond = {};

      whereCond[data.search] = Number(data.searchValue)
        ? Number(data.searchValue)
        : data.searchValue;

      try {
        dataFound = await prisma.grades.findFirst({
          where: whereCond
        });
        res.status(200).json(dataFound);
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }

      break;
    case "/moyens-de-transport":
      whereCond = {};

      whereCond[data.search] = Number(data.searchValue)
        ? Number(data.searchValue)
        : data.searchValue;

      try {
        dataFound = await prisma.moyens_de_transport.findFirst({
          where: whereCond
        });
        res.status(200).json(dataFound);
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }

      break;
    case "/ordre-de-mission":
      whereCond = {};

      whereCond[data.search] = Number(data.searchValue)
        ? Number(data.searchValue)
        : data.searchValue;

      try {
        dataFound = await prisma.ordre_de_mission.findFirst({
          where: whereCond
        });
        res.status(200).json(dataFound);
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }

      break;
    case "/vehicule-personnel":
      whereCond = {};

      whereCond[data.search] = Number(data.searchValue)
        ? Number(data.searchValue)
        : data.searchValue;

      try {
        dataFound = await prisma.vehicule_personnel.findFirst({
          where: whereCond
        });
        res.status(200).json(dataFound);
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }

      break;
    case "/puissances-fiscales":
      whereCond = {};

      whereCond[data.search] = Number(data.searchValue)
        ? Number(data.searchValue)
        : data.searchValue;

      try {
        dataFound = await prisma.puissances_fiscales.findFirst({
          where: whereCond
        });
        res.status(200).json(dataFound);
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }  
    break;
    default:
      throw new Error("Router pathname not in the switch case!");
      break;
  }
  // res.json(addedData);
}
