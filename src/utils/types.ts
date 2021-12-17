export interface IProduct {
    id: string;
    category: string;
    name: string;
    seller: string;
    price: number;
    stock: number;
    likes: number;
    imageUrl?: string;
    description?: string;
    image?: File;
}

export interface IUser {
    id: string;
    name: string;
    products: IProduct[];
    cart: IProduct[];
    liked: IProduct[];
    orders: IProduct[];
}

export interface IUserState {
    user: IUser;
}

export type Credentials = {
    username: string;
    password: string;
}