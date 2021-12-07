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