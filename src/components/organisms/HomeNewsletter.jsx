import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import NewsletterList from "@components/molecules/NewsletterList";
import NewsletterTitle from "@components/molecules/NewsletterTitle";
import useResponsive from "@hooks/useResponsive";
import ButtonText from "@components/atoms/ButtonText";
import { dataNewsLetter } from "@utils/constant/newsletterData";

const HomeNewsletter = () => {
  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View
      style={[
        styles.container,
        isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb,
      ]}
    >
      <NewsletterTitle isMobile={isTabletOrMobileDevice} />
      <NewsletterList isMobile={isTabletOrMobileDevice} />
      {isTabletOrMobileDevice ? (
        dataNewsLetter[0].image ? (
          <ButtonText label="See More" isMobile={isTabletOrMobileDevice} />
        ) : null
      ) : null}
    </View>
  );
};

export default HomeNewsletter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
  },
  containerMobile: {
    paddingTop: 20,
    paddingBottom: 14,
    gap: 18,
    paddingHorizontal: 20,
  },
  containerWeb: {
    height: 720,
    paddingTop: 50,
    gap: 59,
  },
});
