import React, {useRef} from 'react'
import * as style from './style.module.scss';
import { useDispatch } from 'react-redux';


export default function Login (){

    const email = useRef();
    const pass = useRef();
    const setSession = useDispatch();
    
    function login(){
        console.log(email.current.value,pass.current.value )
        if(window){
            if(email.current.value === window.localStorage.email && pass.current.value === window.localStorage.password){
                setSession({type:'SWITCH_SESSION',session:true})
            }else{
                setSession({type:'SWITCH_SESSION',session:false})
            }
        }
    }
    return (
        <div className={style.login}>
            <div classNmae={style.loginCard}>
                <div className={style.loginText}>Login</div>
                <input type="email" ref={email} placeholder="add email id" />
                <input type="password" ref={pass} placeholder="add password" />
                <button className={style.loginBtn} onClick={login}>Login</button>
            </div>
        </div>
    )

}