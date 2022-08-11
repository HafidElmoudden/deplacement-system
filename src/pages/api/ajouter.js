// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const data = JSON.parse(req.body);
  const item = {};
  console.log("data.route : ", data.route);
  console.log("object: ", Object.values(data)[0]);
  Object.values(data)[0].forEach((e, i) => {
    if (i != 0) {
      console.log("e : ", e);
      item[e.toString()] = Number(data.inputs[i - 1]) ? Number(data.inputs[i - 1]): data.inputs[i - 1];
    }
  });
  let count;
  switch (data.route) {
    case "/banques":
      try {
        count = await prisma.banques.count({
          where: item
        });

        if (count === 0) {
          await prisma.banques.create({
            data: item
          });
        } else {
          res.status(310).json({ message: "L'élément exists déja!" });
        }
      } catch (e) {
        console.log(e);
        res.status(310).json({ message: "Operation ajouter echoué" });
      }
      break;
    case "/destinations":
      try {
        count = await prisma.destinations.count({
          where: item
        });

        if (count === 0) {
          await prisma.destinations.create({
            data: item
          });
        } else {
          res.status(310).json({ message: "L'élément exists déja!" });
        }
      } catch (e) {
        res.status(310).json({ message: "Operation ajouter echoué" });
      }
      break;
    case "/employes":
      count = await prisma.employes.count({
        where: item
      });

      if (count === 0) {
        await prisma.employes.create({
          data: item
        });
      } else {
        res.status(310).json({ message: "L'élément exists déja!" });
      }
      break;
    case "/frais-standards":
      try {
        count = await prisma.frais_standards.count({
          where: item
        });

        if (count === 0) {
          await prisma.frais_standards.create({
            data: item
          });
        } else {
          res.status(310).json({ message: "L'élément exists déja!" });
        }
      } catch (e) {
        res.status(310).json({ message: "Operation ajouter echoué" });
      }
      break;
    case "/grades":
      try {
        count = await prisma.grades.count({
          where: item
        });

        if (count === 0) {
          await prisma.grades.create({
            data: item
          });
        } else {
          res.status(310).json({ message: "L'élément exists déja!" });
        }
      } catch (e) {
        res.status(310).json({ message: "Operation ajouter echoué" });
      }
      break;
    case "/moyens-de-transport":
      try {
        count = await prisma.moyens_de_transport.count({
          where: item
        });

        if (count === 0) {
          await prisma.moyens_de_transport.create({
            data: item
          });
        } else {
          res.status(310).json({ message: "L'élément exists déja!" });
        }
      } catch (e) {
        res.status(310).json({ message: "Operation ajouter echoué" });
      }
      break;
    case "/ordre-de-mission":
      try {
        count = await prisma.ordre_de_mission.count({
          where: item
        });

        if (count === 0) {
          await prisma.ordre_de_mission.create({
            data: item
          });
        } else {
          res.status(310).json({ message: "L'élément exists déja!" });
        }
      } catch (e) {
        console.log(e);
        res.status(310).json({ message: "Operation ajouter echoué" });
      }
      break;
    case "/vehicule-personnel":
      try {
        count = await prisma.vehicule_personnel.count({
          where: item
        });

        if (count === 0) {
          await prisma.vehicule_personnel.create({
            data: item
          });
        } else {
          res.status(310).json({ message: "L'élément exists déja!" });
        }
      } catch (e) {
        console.log(e);
        res.status(310).json({ message: "Operation ajouter echoué" });
      }
      break;
    case "/puissances-fiscales":
      try {
        count = await prisma.puissances_fiscales.count({
          where: item
        });

        if (count === 0) {
          await prisma.puissances_fiscales.create({
            data: item
          });
        } else {
          res.status(310).json({ message: "L'élément exists déja!" });
        }
      } catch (e) {
        res.status(310).json({ message: "Operation ajouter echoué" });
      }
      break;
    default:
      throw new Error("Router pathname not in the switch case!");
      break;
  }
  // res.json(addedData);
}
