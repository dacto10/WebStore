import { createContext } from "react";
import { IUserState } from "../utils/types";

export type UserContextProps =  {
    userState: IUserState
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);