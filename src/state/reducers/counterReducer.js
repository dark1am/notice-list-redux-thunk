import { SET_NOTICE, SET_READ_NOTICE } from "../types/types"

const initialState = {
    notices : []
}

const counterReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_NOTICE:
            return {
                notices: action.payload
            } 
        case SET_READ_NOTICE:
            console.log('JAJAJ');
            let notices = [...state.notices]
            notices.find(notice => notice.id === action.payload).seen = true
            return {notices}
        default:
            return state
    }
}

export default counterReducer