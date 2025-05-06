import React, { useEffect } from "react";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";

const clientId="826245144640-ctsjtd9i0okmkvgre5pd9a8nnrojjt5l.apps.googleusercontent.com";

const Login = () => {
    const navigate = useNavigate();


    useEffect(() => {
        const initClient = () => {
            gapi.load("client:auth2", () => {
                gapi.client.init ({
                    clientId: clientId,
                    scope: "https://www.googleapis.com/auth/classroom.courses.readonly",
                });
            });
        };
        initClient();
    }, []);


const handleLogin = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    authInstance.signIn().then((googleUser) => {
        const token = googleUser.getAuthResponse().access_token;
        console.log("Google ID Token:", token);

        fetch("http://localhost:5000/auth/google", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
        })
        .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("token", token);
                navigate("/dashboard");
            })
            .catch((error) => console.error("Error:", error));
    });
};

    return (
        <div>
            <h2>Login with Google</h2>
            <button onClick={handleLogin}>Sign in with Google</button>
        </div>
    );

};


export default Login;

//CHAPTER 6 LOGIN.JS
// export default function Login() {
//     const navigate = useNavigate();

//     const handleSuccess = (credentialResponse) => {
//         const token = credentialResponse.credential; //Google ID Token
//         localStorage.setItem("token", token); //Store token in local storage
//         console.log("Login Success:", token);
//         navigate("/dashboard"); //Redirect to Dashboard
//     };

//     return (
//         <div>
//             <h1>Login</h1>
//             <GoogleLogin onSuccess={handleSuccess} 
//                         onError={() => console.log("Login Failed")}
//                 />
//         </div>
//     );
// }