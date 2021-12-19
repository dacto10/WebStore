import { useReducer } from "react"
import { ICredentials, IProduct, IUser, IUserState } from "../utils/types"
import { getUser, login, updateUserCart, updateUserProducts } from "./UserActions"
import { UserContext } from "./UserContext"
import { userReducer } from "./UserReducer"

const INITIAL_STATE: IUserState = {
    user: {
        id: "",
        username: "",
        products: [],
        cart: [],
    }
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const UserProvider = ({children}: Props) => {
    const [userState, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const setUser = async (credentials: ICredentials) => {
        const user = await login(credentials);
        localStorage.setItem("userId", JSON.stringify(user.id));
        dispatch({ type: 'setUser', payload: user as IUser});
    }

    const addToCart = async (userId: string, productId: string) => {
        const user = await updateUserCart(userId, 'insertCart', productId);
        dispatch({ type: 'updateUser', payload: user as IUser })
    }

    const removeFromCart = async (userId: string, productId: string) => {
        const user = await updateUserCart(userId, 'removeCart', productId);
        dispatch({ type: 'updateUser', payload: user as IUser })
    }

    const removeAllFromCart = async (userId: string) => {
        const user = await updateUserCart(userId, 'removeAllCart');
        dispatch({ type: 'updateUser', payload: user as IUser })
    }

    const createProduct = async (userId: string, product: IProduct, image?: File | null) => {
        const user = await updateUserProducts(userId, 'insertProduct', product, image);
        dispatch({ type: 'updateUser', payload: user as IUser })
    }

    const updateProduct = async (userId: string, product: IProduct, image?: File | null) => {
        const user = await updateUserProducts(userId, 'updateProduct', product, image);
        dispatch({ type: 'updateUser', payload: user as IUser })
    }

    const removeProduct = async (userId: string, product: IProduct) => {
        const user = await updateUserProducts(userId, 'removeProduct', product);
        dispatch({ type: 'updateUser', payload: user as IUser })
    }

    const removeUser = () => {
        localStorage.removeItem("userId");
        dispatch({ type: 'removeUser', payload: INITIAL_STATE.user })
    }

    return (
        <UserContext.Provider value={{
            userState,
            setUser,
            removeUser,
            addToCart,
            removeFromCart,
            removeAllFromCart,
            createProduct,
            updateProduct,
            removeProduct,
        }}>
            { children }
        </UserContext.Provider>
    )
}