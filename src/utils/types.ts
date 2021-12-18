export interface IProduct {
    id: string;
    category: string;
    name: string;
    seller: string;
    price: number;
    stock: number;
    // likes: number;
    imageUrl?: string;
    description?: string;
    userId: string;
}

export interface IUser {
    id: string;
    username: string;
    products: IProduct[];
    cart: IProduct[];
    // liked: IProduct[];
    // orders: IProduct[];
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