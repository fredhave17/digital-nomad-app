import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function CityDetails() {
  const router = useRouter();

  const { id, name } = useLocalSearchParams();

  return (
    <View>
      <Text onPress={router.back}>
        City Details Screen: {id} {name}
      </Text>
    </View>
  );
}
