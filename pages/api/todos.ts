import type { NextApiRequest, NextApiResponse } from "next";
import prismaClient from "../../db/client";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const result = await prismaClient.todo.findMany();

    res.status(200).json(result);
  }
  if (req.method === "POST") {
    // POST todos
  }
  res.status(200).json("TEST");
}
