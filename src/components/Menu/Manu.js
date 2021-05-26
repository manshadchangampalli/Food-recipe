import React,{useState,useEffect} from 'react'
import './Menu.css'

function Menu(){
    const[menu,setMenu]=useState([])

    async function getAllDatas(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=a";
        let response= await fetch(API_URL)
        let data = await response.json()
        console.log(data.meals);
        setMenu(data.meals)
    }



        let items=menu.map((items)=>{
            return(
                <img src={items.strMealThumb} alt="" />
            )
        })
    


    useEffect(()=>{
        getAllDatas()
    },[])
    return(
        <div className="menu_main_div">
            {items}
        </div>
    )
}
export default Menu