import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import NewsletterHeader from "@components/molecules/NewsletterHeader";
import NewsletterGrid from "@components/molecules/NewsletterGrid";
import LoadMore from "@components/molecules/LoadMore";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { contentPageState, displayDataState } from "@store/newsletterState";
import { dataNewsLetter } from "@utils/constant/newsletterData";
import { useIsFocused } from "@react-navigation/native";
import useResponsive from "@hooks/useResponsive";

const NewsletterContent = () => {
  const displayData = useRecoilValue(displayDataState);
  const setContentPage = useSetRecoilState(contentPageState);

  const isFocused = useIsFocused();

  const { isTabletOrMobileDevice } = useResponsive();

  useEffect(() => {
    if (isFocused) {
      setContentPage(1);
    }
  }, [isFocused]);

  return (
    <View
      style={[
        styles.container,
        isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb,
      ]}
    >
      <NewsletterHeader />
      <NewsletterGrid />
      {displayData.length < dataNewsLetter.length && <LoadMore />}
    </View>
  );
};

export default NewsletterContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
  },
  containerWeb: {
    paddingBottom: 86,
  },
  containerMobile: {
    paddingBottom: 42,
  },
});
