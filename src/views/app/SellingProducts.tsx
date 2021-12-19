import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { UserContext } from "../../context/UserContext";
import { IProduct } from "../../utils/types";

const SellingProducts: React.FC = () => {
    const { userState } = useContext(UserContext);

    const [currentProducts, setCurrentProducts] = useState<IProduct[]>(userState.user.products);
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentProducts(userState.user.products);
    }, [userState.user.products]);

    const handleProductEdition = (index: number) => {
        navigate(`/handler?p=${currentProducts[index].id}`);
    };

    return (
        <div className="default">
            <div className="default__head">
                <h2 className="title">{ currentProducts.length === 0 ? 'You are not selling any products!' : 'My Products'}</h2>
                <Link to="/handler">
                    <button className="btn btn--primary btn--center btn__lg">Add Product</button>
                </Link>
            </div>
            <div className="default__body">
                {currentProducts.map((el, i) => <ProductCard product={el} index={i} edit={true} buttonHandler={handleProductEdition}/>)}
            </div>
        </div>
    )
};

export default SellingProducts;