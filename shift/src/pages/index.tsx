import axios_instance from "@/../plugins/axios";
//import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form"
///なぜかinputとbuttonの配置ができない。一旦後回し

type FormData = {
    username:string,
    password:string
}

function Login(){
    return (
  <div>
    <h1>HELLO VERCEL TEST</h1>
  </div>
)
    console.log(process.env.NEXT_PUBLIC_API_BASE_URL)

    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm();

    const [authError,setAuthError] = useState("");
    const router = useRouter();

    const onSubmit = (event:any): void => {
        ///console.log("dwda")
        const data: FormData = {
            username: event.username,
            password: event.password,
        };
        handleLogin(data);
    };

    const handleLogin = (data:FormData) => {
        console.log(`${data.username}`)
        console.log(`${data.password}`)
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
                <input type="text" id="password" className="border bg-gray-400"  {...register("password")}></input>
                <button className="border border-4 bg-blue-400 w-64" >ログイン</button>
            </form>
        </div>
        <div>{authError}</div>
    </div>
    )
}

export default Login;