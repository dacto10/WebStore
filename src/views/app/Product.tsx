import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { axiosInstance } from "../..";
import ProductCard from "../../components/ProductCard";
import { UserContext } from "../../context/UserContext";
import { IProduct } from "../../utils/types";

const Product: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [products, setProducts] = useState<IProduct[]>([]);
    const [currentProductId, _] = useState<string>(new URLSearchParams(location.search).get("p") ?? "");
    const [currentProduct, setCurrentProduct] = useState<IProduct>();
    const { userState, addToCart } = useContext(UserContext);


    useEffect(() => {
        async function getProducts() {
            const {data} = await axiosInstance.get("/product/");
            setProducts(data);
            setCurrentProduct(data.find((el: IProduct) => el.id === currentProductId))
        }
        getProducts();
    }, []);

    const handleCart = async () => {
        if (!(userState.user.cart.map(el => el.id).includes(currentProductId))) {
            await addToCart(userState.user.id, currentProductId);
            navigate("/cart");
        }
    }

    return (
        <>
            <div className="product-grid">
                <div className="product-grid__img">
                    <img src={currentProduct?.imageUrl} alt="" />
                </div>
                <div className="product-grid__content">
                    <p className="title">{currentProduct?.name}</p>
                    <p>{currentProduct?.name}</p>
                    <p>Sold by: {currentProduct?.seller}</p>
                    <span>{currentProduct?.price} €</span>
                    <p>{currentProduct?.stock} in stock</p>
                    {/* <p><FontAwesomeIcon icon={['fas', 'heart']}/> {currentProduct?.likes}</p> */}
                    <div className="product-grid__buttons">
                        {/* TODO color boton cuando tiene y no tiene like */}
                        {/* <button className="btn btn--red">Like <FontAwesomeIcon icon={['fas', 'heart']}/></button> */}
                        <button className="btn btn--primary" onClick={handleCart}>Add <FontAwesomeIcon icon={['fas', 'shopping-cart']}/></button>
                    </div>
                </div>
            </div>
            <h2 className="title">Other products you may like: </h2>
            <div className="default">
                <div className="default__body">
                    {products.filter((el, i) => el.id !== currentProductId && el.category === currentProduct?.category).map((el ,i) => <ProductCard product={el} index={i} key={i}/>)}
                </div>
            </div>
        </>
    );
};

export default Product;