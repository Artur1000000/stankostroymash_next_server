import { Router } from "express";
import { DeleteImage } from "../controllers/DeleteImage.js";

const DeleteImageRoute = new Router();
DeleteImageRoute.post("/delete_image", DeleteImage);

export { DeleteImageRoute };
