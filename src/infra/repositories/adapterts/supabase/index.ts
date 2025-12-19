import { Repositories } from "@/src/domain/Repositories";
import { SupabaseAuthRepo } from "./SupabaseAuthRepo";
import { SupabaseCategoryRepo } from "./SupabaseCatergoryRepo";
import { SupabaseCityRepo } from "./supabaseCityRepo";

export const SupabaseRepositories: Repositories = {
  auth: new SupabaseAuthRepo(),
  city: SupabaseCityRepo,
  category: SupabaseCategoryRepo,
};
