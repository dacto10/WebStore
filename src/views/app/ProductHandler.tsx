import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IProduct } from "../../utils/types";

const ProductHandler: React.FC = () => {
    const location = useLocation();
    const [title, setTitle] = useState<string>(new URLSearchParams(location.search).get("p") ? "Edit your product fields" : "Add a new product");
    const [product, setProduct] = useState<IProduct>();

    const uploadImage = () => {
        document.getElementById("img-input")?.click();
    }

    return (
        <div className="default">
            <div className="default__head">
                <h2 className="title">{title}</h2>
            </div>
            <div className="default__body">
                <div className="field">
                    <p>Product name: </p>
                    <input type="text" />
                </div>
                <div className="field">
                    <p>Product stock: </p>
                    <input type="number" />
                </div>
                <div className="field">
                    <p>Product price: </p>
                    <input type="number" />
                </div>
                <div className="field">
                    <p>Product image: </p>
                    <div className="field__file">
                        <span>image.jpg</span>
                        <input id="img-input" type="file" />
                        <button className="btn btn--primary" onClick={uploadImage}>Upload <FontAwesomeIcon icon={['fas', 'upload']}/></button>
                    </div>
                </div>
                <div className="field description">
                    <p>Product description: </p>
                    <textarea/>
                </div>
            </div>
            <div className="default__buttons">
                <button className="btn btn--primary">Add</button>
            </div>
        </div>
    )
}

export default ProductHandler;