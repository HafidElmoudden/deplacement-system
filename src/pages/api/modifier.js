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
      item[e.toString()] = Number(data.inputs[i - 1]) ? Number(data.inputs[i - 1]) : data.inputs[i - 1];
    }
  });
  let whereCond;
  let count;
  switch (data.route) {
    case "/banques":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      console.log("modifier = ", data.data, data.data[0]);
      try {
        count = await prisma.banques.count({
          where: item
        });
        if (count === 0) {
          await prisma.banques.update({
            where: whereCond,
            data: item
          });
        } else {
          res.status(310).json({ message: "L'élément exists déja!" });
        }
      } catch (e) {
        console.log(e)
        res.status(310).json({ message: "L'élément introuvable!" });
      }

      break;
    case "/destinations":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        count = await prisma.destinations.count({
          where: item
        });
        if (count === 0) {
          await prisma.destinations.update({
            where: whereCond,
            data: item
          });
        } else {
          res.status(310).json({ message: "L'élément exists déja!" });
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
          where: item
        });
        if (count === 0) {
          await prisma.employes.update({
            where: whereCond,
            data: item
          });
        } else {
          res.status(310).json({ message: "L'élément exists déja!" });
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
          where: item
        });
        if (count === 0) {
          await prisma.frais_standards.update({
            where: whereCond,
            data: item
          });
        } else {
          res.status(310).json({ message: "L'élément exists déja!" });
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
          where: item
        });
        if (count === 0) {
          await prisma.grades.update({
            where: whereCond,
            data: item
          });
        } else {
          res.status(310).json({ message: "L'élément exists déja!" });
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
          where: item
        });
        if (count === 0) {
          await prisma.moyens_de_transport.update({
            where: whereCond,
            data: item
          });
        } else {
          res.status(310).json({ message: "L'élément exists déja!" });
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
          where: item
        });
        if (count === 0) {
          await prisma.ordre_de_mission.update({
            where: whereCond,
            data: item
          });
        } else {
          res.status(310).json({ message: "L'élément exists déja!" });
        }
      } catch (e) {
        res.status(310).json({ message: "L'élément introuvable!" });
      }
      break;
    case "/vehicule-personnel":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        count = await prisma.vehicule_personnel.count({
          where: item
        });
        if (count === 0) {
          await prisma.vehicule_personnel.update({
            where: whereCond,
            data: item
          });
        } else {
          res.status(310).json({ message: "L'élément exists déja!" });
        }
      } catch (e) {
        console.log(e)
        res.status(310).json({ message: "L'élément introuvable!" });
      }
      break;
    case "/puissances-fiscales":
      whereCond = {};
      whereCond[data.data[0].toString()] = Number(data.id);
      try {
        count = await prisma.puissances_fiscales.count({
          where: item
        });
        if (count === 0) {
          await prisma.puissances_fiscales.update({
            where: whereCond,
            data: item
          });
        } else {
          res.status(310).json({ message: "L'élément exists déja!" });
        }
      } catch (e) {
        console.log(e)
        res.status(310).json({ message: "L'élément introuvable!" });
      }
      break;
    default:
      throw new Error("Router pathname not in the switch case!");
      break;
  }
  res.json({});
}
