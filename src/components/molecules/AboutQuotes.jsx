import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import useResponsive from "@hooks/useResponsive";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AboutQuotes = () => {
  const { isTabletOrMobileDevice } = useResponsive();

  const titleAnim = useSharedValue(0);
  const quotesAnim = useSharedValue(0);

  const titleAnimatedStyle = useAnimatedStyle(() => {
    const opacity = titleAnim.value;

    return {
      opacity,
    };
  });

  const quotesAnimatedStyle = useAnimatedStyle(() => {
    const opacity = quotesAnim.value;

    return {
      opacity,
    };
  });

  useEffect(() => {
    setTimeout(() => {
      titleAnim.value = withTiming(1, { duration: 1000, easing: Easing.ease });
    }, 300);
    setTimeout(() => {
      quotesAnim.value = withTiming(1, { duration: 1000, easing: Easing.ease });
    }, 900);
  }, []);

  return (
    <View
      style={[
        styles.container,
        isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb,
      ]}
    >
      <Animated.Text
        style={[
          styles.title,
          isTabletOrMobileDevice ? styles.titleMobile : styles.titleWeb,
          titleAnimatedStyle,
        ]}
      >
        We Believe In The <Text style={styles.success}>Success</Text> Of{`\n`}
        Every Business
      </Animated.Text>

      <Animated.View
        style={[
          isTabletOrMobileDevice
            ? styles.quotesContainerMobile
            : styles.quotesContainerWeb,
          quotesAnimatedStyle,
        ]}
      >
        <Text style={styles.quotes}>
          “It is only when we take chances, when our lives improve. The initial
          and the most difficult risk that we need to take is to become honest.
        </Text>
        <Text style={styles.author}>—Walter Anderson</Text>
      </Animated.View>
    </View>
  );
};

export default AboutQuotes;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  containerWeb: {
    marginHorizontal: 113,
    paddingTop: 164,
    gap: 99,
  },
  containerMobile: {
    marginHorizontal: 8,
    paddingTop: 157,
    gap: 90,
  },
  title: {
    textAlign: "center",
    fontFamily: fonts.SemiBold,
    color: colors.White,
  },
  titleWeb: {
    fontSize: 64,
  },
  titleMobile: {
    fontSize: 36,
  },
  success: {
    color: colors.Orange,
  },
  quotesContainerWeb: {
    gap: 40,
  },
  quotesContainerMobile: {
    gap: 19,
    marginHorizontal: 19,
  },
  quotes: {
    textAlign: "center",
    fontFamily: fonts.MediumItalic,
    color: colors.White,
  },
  quotesWeb: {
    fontSize: 18,
  },
  quotesMobile: {
    fontSize: 14,
  },
  author: {
    textAlign: "center",
    fontFamily: fonts.Medium,
    fontSize: 18,
    color: colors.Orange,
  },
});
