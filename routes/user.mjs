import { Router } from "express";
import { body, validationResult } from "express-validator";
import { userModel } from "../models/User.mjs";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";
const userRouter = Router();

userRouter.post(
  "/",
  [
    body("name", "Please add a name").not.isEmpty(),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password is required").isStrongPassword(),
    body("phoneno", "Enter a number").isNumeric(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //1. Destructure req into params
    const [name, password, email, phoneno] = req.body;
    //2. Check if user is present on database
    const user = await userModel.findOne({ email: email });
    if (user) {
      return res.status(400).json({ msg: "user already exist" });
    }

    user = new user({
      name,
      email,
      phoneno,
      password,
    });
    //3. decrypt data and send it to client
    const salt = bycrypt.genSalt(10);
    user.password = bycrypt.hash(password, salt);
    //4. Save on database
    await user.save();
    //5.send response
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 36000 },
      (error, token) => {
        if (error) throw error;
        res.json({ token });
      }
    );
  }
);

export { userRouter };