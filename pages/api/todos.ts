import type { NextApiRequest, NextApiResponse } from "next";
import prismaClient from "../../db/client";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const result = await prismaClient.todo.findMany();
    return res.status(200).json(result);
  }
  if (req.method === "POST") {
    const result = await prismaClient.todo.create({
      data: req.body,
    });
    return res.status(200).json(result);
  }

  if (req.method === "DELETE") {
    const result = await prismaClient.todo.deleteMany();
    return res.status(200).json(result);
  }
}
