import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import { useRecoilState } from "recoil";
import { contentPageState } from "@store/newsletterState";
import Animated, {
  interpolateColor,
  interpolateColors,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const LoadMoreButton = () => {
  const [contentPage, setContentPage] = useRecoilState(contentPageState);

  const colorAnim = useSharedValue(0);

  const backgroundAnimatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      colorAnim.value,
      [0, 1],
      [colors.Orange, colors.White]
    );

    return {
      backgroundColor,
    };
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      colorAnim.value,
      [0, 1],
      [colors.White, colors.Black]
    );

    return {
      color,
    };
  });

  const handleHoverIn = () => {
    colorAnim.value = withTiming(1, { duration: 300 });
  };

  const handleHoverOut = () => {
    colorAnim.value = withTiming(0, { duration: 300 });
  };

  const handleLoadMore = () => {
    setContentPage(contentPage + 1);
  };

  return (
    <AnimatedPressable
      style={[styles.container, backgroundAnimatedStyle]}
      onPress={handleLoadMore}
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
    >
      <Animated.View>
        <Animated.Text style={[styles.label, textAnimatedStyle]}>
          Load More
        </Animated.Text>
      </Animated.View>
    </AnimatedPressable>
  );
};

export default LoadMoreButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 62,
    paddingVertical: 14,
    borderRadius: 24,
    borderWidth: 2.4,
    borderColor: colors.Orange,
  },
  label: {
    fontFamily: fonts.Medium,
    fontSize: 18,
  },
});
