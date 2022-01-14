import XLSX from "xlsx";
import { connectMongoDB } from "./config/db.mjs";
import { rapperModel } from "../dhh/models/Rappers.mjs";
const excelFilePath = "./scripts/Performance.xlsx";
var workBook = XLSX.readFile(excelFilePath);
var currSheet = null;
const socialMediaArray = [
  "instagram",
  "facebook",
  "twitter",
  "youtube",
  "spotify",
  "apple",
];
connectMongoDB();

const updateDatabase = async (newRapperData) => {
  await newRapperData.save();
};

const getSocialLinkObject = (data) => {
  const socialLinkObject = [];
  socialMediaArray.map((social) => {
    var tempObj = {};
    tempObj[social] = data[social];
    socialLinkObject.push(tempObj);
  });
  console.log(socialLinkObject);
  return socialLinkObject;
};

const saveData = (datas, model) => {
  datas.map((data) => {
    const socialLinkObject = getSocialLinkObject(data);
    const newRapperData = new model({
      name: data.name,
      sociallinks: socialLinkObject,
      originalName: data.originalName,
      profileImage: data.profileImage,
      city: data.city,
      about: data.about,
      title: data.title,
      gender: data.gender,
    });
    updateDatabase(newRapperData);
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
    saveData(datas, rapperModel);
    console.log("completed");
  }
} catch (error) {
  console.log("[Error] script failed due to error " + error.message);
}
