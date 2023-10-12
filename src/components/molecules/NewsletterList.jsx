import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import NewsletterCard from "@components/atoms/NewsletterCard";
import { dataNewsLetter } from "@utils/constant/newsletterData";

const NewsletterList = ({ isMobile }) => {
  const [dataNews, setDataNews] = useState(null);

  useEffect(() => {
    const newData = dataNewsLetter.filter((item, index) => {
      if (index < 3) {
        return item;
      }
    });
    setDataNews(newData);
  }, []);

  return (
    <View style={isMobile ? styles.listMobile : styles.listWeb}>
      {dataNews &&
        dataNews.map((item, index) => (
          <NewsletterCard data={item} index={index} isMobile={isMobile} />
        ))}
    </View>
  );
};

export default NewsletterList;

const styles = StyleSheet.create({
  listWeb: {
    flexDirection: "row",
    gap: 50,
    justifyContent: "center",
  },
  listMobile: {
    gap: 20,
    alignItems: "center",
  },
});
