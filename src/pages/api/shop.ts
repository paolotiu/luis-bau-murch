import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { formSchema } from "../../utils/validations";

const prisma = new PrismaClient();

interface Shop {
  name: string;
  email: string;
  phone: string;
  description?: string;
}

export default async function shop(_req: NextApiRequest, res: NextApiResponse) {
  if (_req.method === "POST") {
    return await addShop(_req, res);
  } else if (_req.method === "GET") {
    return await getShop(_req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function addShop(_req: NextApiRequest, res: NextApiResponse) {
  const body: Shop = _req.body.values;
  try {
    const isValid = await formSchema.isValid(body);

    if (isValid) {
      await prisma.shop.create({
        data: {
          name: body.name,
          email: body.email,
          phone: body.phone,
          description: body.description,
        },
      });
      return res.status(200).json({ message: "Shop added", success: true });
    } else {
      return res
        .status(400)
        .json({ message: "Validation failed", success: false });
    }
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}

async function getShop(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const shop = await prisma.shop.findMany();
    return res.status(200).json({ data: shop, success: true });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}
