const { atom } = require("recoil");

const navState = atom({
  key: "navState",
  default: null,
});

export { navState };
