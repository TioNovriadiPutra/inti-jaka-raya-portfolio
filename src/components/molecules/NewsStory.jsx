import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import useResponsive from "@hooks/useResponsive";

const WIDTH = Dimensions.get("window").width;

const NewsStory = ({ image, imageDesc, story }) => {
  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View style={styles.container}>
      <View style={styles.imageDescContainer}>
        <Image
          source={image}
          style={[
            styles.image,
            isTabletOrMobileDevice ? styles.imageMobile : styles.imageWeb,
          ]}
        />
        <Text style={styles.imageDesc}>{imageDesc}</Text>
      </View>
      <Text style={styles.story}>{story}</Text>
    </View>
  );
};

export default NewsStory;

const styles = StyleSheet.create({
  container: {
    gap: 40,
  },
  image: {
    resizeMode: "cover",
  },
  imageWeb: {
    width: WIDTH - 364,
    height: ((WIDTH - 364) / 16) * 9,
    borderRadius: 32,
  },
  imageMobile: {
    width: WIDTH - 40,
    height: ((WIDTH - 40) / 4) * 3,
    borderRadius: 24,
  },
  imageDescContainer: {
    gap: 20,
  },
  imageDesc: {
    fontFamily: fonts.PopRegular,
    fontSize: 14,
    color: colors.DarkGrey,
    textAlign: "center",
  },
  story: {
    fontFamily: fonts.PopLight,
    fontSize: 16,
    color: colors.Black,
    textAlign: "justify",
  },
});
