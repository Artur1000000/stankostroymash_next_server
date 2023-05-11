import MachineTool from "../models/MachineTool.js";

export const AddItem = async (req, res) => {
    try {
        const item = new MachineTool({
            title: req.body.state.title,
            category: req.body.category.title,
            categoryEn: req.body.category.path,
            subCategory: req.body.subCategory.title,
            subCategoryEn: req.body.subCategory.path,
            photos: req.body.pathImage,
            photoPrimary: req.body.photoPrimary,
            price: req.body.state.price,
            description: req.body.text
        });
        await item.save();
        res.status(200).json({ message: true });
    } catch (e) {
        res.status(400).json({ message: e });
    }
};
