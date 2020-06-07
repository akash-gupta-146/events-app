import React from 'react'
import * as style from './style.module.scss';
import { Link } from 'react-router-dom'

export default function Header(){


    return <div className={`grid justify-between align-center ${style.header}`}>
        <Link to="/"><div className={style.profileBtn}>Home</div></Link>
        <Link to="/profile">
            <div className={style.profileBtn}>
                Account
            </div>
        </Link>
    </div>
}