import axios from "axios";

console.log("API URL:", process.env.NEXT_PUBLIC_API_BASE_URL);
/*const axios_instance = axios.create({
    headers:{
        "Content-Type": "application/json",
    },
});*/
const axios_instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers:{
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

axios_instance.interceptors.request.use(
    function(config){             
        return config; 
    },
    function(error){
        return Promise.reject(error);
    }
);

axios_instance.interceptors.response.use(
    
    function(response){
        console.log("True")
        return response;
    },
    function(error){
        console.log("False")
        const originalConfig = error.config;
        if(
            error.response && error.response.status === 401 && !originalConfig.retry
        ){
            //認証エラーの場合はリフレッシュトークンを使ってリトライ
            originalConfig.retry = true;
            //以下の場合はリトライしない
            //ログイン処理の場合
            if (originalConfig.url === "/api/people/login/"){
                return Promise.reject(error);
            }

            return axios_instance
                .post("/api/people/retry/",{refresh:""})                 
                .then((response) =>{
                    console.log("you did refresh")
                    return axios_instance(originalConfig);
                })
                .catch(function(error){
                    return Promise.reject(error);
                });
        }else if(error.response && error.response.status !== 422){
            //認証エラーまたは業務エラー以外の場合は、適切な画面に移動
            console.log("You failed!")
            if (originalConfig.url !== "/api/people/login/"){
                window.location.href = "../"
            }
        }else{
            return Promise.reject(error);
        }
    }
);

export default axios_instance;