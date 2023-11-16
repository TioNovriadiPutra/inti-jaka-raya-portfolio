import React, { useEffect, useRef } from "react";
import MainContainer from "@containers/MainContainer";
import NewsContent from "@components/organisms/NewsContent";
import Contact from "@components/organisms/Contact";
import { useSetRecoilState } from "recoil";
import { pageState } from "@store/scrollState";
import { useIsFocused } from "@react-navigation/native";
import { navState } from "@store/navState";
import { Helmet } from "react-helmet";

const Content = ({ route, navigation }) => {
  const { news } = route.params;

  const setPage = useSetRecoilState(pageState);
  const setNav = useSetRecoilState(navState);

  const isFocused = useIsFocused();

  const scrollRef = useRef(null);

  useEffect(() => {
    if (isFocused) {
      setNav(navigation);
      setPage("Content");
    }
  }, [isFocused]);

  return (
    <MainContainer scrollRef={scrollRef}>
      <Helmet>
        <title>Content</title>
        <meta name="description" content="Halaman ini merupakan deskripsi dari newsletter yang anda baca" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://intijakaraya.com/content" />
      </Helmet>
      <NewsContent news={news} />
      <Contact />
    </MainContainer>
  );
};

export default Content;
