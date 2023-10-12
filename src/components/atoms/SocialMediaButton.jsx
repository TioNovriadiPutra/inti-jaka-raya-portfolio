import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "@themes/colors";

const SocialMediaButton = ({ icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default SocialMediaButton;

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
  container: {
    padding: 8,
    backgroundColor: colors.White,
    borderRadius: 8,
  },
});
