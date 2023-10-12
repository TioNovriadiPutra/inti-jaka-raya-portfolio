import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import useResponsive from "@hooks/useResponsive";
import HomeProductCard from "@components/molecules/HomeProductCard";

const HomeProduct = () => {
  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View
      style={[
        styles.container,
        isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb,
      ]}
    >
      <HomeProductCard isMobile={isTabletOrMobileDevice} />
    </View>
  );
};

export default HomeProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.LightGrey,
  },
  containerWeb: {
    justifyContent: "center",
    alignItems: "center",
    height: 660,
  },
  containerMobile: {
    paddingHorizontal: 20,
    paddingVertical: 37,
  },
});
