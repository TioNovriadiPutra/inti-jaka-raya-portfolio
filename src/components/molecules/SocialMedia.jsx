import { StyleSheet, View } from "react-native";
import React from "react";
import SocialMediaButton from "@components/atoms/SocialMediaButton";
import { handleSocialMedia } from "@utils/helper/openNewTabSocialMedia";

const SocialMedia = () => {
  return (
    <View style={styles.btnContainer}>
      <SocialMediaButton
        icon={require("@assets/images/whatsapp.png")}
        onPress={() =>
          handleSocialMedia("https://api.whatsapp.com/send?phone=08121110709")
        }
      />
      <SocialMediaButton
        icon={require("@assets/images/linkedin.png")}
        onPress={() =>
          handleSocialMedia("https://www.linkedin.com/company/pt-intijakaraya/")
        }
      />
    </View>
  );
};

export default SocialMedia;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});
