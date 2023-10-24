const { atom } = require("recoil");

const showProductModalState = atom({
  key: "showProduceModalState",
  default: false,
});

const openDrop1State = atom({
  key: "openDrop1State",
  default: false,
});

const openDrop2State = atom({
  key: "openDrop2State",
  default: false,
});

const categoryState = atom({
  key: "categoryState",
  default: null,
});

const productState = atom({
  key: "productState",
  default: null,
});

const listIndexState = atom({
  key: "listIndexState",
  default: 0,
});

const showMobileModalImageState = atom({
  key: "showMobileModalImageState",
  default: false,
});

const modalImageState = atom({
  key: "modalImageState",
  default: null,
});

const productPositionState = atom({
  key: "productPositionState",
  default: null,
});

export { showProductModalState, openDrop1State, openDrop2State, categoryState, productState, listIndexState, showMobileModalImageState, modalImageState, productPositionState };
