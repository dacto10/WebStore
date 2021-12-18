import { useContext, useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { UserContext } from "../../context/UserContext";
import { IProduct } from "../../utils/types";

const Cart: React.FC =  () => {
    const { userState, removeFromCart, removeAllFromCart } = useContext(UserContext);

    const [currentProducts, setCurrentProducts] = useState<IProduct[]>(userState.user.cart);
    const [label, setLabel] = useState<string>("You have no products in your Cart!");

    const handleProductRemove = async (index: number) => {
        try {
            await removeFromCart(userState.user.id, currentProducts[index].id);
        } catch (err) {
            console.log(err);
        }
    }

    const handlePurchase = async () => {
        try {
            await removeAllFromCart(userState.user.id);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        setCurrentProducts((state: IProduct[]) => userState.user.cart);
    }, [userState.user.cart])

    const date = new Date();
    date.setDate(new Date().getDate() + 7);

    return (
        <div className="default">
            {
                currentProducts.length > 0 && (
                    <div className="default__head">
                        <h2 className="title">My Cart</h2>
                    </div>
                )
            }
            <div className="default__body">
                {currentProducts.map((el, i) => <ProductCard product={el} index={i} remove={true} buttonHandler={handleProductRemove}/>)}
            </div>
            {currentProducts.length > 0 ? (
                <div className="default__checkout">
                    <p>Total: {currentProducts.map(el => el.price).reduce((el, acc) => el + acc)} €</p>
                    <p>Estimated arrival date: { date.toDateString() }</p>
                    <button className="btn btn--primary" onClick={handlePurchase}>Buy Now</button>
                </div>
            ) : (
                <h2 className="title">{label}</h2>
            )}
        </div>
    )
}

export default Cart;