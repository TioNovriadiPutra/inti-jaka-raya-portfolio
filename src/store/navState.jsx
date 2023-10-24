const { atom } = require("recoil");

const navState = atom({
  key: "navState",
  default: null,
});

const showDrawerState = atom({
  key: "showDrawerState",
  default: false,
});

export { navState, showDrawerState };
