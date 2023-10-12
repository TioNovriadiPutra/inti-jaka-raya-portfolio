import { StyleSheet, View } from "react-native";
import React from "react";
import NewsTitle from "@components/molecules/NewsTitle";
import NewsStory from "@components/molecules/NewsStory";
import useResponsive from "@hooks/useResponsive";

const NewsContent = ({ news }) => {
  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View
      style={
        isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb
      }
    >
      <NewsTitle title={news.title} date={news.date} />
      <NewsStory
        image={news.image}
        story={news.news}
        imageDesc={news.imageDesc}
      />
    </View>
  );
};

export default NewsContent;

const styles = StyleSheet.create({
  containerWeb: {
    marginTop: 124,
    marginHorizontal: 182,
    marginBottom: 187,
    gap: 80,
  },
  containerMobile: {
    marginTop: 126,
    marginHorizontal: 20,
    marginBottom: 43,
    gap: 40,
  },
});
