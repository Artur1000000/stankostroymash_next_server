import MachineTool from "../models/MachineTool.js";
import Duplicates from "../models/Duplicates.js";
import fs from "fs";

export const DeleteItem = async (req, res) => {
  try {
    const { id, category } = req.body;
    if (category === "duplicates") {
      const del = await Duplicates.findById({ _id: id });
      if (!del) {
        return res.status(401).json({ message: e });
      }
      await del.photos.map((item) => {
        fs.unlinkSync(`.${item}`);
      });
      await Duplicates.deleteOne({ _id: id });
    } else {
      const del = await MachineTool.findById({ _id: id });
      if (!del) {
        return res.status(401).json({ message: e });
      }
      await del.photos.map((item) => {
        fs.unlinkSync(`.${item}`);
      });
      await MachineTool.deleteOne({ _id: id });
    }
    res.status(200).json({ message: true });
  } catch (e) {
    res.status(400).json({ message: e });
  }
};
