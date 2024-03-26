import { Pressable, Text, View } from "react-native";

export default function CategoryGridTile({ id, title, color }) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
