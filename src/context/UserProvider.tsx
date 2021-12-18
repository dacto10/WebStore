import { useReducer } from "react"
import { ICredentials, IUser, IUserState } from "../utils/types"
import { login, updateUserCart } from "./UserActions"
import { UserContext } from "./UserContext"
import { userReducer } from "./UserReducer"

const INITIAL_STATE: IUserState = {
    user: {
        id: "",
        username: "",
        products: [],
        // liked: [],
        cart: [],
        // orders: []
    }
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const UserProvider = ({children}: Props) => {
    const [userState, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const setUser = async (credentials: ICredentials) => {
        const user = await login(credentials);
        if (typeof user === typeof INITIAL_STATE.user) {
            dispatch({ type: 'setUser', payload: user as IUser});
        }
    }

    const addToCart = async (userId: string, productId: string) => {
        const user = await updateUserCart(userId, productId, 'insert');
        if (typeof user === typeof INITIAL_STATE.user) {
            dispatch({ type: 'updateUser', payload: user as IUser })
        }
    }

    const removeFromCart = async (userId: string, productId: string) => {
        const user = await updateUserCart(userId, productId, 'remove');
        if (typeof user === typeof INITIAL_STATE.user) {
            dispatch({ type: 'updateUser', payload: user as IUser })
        }
    }

    const removeUser = () => {
        dispatch({ type: 'removeUser', payload: INITIAL_STATE.user })
    }

    return (
        <UserContext.Provider value={{
            userState,
            setUser,
            removeUser,
            addToCart,
            removeFromCart
        }}>
            { children }
        </UserContext.Provider>
    )
}