import { Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width;

export const scrollToNextItemWeb = (scrollX, ref, itemWidth) => {
  if (ref.current) {
    ref.current.scrollTo({
      animated: true,
      y: 0,
      x:
        Math.ceil(scrollX) === Math.ceil(WIDTH - 200 + itemWidth)
          ? 0
          : scrollX + itemWidth,
    });
  }
};
