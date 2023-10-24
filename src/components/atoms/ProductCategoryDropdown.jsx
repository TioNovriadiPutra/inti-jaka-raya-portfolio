import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import { productData } from "@utils/constant/productData";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useRecoilState } from "recoil";
import { categoryState, productState } from "@store/productState";
import { fonts } from "@themes/fonts";
import ProductDropdownItem from "./ProductDropdownItem";

const ProductCategoryDropdown = ({ zIndex, open, setOpen, handlePress, type }) => {
  const [category, setCategory] = useRecoilState(categoryState);
  const [product, setProduct] = useRecoilState(productState);

  const dropdownAnim = useSharedValue(0);

  const dropdownAnimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(dropdownAnim.value, [0, 1], [0, 248]);
    const borderWidth = interpolate(dropdownAnim.value, [0, 1], [0, 1]);

    return {
      height,
      borderWidth,
    };
  });

  const handleOpen = () => {
    dropdownAnim.value = withTiming(1, { duration: 500 });
  };

  const handleClose = () => {
    dropdownAnim.value = withTiming(0, { duration: 500 });
  };

  const handlePressCategory = (item) => {
    setCategory(item);
    setOpen(false);
  };

  const handlePressProduct = (item) => {
    setProduct(item);
    setOpen(false);
  };

  useEffect(() => {
    open ? handleOpen() : handleClose();
  }, [open]);

  return (
    <View style={{ zIndex }}>
      <Pressable style={styles.container} onPress={handlePress}>
        <Text style={[styles.label, { color: type === "category" ? (category ? colors.Black : colors.Grey) : product ? colors.Black : colors.Grey }]}>
          {type === "category" ? (category ? category.productCategory : "Choose Product Category") : product ? product.name : "Choose Product"}
        </Text>
      </Pressable>

      <Animated.View style={[styles.dropdownItemContainer, dropdownAnimatedStyle]}>
        {type === "category"
          ? productData.map((item, index) => <ProductDropdownItem key={index.toString()} label={item.productCategory} handlePress={() => handlePressCategory(item)} />)
          : category && category.products.map((item, index) => <ProductDropdownItem key={index.toString()} label={item.name} handlePress={() => handlePressProduct(item)} />)}
      </Animated.View>
    </View>
  );
};

export default ProductCategoryDropdown;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.DropdownBorder,
    borderRadius: 8,
    paddingTop: 12,
    paddingBottom: 11,
    paddingLeft: 24,
    paddingRight: 25,
  },
  dropdownItemContainer: {
    borderColor: colors.DropdownBorder,
    borderRadius: 8,
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: colors.White,
    top: "130%",
    overflow: "hidden",
  },
  label: {
    fontFamily: fonts.PopRegular,
    fontSize: 16,
  },
});
