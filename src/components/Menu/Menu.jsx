import React,{useState,useEffect} from 'react'
import Category from '../catogories/Category';
import Hero from '../Hero/Hero';
import Loading from '../loading/Loading';
import SpecialDishes from '../specialDishes/SpecialDishes';
import './Menu.css'


function Menu(){
    const[menu,setMenu]=useState([])
    const[category,setCategory]=useState([])
    const[beef,setBeef]=useState()
    const[loading,setLoading]=useState(false)


    async function getAllDatas(){
        setLoading(true)
        const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        let response= await fetch(API_URL)
        let data = await response.json()
        setMenu(data.meals)
        setLoading(false)
    }

    async function getAllCategory(){
        
        const API_URL="https://www.themealdb.com/api/json/v1/1/categories.php";
        let response= await fetch(API_URL)
        let categoryData = await response.json()
        setCategory(categoryData.categories)
        
    }

    async function getBeefCategory(){
        setLoading(true)
        const API_URL="https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
        let response= await fetch(API_URL)
        let beefData = await response.json()
        setBeef(beefData.meals)
        setLoading(false)
    }
  

    useEffect(()=>{
        getAllDatas()
        getAllCategory()
        getBeefCategory()
    },[])
    return(
        <div className="menu_main_div">
           
           {!loading?<Hero/> :<Loading/> }
           {!loading?<SpecialDishes card_details={menu}/> :null }
           {!loading?<Category beefDishes={beef} category={category} allDishes={menu}/>:null}
           
           
        </div>
    )
}
export default Menu