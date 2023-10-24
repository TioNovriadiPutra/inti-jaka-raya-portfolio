import { StyleSheet, View } from "react-native";
import React, { useEffect, useRef } from "react";
import ProductImageGallery from "@components/molecules/ProductImageGallery";
import ProductScrollButton from "@components/atoms/ProductScrollButton";
import { useRecoilState, useRecoilValue } from "recoil";
import { listIndexState, productState } from "@store/productState";
import useResponsive from "@hooks/useResponsive";
import { colors } from "@themes/colors";

const ProductList = () => {
  const [listIndex, setListIndex] = useRecoilState(listIndexState);
  const product = useRecoilValue(productState);

  const { isTabletOrMobileDevice } = useResponsive();

  const listRef = useRef(null);

  const handlePrev = () => {
    const currentIndex = listIndex - 1;
    setListIndex(currentIndex);
  };

  const handleNext = () => {
    const currentIndex = listIndex + 1;
    setListIndex(currentIndex);
  };

  useEffect(() => {
    if (listRef !== null) {
      listRef.current.scrollToIndex({ animated: true, index: listIndex });
    }
  }, [listIndex]);

  return (
    <View style={[styles.container, isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb]}>
      {isTabletOrMobileDevice ? null : listIndex > 0 && <ProductScrollButton func="prev" onPress={handlePrev} />}
      <ProductImageGallery listRef={listRef} />
      {isTabletOrMobileDevice ? null : listIndex < product.data.length - 1 && <ProductScrollButton onPress={handleNext} />}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    zIndex: 1,
  },
  containerWeb: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  containerMobile: {
    marginHorizontal: 20,
    shadowColor: colors.Black,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
  },
});
