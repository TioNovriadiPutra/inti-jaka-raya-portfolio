import { Dimensions, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import useResponsive from "@hooks/useResponsive";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useRecoilValue } from "recoil";
import { scrollState } from "@store/scrollState";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const AboutFloatingImage = ({ image }) => {
  const scroll = useRecoilValue(scrollState);

  const { isTabletOrMobileDevice } = useResponsive();

  const floatingOpacityAnim = useSharedValue(0);
  const floatingTranslateYAnim = useSharedValue(50);

  const floatingAnimatedStyle = useAnimatedStyle(() => {
    const opacity = floatingOpacityAnim.value;
    const translateY = floatingTranslateYAnim.value;

    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  useEffect(() => {
    if (isTabletOrMobileDevice ? scroll >= HEIGHT / 3 : scroll >= HEIGHT / 2) {
      floatingOpacityAnim.value = withTiming(1, { duration: 1000 });
      floatingTranslateYAnim.value = withTiming(0, { duration: 1000 });
    } else if (scroll <= HEIGHT / 2 - 100) {
      floatingOpacityAnim.value = withTiming(0, { duration: 1000 });
      floatingTranslateYAnim.value = withTiming(50, { duration: 1000 });
    }
  }, [scroll]);

  return (
    <Animated.View
      style={[
        styles.container,
        isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb,
        floatingAnimatedStyle,
      ]}
    >
      <Image source={image} style={styles.image} />
    </Animated.View>
  );
};

export default AboutFloatingImage;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    borderRadius: 32,
    shadowColor: colors.Black,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 32,
  },
  containerWeb: {
    left: 182,
    right: 182,
    bottom: -((((WIDTH - 364) / 16) * 7) / 2),
    height: ((WIDTH - 364) / 16) * 7,
  },
  containerMobile: {
    left: 20,
    right: 20,
    bottom: "-30%",
    height: 364,
  },
  image: {
    flex: 1,
    borderRadius: 32,
  },
});
