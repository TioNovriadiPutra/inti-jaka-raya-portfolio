import { Dimensions, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import NavbarButtonSection from "@components/molecules/NavbarButtonSection";
import { colors } from "@themes/colors";
import useResponsive from "@hooks/useResponsive";
import Hamburger from "@components/atoms/Hamburger";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useRecoilState, useRecoilValue } from "recoil";
import { pageState, scrollState } from "@store/scrollState";
import CustomDrawer from "@components/templates/CustomDrawer";
import { navState } from "@store/navState";

const HEIGHT = Dimensions.get("window").height;

const Navbar = ({ scrollRef }) => {
  const [scroll, setScroll] = useRecoilState(scrollState);
  const page = useRecoilValue(pageState);
  const nav = useRecoilValue(navState);

  const [showDrawer, setShowDrawer] = useState(false);

  const { isTabletOrMobileDevice } = useResponsive();

  const opacityAnim = useSharedValue(0);

  const opacityAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityAnim.value,
    };
  });

  const handleBackHome = () => {
    setScroll(0);
    nav.navigate("Home");
  };

  useEffect(() => {
    if (page === "Home") {
      if (scroll >= HEIGHT) {
        opacityAnim.value = withTiming(1);
      } else {
        opacityAnim.value = withTiming(0);
      }
    }
  }, [scroll]);

  return (
    <Animated.View
      style={[
        styles.container,
        isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb,
        page === "Home" ? opacityAnimatedStyle : { opacity: 1 },
      ]}
    >
      <TouchableOpacity onPress={handleBackHome}>
        <Image
          source={
            isTabletOrMobileDevice
              ? require("@assets/images/logoMobile.png")
              : require("@assets/images/logo.png")
          }
          style={isTabletOrMobileDevice ? styles.imageMobile : styles.imageWeb}
        />
      </TouchableOpacity>

      {isTabletOrMobileDevice ? (
        <Hamburger blue setShowDrawer={setShowDrawer} />
      ) : (
        <NavbarButtonSection withBackground scrollRef={scrollRef} />
      )}

      {isTabletOrMobileDevice && (
        <CustomDrawer
          showModal={showDrawer}
          setShowModal={setShowDrawer}
          scrollRef={scrollRef}
        />
      )}
    </Animated.View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999999,
    backgroundColor: colors.White,
    shadowColor: colors.Black,
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
  },
  containerMobile: {
    paddingHorizontal: 24,
    paddingTop: 15,
    paddingBottom: 15,
  },
  containerWeb: {
    paddingHorizontal: 182,
    paddingVertical: 10,
  },
  imageWeb: {
    width: 271,
    height: 52,
  },
  imageMobile: {
    width: 156,
    height: 32,
  },
});
