import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { IProduct } from "../../utils/types";

const ProductHandler: React.FC = () => {
    const location = useLocation();
    const emptyProduct: IProduct = {
        id: "",
        category: "",
        name: "",
        seller: "",
        price: 0,
        stock: 0,
        likes: 0,
        imageUrl: "",
        description: "",
        image: undefined
    }
    const productId = new URLSearchParams(location.search).get("p");
    const [title, setTitle] = useState<string>(productId ? "Edit your product fields" : "Add a new product");
    const [buttonLabel, setButtonLabel] = useState<string>(productId ? "Save" : "Add")
    const [product, setProduct] = useState<IProduct>(emptyProduct);

    const uploadImage = () => {
        document.getElementById("img-input")?.click();
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProduct(product => ({
            ...product,
            [event.target.id]: event.target.value
        }))
    }

    return (
        <div className="default">
            <div className="default__head">
                <h2 className="title">{title}</h2>
            </div>
            <div className="default__body">
                <div className="field">
                    <p>Name: </p>
                    <input type="text" id="name" value={product.name} onChange={e => handleChange(e)}/>
                </div>
                <div className="field">
                    <p>Available stock: </p>
                    <input type="number" id="stock" value={product.stock} onChange={e => handleChange(e)}/>
                </div>
                <div className="field">
                    <p>Price in euros: </p>
                    <input type="number" id="price" value={product.price} onChange={e => handleChange(e)}/>
                </div>
                <div className="field">
                    <p>Image: </p>
                    <div className="field__file">
                        <span></span>
                        {/* TODO */}
                        <input id="img-input" type="file"/>
                        <button className="btn btn--primary" onClick={uploadImage}>Upload <FontAwesomeIcon icon={['fas', 'upload']}/></button>
                    </div>
                </div>
                <div className="field description">
                    <p>Description: </p>
                    <textarea id="description" value={product.description} onChange={e => handleChange(e)}/>
                </div>
            </div>
            <div className="default__buttons">
                <button className="btn btn--primary">{buttonLabel}</button>
            </div>
        </div>
    )
}

export default ProductHandler;