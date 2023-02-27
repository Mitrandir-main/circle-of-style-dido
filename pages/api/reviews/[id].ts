import { NextApiRequest, NextApiResponse } from "next";
import { Product, Review } from "../../../types";
import { reviews } from "../data";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Review[] | { message: string }>
) {
    const { id } = req.query;

    // Find the product with the specified ID in the products array
    const productReviews = reviews.filter(
        (p) => p.productId === parseInt(id as string)
    );

    if (!productReviews) {
        res.status(404).json({
            message: `Product Reviews with Product ID ${id} not found`,
        });
    } else {
        res.status(200).json(productReviews);
    }
}
