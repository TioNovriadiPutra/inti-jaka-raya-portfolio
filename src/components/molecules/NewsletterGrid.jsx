import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import NewsletterCard from "@components/atoms/NewsletterCard";
import { useRecoilState, useRecoilValue } from "recoil";
import { contentPageState, displayDataState } from "@store/newsletterState";
import { dataNewsLetter } from "@utils/constant/newsletterData";
import useResponsive from "@hooks/useResponsive";

const NewsletterGrid = () => {
  const [displayData, setDisplayData] = useRecoilState(displayDataState);
  const contentPage = useRecoilValue(contentPageState);

  const { isTabletOrMobileDevice } = useResponsive();

  const addNewData = () => {
    let tempArray = [];
    if (isTabletOrMobileDevice) {
      for (let i = 0; i < contentPage * 3; i++) {
        tempArray.push(dataNewsLetter[i]);
      }
    } else {
      for (let i = 0; i < contentPage * 6; i++) {
        tempArray.push(dataNewsLetter[i]);
      }
    }
    setDisplayData(tempArray);
  };

  useEffect(() => {
    addNewData();
  }, [contentPage]);

  return (
    <View style={styles.container}>
      <FlatList
        style={
          isTabletOrMobileDevice
            ? styles.gridContainerMobile
            : styles.gridContainerWeb
        }
        contentContainerStyle={
          isTabletOrMobileDevice ? styles.gridMobile : styles.gridWeb
        }
        data={displayData}
        renderItem={({ item, index }) => (
          <View style={styles.boxContainer}>
            <NewsletterCard data={item} index={index} isNewsletter={true} />
          </View>
        )}
        numColumns={isTabletOrMobileDevice ? 1 : 3}
        scrollEnabled={isTabletOrMobileDevice ? true : false}
      />
    </View>
  );
};

export default NewsletterGrid;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  gridContainerWeb: {
    paddingTop: 38,
    paddingBottom: 180,
  },
  gridContainerMobile: {
    paddingVertical: 32,
  },
  gridWeb: {
    gap: 80,
  },
  gridMobile: {
    gap: 20,
  },
  boxContainer: {
    paddingHorizontal: 40,
  },
});
