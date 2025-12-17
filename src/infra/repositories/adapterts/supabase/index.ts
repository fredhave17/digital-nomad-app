import { Repositories } from "@/src/domain/Repositories";
import { InMemoryAuthRepo } from "../inMemory/inMemoryAuthRepo";
import { SupabaseCategoryRepo } from "./SupabaseCatergoryRepo";
import { SupabaseCityRepo } from "./supabaseCityRepo";

export const SupabaseRepositories: Repositories = {
  auth: new InMemoryAuthRepo(),
  city: SupabaseCityRepo,
  category: SupabaseCategoryRepo,
};
