import axios from "axios";

const axios_instance = axios.create({
    headers:{
        "Content-Type": "application/json",
    },
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
        console.log(error.response.status)
        console.log(error.response)
        
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
                    return axios_instance(originalConfig);
                })
                .catch(function(error){
                    return Promise.reject(error);
                });
        }else if(error.response && error.response.status !== 422){
            //認証エラーまたは業務エラー以外の場合は、適切な画面に移動
            console.log(originalConfig)
            return Promise.reject(error);
        }else{
            return Promise.reject(error);
        }
    }
);

export default axios_instance;