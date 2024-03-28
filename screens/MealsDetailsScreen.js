import { Text, View } from "react-native";

export default function MealsDetailsScreen({ route }) {
  const mealId = route.params.mealId;
  console.log(mealId);
  return (
    <View>
      <Text>{mealId}</Text>
    </View>
  );
}
