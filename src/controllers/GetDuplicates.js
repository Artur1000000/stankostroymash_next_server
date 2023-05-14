import Duplicates from "../models/Duplicates.js";

export const GetDuplicates = async (req, res) => {
  try {
    const tools = await Duplicates.find();
    res.status(200).json(tools);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};
