import { StyleSheet, View } from "react-native";
import React from "react";
import Animated, { Extrapolate, interpolate, interpolateColor, useAnimatedStyle } from "react-native-reanimated";
import { colors } from "@themes/colors";

const CarouselPagination = ({ data, index }) => {
  return (
    <View style={styles.dotView}>
      {data.map((_, i) => {
        const animatedDot = useAnimatedStyle(() => {
          const dotSize = interpolate(index, [i - 1, i, i + 1], [8, 10, 8], Extrapolate.CLAMP);

          const dotColor = interpolateColor(index, [i - 1, i, i + 1], [colors.Grey, colors.Orange, colors.Grey]);

          return {
            width: dotSize,
            height: dotSize,
            backgroundColor: dotColor,
          };
        });

        return <Animated.View key={i.toString()} style={[animatedDot, styles.dot]} />;
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
  },
});
