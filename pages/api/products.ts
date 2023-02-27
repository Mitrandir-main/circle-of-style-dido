import type {NextApiRequest, NextApiResponse} from "next";
import { Product } from "../../types";
import { products } from "./data";

export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
  if (req.method === "GET") {
    res.status(200).json(products);
  } else {
    res.status(405).end();
  }
}
