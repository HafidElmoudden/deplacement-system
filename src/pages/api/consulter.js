// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export default async function consulterHandler(req, res) {
  const data = JSON.parse(req.body);
    console.log('data',data);
  let whereCond;
  let dataFound;
  switch (data.route) {
    case "/banques":
      whereCond = {};

      whereCond[data.search] = Number(data.searchValue)
        ? Number(data.searchValue)
        : data.searchValue;

      try {
        dataFound = await prisma.banques.findFirst({
          where: whereCond,
        });
        console.log(dataFound);
        res.status(200).json(dataFound);
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }

      break;
    case "/destinations":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        await prisma.destinations.update({
          where: whereCond,
          data: item,
        });
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }
      break;
    case "/employes":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        await prisma.employes.update({
          where: whereCond,
          data: item,
        });
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }
      break;
    case "/frais-standards":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        await prisma.frais_standards.update({
          where: whereCond,
          data: item,
        });
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }
      break;
    case "/grades":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        await prisma.grades.update({
          where: whereCond,
          data: item,
        });
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }
      break;
    case "/moyens-de-transport":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        await prisma.moyens_de_transport.update({
          where: whereCond,
          data: item,
        });
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }
      break;
    case "/ordre-de-mission":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        await prisma.ordre_de_mission.update({
          where: whereCond,
          data: item,
        });
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }
      break;
    case "/vehicule-personnel":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        await prisma.vehicule_personnel.update({
          where: whereCond,
          data: item,
        });
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }
      break;
    case "/puissances-fiscales":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        await prisma.puissances_fiscales.update({
          where: whereCond,
          data: item,
        });
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
