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
                    <img src={currentProduct?.image} alt="" />
                </div>
                <div className="product-grid__content">
                    <p className="title">{currentProduct?.name}</p>
                    <p>Category: {currentProduct?.category}</p>
                    <p>{currentProduct?.description}</p>
                    <p>Sold by: {currentProduct?.seller}</p>
                    <span>{currentProduct?.price} €</span>
                    <p>{currentProduct?.stock} in stock</p>
                    
                    <div className="product-grid__buttons">
                        {currentProduct?.userId !== userState.user.id && <button className="btn btn--primary" onClick={handleCart}>Add <FontAwesomeIcon icon={['fas', 'shopping-cart']}/></button>}
                    </div>
                </div>
            </div>
            {
                currentProduct?.userId !== userState.user.id &&
                <>
                    <h2 className="title">Other products you may like: </h2>
                    <div className="default">
                        <div className="default__body">
                            {products.filter(el => el.id !== currentProductId && el.category === currentProduct?.category  && el.stock > 0  && el.userId !== userState.user.id).map((el ,i) => <ProductCard product={el} index={i} key={i}/>).filter((el, i) => i < 2)}
                        </div>
                    </div>    
                </>
            }
        </>
    );
};

export default Product;