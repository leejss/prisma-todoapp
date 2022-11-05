import prismaClient from "@root/db/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id as string;

  // Delete
  if (req.method === "DELETE") {
    try {
      const result = await prismaClient.todo.delete({
        where: {
          id: parseInt(id),
        },
      });
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  }

  if (req.method === "PATCH") {
    try {
      const result = await prismaClient.todo.update({
        where: {
          id: parseInt(id),
        },
        data: {
          done: req.body.done,
        },
      });

      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  }
}
