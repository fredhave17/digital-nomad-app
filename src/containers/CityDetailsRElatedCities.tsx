import { ScrollView, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { City } from "../domain/city/City";
import { useGetRelatedCities } from "../domain/city/operations/useGetRelatedCities";
import { Box } from "../ui/components/Box";
import { CityCard } from "../ui/components/CityCard";
import { Text } from "../ui/components/Text";
import { useAppTheme } from "../ui/theme/useAppTheme";

type Props = Pick<City, "relatedCitiesIds">;

export function CityDetailsRelatedCities({ id }: Props) {
  const { data: cities } = useGetRelatedCities(id);

  const { spacing } = useAppTheme();
  const { bottom } = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const cardWith = width * 0.7;
  const cardHeight = cardWith * 0.9;

  return (
    <Box style={{ paddingBottom: bottom }}>
      <Text variant="title22" mb="s16">
        Veja tambem
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: spacing.padding,
          paddingHorizontal: spacing.padding,
        }}
      >
        {cities?.map((city) => (
          <CityCard
            key={city.id}
            cityPreview={city}
            style={{ width: cardWith, height: cardHeight }}
          />
        ))}
      </ScrollView>
    </Box>
  );
}
