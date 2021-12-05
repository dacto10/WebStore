import { Link } from "react-router-dom";

interface Props {
    product: {
        id: string;
        name: string;
        seller: string;
        stock: number;
        likes: number;
        price: number;
        image: string;
    }
}

const ProductCard: React.FC<Props> = (props: Props) => {
    const {id, name, seller, stock, price, image, likes} = props.product;
    return (
        <Link className="product-card" to={`/product?p=${id}`}>
            <img src={image} alt="" />
            <div className="product-card__description">
                <p>{name}</p>
                <p>Sold by {seller}</p>
                <p>{stock} in stock</p>
                <p>{likes} likes</p>
                <p>{price} €</p>
            </div>
        </Link>
    )
};

export default ProductCard;