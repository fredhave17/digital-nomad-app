import { Category } from "./Catergory";

export interface ICatergoryRepo {
  findAll(): Promise<Category[]>;
}
