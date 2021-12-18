import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../..";
import ProductCard from "../../components/ProductCard";
import Select from "../../components/Select";
import { IProduct } from "../../utils/types";

const Home: React.FC = () => {
    const categories = [
        {
            value: "All"
        },
        {
            value: "Electronics"
        },
        {
            value: "Clothing"
        }
    ];

    const location = useLocation();
    const [products, setProducts] = useState<IProduct[]>([]);
    const [currentCategory, _] = useState<string>(new URLSearchParams(location.search).get("c") ?? "All");
    const [currentProducts, setCurrentProducts] = useState<IProduct[]>(products.filter(el => el.category === currentCategory || currentCategory === "All"));

    useEffect(() => {
        async function getProducts() {
            const {data} = await axiosInstance.get("/product/");
            setProducts(data);
            setCurrentProducts(data.filter((el: IProduct) => el.category === currentCategory || currentCategory === "All"));
        }
        getProducts();
    }, [])

    const handleSelectCategory = (category: string) => {
        setCurrentProducts((state: IProduct[]) => products.filter(el => el.category === category || category === "All"));
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