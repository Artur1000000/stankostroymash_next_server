import Duplicates from "../models/Duplicates.js";
import MachineTool from "../models/MachineTool.js";

export const EditItem = async (req, res) => {
  try {
    let path = "/";
    if (req.body.subCategory) {
      await MachineTool.deleteOne({ _id: req.body.id });

      const update = await MachineTool({
        title: req.body.state.title,
        category: req.body.category.title,
        categoryEn: req.body.category.path,
        subCategory: req.body.subCategory.title,
        subCategoryEn: req.body.subCategory.path,
        photos: req.body.pathImage,
        photoPrimary: req.body.photoPrimary,
        price: req.body.state.price,
        shortDescription: req.body.shortText,
        description: req.body.text,
      });
      await update.save();
      path =
        path +
        req.body.category.path +
        "/" +
        req.body.subCategory.path +
        "/" +
        update._id;
    } else {
      await MachineTool.deleteOne({ _id: req.body.id });
      const update = await Duplicates({
        title: req.body.state.title,
        category: req.body.category.title,
        categoryEn: req.body.category.path,
        photos: req.body.pathImage,
        photoPrimary: req.body.photoPrimary,
        price: req.body.state.price,
        shortDescription: req.body.shortText,
        description: req.body.text,
      });
      await update.save();
      path = path + req.body.category.path + "/" + update._id;
    }

    res.status(200).json({ message: true, path });
  } catch (e) {
    res.status(400).json({ message: e });
  }
};
