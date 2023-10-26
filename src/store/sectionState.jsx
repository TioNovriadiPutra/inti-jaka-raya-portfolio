const { atom } = require("recoil");

const newsletterLayoutState = atom({
  key: "newsletterLayoutState",
  default: null,
});

const homeDescLayout1State = atom({
  key: "homeDescLayout1State",
  default: null,
});

const homeDescLayout2State = atom({
  key: "homeDescLayout2State",
  default: null,
});

const productLayoutState = atom({
  key: "productLayoutState",
  default: null,
});

const aboutDescLayoutState = atom({
  key: "aboutDescLayoutState",
  default: null,
});

const aboutDescStoryLayoutState = atom({
  key: "aboutDescStoryLayoutState",
  default: null,
});

const aboutMissionLayoutState = atom({
  key: "aboutMissionLayoutState",
  default: null,
});

export { newsletterLayoutState, homeDescLayout1State, homeDescLayout2State, productLayoutState, aboutDescLayoutState, aboutMissionLayoutState, aboutDescStoryLayoutState };
