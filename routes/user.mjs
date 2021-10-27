import { Router } from "express";
import { body, validationResult } from "express-validator";
const userRouter = Router();

userRouter.post(
  "/",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password is required").exists().isStrongPassword(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //1. Destructure req into params
    //2. Check if user is present on database
    //3. compare database password and provided password
    //4. decrypt data and send it to client
  }
);

export { userRouter };
