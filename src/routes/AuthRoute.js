import { Router } from "express";

const AuthRoute = new Router();
AuthRoute.post("/auth", (req, res) => {
  res.status(200).json({ message: true });
});

export { AuthRoute };
