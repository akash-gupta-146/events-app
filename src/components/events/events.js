import React, { useEffect, useState, useReducer, useRef } from 'react';
import * as style from './style.module.scss';
import AddEventBtn from '../addEventBtn/addEventBtn';
import { useSelector } from 'react-redux';

export default function Events(){

    let eventList = useSelector( state => state.eventList);
    const [cities,setCities] = useState();
    const [archive, setArchive] = useState(false)

    const city = useRef()

    const [activeCity, setActiveCity] = useState('all')
    let [filteredEventList, setList] = useState(eventList);


    useEffect ( _=>{


        // Fetching cites from events
        let cityList = []
        eventList.forEach( event => {
            if(cityList.indexOf(event.city) === -1){
                cityList.push(event.city)
            }
        })
        setCities(cityList)

        // sorting events
        function compare(a, b) {
            const startA = a.startDate;
            const startB = b.startDate;
            let comparison = 0;
            if (startA > startB) {
              comparison = 1;
            } else if (startA < startB) {
              comparison = -1;
            }
            return comparison;
          }
          filteredEventList = eventList
          let list = [...filteredEventList.sort(compare)]
          const currentDate = new Date();
          if(!archive)
            list = list.filter( (event) => new Date(event.startDate) >= currentDate  )
          if(archive)
            list = list.filter( (event) => new Date(event.startDate) < currentDate  )

        

          // Filtering events by city
          if(activeCity != 'all')
            list = list.filter( event => event.city == activeCity)

          // Seting finally rendering events
          setList(list)
    },[eventList,activeCity,archive])

    return <div>
        <AddEventBtn />
        {
            eventList &&
            <div className={`${style.filter} grid align-center justify-between`}>
                <div>
            <button className={`${style.btn} ${archive ? '':style.active}`} onClick={()=>setArchive(false)}>Up comming</button>
            <button className={`${style.btn} ${archive ? style.active : ''}`} onClick={()=>setArchive(true)}> Archive</button>
            </div>
            <select value={city.current?.value} ref={city} onChange={_=>{setActiveCity(city.current.value)}}>
                <option className={style.option} value="all">All</option>
                {
                    cities && 
                    cities.map((city,i)=>{
                    return <option className={style.option} value={city}> {city } </option>
                    })
                }
                {
                    !cities && 
                    <option className={style.option} value="no city">No City </option>
                }
            </select>
        </div>
        }
        {
            eventList &&
            <div className={`grid justify-evenly grid-wrap`}>{
                filteredEventList && 
                filteredEventList.map( (event,i) => {
                    return <div className={style.event} key={`event${i}`}>
                        <div className={style.header}> {event.type} </div>
                        <div className={style.name}><strong>{ event.name }</strong></div>
                        <div className={style.description}>{ event.description }</div>
                        <div className={style.date}>
                            <div>Start : { event.startDate} </div>
                            { event.endDate && <div>End : { event.endDate} </div>}
                        </div>
                        <div className={style.city}>City: { event.city }</div>
                    </div>
                })   
            }
            {
                filteredEventList.length === 0 && <div className={style.notFound}>No Relative Event Found!</div>
            }
            </div>
        }
    </div>
}