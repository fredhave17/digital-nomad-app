import { IAuthRepo } from "./auth/IAuthRepo";
import { ICatergoryRepo } from "./catergory/ICatergoryRepo";
import { ICityRepo } from "./city/ICityRepo";

export type Repositories = {
  auth: IAuthRepo;
  city: ICityRepo;
  category: ICatergoryRepo;
};
