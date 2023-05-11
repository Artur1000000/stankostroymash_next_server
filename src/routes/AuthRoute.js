import { Router } from "express";
import { Auth } from "../controllers/Auth.js";
import { firstLogin } from "../utils/FirstLogin.js";

const AuthRoute = new Router();

AuthRoute.post("/auth", firstLogin, Auth);

export { AuthRoute };
