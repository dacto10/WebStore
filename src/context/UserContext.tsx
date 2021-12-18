import { createContext } from "react";
import { ICredentials, IUser, IUserState } from "../utils/types";

export type UserContextProps =  {
    userState: IUserState,
    setUser: (credentials: ICredentials) => Promise<void>,
    addToCart: (userId: string, productId: string) => Promise<void>,
    removeFromCart: (userId: string, productId: string) => Promise<void>,
    removeUser: () => void
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);