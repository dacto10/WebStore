import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    },
    index: number;
    remove?: boolean;
    resolve?: boolean;
    removeHandler?: (index: number) => void;
}

const ProductCard: React.FC<Props> = (props: Props) => {
    const {id, name, seller, stock, price, image, likes} = props.product;
    const removeItself = () => {
        if (props.removeHandler) props.removeHandler(props.index);
    }
    return (
        <div className="product-card" >
            <Link to={`/product?p=${id}`}>
                <img src={image} alt="" />
            </Link>
            <div className="product-card__description">
                <Link to={`/product?p=${id}`}>
                    <span>{name}</span>
                </Link>
                <p>Sold by {seller}</p>
                <p>{stock} in stock</p>
                <p>{likes} likes</p>
                {props.remove && <button className="btn btn--red btn__sm" onClick={removeItself}><FontAwesomeIcon icon={['fas', 'trash']}/></button>}
                {props.resolve && <button className="btn btn--primary btn__sm" onClick={removeItself}><FontAwesomeIcon icon={['fas', 'check']}/></button>}
                <p>{price} €</p>
            </div>
        </div>
    )
};

export default ProductCard;