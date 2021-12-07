import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import { IProduct } from "../../utils/types";

const Orders: React.FC = () => {
    const products: IProduct[] = [{
        id: "13",
        name: "Acer Laptop",
        category: "electronics",
        seller: "PC Gears",
        stock: 152,
        likes: 314,
        price: 799,
        imageUrl: `https://static.acer.com/up/Resource/Acer/Laptops/Swift_1/Image/20200707/Acer-Swift-1_SF114-33_Gold_modelmain.png`
    },
    {
        id: "14",
        name: "Camisa bien Gucci",
        category: "clothing",
        seller: "Gucci Gang",
        stock: 2,
        likes: 3,
        price: 1999,
        imageUrl: `https://static.wixstatic.com/media/e100fb_cc278b0d21ce46c1a0405c8d266f034b~mv2_d_1200_1500_s_2.jpg/v1/fill/w_498,h_498,al_c,q_85,usm_0.66_1.00_0.01/e100fb_cc278b0d21ce46c1a0405c8d266f034b~mv2_d_1200_1500_s_2.jpg`
    }];

    const [currentProducts, setCurrentProducts] = useState<IProduct[]>(products);

    const handleProductRemove = (index: number) => {
        setCurrentProducts((state: IProduct[]) => state.filter((el, i) => i !== index));
    }

    return (
        <div className="default">
            {
                currentProducts.length > 0 ? (
                    <>
                        <div className="default__head">
                            <h2 className="title">My Orders</h2>
                        </div>
                        <div className="default__body">
                            {currentProducts.map((el, i) => <ProductCard product={el} index={i} resolve={true} buttonHandler={handleProductRemove}/>)}
                        </div>
                    </>
                ) : (
                    <h2 className="title">You don't have any pending orders!</h2>
                )
            }
        </div>
    )
};

export default Orders;