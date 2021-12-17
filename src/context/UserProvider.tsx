import { useReducer } from "react"
import { Credentials, IUser, IUserState } from "../utils/types"
import { login } from "./UserActions"
import { UserContext } from "./UserContext"
import { userReducer } from "./UserReducer"

const INITIAL_STATE: IUserState = {
    user: {
        id: "",
        name: "",
        products: [],
        liked: [],
        cart: [],
        orders: []
    }
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const UserProvider = ({children}: Props) => {
    const [userState, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const setUser = async (credentials: Credentials) => {
        const response = await login(credentials);
        if (typeof response === typeof INITIAL_STATE.user) {
            dispatch({ type: 'setUser', payload: response as IUser});
        }
    }

    return (
        <UserContext.Provider value={{
            userState
        }}>
            { children }
        </UserContext.Provider>
    )
}