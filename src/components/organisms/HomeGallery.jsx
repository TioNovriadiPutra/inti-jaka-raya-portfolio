import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import HomeGalleryTitle from "@components/molecules/HomeGalleryTitle";
import HomeGalleryCarousel from "@components/molecules/HomeGalleryCarousel";
import useResponsive from "@hooks/useResponsive";

const HomeGallery = () => {
  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View
      style={[
        styles.container,
        isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb,
      ]}
    >
      <HomeGalleryTitle isMobile={isTabletOrMobileDevice} />
      <HomeGalleryCarousel isMobile={isTabletOrMobileDevice} />
    </View>
  );
};

export default HomeGallery;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
  },
  containerWeb: {
    paddingTop: 46,
    paddingBottom: 56,
    gap: 96,
  },
  containerMobile: {
    paddingHorizontal: 20,
    paddingVertical: 22,
    gap: 24,
  },
});
