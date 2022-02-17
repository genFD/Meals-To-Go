import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { SafeArea } from "../../../components/utility/SafeArea";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Searchbar } from "react-native-paper";
import { Spacer } from "../../../components/spacer/Spacer";
import { RestaurantsInfoCard } from "../components/RestaurantsInfoCard";
import { RestaurantsContext } from "../../../services/restaurants/restaurantscontext";

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(error);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantsInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
