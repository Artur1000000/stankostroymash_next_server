import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { MenuRoute } from "./src/routes/MenuRouter.js";
import { GetAllItemsRoute } from "./src/routes/GetAllItemsRouter.js";
import { GetItemRoute } from "./src/routes/GetItemRoute.js";
// import MachineTool from "./src/models/MachineTool.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4444;
const DB_USER = process.env.userDB;
const DB_PASSWORD = process.env.passwordDB;
const DB_NAME = process.env.nameDB;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.eo8lgvy.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error ", err));

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("server run!!!");
});

app.use("/api", MenuRoute);
app.use("/api", GetAllItemsRoute);
app.use("/api", GetItemRoute);

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server started on port:${PORT}`);
});
