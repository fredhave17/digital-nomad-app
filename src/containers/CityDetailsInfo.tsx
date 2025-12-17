import { City } from "../domain/city/City";
import { Box } from "../ui/components/Box";
import { Text } from "../ui/components/Text";

type CityDetailsInfoProps = Pick<City, "name" | "country" | "description">;

export function CityDetailsInfo({
  country,
  description,
  name,
}: CityDetailsInfoProps) {
  return (
    <Box padding="padding">
      <Text variant="title28" mb="s2">
        {name}
      </Text>
      <Text variant="text18" mb="s24">
        {country}
      </Text>
      <Text variant="text14">{description}</Text>
    </Box>
  );
}
