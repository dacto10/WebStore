import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"
import ProductCard from "../../components/ProductCard";

const Product: React.FC = () => {
    const products = [{
        id: "13",
        name: "Acer Laptop",
        category: "electronics",
        seller: "PC Gears",
        stock: 152,
        likes: 314,
        price: 799,
        image: `https://static.acer.com/up/Resource/Acer/Laptops/Swift_1/Image/20200707/Acer-Swift-1_SF114-33_Gold_modelmain.png`
    },
    {
        id: "14",
        name: "Camisa bien Gucci",
        category: "clothing",
        seller: "Gucci Gang",
        stock: 2,
        likes: 3,
        price: 1999,
        image: `https://static.wixstatic.com/media/e100fb_cc278b0d21ce46c1a0405c8d266f034b~mv2_d_1200_1500_s_2.jpg/v1/fill/w_498,h_498,al_c,q_85,usm_0.66_1.00_0.01/e100fb_cc278b0d21ce46c1a0405c8d266f034b~mv2_d_1200_1500_s_2.jpg`
    }];

    return (
        <>
            <div className="product-grid">
                <div className="product-grid__img">
                    <img src="https://static.acer.com/up/Resource/Acer/Laptops/Swift_1/Image/20200707/Acer-Swift-1_SF114-33_Gold_modelmain.png" alt="" />
                </div>
                <div className="product-grid__content">
                    <p className="title">Laptop Acer</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Sold by: PC Gears</p>
                    <span>799 €</span>
                    <p>234 in stock</p>
                    <p><FontAwesomeIcon icon={['fas', 'heart']}/> 23</p>
                    <div className="product-grid__buttons">
                        {/* TODO color boton cuando tiene y no tiene like */}
                        <button className="btn btn--red">Like <FontAwesomeIcon icon={['fas', 'heart']}/></button>
                        <button className="btn btn--primary">Add to cart <FontAwesomeIcon icon={['fas', 'shopping-cart']}/></button>
                    </div>
                </div>
            </div>
            <h2 className="title">Other products you may like: </h2>
            <div className="home">
                <div className="home__body">
                    {products.map(el => <ProductCard product={el}/>)}
                </div>
            </div>
        </>
    );
};

export default Product;