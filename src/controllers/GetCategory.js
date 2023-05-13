import MachineTool from "../models/MachineTool.js";

export const GetCategory = async (req, res) => {
  try {
    const tools = await MachineTool.find({categoryEn:req.query.category});
    res.status(200).json(tools);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};
