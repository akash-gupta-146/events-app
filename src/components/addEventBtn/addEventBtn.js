
import React from 'react';
import * as style from './style.module.scss';
import { Link } from 'react-router-dom';

export default function AddEventBtn(){

    return <Link to="/add-event"><button className={style.btn}> + </button></Link>
}