import { Image, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import useResponsive from "@hooks/useResponsive";
import { colors } from "@themes/colors";
import HomeDescText from "@components/molecules/HomeDescText";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { scrollState } from "@store/scrollState";
import { homeDescLayout1State, homeDescLayout2State } from "@store/sectionState";
import { setSectionLayout } from "@utils/helper/setSectionLayout";

const HomeDesc = ({ position = "left", color, image, type, title, desc, animatedPoinEnter }) => {
  const opacityAnim = useSharedValue(0);
  const translateXLeftAnim = useSharedValue(-50);
  const translateXRightAnim = useSharedValue(50);
  const [homeDescLayout1, setHomeDescLayout1] = useRecoilState(homeDescLayout1State);
  const setHomeDescLayout2 = useSetRecoilState(homeDescLayout2State);

  const scroll = useRecoilValue(scrollState);

  const { isTabletOrMobileDevice } = useResponsive();

  const animatedLeftStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityAnim.value,
      transform: [{ translateX: translateXLeftAnim.value }],
    };
  });

  const animatedRightStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityAnim.value,
      transform: [{ translateX: translateXRightAnim.value }],
    };
  });

  const handleEnter = () => {
    opacityAnim.value = withTiming(1, { duration: 1000 });
    if (position === "left") {
      translateXLeftAnim.value = withTiming(0, { duration: 800 });
    } else if (position === "right") {
      translateXRightAnim.value = withTiming(0, { duration: 800 });
    }
  };

  const handleExit = () => {
    opacityAnim.value = withTiming(0, { duration: 300 });
    if (position === "left") {
      translateXLeftAnim.value = withTiming(-50, { duration: 300 });
    } else if (position === "right") {
      translateXRightAnim.value = withTiming(50, { duration: 300 });
    }
  };

  useEffect(() => {
    if (scroll >= animatedPoinEnter) {
      handleEnter();
    } else if (scroll <= homeDescLayout1 - 400) {
      handleExit();
    }
  }, [scroll]);

  return (
    <View
      style={[styles.container, isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb]}
      onLayout={(event) => setSectionLayout(event, position === "left" ? setHomeDescLayout1 : setHomeDescLayout2)}
    >
      <Animated.View style={[isTabletOrMobileDevice ? styles.descContainerMobile : styles.descContainer, position === "right" ? animatedRightStyle : animatedLeftStyle]}>
        {!isTabletOrMobileDevice ? (
          position === "right" ? (
            <>
              <Image source={image} style={[styles.image, styles.imageWeb]} />
              <HomeDescText color={color} type={type} title={title} desc={desc} isMobile={isTabletOrMobileDevice} />
            </>
          ) : (
            <>
              <HomeDescText color={color} type={type} title={title} desc={desc} isMobile={isTabletOrMobileDevice} />
              <Image source={image} style={[styles.image, styles.imageWeb]} />
            </>
          )
        ) : (
          <>
            <Image source={image} style={[styles.image, styles.imageMobile]} />
            <HomeDescText color={color} type={type} title={title} desc={desc} isMobile={isTabletOrMobileDevice} />
          </>
        )}
      </Animated.View>
    </View>
  );
};

export default HomeDesc;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
  },
  containerMobile: {
    paddingTop: 26,
    paddingBottom: 22,
    paddingHorizontal: 20,
  },
  containerWeb: {
    paddingTop: 95,
    height: 524,
    alignItems: "center",
    justifyContent: "center",
  },
  descContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 54,
  },
  descContainerMobile: {
    gap: 40,
  },
  image: {
    borderRadius: 24,
  },
  imageMobile: {
    width: "100%",
    height: undefined,
    aspectRatio: 320 / 180,
  },
  imageWeb: {
    width: 593,
    height: undefined,
    aspectRatio: 593 / 333,
  },
});
