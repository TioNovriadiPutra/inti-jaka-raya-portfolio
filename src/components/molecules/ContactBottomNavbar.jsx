import { StyleSheet, View } from "react-native";
import React from "react";
import BottomNavbarButton from "@components/atoms/BottomNavbarButton";

const ContactBottomNavbar = () => {
  return (
    <View style={styles.container}>
      <BottomNavbarButton label="Home" />
      <BottomNavbarButton label="Newsletter" />
      <BottomNavbarButton label="About" />
    </View>
  );
};

export default ContactBottomNavbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    marginTop: 18,
  },
});
