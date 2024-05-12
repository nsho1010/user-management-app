import axios from "axios";
import { useCallback, useState } from "react"
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";

//ログイン機能
export const useAuth = () => {
    const [loading , setLoading] = useState(false);
    const navigate = useNavigate()
    const { showMessage } = useMessage();

    const login = useCallback((id:string) => {
        setLoading(true);

        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            if(res.data) {
                showMessage({title:"ログインしました", status:'success'})
                navigate('/home');
            } else {
                showMessage({title:"ユーザーが存在しません", status:'error'})
            }
        }).catch(() => 
            showMessage({title:"ログインできません", status:'error'})
        ).finally(() => setLoading(false))
    }, [navigate, showMessage]);
    return {login , loading}
}