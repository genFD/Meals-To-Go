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

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/Infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurantscontext";
import { Navigation } from "./src/Infrastructure/navigation";
import { LocationContextProvider } from "./src/services/location/locationContext";

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
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
