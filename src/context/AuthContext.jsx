import {useState,useEffect,useContext,createContext} from 'react';
import axios from 'axios';
import { data } from 'autoprefixer';

const Authcontext = createContext();

const AuthProvider=({children})=>{
    //  now by declaring this inside the auth provider we have made this state global
    const [auth, setAuth] = useState({
        user:null,
        token:""
    });

    // default axios
    // this will ensure that whatever request is made by default, that request will 
    // contain header
    axios.defaults.headers.common['Authorization']=auth?.token;

    useEffect(()=>{
        const data=localStorage.getItem('auth')
        if(data){
            const parseData=JSON.parse(data)
            // console.log("local storage",parseData);
            setAuth({
                ...auth,
                user:parseData.user,
                token:parseData.token,
            });
        }
        //eslint-disable-next-line
    },[]);
    return (
        <Authcontext.Provider value={[auth,setAuth]}>
            {children}
        </Authcontext.Provider>
    )
}

// making a custom hook
const useAuth = () => useContext(Authcontext)

export {useAuth,AuthProvider};