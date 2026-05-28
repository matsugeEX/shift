"use client"
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import {useForm} from "react-hook-form"
///なぜかinputとbuttonの配置ができない。一旦後回し

type FormData = {
    username:string,
    password:string
}

function Login(){

    const {
        register,
        handleSubmit
    } = useForm();

    const [authError,setAuthError] = useState("");
    const router = useRouter();

    const onSubmit = (event: any): void => {
        const data: FormData = {
            username: event.username,
            password: event.password,
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className="border bg-gray-400"  {...register("username")}></input>
                <input type="text" className="border bg-gray-400"  {...register("password")}></input>
                <button className="border border-4 bg-blue-400 w-64" >ログイン</button>
            </form>
        </div>
        <div>{authError}</div>
    </div>
    )
}

export default Login;