import { Dimensions, FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { productState } from "@store/productState";
import useResponsive from "@hooks/useResponsive";

const WIDTH = Dimensions.get("window").width;

const ProductImageGallery = ({ listRef }) => {
  const product = useRecoilValue(productState);

  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View>
      <FlatList
        ref={listRef}
        data={product.data}
        style={isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb}
        horizontal
        showsHorizontalScrollIndicator={isTabletOrMobileDevice ? true : false}
        scrollEnabled={isTabletOrMobileDevice ? true : false}
        renderItem={({ item }) => (
          <Pressable style={isTabletOrMobileDevice ? styles.btnMobile : styles.btnWeb}>
            <Image source={item} style={styles.image} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default ProductImageGallery;

const styles = StyleSheet.create({
  containerWeb: {
    width: 1120,
    height: 1582.98,
  },
  containerMobile: {
    width: WIDTH - 40,
    height: 453,
  },
  btnWeb: {
    width: 1120,
  },
  btnMobile: {
    width: WIDTH - 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
