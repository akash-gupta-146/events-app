import React, {useEffect} from 'react';
import './App.scss';
import Login from './login/login';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/header/header';
import { BrowserRouter, Route } from 'react-router-dom';
import Events from './components/events/events';
import AddEvent from './components/addEventPage/addEvent';
import Profile from './components/profile/profile';

function App() {

  const session = useSelector ( state => state.session )
  const setSession = useDispatch();

  useEffect(()=>{
    if(window){
      if(!window.localStorage.email)
        window.localStorage.setItem('email','events@tfus.com');
      if(!window.localStorage.password)
        window.localStorage.setItem('password','123456');
      if(!window.localStorage.eventList)
        window.localStorage.setItem('eventList','[]');
    }

  },[])

  useEffect( ()=> {
    if(window){
      if(window.localStorage.session === 'true'){
        setSession({type:'SWITCH_SESSION',session:true})
      }
    }
  },[session])

  return (
    <div className="App">
      {
        session && <div>
          <BrowserRouter>
          <Header />
            <Route exact path='/' component={Events}/>
            <Route exact path='/events' component={Events} />
            <Route exact path='/add-event' component={AddEvent} />
            <Route excat path='/profile' component={Profile} />
          </BrowserRouter>
        </div>
      }
      {
        !session && <Login />
      }
    </div>
  );
}

export default App;
