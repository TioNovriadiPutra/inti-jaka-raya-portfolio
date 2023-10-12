import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import CarouselItem from "@components/atoms/CarouselItem";
import { scrollToNextItemMobile } from "@utils/helper/scrollToNextItemMobile";
import CarouselPagination from "@components/atoms/CarouselPagination";
import Animated, { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import ButtonNext from "@components/atoms/ButtonNext";
import { scrollToNextItemWeb } from "@utils/helper/scrollToNextItemWeb";

const WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH_WEB = (WIDTH - 200) / 3;
const ITEM_WIDTH_MOBILE = WIDTH - 40;

const HomeGalleryCarousel = ({ isMobile }) => {
  const data = [
    {
      key: "spacer-left",
    },
    {
      id: 1,
      unique: "gambar1",
      image: require("@assets/images/desc1.png"),
    },
    {
      id: 2,
      unique: "gambar2",
      image: require("@assets/images/gallery1.png"),
    },
    {
      id: 3,
      unique: "gambar3",
      image: require("@assets/images/gallery1.png"),
    },
    {
      id: 4,
      unique: "gambar4",
      image: require("@assets/images/gallery1.png"),
    },
    {
      id: 5,
      unique: "gambar5",
      image: require("@assets/images/desc2.png"),
    },
    {
      key: "spacer-right",
    },
  ];

  if (isMobile) {
    const [scrollXMobile, setScrollXMobile] = useState(0);

    const listMobileRef = useRef(null);

    const handleScrollMobile = (event) => {
      setScrollXMobile(event.nativeEvent.contentOffset.x);
    };

    useEffect(() => {
      const autoplayInterval = setInterval(() => scrollToNextItemMobile(scrollXMobile, listMobileRef, data.length - 2), 3000);

      return () => {
        clearInterval(autoplayInterval);
      };
    }, [scrollXMobile]);

    return (
      <View style={styles.containerMobile}>
        <ScrollView horizontal ref={listMobileRef} pagingEnabled scrollEventThrottle={16} showsHorizontalScrollIndicator={false} onScroll={handleScrollMobile}>
          {data.map((item, index) => {
            if (item.image) return <CarouselItem data={item} isMobile={isMobile} key={index.toString()} itemWidth={ITEM_WIDTH_MOBILE} />;
          })}
        </ScrollView>

        <CarouselPagination data={data} scrollX={scrollXMobile} itemWidth={ITEM_WIDTH_MOBILE} />
      </View>
    );
  }

  // Web
  const [scrollX, setScrollX] = useState(0);

  const listWebRef = useRef(null);

  const handleScroll = useAnimatedScrollHandler((event) => {
    setScrollX(event.contentOffset.x);
  });

  const handlePrevious = () => {
    if (listWebRef) {
      listWebRef.current.scrollTo({
        animation: true,
        x: scrollX - ITEM_WIDTH_WEB,
        y: 0,
      });
    }
  };

  const handleNext = () => {
    if (listWebRef) {
      listWebRef.current.scrollTo({
        animation: true,
        x: ITEM_WIDTH_WEB + scrollX,
        y: 0,
      });
    }
  };

  useEffect(() => {
    const autoplayInterval = setInterval(() => scrollToNextItemWeb(scrollX, listWebRef, ITEM_WIDTH_WEB), 3000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [scrollX]);

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <ButtonNext func="previous" onPress={handlePrevious} />
        <Animated.ScrollView ref={listWebRef} horizontal pagingEnabled scrollEventThrottle={16} showsHorizontalScrollIndicator={false} onScroll={handleScroll}>
          {data.map((item, index) => {
            const scaleAnimatedStyle = useAnimatedStyle(() => {
              const scale = interpolate(scrollX, [(index - 2) * ITEM_WIDTH_WEB, (index - 1) * ITEM_WIDTH_WEB, index * ITEM_WIDTH_WEB], [0.8, 1, 0.8]);

              const opacity = interpolate(scrollX, [(index - 2) * ITEM_WIDTH_WEB, (index - 1) * ITEM_WIDTH_WEB, index * ITEM_WIDTH_WEB], [0.5, 1, 0.5]);

              return {
                transform: [{ scale }],
                opacity,
              };
            });

            return <CarouselItem data={item} key={index.toString()} animStyleImage={scaleAnimatedStyle} itemWidth={ITEM_WIDTH_WEB} />;
          })}
        </Animated.ScrollView>
        <ButtonNext onPress={handleNext} />
      </View>

      <CarouselPagination data={data} scrollX={scrollX} itemWidth={ITEM_WIDTH_WEB} />
    </View>
  );
};

export default HomeGalleryCarousel;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 100,
    gap: 58,
  },
  containerMobile: {
    gap: 28,
  },
  carouselContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
