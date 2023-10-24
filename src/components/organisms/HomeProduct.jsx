import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import useResponsive from "@hooks/useResponsive";
import HomeProductCard from "@components/molecules/HomeProductCard";
import ProductModal from "@components/templates/ProductModal";

const HomeProduct = () => {
  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View style={[styles.container, isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb]}>
      <HomeProductCard isMobile={isTabletOrMobileDevice} />
      <ProductModal />
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
