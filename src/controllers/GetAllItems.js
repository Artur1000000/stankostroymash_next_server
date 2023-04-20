import MachineTool from "../models/MachineTool.js";

export const GetAllItems = async (req, res) => {
  console.log(req)
  try {
    const tools = await MachineTool.find().sort({$natural:-1});
    console.log("all")
    res.status(200).json(tools);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};
