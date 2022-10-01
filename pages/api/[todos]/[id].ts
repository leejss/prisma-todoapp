import type { NextApiRequest, NextApiResponse } from "next";
import prismaClient from "../../../db/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
    console.log(req.body);

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
      // res.status(200).json("hoo");
    } catch (error) {
      console.error(error);
    }
  }
}
