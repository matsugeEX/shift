import axios_instance from "@/../plugins/axios";
//import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form"
///なぜかinputとbuttonの配置ができない。一旦後回し

type FormData = {
    username:string,
    password:string
}

function Login(){

    const {
        register,
        handleSubmit,
    } =  useForm<FormData>();

    const [authError,setAuthError] = useState("");
    const router = useRouter();

    const onSubmit = (event:FormData): void => {
        const data: FormData = {
            username: event.username,
            password: event.password,
        };
        handleLogin(data);
    };

    const handleLogin = (data:FormData) => {
        axios_instance
            .post("/api/people/login/",data)
            .then((response) => {
                console.log("LOGIN THEN", response.status);
                router.push("/login")
            })
            .catch(function(error){
                console.log("===== LOGIN ERROR START =====");

                console.log("message:", error.message);
                console.log("status:", error?.response?.status);
                console.log("data:", error.response?.data);
                console.log("config url:", error.config?.url);

                console.log("===== LOGIN ERROR END =====");

                setAuthError("ユーザー名またはパスワードに誤りがあります");
            });
    };

    return(
    <div>
        <div className="flex border">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" id="username" className="border bg-gray-400"  {...register("username")}></input>
                <input type="password" id="password" className="border bg-gray-400"  {...register("password")}></input>
                <button className="border border-4 bg-blue-400 w-64" >ログイン</button>
            </form>
        </div>
        <div>{authError}</div>
    </div>
    )
}

export default Login;