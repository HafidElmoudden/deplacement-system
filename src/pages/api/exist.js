// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export default async function modiferHandler(req, res) {
  const data = JSON.parse(req.body);
  const item = {};
  console.log("data.route : ", data.route);
  console.log("object: ", Object.values(data));
  // item[Object.values(data)[0][0]] =
  let whereCond;
  let count;
  switch (data.route) {
    case "/banques":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        count = await prisma.banques.count({
          where: whereCond
        });
        if (count !== 0) {
          let data = await prisma.banques.findFirst({
            where: whereCond
          });
          res.status(200).json({ message: "L'élement trouvé", data: data });
        } else {
          res.status(310).json({ message: "L'élément introuvable!" });
        }
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }

      break;
    case "/destinations":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        count = await prisma.destinations.count({
          where: whereCond
        });
        if (count !== 0) {
          let data = await prisma.destinations.findFirst({
            where: whereCond
          });
          res.status(200).json({ message: "L'élement trouvé", data: data });
        } else {
          res.status(310).json({ message: "L'élément introuvable!" });
        }
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }
    break;
    case "/employes":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        count = await prisma.employes.count({
          where: whereCond
        });
        if (count !== 0) {
          let data = await prisma.employes.findFirst({
            where: whereCond
          });
          res.status(200).json({ message: "L'élement trouvé", data: data });
        } else {
          res.status(310).json({ message: "L'élément introuvable!" });
        }
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }
    break;
    case "/frais-standards":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        count = await prisma.frais_standards.count({
          where: whereCond
        });
        if (count !== 0) {
          let data = await prisma.frais_standards.findFirst({
            where: whereCond
          });
          res.status(200).json({ message: "L'élement trouvé", data: data });
        } else {
          res.status(310).json({ message: "L'élément introuvable!" });
        }
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }
    break;
    case "/grades":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        count = await prisma.grades.count({
          where: whereCond
        });
        if (count !== 0) {
          let data = await prisma.grades.findFirst({
            where: whereCond
          });
          res.status(200).json({ message: "L'élement trouvé", data: data });
        } else {
          res.status(310).json({ message: "L'élément introuvable!" });
        }
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }
    break;
    case "/moyens-de-transport":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        count = await prisma.moyens_de_transport.count({
          where: whereCond
        });
        if (count !== 0) {
          let data = await prisma.moyens_de_transport.findFirst({
            where: whereCond
          });
          res.status(200).json({ message: "L'élement trouvé", data: data });
        } else {
          res.status(310).json({ message: "L'élément introuvable!" });
        }
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }
    break;
    case "/ordre-de-mission":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        count = await prisma.ordre_de_mission.count({
          where: whereCond
        });
        if (count !== 0) {
          let data = await prisma.ordre_de_mission.findFirst({
            where: whereCond
          });
          res.status(200).json({ message: "L'élement trouvé", data: data });
        } else {
          res.status(310).json({ message: "L'élément introuvable!" });
        }
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }
    break;
    case "/vehicule-personnel":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id) ? Number(data.id) : data.id;
      try {
        count = await prisma.vehicule_personnel.count({
          where: whereCond
        });
        if (count !== 0) {
          let data = await prisma.vehicule_personnel.findFirst({
            where: whereCond
          });
          res.status(200).json({ message: "L'élement trouvé", data: data });
        } else {
          
          res.status(310).json({ message: "L'élément introuvable!" });
        }
      } catch (e) {
        console.log(e);
        res.status(310).json({ message: "L'élément introuvable!" });
      }
    break;
    case "/puissances-fiscales":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        count = await prisma.puissances_fiscales.count({
          where: whereCond
        });
        if (count !== 0) {
          let data = await prisma.puissances_fiscales.findFirst({
            where: whereCond
          });
          res.status(200).json({ message: "L'élement trouvé", data: data });
        } else {
          res.status(310).json({ message: "L'élément introuvable!" });
        }
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
