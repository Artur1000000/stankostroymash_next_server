import MachineTool from "../models/MachineTool.js";

export const GetSubCategory = async (req, res) => {
  try {
    const tools = await MachineTool.find({subCategoryEn:req.query.subcategory});
    console.log(req.query.subcategory, tools)

    res.status(200).json(tools);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};
