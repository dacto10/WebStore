import { createContext } from "react";
import { ICredentials, IProduct, IUser, IUserState } from "../utils/types";

export type UserContextProps =  {
    userState: IUserState,
    setUser: (credentials: ICredentials) => Promise<void>,
    addToCart: (userId: string, productId: string) => Promise<void>,
    removeFromCart: (userId: string, productId: string) => Promise<void>,
    removeUser: () => void,
    removeAllFromCart: (userId: string) => Promise<void>,
    createProduct: (userId: string, product: IProduct, image?: File | null) => Promise<void>,
    updateProduct: (userId: string, product: IProduct, image?: File | null) => Promise<void>,
    removeProduct: (userId: string, product: IProduct) => Promise<void>,
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);