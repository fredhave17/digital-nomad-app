import { Accordion } from "../components/Accordion";
import { Box } from "../components/Box";
import { Text } from "../components/Text";
import { City } from "../types";

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
