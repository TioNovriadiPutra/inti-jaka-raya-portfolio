import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { pageState, scrollState } from "@store/scrollState";
import { navState } from "@store/navState";

const HEIGHT = Dimensions.get("window").height;

const NewsletterCard = ({ data, index, isMobile, isNewsletter }) => {
  const scroll = useRecoilValue(scrollState);
  const nav = useRecoilValue(navState);
  const setPage = useSetRecoilState(pageState);

  const readMoreAnim = useSharedValue(0);
  const shadowAnim = useSharedValue(0);
  const opacityAnim = useSharedValue(0);
  const translateYAnim = useSharedValue(-50);
  const scaleAnim = useSharedValue(1);

  const animatedShadowStyle = useAnimatedStyle(() => {
    const shadowColor = interpolateColor(shadowAnim.value, [0, 1], [colors.White, colors.Black]);

    return {
      shadowColor,
      shadowOffset: { width: 2, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 32,
      transform: [{ scale: scaleAnim.value }],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const textColor = interpolateColor(readMoreAnim.value, [0, 1], [colors.Orange, colors.Blue]);

    return {
      color: textColor,
      fontFamily: fonts.PopRegular,
      fontSize: 14,
    };
  });

  const animatedOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityAnim.value,
      transform: [{ translateY: translateYAnim.value }],
    };
  });

  const onHoverIn = () => {
    readMoreAnim.value = withTiming(1);
  };

  const onHoverOut = () => {
    readMoreAnim.value = withTiming(0);
  };

  const onHoverInShadow = () => {
    shadowAnim.value = withTiming(1);
    scaleAnim.value = withTiming(1.05);
  };

  const onHoverOutShadow = () => {
    shadowAnim.value = withTiming(0);
    scaleAnim.value = withTiming(1);
  };

  const handleEnter = () => {
    setTimeout(() => {
      opacityAnim.value = withTiming(1, { duration: 1000 });
      translateYAnim.value = withTiming(0, { duration: 1000 });
    }, 250 * index);
  };

  const handleExit = () => {
    setTimeout(() => {
      opacityAnim.value = withTiming(0, { duration: 300 });
      translateYAnim.value = withTiming(-50, { duration: 300 });
    }, 250 * index);
  };

  const handleReadMore = () => {
    setPage("Content");
    nav.navigate("Content", {
      news: data,
    });
  };

  useEffect(() => {
    if (!isMobile && !isNewsletter) {
      if (scroll >= HEIGHT - 450) {
        handleEnter();
      } else if (scroll === 0) {
        handleExit();
      }
    }
  }, [scroll]);

  return (
    <Animated.View
      style={[styles.cardContainer, isMobile ? styles.cardContainerMobile : styles.cardContainerWeb, animatedShadowStyle, !isMobile && !isNewsletter ? animatedOpacityStyle : null]}
      onMouseEnter={onHoverInShadow}
      onMouseLeave={onHoverOutShadow}
    >
      <Image source={data.image} style={[styles.image, isMobile ? styles.imageMobile : styles.imageWeb]} />
      <View style={[styles.descContainer, isMobile ? styles.descContainerMobile : styles.descContainerWeb]}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.date}>{data.date}</Text>
        <Text style={styles.news} numberOfLines={isMobile ? 7 : 4}>
          {data.news}
        </Text>
      </View>
      {data.image && (
        <Pressable style={styles.btn} onHoverIn={onHoverIn} onHoverOut={onHoverOut} onPress={handleReadMore}>
          <Animated.Text style={animatedTextStyle}>Read More</Animated.Text>
        </Pressable>
      )}
    </Animated.View>
  );
};

export default NewsletterCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    backgroundColor: colors.LightGrey,
  },
  cardContainerWeb: {
    width: 320,
    height: undefined,
    paddingBottom: 12,
    aspectRatio: 320 / 520,
  },
  cardContainerMobile: {
    width: "100%",
    height: undefined,
    paddingBottom: 18,
    aspectRatio: 319 / 552,
    minHeight: 552,
  },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imageWeb: {
    width: 320,
    height: 280,
  },
  imageMobile: {
    width: "100%",
    height: undefined,
    aspectRatio: 320 / 241,
  },
  descContainer: {
    flex: 1,
    paddingHorizontal: 18,
  },
  descContainerMobile: {
    paddingTop: 26,
  },
  descContainerWeb: {
    paddingTop: 14,
  },
  title: {
    fontFamily: fonts.PopSemiBold,
    fontSize: 20,
    color: colors.Black,
  },
  date: {
    fontFamily: fonts.PopRegular,
    fontSize: 12,
    color: colors.DarkGrey,
    marginTop: 4,
  },
  news: {
    fontFamily: fonts.PopRegular,
    fontSize: 14,
    color: colors.NewsGrey,
    marginTop: 10,
    textAlign: "justify",
  },
  btn: {
    alignSelf: "center",
  },
});
