import React, { useEffect, useRef } from "react";
import MainContainer from "@containers/MainContainer";
import { useIsFocused } from "@react-navigation/native";
import { useSetRecoilState } from "recoil";
import { pageState } from "@store/scrollState";
import NewsletterContent from "@components/organisms/NewsletterContent";
import Contact from "@components/organisms/Contact";
import { navState } from "@store/navState";
import { Helmet } from "react-helmet";

const Newsletter = ({ navigation }) => {
  const setPage = useSetRecoilState(pageState);
  const setNav = useSetRecoilState(navState);

  const isFocused = useIsFocused();

  const scrollRef = useRef(null);

  useEffect(() => {
    if (isFocused) {
      setNav(navigation);
      setPage("Newsletter");
    }
  }, [isFocused]);

  return (
    <MainContainer scrollRef={scrollRef}>
      <Helmet>
        <title>Newsletter</title>
        <meta
          name="description"
          content="PT INTI JAKA RAYA menampilkan berbagai berita terbaru terkait perkembangan industri coating di dunia"
        />
        <link rel="canonical" href="https://intijakaraya.com/newsletter" />
      </Helmet>
      <NewsletterContent />
      <Contact />
    </MainContainer>
  );
};

export default Newsletter;
