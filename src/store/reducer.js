const initialState = {
    session : false,
    username : '',
    password : '',
    eventList: fetchEventsFromLocalStorage(),
}

function fetchEventsFromLocalStorage(){
    if(window){
        if(!window.localStorage.eventList || window.localStorage.eventList === '[]'){
            return [{"type":"government","name":"Holi","description":"Holi is here, and the nation is celebrating the festivities with fun and fervour. ","startDate":"2020-03-09","endDate":"2020-03-10","city":"delhi"},{"type":"government","name":"Rakhi","description":"On this day, sisters of all ages tie a talisman, or amulet, called the rakhi, around the wrists of their brothers, symbolically protecting them, receiving a gift in return","startDate":"2020-08-03","endDate":"2020-08-03","city":"bhopal"},{"type":"government","name":"Dusshera","description":"Dussehra celebrates the Hindu god Rama's victory over the demon king Ravana and the triumph of good over evil.","startDate":"2020-10-25","endDate":"2020-10-25","city":"ayodhya"},{"type":"government","name":"Diwali","description":"Diwali falls in either October or November each year, depending on the cycle of the moon. It's observed on the 15th day of Kartik, the holiest month in the Hindu lunar calendar.","startDate":"2020-11-14","endDate":"2020-11-14","city":"ayodhya"},{"type":"government","name":"Christmas","description":"Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration","startDate":"2020-12-25","endDate":"2020-12-25","city":"noida"},{"type":"government","name":"","description":"Eid al-Fitr, also called the \"Festival of Breaking the Fast\", is a religious holiday celebrated by Muslims","startDate":"2020-05-24","endDate":"2020-05-25","city":"delhi"}]
        }else{
            return JSON.parse(window.localStorage.eventList)
        }
    }
}

export function Reducer (state = initialState, action){
    switch (action.type){
        case 'SWITCH_SESSION': if(window){
            window.localStorage.session = action.session;
        }
        return Object.assign({},state, {session:action.session});

        case 'ADD_EVENT': let eventList = state.eventList;
            eventList.push(action.event)
            if(window){
                window.localStorage.setItem('eventList',JSON.stringify(eventList))
            }
            return Object.assign({},state,eventList);

        default: return state;
    }
}