import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../..";
import ProductCard from "../../components/ProductCard";
import Select from "../../components/Select";
import { UserContext } from "../../context/UserContext";
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
        },
        {
            value: "Books"
        }
    ];

    const { userState } = useContext(UserContext);

    const location = useLocation();
    const [products, setProducts] = useState<IProduct[]>([]);
    const [currentCategory, setCurrentCategory] = useState<string>(new URLSearchParams(location.search).get("c") ?? "All");
    const [currentProducts, setCurrentProducts] = useState<IProduct[]>(products.filter((el: IProduct) => (el.category === currentCategory || currentCategory === "All") && (el.userId !== userState.user.id) && el.stock > 0));

    useEffect(() => {
        async function getProducts() {
            const {data} = await axiosInstance.get("/product/");
            setProducts(data);
            setCurrentProducts((state: IProduct[]) => data.filter((el: IProduct) => (el.category === currentCategory || currentCategory === "All") && (el.userId !== userState.user.id) && el.stock > 0));
        }
        getProducts();
    }, [])

    const handleSelectCategory = (category: string) => {
        setCurrentCategory(category);
        setCurrentProducts((state: IProduct[]) => products.filter((el: IProduct) => (el.category === category || category === "All") && (el.userId !== userState.user.id) && el.stock > 0));
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