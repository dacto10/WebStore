import { axiosInstance } from "..";
import { ICredentials, IProduct, IUser } from "../utils/types";

export const login = async (credentials: ICredentials): Promise<IUser | never> => {
    const { data } = await axiosInstance.post("/user/login", {
        ...credentials
    })
    
    return await getAllUserData(data);
}

export const getUser = async (userId: string): Promise<IUser> => {
    return await getAllUserData((await (await axiosInstance.get(`/user/${userId}`)).data));
}

export const updateUserCart = async (userId: string, action: 'insertCart' | 'removeCart' | 'removeAllCart', productId?: string): Promise<IUser> => {
    if (action === 'insertCart') {
        const { data } = await axiosInstance.post(`/user/${userId}/cart/product/${productId}`);
        return await getAllUserData(data);
    } else if (action ===  'removeCart') {
        const { data } = await axiosInstance.delete(`/user/${userId}/cart/product/${productId}`);
        return getAllUserData(data);
    } else {
        const { data } = await axiosInstance.delete(`/user/${userId}/cart/product/`);
        return await getAllUserData(data);
    }
}


export const updateUserProducts = async (userId: string, action: 'insertProduct' | 'updateProduct' | 'removeProduct', product: IProduct, image?: File | null): Promise<IUser | void> => {
    if (action === 'insertProduct') {
        const { data } = await axiosInstance.post(`/product/user/${userId}`, {
            ...product
        });
        if (image) {
            const form = new FormData();
            form.append("image", image, image.name);
            await axiosInstance.post(`/images/${data}`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }
    } else if (action === 'updateProduct') {
        const { name, price, description, stock, category } = product;
        await axiosInstance.put(`/product/${product.id}`, {
            name, price, description, stock, category
        })
        if (image) {
            const form = new FormData();
            form.append("image", image, image.name);
            await axiosInstance.post(`/images/${product.id}`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }
    } else {
        await axiosInstance.delete(`/product/${product.id}`);
    }
    return await getUser(userId);
}

const getAllUserData = async (user: any): Promise<IUser> => {
    user.cart = (await Promise.all(user.cart.map((el: any) => axiosInstance.get(`/product/${el}`)))).map(el => el.data);
    user.products = (await axiosInstance.get(`/product/user/${user.id}`)).data;
    return user;
}