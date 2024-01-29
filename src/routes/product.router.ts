import express from "express";
import {
  getProductById,
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controller";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
