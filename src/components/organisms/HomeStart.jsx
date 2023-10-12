import { StyleSheet, View } from "react-native";
import React from "react";
import HomeStartTitle from "@components/molecules/HomeStartTitle";
import HomeStartFooter from "@components/molecules/HomeStartFooter";
import NavbarStart from "@components/organisms/NavbarStart";
import useResponsive from "@hooks/useResponsive";

const HomeStart = ({ scrollRef }) => {
  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View
      style={[
        styles.container,
        { paddingHorizontal: isTabletOrMobileDevice === true ? 24 : 182 },
      ]}
    >
      <NavbarStart mobile={isTabletOrMobileDevice} scrollRef={scrollRef} />
      <HomeStartTitle mobile={isTabletOrMobileDevice} />
      <HomeStartFooter mobile={isTabletOrMobileDevice} />
    </View>
  );
};

export default HomeStart;

const styles = StyleSheet.create({
  container: {
    height: "100vh",
    justifyContent: "space-between",
  },
});
