import React, { useEffect, useState, useRef } from 'react';
import * as style from './style.module.scss'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Profile(){

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState();
    const [change, setChange] = useState(false)

    let pass = useRef()

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(()=>{
        if(window){
            setPassword(window.localStorage.password);
            setEmail(window.localStorage.email);
        }

    },[])

    function logout(){
        dispatch({type:'SWITCH_SESSION',session:false})
        history.push('/')
    }

    function savePassword(){
        if(pass.current.value !== ''){
            if(window){
                window.localStorage.password = pass.current.value;
            }
            setChange(false)
        }

    }

    return <div className={`grid grid-col small-cont`}>
        <div className={style.email}>
            Eamil ID: { email }
        </div>
    {
       !change &&  <div className={style.pass}>Password: ***********</div>
    }
    {
       change &&  <div className={style.pass}> Password: <input ref={pass} type="password" placeholder="add new password"/> </div>
    }

    <div className={`grid`}>
    <button className={`${style.btn} ${change ? '':style.active}`} onClick={()=>setChange(true)}>Change Password</button>
        <button className={`${style.btn} ${change ? style.active:''}`} onClick={savePassword}>Save</button>
        <button className={`${style.btn} ${style.active}`} onClick={logout}>Log out</button>
    </div>



    </div>
}