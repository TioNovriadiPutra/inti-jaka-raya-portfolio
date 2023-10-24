import React, { Suspense, lazy, useEffect, useRef } from "react";
import MainContainer from "@containers/MainContainer";
import { useSetRecoilState } from "recoil";
import { pageState } from "@store/scrollState";
import { useIsFocused } from "@react-navigation/native";
import AboutContent from "@components/organisms/AboutContent";
import Contact from "@components/organisms/Contact";
import { navState } from "@store/navState";
import LoadingScreen from "@components/templates/LoadingScreen";

const AboutHeader = lazy(() => import("@components/organisms/AboutHeader"));

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
      <Suspense fallback={<LoadingScreen />}>
        <AboutHeader />
      </Suspense>
      <AboutContent />
      <Contact />
    </MainContainer>
  );
};

export default About;
