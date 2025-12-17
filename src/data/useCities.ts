import { useAppQuery } from "../infra/operations/useAppQuery";
import {
  CityFilters,
  supabaseService,
} from "../infra/repositories/adapterts/supabase/supabaseCityRepo";

export function useCities(filters: CityFilters) {
  return useAppQuery(
    () => supabaseService.findAll(filters),
    [filters.name, filters.categoryId]
  );
}

// let cityPreviewList = [...cities];

// if (name) {
//   cityPreviewList = cityPreviewList.filter((city) => {
//     return city.name.toLowerCase().includes(name.toLowerCase());
//   });
// }

// if (categoryId) {
//   cityPreviewList = cityPreviewList.filter((city) => {
//     return city.categories.some((category) => category.id === categoryId);
//   });
// }
