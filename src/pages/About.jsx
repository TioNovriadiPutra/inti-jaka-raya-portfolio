import React, { useEffect, useRef } from "react";
import MainContainer from "@containers/MainContainer";
import { useSetRecoilState } from "recoil";
import { pageState } from "@store/scrollState";
import { useIsFocused } from "@react-navigation/native";
import AboutContent from "@components/organisms/AboutContent";
import Contact from "@components/organisms/Contact";
import { navState } from "@store/navState";
import AboutHeader from "@components/organisms/AboutHeader";

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
      <AboutHeader />
      <AboutContent />
      <Contact />
    </MainContainer>
  );
};

export default About;
