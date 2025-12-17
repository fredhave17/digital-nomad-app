import { useAppQuery } from "../infra/operations/useAppQuery";
import { supabaseService } from "../supabase/supabaseService";

export function useCategories() {
  return useAppQuery(() => supabaseService.listCategory());
}
