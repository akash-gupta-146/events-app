const initialState = {
    session : false,
    username : '',
    password : '',
}


export function Reducer (state = initialState, action){
    switch (action.type){
        case 'SWITCH_SESSION': if(window){
            window.localStorage.session = action.session;
        }
        console.log('i am here')
        return Object.assign({},state, {session:action.session});

        default: return state;
    }
}