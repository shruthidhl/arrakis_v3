import http from './axios.common';


export function getAllBonds(){
    return http.get("/securities");
}

export function findBooks(map){
    return http.post("/books/mybooks", map);
}

export function findBookTrades(map){
    return http.post("/securities/mybonds", map);
}