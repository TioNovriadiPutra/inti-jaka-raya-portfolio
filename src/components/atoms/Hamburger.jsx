import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useSetRecoilState } from "recoil";
import { showDrawerState } from "@store/navState";

const Hamburger = ({ blue }) => {
  const setShowDrawer = useSetRecoilState(showDrawerState);

  return (
    <TouchableOpacity onPress={() => setShowDrawer(true)}>
      <Image source={blue ? require("@assets/images/hamburgerBlue.png") : require("@assets/images/hamburger.png")} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default Hamburger;

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
  },
});
