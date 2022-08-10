// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const data = JSON.parse(req.body);
  const item = {};

  Object.values(data)[0].forEach((e,i) => {
    if(i != 0){
      console.log("e : ", e);
      item[e.toString()] = data.inputs[i - 1];
    }
  })

  const addedData = await prisma.banques.create({
    data: item
  })
  res.json(addedData);
}
