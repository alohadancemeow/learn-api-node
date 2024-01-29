import express from "express";
import ProductRouter from "./routes/product.router";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Register API routes
app.use("/products", ProductRouter);

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
