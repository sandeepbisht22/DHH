import { Router } from "express";
import { body, validationResult } from "express-validator";
import { userModel } from "../models/User.mjs";
import bycrpt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";
import { authMiddleware } from "../middleware/auth.mjs";

const authRouter = Router();

authRouter.post(
  "/",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter valid length").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      const user = userModel.findOne({ email: email });

      if (!user) {
        return res.status(400).json({ msg: "User does not exist" });
      }

      const isMatch = await bycrpt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: "Incorrect password" });
      }
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000 },
        (res, error) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(
        "Error while authenticating user due to error " + error.message
      );
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

authRouter.get("/", authMiddleware, async (req, res) => {
  try {
    const user = userModel.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
});

export { authRouter };