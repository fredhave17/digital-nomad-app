import { City } from "@/src/domain/city/City";
import { Accordion } from "../components/Accordion";
import { Box } from "../components/Box";
import { Text } from "../components/Text";

type CityDetailsTouristAttractionsProps = Pick<City, "touristAttractions">;

export function CityDetailsTouristAttractions({
  touristAttractions,
}: CityDetailsTouristAttractionsProps) {
  return (
    <Box padding="padding">
      <Text variant="title22" mb="s8">
        Pontos turisticos
      </Text>
      {touristAttractions.map((atrraction) => (
        <Accordion
          key={atrraction.id}
          title={atrraction.name}
          description={atrraction.description}
        />
      ))}
    </Box>
  );
}
