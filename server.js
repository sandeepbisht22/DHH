import express from "express";
import { connectMongoDB } from "./config/db.mjs";
import { expressRouter } from "./routes/rappers.mjs";
const app = express();

// Making DB connection
connectMongoDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json({
    msg: "DHH is here",
  });
});
const PORT = process.env.PORT || 5000;

app.use("/artist/rappers", expressRouter);
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
