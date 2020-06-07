import React, {useRef } from 'react'
import * as style from './style.module.scss';
import { useDispatch } from 'react-redux';


export default function Login (){

    const email = useRef();
    const pass = useRef();
    const setSession = useDispatch();


    
    function login(){
        if(window){
            if(email.current.value === window.localStorage.email && pass.current.value === window.localStorage.password){
                setSession({type:'SWITCH_SESSION',session:true})
            }else{
                setSession({type:'SWITCH_SESSION',session:false})
            }
        }
    }
    return (
        <div className={`${style.login}`}>
            <div classNmae={style.loginCard}>
                <h3 className={style.loginText}>Login</h3>
                <input type="email" ref={email} placeholder="add email id" />
                <input type="password" ref={pass} placeholder="add password" />
                <div className={style.note}>(Default : events@tfus.com / 123456)</div>
                <button className={style.btn} onClick={login}>Login</button>
            </div>
        </div>
    )

}