import { Dimensions, ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import Navbar from "@components/organisms/Navbar";
import { useRecoilValue } from "recoil";
import { pageState, scrollState } from "@store/scrollState";
import useResponsive from "@hooks/useResponsive";
import useScroll from "@hooks/useScroll";
import CustomDrawer from "@components/templates/CustomDrawer";

const HEIGHT = Dimensions.get("window").height;

const MainContainer = ({ children, withParallax, parallaxImage, scrollRef }) => {
  const scroll = useRecoilValue(scrollState);
  const page = useRecoilValue(pageState);

  const { isTabletOrMobileDevice } = useResponsive();
  const { handleScroll } = useScroll();

  useEffect(() => {
    scrollRef.current.scrollTo({ animated: true, y: 0 });
  }, [page]);

  return (
    <View style={styles.container}>
      {page !== "Home" ? <Navbar scrollRef={scrollRef} /> : scroll >= HEIGHT ? <Navbar scrollRef={scrollRef} /> : null}

      {isTabletOrMobileDevice && <CustomDrawer scrollRef={scrollRef} />}

      {withParallax && (
        <ImageBackground source={parallaxImage} style={styles.parallax}>
          <View style={styles.backdrop} />
        </ImageBackground>
      )}

      <ScrollView ref={scrollRef} onScroll={handleScroll} showsVerticalScrollIndicator={!isTabletOrMobileDevice}>
        {children}
      </ScrollView>
    </View>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    overflow: "hidden",
  },
  parallax: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100vh",
  },
  backdrop: {
    flex: 1,
    backgroundColor: colors.Backdrop,
  },
});
