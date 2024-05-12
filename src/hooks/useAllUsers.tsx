import axios from "axios";
import { useCallback, useState } from "react"
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

//全ユーザー取得機能
export const useAllUsers = () => {
    const [ loading , setLoading] = useState(false);
    const [ users, setUsers] = useState<Array<User>>([]);
    const { showMessage } = useMessage();


    const getUsers = useCallback(() => {
        setLoading(true);
        axios.get<Array<User>>('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            setUsers(res.data);
        })
        .catch(() => {
            showMessage({title:"ユーザー情報が取得できません", status:'error'})
        })
        .finally(() => {
            setLoading(false);
        })
    },[showMessage]);
    return {getUsers , loading ,users}
}