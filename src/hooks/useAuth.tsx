import axios from "axios";
import { useCallback, useState } from "react"
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";

//ログイン機能
export const useAuth = () => {
    const [loading , setLoading] = useState(false);
    const navigate = useNavigate()

    const login = useCallback((id:string) => {
        setLoading(true);

        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            if(res.data) {
                navigate('/home');
            } else {
                alert("ユーザーが存在しません")
            }
        }).catch(() => 
            alert("ログインできません")
        ).finally(() => setLoading(false))
    }, [navigate]);
    return {login , loading}
}