import { Link } from "react-router-dom";

interface Props {
    product: {
        id: string;
        name: string;
        seller: string;
        stock: number;
        price: number;
        image: string;
    }
}

export default (props: Props) => {
    const {id, name, seller, stock, price, image} = props.product;
    return (
        <Link className="product-card" to={`/product?p=${id}`}>
            <img src={image} alt="" />
            <div className="product-card__description">
                <p>{name}</p>
                <p>Sold by {seller}</p>
                <p>{stock} in stock</p>
                <p>{price} €</p>
            </div>
        </Link>
    )
}