import React, {useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import { useSelector} from 'react-redux';

function App() {

  const session = useSelector ( state => state.session )

  useEffect(()=>{
    if(window){
      window.localStorage.setItem('email','events@tfus.com');
      window.localStorage.setItem('password','123456');
      window.localStorage.setItem('session','false')
    }

  },[])

  useEffect( ()=> {
  },[session])

  return (
    <div className="App">
      {
        
      }
      <Login/>
    </div>
  );
}

export default App;
