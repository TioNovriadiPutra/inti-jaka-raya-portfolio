import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@pages/Home";
import Newsletter from "@pages/Newsletter";
import About from "@pages/About";
import Content from "@pages/Content";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Content"
        component={Content}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const MainApp = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Newsletter"
        component={Newsletter}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
