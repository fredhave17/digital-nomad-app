import { useAppQuery } from "../infra/operations/useAppQuery";
import { supabaseService } from "../supabase/supabaseService";

export function useRelatedCities(cityId: string) {
  return useAppQuery(() => supabaseService.getRelatedCities(cityId));
}
