import { IUserState, IUser } from "../utils/types";

type UserAction = { type: 'setUser', payload: IUser } | {  type: 'updateUser', payload: IUser } | {  type: 'removeUser', payload: IUser }

export const userReducer = (state: IUserState, action: UserAction): IUserState => {
    switch ( action.type ) {
        case 'setUser':
            return {
                user: action.payload
            }
        case 'updateUser': 
            return {
                user: action.payload
            }
        case 'removeUser': 
            return {
                user: action.payload
            }
        default:
            return state;
    }
}