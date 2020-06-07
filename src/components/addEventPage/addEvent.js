import React, {useRef, useEfect, useEffect} from 'react';
import * as style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


export default function AddEvent(){
    const type = useRef();
    const name = useRef();
    const description = useRef();
    const startDate = useRef();
    const endDate = useRef();
    const city = useRef();

    const eventList = useSelector ( state =>  state.eventList);
    const addEvent = useDispatch();



    const history = useHistory()

    function save(){
        if(endDate.current.value === ''){
            endDate.current.value = startDate.current.value;
        }
        let event = {
            type:type.current.value,
            name:name.current.value,
            description:description.current.value,
            startDate: startDate.current.value,
            endDate: endDate.current.value,
            city: city.current.value.toLowerCase()
        };
        addEvent({type:'ADD_EVENT', event});
        history.push('/events')
    }

    return <div className={style.eventPage}>
        <h2>Add Event</h2>
        <div className={`grid grid-col ${style.addEvent}`}>
            <div>
                <strong>Event Type: </strong>
                <select ref={type}>
                <option value="government">Government</option>
                <option value="private">Private</option>
                <option value="children">Children</option>
                <option value="festival">Festival</option>
                <option value="meeting">Meeting</option>
            </select>
            </div>

            <div>
                <strong>Event Name:</strong> <input ref={name} type='text' placeholder="event name"/>
            </div>

            <div>
                <strong>Event Description: </strong>
                <textarea ref={description} placeholder="event description"/>
            </div>

            <div>
                <strong>Start Date: </strong>
                <input ref={startDate} type="date"  placeholder="Start Date" />
            </div>

            <div>
                <strong>End Date: </strong>
                <input ref={endDate} type="date"  placeholder="End Date" />
                <small>(Leave Blank in case of no one day event)</small>
            </div>

            <div>
                <strong>Event City: </strong>
                <input ref={city} type="text" placeholder="Add City" />
            </div>

            <div className={style.btns}>
                <button  onClick={save} className={style.btn}>Save</button>
            </div>
        </div>
    </div>
}