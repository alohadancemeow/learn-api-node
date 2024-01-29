import { db } from "../lib/db";
import { Request, Response } from "express";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await db.product.findMany();
    res.status(200).json({ data: products });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const product = await db.product.findUnique({
      where: {
        id: Number(productId),
      },
    });

    /**
     * Ensure that you are not sending the response multiple times within the same request.
     * Instead, handle errors by returning from the function or using else statements:
     */
    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }

    res.status(200).json({ data: product });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const newProduct = await db.product.create({
      data: productData,
    });

    res.status(201).json({ data: newProduct });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const productData = req.body;

    const existingProduct = await db.product.findFirst({
      where: {
        id: Number(productId),
      },
    });

    if (!existingProduct) {
      return res.status(404).json({ error: "Product not found." });
    }

    const updatedProduct = await db.product.update({
      where: {
        id: Number(productId),
      },
      data: productData,
    });

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    const existingProduct = await db.product.findFirst({
      where: {
        id: Number(productId),
      },
    });

    if (!existingProduct) {
      return res.status(404).json({ error: "Product not found." });
    }

    await db.product.delete({
      where: {
        id: Number(productId),
      },
    });

    res.status(200).json("Product deleted.");
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
