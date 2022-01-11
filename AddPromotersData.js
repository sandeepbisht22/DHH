import XLSX from "xlsx";
import { connectMongoDB } from "./config/db.mjs";
import { promoterModel } from "./models/PromoterModel.mjs";

const excelFilePath = "./scripts/Performance.xlsx";
var workBook = XLSX.readFile(excelFilePath);
var currSheet = null;
connectMongoDB();

const updateDatabase = async (newPromoterData) => {
  await newPromoterData.save();
};

const getSocialLinkObject = (socialLinksArray) => {
  const socialLinkObject = [];
  socialLinksArray.map((social) => {
    var tempObj = {};
    tempObj[social.split("=")[0]] = social.split("=")[1];

    socialLinkObject.push(tempObj);
  });
  return socialLinkObject;
};

const saveData = (datas, model) => {
  datas.map((data) => {
    const socialLinkObject = getSocialLinkObject(data.sociallinks.split(","));
    const newPromoterData = new model({
      name: data.name,
      sociallinks: socialLinkObject,
      originalName: data.originalName,
      profileImage: data.profileImage,
      type: data.type,
    });
    updateDatabase(newPromoterData);
    console.log(socialLinkObject);
  });
};

try {
  for (var i = 0; i < workBook.SheetNames.length; i++) {
    currSheet = workBook.Sheets[workBook.SheetNames[i]];
    const sheetData = XLSX.utils.sheet_to_json(currSheet);
    const datas = [];
    sheetData.forEach((res) => {
      datas.push(res);
    });
    saveData(datas, promoterModel);
    console.log("completed");
  }
} catch (error) {
  console.log("[Error] script failed due to error " + error.message);
}
