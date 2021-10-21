import axios from "axios"

const URL_TO_BE_FETCH = 'https://616fecf823781c0017289721.mockapi.io/content'

export function getData(){
    return axios(URL_TO_BE_FETCH)
}