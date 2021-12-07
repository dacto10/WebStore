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
    const {id, name, seller, stock, price, image, likes} = props.product;
    const removeItself = () => {
        if (props.buttonHandler) props.buttonHandler(props.index);
    }
    return (
        <div className="product-card" >
            <Link to={`/product?p=${id}`}>
                <img src={image as string} alt="" />
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
                {props.edit && <button className="btn btn--primary btn__sm" onClick={removeItself}><FontAwesomeIcon icon={['fas', 'pen']}/></button>}
                <p>{price} €</p>
            </div>
        </div>
    )
};

export default ProductCard;