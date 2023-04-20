import { Router } from "express";
import { GetAllItems } from "../controllers/GetAllItems.js";

const GetAllItemsRoute = new Router();
GetAllItemsRoute.get("/getall", GetAllItems);

export { GetAllItemsRoute };
