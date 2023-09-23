import { useState,useEffect } from "react";
import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
// import Spinner from "../Spinner";
import axios from 'axios'

// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "./context/AuthContext";

export default function PrivateRoute(){
    const [ok,setOk]=useState(false);
    
    // eslint-disable-next-line
    const [auth, setAuth] = useAuth();
    useEffect(()=>{
        const authCheck= async()=>{
            console.log(auth?.token)
            const res= await axios.get(`https://sih-fitness-app-api.onrender.com/api/v1/auth/user-auth`

            ,{
                headers:{
                    "Authorization": auth?.token
                }
            }


            );
            console.log("res daa ",res.data.ok)
            if(res.data.ok){
                setOk(true);
                console.log("returing outlet ")
                return <Outlet/>
            }else{
                setOk(false);
                return  <Navigate to="/login" replace={true} />
            }
        }
        if(auth?.token) authCheck();
    },[auth?.token]);
    console.log(ok);  
    
}

// export default function PrivateRoute () {
//     const { token } = useAuth();

//     console.log(token)
  
//     // Check if the user is authenticated
//     if (!token) {
//       // If not authenticated, redirect to the login page
//       return <Navigate to="/login" />;
//     }
//     // If authenticated, render the child routes
//     return <Outlet />;
// };