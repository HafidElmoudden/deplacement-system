// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const data = JSON.parse(req.body);
  const item = {};
  console.log("data.route : ", data.route);
  console.log("object: ", Object.values(data)[0])
  Object.values(data)[0].forEach((e, i) => {
    if (i != 0) {
      console.log("e : ", e);
      item[e.toString()] = data.inputs[i - 1];
    }
  });

  switch (data.route) {
    case "/banques":
      await prisma.banques.create({
        data: item,
      });
      break;
    case "/destinations":
      await prisma.destinations.create({
        data: item,
      });
      break;
    case "/employes":
      await prisma.employes.create({
        data: item,
      });
      break;
    case "/frais-standards":
      await prisma.frais_standards.create({
        data: item,
      });
      break;
    case "/grades":
      await prisma.grades.create({
        data: item,
      });
      break;
    case "/moyens-de-transport":
      await prisma.moyens_de_transport.create({
        data: item,
      });
      break;
    case "/ordre-de-mission":
      await prisma.ordre_de_mission.create({
        data: item,
      });
      break;
    case "/vehicule-personnel":
      await prisma.vehicule_personnel.create({
        data: item,
      });
      break;
    case "/puissances-fiscales":
      await prisma.puissances_fiscales.create({
        data: item,
      });
      break;
    default:
      throw new Error("Router pathname not in the switch case!");
      break;
  }
  // res.json(addedData);
}
