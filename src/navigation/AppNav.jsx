import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "@routes/AppStack";

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
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNav;
