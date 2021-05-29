import React,{useState,useEffect} from 'react'
import Category from '../catogories/Category';
import Hero from '../Hero/Hero';
import SpecialDishes from '../specialDishes/SpecialDishes';
import './Menu.css'

function Menu(){
    const[menu,setMenu]=useState([])
    const[category,setCategory]=useState([])

    async function getAllDatas(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        let response= await fetch(API_URL)
        let data = await response.json()
        setMenu(data.meals)
    }

    async function getAllCategory(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/categories.php";
        let response= await fetch(API_URL)
        let categoryData = await response.json()
        setCategory(categoryData.categories)
    }


    useEffect(()=>{
        getAllDatas()
        getAllCategory()
    },[])
    return(
        <div className="menu_main_div">
           <Hero/>
           <SpecialDishes card_details={menu}/>
           <Category category={category} allDishes={menu}/>
        </div>
    )
}
export default Menu