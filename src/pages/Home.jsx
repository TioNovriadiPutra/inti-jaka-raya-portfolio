import React, { useEffect, useRef } from "react";
import MainContainer from "@containers/MainContainer";
import HomeStart from "@components/organisms/HomeStart";
import HomeNewsletter from "@components/organisms/HomeNewsletter";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { navState } from "@store/navState";
import HomeDesc from "@components/organisms/HomeDesc";
import { colors } from "@themes/colors";
import HomeProduct from "@components/organisms/HomeProduct";
import HomeGallery from "@components/organisms/HomeGallery";
import { pageState } from "@store/scrollState";
import Contact from "@components/organisms/Contact";
import { useIsFocused } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { homeDescLayout1State, homeDescLayout2State } from "@store/sectionState";
import { Helmet } from "react-helmet";

const Home = ({ navigation }) => {
  const setNav = useSetRecoilState(navState);
  const setPage = useSetRecoilState(pageState);
  const homeDescLayout1 = useRecoilValue(homeDescLayout1State);
  const homeDescLayout2 = useRecoilValue(homeDescLayout2State);

  const isFocused = useIsFocused();
  const { t } = useTranslation();

  const scrollRef = useRef(null);

  useEffect(() => {
    if (isFocused) {
      setNav(navigation);
      setPage("Home");
    }
  }, [isFocused]);

  return (
    <MainContainer withParallax parallaxImage={require("@assets/images/startBg.png")} scrollRef={scrollRef}>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="PT INTI JAKARAYA adalah Distributor Tunggal SISTEM POLIMER UNIK Buatan Inggris, di Indonesia." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://intijakaraya.com/home" />
      </Helmet>
      <HomeStart scrollRef={scrollRef} />
      <HomeNewsletter />
      <HomeDesc
        color={colors.Blue}
        image={require("@assets/images/desc1.png")}
        type={t("homeDescHighlight1")}
        title={t("homeDescTitle1")}
        desc={t("homeDesc1")}
        animatedPoinEnter={homeDescLayout1 - 200}
      />
      <HomeDesc
        color={colors.Orange}
        image={require("@assets/images/desc2.png")}
        type={t("homeDescHighlight2")}
        title={t("homeDescTitle2")}
        desc={t("homeDesc2")}
        position="right"
        animatedPoinEnter={homeDescLayout2 - 200}
      />
      <HomeProduct />
      <HomeGallery />
      <Contact scrollRef={scrollRef} />
    </MainContainer>
  );
};

export default Home;
