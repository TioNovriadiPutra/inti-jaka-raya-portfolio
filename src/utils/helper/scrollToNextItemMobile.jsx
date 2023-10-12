const { Dimensions } = require("react-native");

const WIDTH = Dimensions.get("window").width;

export const scrollToNextItemMobile = (scrollX, ref, dataLength) => {
  if (ref.current) {
    ref.current.scrollTo({
      animated: true,
      y: 0,
      x:
        Math.ceil(scrollX) === (WIDTH - 40) * dataLength - (WIDTH - 40) + 1
          ? 0
          : scrollX + (WIDTH - 40),
    });
  }
};
