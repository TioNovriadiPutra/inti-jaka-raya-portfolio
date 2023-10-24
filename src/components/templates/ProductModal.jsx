import { Dimensions, Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { Suspense, lazy, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { openDrop1State, openDrop2State, productState, showProductModalState } from "@store/productState";
import { colors } from "@themes/colors";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import ProductTitle from "@components/atoms/ProductTitle";
import ProductCategoryDropdown from "@components/atoms/ProductCategoryDropdown";
import useResponsive from "@hooks/useResponsive";
import LoadingScreen from "./LoadingScreen";

const ProductList = lazy(() => import("@components/organisms/ProductList"));

const HEIGHT = Dimensions.get("window").height;

const ProductModal = () => {
  const [showProductModal, setShowProductModal] = useRecoilState(showProductModalState);
  const [openCategory, setOpenCategory] = useRecoilState(openDrop1State);
  const [openProduct, setOpenProduct] = useRecoilState(openDrop2State);
  const product = useRecoilValue(productState);

  const { isTabletOrMobileDevice } = useResponsive();

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
          <Pressable style={[styles.xButton, isTabletOrMobileDevice ? styles.xButtonMobile : styles.xButtonWeb]} onPress={handleClose}>
            <Image source={require("@assets/images/xProduct.png")} style={isTabletOrMobileDevice ? styles.xButtonImgMobile : styles.xButtonImgWeb} />
          </Pressable>

          <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <ProductTitle />

            <View style={[styles.dropdownContainer, isTabletOrMobileDevice ? styles.dropdownContainerMobile : styles.dropdownContainerWeb]}>
              <ProductCategoryDropdown zIndex={999} type="category" open={openCategory} setOpen={setOpenCategory} handlePress={handleCategoryPress} />
              <ProductCategoryDropdown zIndex={998} type="product" open={openProduct} setOpen={setOpenProduct} handlePress={handleProductPress} />
            </View>

            {product && (
              <Suspense fallback={<LoadingScreen />}>
                <ProductList />
              </Suspense>
            )}
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
    zIndex: 999,
  },
  dropdownContainerWeb: {
    marginTop: 50,
    gap: 30,
    width: 514,
    alignSelf: "center",
  },
  dropdownContainerMobile: {
    marginTop: 32,
    marginHorizontal: 20,
    gap: 20,
  },
  xButton: {
    position: "absolute",
    zIndex: 999,
  },
  xButtonWeb: {
    top: 30,
    right: 64,
  },
  xButtonMobile: {
    top: 21,
    right: 20,
  },
  xButtonImgWeb: {
    width: 48,
    height: 48,
  },
  xButtonImgMobile: {
    width: 32,
    height: 32,
  },
});
