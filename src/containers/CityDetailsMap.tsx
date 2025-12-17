import MapView from "react-native-maps";
import { City } from "../domain/city/City";
import { Box } from "../ui/components/Box";
import { Text } from "../ui/components/Text";
import { useAppTheme } from "../ui/theme/useAppTheme";

type CityDetailsMapProps = Pick<City, "location">;

export function CityDetailsMap({ location }: CityDetailsMapProps) {
  const { borderRadii } = useAppTheme();
  return (
    <Box padding="padding">
      <Text variant="title22" mb="s16">
        Mapa
      </Text>
      <Box
        style={{
          width: "100%",
          height: 200,
          borderRadius: borderRadii.default,
          overflow: "hidden",
        }}
      >
        <MapView
          style={{ width: "100%", height: "100%" }}
          initialRegion={{
            ...location,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0922,
          }}
        />
      </Box>
    </Box>
  );
}
