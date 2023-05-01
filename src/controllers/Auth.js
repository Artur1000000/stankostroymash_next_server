import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET = process.env.secret;

export const Auth = async (req, res) => {
  try {

    // if (!user.login || !user.passwordHash) {
    //   const salt = await bcrypt.genSalt(10);
    //   const hash = await bcrypt.hash(req.body.password, salt);

    //   const token = jwt.sign({ _id: user._id }, SECRET, {
    //     expiresIn: "30d",
    //   });
    //   const doc = new User({
    //     login: req.body.email,
    //     passwordHash: hash,
    //     token: token,
    //   });

    //   await doc.save();

    //   res.json({ message: true });
    // }

    res.json({
      message: true,
      email: req.body.email,
      pass: req.body.password,
      user,
    });
  } catch (e) {
    res.status(400).json({ message: e });
  }
};
