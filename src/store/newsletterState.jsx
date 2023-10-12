const { atom } = require("recoil");

const displayDataState = atom({
  key: "displayDataState",
  default: [],
});

const contentPageState = atom({
  key: "contentPageState",
  default: 1,
});

export { displayDataState, contentPageState };
