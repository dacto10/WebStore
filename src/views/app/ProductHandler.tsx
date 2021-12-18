import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosInstance } from "../..";
import { UserContext } from "../../context/UserContext";
import { IProduct } from "../../utils/types";

const ProductHandler: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const emptyProduct: IProduct = {
        id: "",
        category: "",
        name: "",
        seller: "",
        price: 0,
        stock: 0,
        // likes: 0,
        description: "",
        userId: ""
    }

    const categories = [
        {
            value: "Electronics"
        },
        {
            value: "Clothing"
        },
        {
            value: "Books"
        }
    ];
    const { userState, createProduct, updateProduct, removeProduct } = useContext(UserContext);

    const productId = new URLSearchParams(location.search).get("p");
    
    const [title, setTitle] = useState<string>(productId ? "Edit your product fields" : "Add a product");
    const [buttonLabel, setButtonLabel] = useState<string>(productId ? "Save" : "Add")
    const [product, setProduct] = useState<IProduct>({ ...emptyProduct, seller: userState.user.username });
    const [image, setImage] = useState<File | null>();

    useEffect(() => {
        if (productId) {
            const getProduct = async () => {
                const { data } = await axiosInstance.get(`/product/${productId}`);
                setProduct(data)
                return ;
            }
            getProduct();
        }
    }, [])

    const uploadImage = () => {
        document.getElementById("imageUrl")?.click();
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, files?: FileList | null) => {
        if (event.target.id === "imageUrl" && files) {
            const file = files.item(0);
            setImage(file);
        } else {
            setProduct(product => ({
                ...product,
                [event.target.id]: event.target.value
            }))
        }
    }
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!productId) {
            await createProduct(userState.user.id, product, image);
        } else {
            console.log("actualizando xd")
            await updateProduct(userState.user.id, product, image);
        }
        navigate("/selling");
    }

    const handleDelete = async () => {
        await removeProduct(userState.user.id, product);
        navigate("/selling");
    }

    return (
        <form className="default" onSubmit={e => handleSubmit(e)}>
            <div className="default__head">
                <h2 className="title">{title}</h2>
                {productId && <button type="button" className="btn btn--red" onClick={handleDelete}>DELETE <FontAwesomeIcon icon={['fas', 'trash']}/></button>}
            </div>
            <div className="default__body">
                <div className="field">
                    <p>Name: </p>
                    <input type="text" id="name" value={product.name} onChange={e => handleChange(e)} required/>
                </div>
                <div className="field">
                    <p>Available stock: </p>
                    <input type="number" id="stock" value={product.stock} onChange={e => handleChange(e)} required/>
                </div>
                <div className="field">
                    <p>Price in euros: </p>
                    <input type="number" id="price" value={product.price} onChange={e => handleChange(e)} required/>
                </div>
                <div className="field">
                    <p>Image: </p>
                    <div className="field__file">
                        <span>{image && image.name}</span>
                        <input id="imageUrl" type="file" value={product.imageUrl} onChange={e => handleChange(e, e.currentTarget.files)}/>
                        <button type ="button" className="btn btn--primary" onClick={uploadImage}>Upload <FontAwesomeIcon icon={['fas', 'upload']}/></button>
                    </div>
                </div>
                <div className="field">
                    <p>Category: </p>
                    <select id="category" value={product.category} onChange={e => handleChange(e)} required>
                        {categories.map(el => <option value={el.value}>{el.value}</option>)}
                    </select>
                </div>
                <div className="field description">
                    <p>Description: </p>
                    <textarea id="description" value={product.description} onChange={e => handleChange(e)} required/>
                </div>
            </div>
            <div className="default__buttons">
                <button type="submit" className="btn btn--primary">{buttonLabel}</button>
            </div>
        </form>
    )
}

export default ProductHandler;