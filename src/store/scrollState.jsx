const { atom } = require("recoil");

const scrollState = atom({
  key: "scrollState",
  default: 0,
});

const scrollRefState = atom({
  key: "scrollRefState",
  default: null,
});

const pageState = atom({
  key: "pageState",
  default: null,
});

export { scrollState, pageState, scrollRefState };
