import { useContext } from "react";
import ProductCard from "../../components/ProductCard";
import { UserContext } from "../../context/UserContext";

const Liked: React.FC = () => {
    const { userState } = useContext(UserContext);
    // const products = userState.user.liked;

    return (
        <div className="default">
            <div className="default__head">
                <h2 className="title">Liked Products</h2>
            </div>
            <div className="default__body">
                {/* {products.map((el ,i) => <ProductCard product={el} index={i} key={i}/>)} */}
            </div>
        </div>
    )
};

export default Liked;