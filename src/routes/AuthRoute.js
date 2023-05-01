import { Router } from "express";
import { Auth } from "../controllers/Auth.js";

const AuthRoute = new Router();
AuthRoute.post("/auth", Auth);

export { AuthRoute };
