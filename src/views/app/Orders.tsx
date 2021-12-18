import { useContext, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { UserContext } from "../../context/UserContext";
import { IProduct } from "../../utils/types";

const Orders: React.FC = () => {
    const { userState } = useContext(UserContext);
    // const [currentProducts, setCurrentProducts] = useState<IProduct[]>(userState.user.orders);

    const handleProductRemove = (index: number) => {
        // setCurrentProducts((state: IProduct[]) => state.filter((el, i) => i !== index));
        try {
            // updateUser({
            //     ...userState.user,
            //     // orders: currentProducts
            // })
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="default">
            {/* {
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
            } */}
        </div>
    )
};

export default Orders;