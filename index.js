import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import fs from 'fs';
import { MenuRoute } from "./src/routes/MenuRoute.js";
import { GetAllItemsRoute } from "./src/routes/GetAllItemsRoute.js";
import { GetItemRoute } from "./src/routes/GetItemRoute.js";
import { AuthRoute } from "./src/routes/AuthRoute.js";
import { GetSubCategoryRoute } from "./src/routes/GetSubCategoryRoute.js";
import { GetCategoryRoute } from "./src/routes/GetCategoryRoute.js";
import { SearchRoute } from "./src/routes/SearchRoute.js";

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    const fileNameArray = file.originalname.split(".");
    const d = new Date();
    const newFileName = `${d.getTime()}.${
      fileNameArray[fileNameArray.length - 1]
    }`;
    file.originalname = newFileName;
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

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
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.status(200).send("server run!!!");
});

app.post("/upload", upload.single("image"), (req, res) => {
  res.json({ url: `/uploads/${req.file.originalname}` });
});

app.use("/api", MenuRoute);
app.use("/api", GetAllItemsRoute);
app.use("/api", GetItemRoute);
app.use("/api", AuthRoute);
app.use("/api", SearchRoute);

app.use("/api", GetSubCategoryRoute);
app.use("/api", GetCategoryRoute);

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server started on port:${PORT}`);
});
