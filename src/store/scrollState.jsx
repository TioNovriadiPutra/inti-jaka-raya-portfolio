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

const scrollCarouselState = atom({
  key: "scrollCarouselState",
  default: 0,
});

export { scrollState, pageState, scrollRefState, scrollCarouselState };
