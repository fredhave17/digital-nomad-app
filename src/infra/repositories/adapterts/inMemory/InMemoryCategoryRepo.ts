import { categories } from "@/src/data/categories";
import { Category } from "@/src/domain/catergory/Catergory";
import { ICatergoryRepo } from "@/src/domain/catergory/ICatergoryRepo";

export class InMemoryCategoryRepo implements ICatergoryRepo {
  async findAll(): Promise<Category[]> {
    return categories;
  }
}
