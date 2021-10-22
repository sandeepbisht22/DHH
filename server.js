import express from "express";
import { connectMongoDB } from "./config/db.mjs";
import { rapperRouter } from "./routes/rappers.mjs";
import { beatProducerRouter } from "./routes/beatProducer.mjs";
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

app.use("/artist/rappers", rapperRouter);
app.use("/artist/beatProdcuer", beatProducerRouter);
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
