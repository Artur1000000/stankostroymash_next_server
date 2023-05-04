import MachineTool from "../models/MachineTool.js";

export const Search = async (req, res) => {
  try {
    let s = req.query.search;
    const search = await MachineTool.findOne({
      $or: [{ title: s.toUpperCase() }, { title: s.toLowerCase() }],
    });
    console.log(search)
    return res.status(200).json({ result: search });
  } catch (e) {
    res.status(400).json({ message: "search" });
  }
};
