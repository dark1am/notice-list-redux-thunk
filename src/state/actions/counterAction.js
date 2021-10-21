import { getData } from "../api/api"
import { SET_NOTICE, SET_READ_NOTICE } from "../types/types"

const setNoticeAction = (payload)=>{
    return {
        type:SET_NOTICE,
        payload
    }
}
const setReadNoticeAction = (payload)=>{
    console.log('TODO BIEN');
    return {
        type:SET_READ_NOTICE,
        payload
    }
}

export const actionGetNotices = () => async dispatch => {
    try{
        let {data} = await getData()
        dispatch(setNoticeAction(data))
    }
    catch(err){
        console.log(err);
    }
}

export const actionSetNotices = (id) => async dispatch => {
    try{
        /* let {data} = await getData() */
        console.log('HOLA');
        dispatch(setReadNoticeAction(id))
    }
    catch(err){
        console.log(err);
    }
}