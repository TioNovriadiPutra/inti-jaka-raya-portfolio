import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import NavbarButtonSection from "@components/molecules/NavbarButtonSection";

const NavbarStart = ({ mobile, scrollRef }) => {
  const handleBackHome = () => {
    setScroll(0);
    nav.navigate("Home");
  };

  return (
    <View style={[styles.container, mobile === true ? styles.containerMobile : styles.containerWeb]}>
      <TouchableOpacity onPress={handleBackHome}>
        <Image source={mobile ? require("@assets/images/logoWhiteMobile.png") : require("@assets/images/logoWhite.png")} style={mobile ? styles.logoMobile : styles.logo} />
      </TouchableOpacity>

      {!mobile && <NavbarButtonSection white withBorder scrollRef={scrollRef} />}
    </View>
  );
};

export default NavbarStart;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerMobile: {
    paddingHorizontal: 24,
    top: 24,
  },
  containerWeb: {
    paddingHorizontal: 182,
    paddingVertical: 15,
    top: 0,
  },
  logo: {
    width: 271,
    height: 52,
  },
  logoMobile: {
    width: 156,
    height: 32,
  },
});
