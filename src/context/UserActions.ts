import axios from "axios";
import { axiosInstance } from "..";
import { Credentials, IUser } from "../utils/types";

export const login = async (credentials: Credentials): Promise<IUser | void> => {
    try {
        return await axiosInstance.post("/user/login");
    } catch (err) {
        console.log(err)
    }
}