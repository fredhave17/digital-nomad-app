import { AuthUser } from "./AuthUser";

export interface IAuthRepo {
  singIn: (email: string, password: string) => Promise<AuthUser>;
  signOut: () => Promise<void>;
}
