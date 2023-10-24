import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import useResponsive from "@hooks/useResponsive";
import HomeProductCard from "@components/molecules/HomeProductCard";
import ProductModal from "@components/templates/ProductModal";
import { useSetRecoilState } from "recoil";
import { productPositionState } from "@store/productState";

const HomeProduct = () => {
  const setProductPosition = useSetRecoilState(productPositionState);

  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View
      style={[styles.container, isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb]}
      onLayout={(event) => {
        const layout = event.nativeEvent.layout;
        setProductPosition(layout.y);
      }}
    >
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
