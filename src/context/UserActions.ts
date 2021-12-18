import { getAllJSDocTags } from "typescript";
import { axiosInstance } from "..";
import { ICredentials, IUser } from "../utils/types";

export const login = async (credentials: ICredentials): Promise<IUser | never> => {
    const { data } = await axiosInstance.post("/user/login", {
        ...credentials
    })
    
    return getAllUserData(data);
}

export const updateUserCart = async (userId: string, productId: string, action: 'insert' | 'remove'): Promise<IUser | never> => {
    if (action === 'insert') {
        const { data } = await axiosInstance.post(`/user/${userId}/cart/product/${productId}`);
        return getAllUserData(data);
    } else {
        const { data } = await axiosInstance.delete(`/user/${userId}/cart/product/${productId}`);
        return getAllUserData(data);
    }
}

const getAllUserData = async (user: any): Promise<IUser> => {
    user.cart = (await Promise.all(user.cart.map((el: any) => axiosInstance.get(`/product/${el}`)))).map(el => el.data);
    return user;
}
