import axiosInstance from "../axios-connection";
import Cookies from "js-cookie";

interface loginProps {
    email: string;
    password: string;
}

const loginApi = async (props: loginProps) => {
    const { email, password } = props;
    try {
        const result = await axiosInstance.post("/login", { email, password });
        const token = result.data.token;
        console.log(result.data.token);
        Cookies.set("token", token);
        return result;
    } catch (error) {
        console.log(error);
    }
};

export default loginApi;
