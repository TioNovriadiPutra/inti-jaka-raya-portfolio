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
import useResponsive from "@hooks/useResponsive";

const HEIGHT = Dimensions.get("window").height;

const Home = ({ navigation }) => {
  const setNav = useSetRecoilState(navState);
  const setPage = useSetRecoilState(pageState);

  const { isTabletOrMobileDevice } = useResponsive();

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
        type="Coating"
        title="Kami Menjaga"
        desc="Salah satu proses yang sangat dibutuhkan dalam dunia indsutri. Coating atau pelapisan sendiri dapat dianggap suatu proses pelapisan yang diaplikasikan kepada permuakan benda atau substrat dengan tujuan untuk meningkatkan kemampuan permuakan dari benda yang dilapisi, seperti : ketahanan terhadap korosi, erosi, abbrasive, kavitasi dan serangan bahan kimia / Chemical Attack"
        animatedPoinEnter={isTabletOrMobileDevice ? HEIGHT + 552 * 2 + 60 : HEIGHT + 520}
        animatedPoinExit={isTabletOrMobileDevice ? HEIGHT + 552 * 2 : HEIGHT + 300}
      />
      <HomeDesc
        color={colors.Orange}
        image={require("@assets/images/desc2.png")}
        type="Maintenance"
        title="Kami Memelihara"
        desc="Pemeliharaan industri adalah rencana tindakan yang diambil perusahaan untuk menjaga aset atau peralatan industrial berjalan dengan efisien selama mungkin."
        position="right"
        animatedPoinEnter={isTabletOrMobileDevice ? HEIGHT + 552 * 2 + 560 : HEIGHT + 520 + 300}
        animatedPoinExit={isTabletOrMobileDevice ? HEIGHT + 552 * 2 + 360 : HEIGHT + 300}
      />
      <HomeProduct />
      <HomeGallery />
      <Contact />
    </MainContainer>
  );
};

export default Home;
