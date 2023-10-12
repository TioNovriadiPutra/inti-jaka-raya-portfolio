import { StyleSheet, View } from "react-native";
import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import { colors } from "@themes/colors";

const CarouselPagination = ({ data, scrollX, itemWidth }) => {
  return (
    <View style={styles.dotView}>
      {data.map((_, i) => {
        if (_.image) {
          const inputRange = [
            itemWidth * (i - 2),
            itemWidth * (i - 1),
            itemWidth * i,
          ];

          const animatedDot = useAnimatedStyle(() => {
            const dotSize = interpolate(
              scrollX,
              inputRange,
              [8, 10, 8],
              Extrapolate.CLAMP
            );

            const dotColor = interpolateColor(scrollX, inputRange, [
              colors.Grey,
              colors.Orange,
              colors.Grey,
            ]);

            return {
              width: dotSize,
              height: dotSize,
              backgroundColor: dotColor,
            };
          });

          return (
            <Animated.View
              key={i.toString()}
              style={[animatedDot, styles.dot]}
            />
          );
        }
      })}
    </View>
  );
};

export default CarouselPagination;

const styles = StyleSheet.create({
  dotView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  dot: {
    borderRadius: 50,
    backgroundColor: colors.Orange,
  },
});
