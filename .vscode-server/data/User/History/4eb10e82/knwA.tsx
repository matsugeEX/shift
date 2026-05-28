import { useState, } from "react";

///なぜかinputとbuttonの配置ができない。一旦後回し

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const OnClick = () => {

    }

    return(
    <div>
        <div className="flex border">
            <input value={username} type="text" className="border bg-gray-400"  onChange={(e) => setUsername(e.target.value)}></input>
            <button className="border border-4 bg-blue-400 w-64" onClick={OnClick}>ログイン</button>
        </div>
        <div className="border">
            <input value={password} type="password" className="border bg-gray-400"  onChange={(e) => setPassword(e.target.value)}></input>
            <button className="border border-4 bg-red-400">登録</button>
        </div>
        <div>{username} {password}</div>
    </div>
    )
}

export default Login;