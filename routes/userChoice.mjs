import { Router } from "express";
import { userChoiceModel } from "../models/UserChoices.mjs";
import { rapperModel } from "../models/Rappers.mjs";
const userChoiceRouter = Router();

// fav rapper for the provided id user
userChoiceRouter.get("/:id/:choice", [], async (req, res) => {
  console.log(
    "[ userChoice ] Entering to fetch user choice info favourite rapper"
  );
  try {
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
      const actionInfo = await rapperModel.find({
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

// going to use single function instad of function for each

// // fav beatProducer for the provided id user
// userChoiceRouter.get("/:id/favbeatproducer", [], async (req, res) => {
//   console.log(
//     "[ userChoice ] Entering to fetch user choice info favourite Beat producer"
//   );
//   try {
//     const favbeatproducerRes = await userChoiceModel
//       .find({ user: req.params.id }, { favbeatproducer: 1, _id: 0 })
//       .lean();
//     const beatProducerList = favbeatproducerRes[0].favbeatproducer;
//     let beatProducerDataList = {};
//     for (var i = 0; i < beatProducerList.length; i++) {
//       console.log(i + beatProducerList[i]);
//       const beatProducerInfo = await rapperModel.find({
//         _id: beatProducerList[i].toString(),
//       });
//       beatProducerDataList[i] = beatProducerInfo[0]._doc;
//     }
//     // console.log("length is " + beatProducerDataList);
//     res.json(beatProducerDataList);
//     console.log("[userChoice] response send for fav beat producer");
//   } catch (error) {
//     console.log(
//       "[ userChoice ] Error while fetching data from database for user choice of favourite rapper"
//     );
//     res.status(500).json({ msg: "Server error" });
//   }
// });

// // liked rapper for the provided id user
// userChoiceRouter.get("/:id/likedrapper", [], async (req, res) => {});

// // disliked rapper for the provided id user
// userChoiceRouter.get("/:id/dislikedrapper", [], async (req, res) => {});

// // liked beatProducer for the provided id user
// userChoiceRouter.get("/:id/likedbeatproducer", [], async (req, res) => {});

// // disliked beatProducer for the provided id user
// userChoiceRouter.get("/:id/dislikedbeatproducer", [], async (req, res) => {});

export { userChoiceRouter };
