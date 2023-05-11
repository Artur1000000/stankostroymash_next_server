import Duplicates from "../models/Duplicates.js";

export const AddItemDuplicates = async (req, res) => {
    try {
        const item = new Duplicates({
            title: req.body.state.title,
            category: req.body.category.title,
            categoryEn: req.body.category.path,
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
