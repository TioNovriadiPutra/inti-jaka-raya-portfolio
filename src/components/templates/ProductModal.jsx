import { Dimensions, Image, Modal, Pressable, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { openDrop1State, openDrop2State, showProductModalState } from "@store/productState";
import { colors } from "@themes/colors";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import ProductTitle from "@components/atoms/ProductTitle";
import ProductCategoryDropdown from "@components/atoms/ProductCategoryDropdown";

const HEIGHT = Dimensions.get("window").height;

const ProductModal = () => {
  const [showProductModal, setShowProductModal] = useRecoilState(showProductModalState);
  const [openCategory, setOpenCategory] = useRecoilState(openDrop1State);
  const [openProduct, setOpenProduct] = useRecoilState(openDrop2State);

  const containerAnim = useSharedValue(0);

  const containerAnimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(containerAnim.value, [0, 1], [0, HEIGHT - 56]);

    return {
      height,
    };
  });

  const handleCategoryPress = () => {
    setOpenCategory(!openCategory);
    setOpenProduct(false);
  };

  const handleProductPress = () => {
    setOpenProduct(!openProduct);
    setOpenCategory(false);
  };

  const handleClose = () => {
    containerAnim.value = withTiming(0, { duration: 1000 });
    setTimeout(() => {
      setShowProductModal(false);
    }, 1000);
  };

  useEffect(() => {
    if (showProductModal === true) {
      setTimeout(() => {
        containerAnim.value = withTiming(1, { duration: 1000 });
      }, 500);
    }
  }, [showProductModal]);

  return (
    <Modal visible={showProductModal} transparent animationType="fade">
      <View style={styles.backdrop}>
        <Animated.View style={[styles.container, containerAnimatedStyle]}>
          <Pressable style={styles.xButton} onPress={handleClose}>
            <Image source={require("@assets/images/xProduct.png")} style={styles.xButtonImg} />
          </Pressable>
          <ScrollView style={styles.scrollContainer}>
            <ProductTitle />
            <View style={styles.dropdownContainer}>
              <ProductCategoryDropdown zIndex={2} type="category" open={openCategory} setOpen={setOpenCategory} handlePress={handleCategoryPress} />
              <ProductCategoryDropdown zIndex={1} type="product" open={openProduct} setOpen={setOpenProduct} handlePress={handleProductPress} />
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ProductModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: colors.Modal,
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: colors.White,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  scrollContainer: {
    paddingVertical: 67,
  },
  dropdownContainer: {
    width: 514,
    alignSelf: "center",
    marginTop: 50,
    gap: 30,
  },
  xButton: {
    position: "absolute",
    top: 30,
    right: 64,
    zIndex: 999,
  },
  xButtonImg: {
    width: 48,
    height: 48,
  },
});
