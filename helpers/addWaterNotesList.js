const ObjectID = require("bson-objectid");
const { Water } = require("../models");

const getRandomWaterVolume = () => {
  return Math.ceil(Math.random() * 1000);
};

const getRandomWaterDate = () => {
  const dateOptions = {
    year: 2023,
    month: Math.floor(Math.random() * 12),
    day: Math.floor(Math.random() * 32),
    h: Math.floor(Math.random() * 24),
    m: Math.floor(Math.random() * 60),
    s: Math.floor(Math.random() * 60),
    ms: Math.floor(Math.random() * 1000),
  };

  const date = new Date(...Object.values(dateOptions));
  return date;
};

const owners = Array(3)
  .fill(null)
  .map(() => ObjectID());

const getRandomOwner = () => {
  return owners[Math.floor(Math.random() * 3)];
};

const getNotes = (num) => {
  return Array(num)
    .fill(null)
    .map(() => {
      return {
        waterVolume: getRandomWaterVolume(),
        date: getRandomWaterDate(),
        owner: getRandomOwner(),
      };
    });
};

const addWaterNotesList = async (notesNum) => {
  const waterNotes = getNotes(notesNum);
  const data = await Water.insertMany(waterNotes);
  console.log("Water was writen", data);
};

module.exports = addWaterNotesList;
