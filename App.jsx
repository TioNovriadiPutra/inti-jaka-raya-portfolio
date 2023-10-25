import React from "react";
import { RecoilRoot } from "recoil";
import AppNav from "@navigation/AppNav";
import { useFonts } from "expo-font";
import LoadingScreen from "@components/templates/LoadingScreen";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "@utils/locales/en.json";
import idTranslation from "@utils/locales/id.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    id: { translation: idTranslation },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  const [fontsLoaded] = useFonts({
    "GeneralSans-Medium": require("@assets/fonts/GeneralSans-Medium.ttf"),
    "GeneralSans-SemiBold": require("@assets/fonts/GeneralSans-Semibold.ttf"),
    "Poppins-Regular": require("@assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("@assets/fonts/Poppins-SemiBold.ttf"),
    "GeneralSans-Italic": require("@assets/fonts/GeneralSans-Italic.ttf"),
    "Poppins-Light": require("@assets/fonts/Poppins-Light.ttf"),
    "GeneralSans-MediumItalic": require("@assets/fonts/GeneralSans-MediumItalic.ttf"),
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <RecoilRoot>
      <AppNav />
    </RecoilRoot>
  );
};

export default App;
