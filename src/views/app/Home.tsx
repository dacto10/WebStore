import { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import Select from "../../components/Select";
import { IProduct } from "../../utils/types";

const Home: React.FC = () => {
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

    const categories = [
        {
            text: "All Categories",
            value: "all"
        },
        {
            text: "Electronics",
            value: "electronics"
        },
        {
            text: "Clothing",
            value: "clothing"
        }
    ];

    const location = useLocation();
    const [currentCategory, setCurrentCategory] = useState<string>(new URLSearchParams(location.search).get("c") ?? "all");
    const [currentProducts, setCurrentProducts] = useState<IProduct[]>(products.filter(el => el.category === currentCategory || currentCategory === "all"));
    

    const handleSelectCategory = (category: string) => {
        setCurrentProducts((state: IProduct[]) => products.filter(el => el.category === category || category === "all"));
    }

    return (
        <div className="default">
            <div className="default__head">
                <h2 className="title">Explore all products</h2>
                <Select options={categories} selectedValue={categories[0].value} selectCategory={handleSelectCategory}/>
            </div>
            <div className="default__body">
                {currentProducts.map((el ,i) => <ProductCard product={el} index={i} key={i}/>)}
            </div>
        </div>
    )
}

export default Home;