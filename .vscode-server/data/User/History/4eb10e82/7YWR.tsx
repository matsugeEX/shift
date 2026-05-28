"use client"
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import {useForm} from "react-hook-form"
///なぜかinputとbuttonの配置ができない。一旦後回し

function Login(){

    const {
        register,
        handleSubmit
    } = useForm();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [authError,setAuthError] = useState("");
    const router = useRouter();

    type FormData = {
        username:string,
        password:string
    }

    const onSubmit = (event: any): void => {
        console.log(`${password}`)
        const data: FormData = {
            username: username,
            password: password,
        };
        handleLogin(data);
    };

    const handleLogin = (data:FormData) => {
        axios
            .post("http://127.0.0.1:8000/api/people/login/",data)
            .then((response) => {
                router.push("http://127.0.0.1:8000/api/people/person/")
            })
            .catch(function(error){
                setAuthError("ユーザー名またはパスワードに誤りがあります")
            console.log("dwda")
            });
    };

    return(
    <div>
        <div className="flex border">
            <form>
                <input value={username} type="text" className="border bg-gray-400"  {...register("username")}></input>
                <input value={username} type="text" className="border bg-gray-400"  {...register("password")}></input>
                <button className="border border-4 bg-blue-400 w-64" onSubmit={handleSubmit(onSubmit)}>ログイン</button>
            </form>
        </div>
        <div>{username} {password}</div>
    </div>
    )
}

export default Login;