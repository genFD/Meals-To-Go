import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/RestaurantsScreen";

const RestaurantStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none">
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
