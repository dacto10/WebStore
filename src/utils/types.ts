export interface IProduct {
    id: string;
    category: string;
    name: string;
    seller: string;
    price: number;
    stock: number;
    image?: string;
    description?: string;
    userId: string;
}

export interface IUser {
    id: string;
    username: string;
    products: IProduct[];
    cart: IProduct[];
}

export interface IUserState {
    user: IUser;
}

export interface ICredentials {
    username: string;
    password: string;
}

export interface IRegister {
    username: string;
    password: string;
    email: string;   
}