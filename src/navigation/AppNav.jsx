import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "@routes/AppStack";
import { Helmet } from "react-helmet";

const config = {
  screens: {
    MainApp: {
      screens: {
        Home: "home",
        Newsletter: "newsletter",
        About: "about",
      },
    },
    Content: "content",
  },
};

const linking = {
  // prefixes: ["https://mychat.com", "mychat://"],
  config,
};

const AppNav = () => {
  return (
    <NavigationContainer linking={linking}>
      <Helmet>
        <base href="https://intijakaraya.com/" />
        <meta
          name="description"
          content="PT INTI JAKARAYA didirikan pada tahun 2017 berlokasi di Bandung Jawa Barat – Indonesia. PT INTI JAKARAYA adalah Distributor Tunggal SISTEM POLIMER UNIK Buatan Inggris, di Indonesia."
        />
        <meta
          property="og:image"
          content="http://intijakaraya.com/favicon.ico"
        />
        <meta property="og:site_name" content="PT Inti Jaka Raya" />
        <meta property="og:title" content="Inti Jaka Raya" />
        <meta
          property="og:description"
          content="PT INTI JAKARAYA didirikan pada tahun 2017 berlokasi di Bandung Jawa Barat – Indonesia. PT INTI JAKARAYA adalah Distributor Tunggal SISTEM POLIMER UNIK Buatan Inggris, di Indonesia."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://intijakaraya.com/" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:locale:alternate" content="id_ID" />
      </Helmet>
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNav;
