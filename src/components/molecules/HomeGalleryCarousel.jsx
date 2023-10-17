import { Dimensions, StyleSheet, View } from "react-native";
import React, { useRef, useState } from "react";
import CarouselItem from "@components/atoms/CarouselItem";
import CarouselPagination from "@components/atoms/CarouselPagination";
("react-native-reanimated");
import ButtonNext from "@components/atoms/ButtonNext";
import { carouselData } from "@utils/constant/carouselData";
import Carousel from "react-native-reanimated-carousel";

const WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH_WEB = (WIDTH - 200) / 3;
const ITEM_WIDTH_MOBILE = WIDTH - 40;

const HomeGalleryCarousel = ({ isMobile }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const listRef = useRef(null);

  const handlePrevious = () => {
    listRef.current.prev();
  };

  const handleNext = () => {
    listRef.current.next();
  };

  return (
    <View style={isMobile ? styles.containerMobile : styles.container}>
      <View style={styles.carouselContainer}>
        {!isMobile && <ButtonNext func="previous" onPress={handlePrevious} />}

        <Carousel
          ref={listRef}
          loop={true}
          data={carouselData}
          style={{
            width: isMobile ? ITEM_WIDTH_MOBILE : WIDTH - 200,
            height: isMobile ? 241 : (ITEM_WIDTH_WEB / 4) * 3 + 200,
            justifyContent: "center",
            alignItems: "center",
          }}
          width={isMobile ? ITEM_WIDTH_MOBILE : ITEM_WIDTH_WEB}
          height={isMobile ? 241 : (ITEM_WIDTH_WEB / 4) * 3}
          onProgressChange={(_, absoluteProgress) => {
            setCurrentIndex(Math.round(absoluteProgress));
          }}
          renderItem={({ item, animationValue }) => {
            return <CarouselItem data={item} itemWidth={isMobile ? ITEM_WIDTH_MOBILE : ITEM_WIDTH_WEB} isMobile={isMobile} animationValue={animationValue} />;
          }}
          autoPlay={true}
          autoPlayInterval={3000}
        />

        {!isMobile && <ButtonNext onPress={handleNext} />}
      </View>

      <CarouselPagination data={carouselData} index={currentIndex} />
    </View>
  );
};

export default HomeGalleryCarousel;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 100,
  },
  containerMobile: {
    gap: 28,
  },
  carouselContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
