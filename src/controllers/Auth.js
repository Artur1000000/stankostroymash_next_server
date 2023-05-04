import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET = process.env.secret;

export const Auth = async (req, res) => {
  try {
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
