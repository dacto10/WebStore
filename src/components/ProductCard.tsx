import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { IProduct } from "../utils/types";

interface Props {
    product: IProduct,
    index: number;
    remove?: boolean;
    resolve?: boolean;
    edit?: boolean;
    buttonHandler?: (index: number) => void;
}

const ProductCard: React.FC<Props> = (props: Props) => {
    const {id, name, seller, stock, price, image, category} = props.product;
    const handleClick = () => {
        if (props.buttonHandler) props.buttonHandler(props.index);
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
                <p>Category: {category}</p>
                {/* <p><FontAwesomeIcon icon={['fas', 'heart']}/> {likes}</p> */}
                {props.remove && <button className="btn btn--red btn__sm" onClick={handleClick}><FontAwesomeIcon icon={['fas', 'trash']}/></button>}
                {(props.resolve || props.edit) && <button className="btn btn--primary btn__sm" onClick={handleClick}><FontAwesomeIcon icon={['fas', props.resolve ? 'check': 'pen']}/></button>}
                <p>{price} €</p>
            </div>
        </div>
    )
};

export default ProductCard;