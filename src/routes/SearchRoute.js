import { Router } from "express";

const SearchRoute = new Router();
SearchRoute.get("/search", (req, res) => {
  console.log(req.params)
  res.status(200).json({ message: "search", });
});

export { SearchRoute };
