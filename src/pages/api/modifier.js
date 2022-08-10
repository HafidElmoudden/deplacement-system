// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export default async function modiferHandler(req, res) {
  const data = JSON.parse(req.body);
  const item = {};
  //   console.log("data.route : ", data.route);
  //   console.log("object: ", Object.values(data)[0])
  Object.values(data)[0].forEach((e, i) => {
    if (i != 0) {
      console.log("e : ", e);
      item[e.toString()] = data.inputs[i - 1];
    }
  });
  let whereCond;
  switch (data.route) {
    case "/banques":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        await prisma.banques.update({
          where: whereCond,
          data: item,
        });
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
