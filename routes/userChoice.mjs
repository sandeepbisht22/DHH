import { Router } from "express";
import { userChoiceModel } from "../models/UserChoices.mjs";
import { rapperModel } from "../models/Rappers.mjs";
import { songModel } from "../models/Songs.mjs";
import { beatProducerModel } from "../models/BeatProducer.mjs";
import { authMiddleware } from "../middleware/auth.mjs";

const userChoiceRouter = Router();

const modals = new Map([
  ["favrapper", rapperModel],
  ["favbeatproducer", beatProducerModel],
  ["favsong", songModel],
]);
// fav rapper for the provided id user
userChoiceRouter.get("/:id/:choice", [], async (req, res) => {
  console.log(
    "[ userChoice ] Entering to fetch user choice info favourite rapper"
  );
  try {
    const currModal = modals.get(req.params.choice);
    const action = req.params.choice;
    var value = 1;
    var query = {};
    query[action] = value;
    const choiceRes = await userChoiceModel
      .find({ user: req.params.id }, query)
      .lean();
    const actionList = choiceRes[0][action];
    let actionDataList = [];
    for (var i = 0; i < actionList.length; i++) {
      console.log(i + actionList[i]);
      const actionInfo = await currModal.find({
        _id: actionList[i].toString(),
      });
      actionDataList[i] = actionInfo[0]._doc;
    }
    // console.log("length is " + actionDataList);
    res.json(actionDataList);
    console.log("[userChoice] response send for fav rapper");
  } catch (error) {
    console.log(
      "[ userChoice ] Error while fetching data from database for user choice of favourite rapper"
    );
    res.status(500).json({ msg: "Server error" });
  }
});

userChoiceRouter.post("/add/:choice/:id/", authMiddleware, async (req, res) => {
  const query = {};
  const currModal = modals.get(req.params.choice);

  const field = req.params.choice;
  const value = req.params.id;
  query[field] = value;
  const isChoicePresent = await userChoiceModel.find(query).lean();
  if (isChoicePresent.length === 0) {
    await userChoiceModel
      .updateOne({ user: req.user.id }, { $push: query })
      .lean();
  }
  const actionInfo = await currModal.find({
    _id: req.params.id,
  });
  res.json(actionInfo);
});

export { userChoiceRouter };
