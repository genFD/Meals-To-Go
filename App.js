import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useJosefin,
  JosefinSans_400Regular,
} from "@expo-google-fonts/josefin-sans";

import { RestaurantsScreen } from "./src/features/restaurants/screens/RestaurantsScreen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/Infrastructure/theme";
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  const [josefinSansLoaded] = useLato({
    JosefinSans_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded || !josefinSansLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
