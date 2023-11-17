import React, { useEffect, useRef } from "react";
import MainContainer from "@containers/MainContainer";
import { useSetRecoilState } from "recoil";
import { pageState } from "@store/scrollState";
import { useIsFocused } from "@react-navigation/native";
import AboutContent from "@components/organisms/AboutContent";
import Contact from "@components/organisms/Contact";
import { navState } from "@store/navState";
import AboutHeader from "@components/organisms/AboutHeader";
import { Helmet } from "react-helmet";

const About = ({ navigation }) => {
  const setPage = useSetRecoilState(pageState);
  const setNav = useSetRecoilState(navState);

  const isFocused = useIsFocused();

  const scrollRef = useRef(null);

  useEffect(() => {
    if (isFocused) {
      setNav(navigation);
      setPage("About");
    }
  }, [isFocused]);

  return (
    <MainContainer scrollRef={scrollRef}>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="PT INTI JAKA RAYA memberikan solusi bisnis inovatif kepada pelanggan kami yang memiliki permasalahan sistem aliran fluida, seperti : erosi, korosi, kavitasi, abrasif kering, masalah beton serangan kimia, perlindungan lantai dan lain-lain."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://intijakaraya.com/about" />
      </Helmet>
      <AboutHeader />
      <AboutContent />
      <Contact />
    </MainContainer>
  );
};

export default About;
