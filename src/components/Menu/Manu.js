import React,{useState,useEffect} from 'react'
import './Menu.css'

function Menu(){
    useEffect(async()=>{
        const API_URL="www.themealdb.com/api/json/v1/1/search.php?f=a";
        let response= await fetch(API_URL)
        let data = await response.json()
    },[])
    return(
        <div>
            <h1>hello</h1>
        </div>
    )
}
export default Menu