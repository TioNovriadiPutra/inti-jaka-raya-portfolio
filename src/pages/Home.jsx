import React, { useEffect, useRef } from "react";
import MainContainer from "@containers/MainContainer";
import HomeStart from "@components/organisms/HomeStart";
import HomeNewsletter from "@components/organisms/HomeNewsletter";
import { useSetRecoilState } from "recoil";
import { navState } from "@store/navState";
import HomeDesc from "@components/organisms/HomeDesc";
import { colors } from "@themes/colors";
import { Dimensions } from "react-native";
import HomeProduct from "@components/organisms/HomeProduct";
import HomeGallery from "@components/organisms/HomeGallery";
import { pageState } from "@store/scrollState";
import Contact from "@components/organisms/Contact";
import { useIsFocused } from "@react-navigation/native";

const HEIGHT = Dimensions.get("window").height;

const Home = ({ navigation }) => {
  const setNav = useSetRecoilState(navState);
  const setPage = useSetRecoilState(pageState);

  const isFocused = useIsFocused();

  const scrollRef = useRef(null);

  useEffect(() => {
    if (isFocused) {
      setNav(navigation);
      setPage("Home");
    }
  }, [isFocused]);

  return (
    <MainContainer withParallax parallaxImage={require("@assets/images/startBg.png")} scrollRef={scrollRef}>
      <HomeStart scrollRef={scrollRef} />
      <HomeNewsletter />
      <HomeDesc
        color={colors.Blue}
        image={require("@assets/images/desc1.png")}
        type="Rebuild"
        title="We Rebuild"
        desc="Coatings play a critical role in industrial repair processes. They are used to restore or enhance the performance and longevity of various industrial components and structures. Here are some ways coatings are applied in industrial repair"
        animatedPoinEnter={HEIGHT + 520}
        animatedPoinExit={HEIGHT - 450}
      />
      <HomeDesc
        color={colors.Orange}
        image={require("@assets/images/desc2.png")}
        type="Protect"
        title="We Protect"
        desc="Provide a shield against a multitude of potential threats, including corrosion from moisture and chemicals, abrasion and wear from mechanical forces, and damage from UV radiation and weathering"
        position="right"
        animatedPoinEnter={HEIGHT + 520 + 300}
        animatedPoinExit={HEIGHT - 450}
      />
      <HomeProduct />
      <HomeGallery />
      <Contact />
    </MainContainer>
  );
};

export default Home;
