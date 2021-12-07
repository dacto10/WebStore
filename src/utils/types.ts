export interface IProduct {
    id: string;
    category: string;
    name: string;
    seller: string;
    price: number;
    stock: number;
    likes: number;
    image: File | string;
    description?: string;
}