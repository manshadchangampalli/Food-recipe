import React, { useState, useEffect } from "react";
import Category from "../catogories/Category";
import Hero from "../Hero/Hero";
import Popup from "../Popup/Popup";
import SpecialDishes from "../specialDishes/SpecialDishes";
import "./Menu.css";
import Context from "../Context";

function Menu() {
  const [category, setCategory] = useState([]);
  const [beef, setBeef] = useState();

  async function getAllCategory() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

    let response = await fetch(API_URL);
    let categoryData = await response.json();
    setCategory(categoryData.categories);
  }

  async function getBeefCategory() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    let response = await fetch(API_URL);
    let beefData = await response.json();
    setBeef(beefData.meals);
  }

  useEffect(() => {
    getAllCategory();
    getBeefCategory();
  }, []);
  return (
    <div className="menu_main_div">
    <Context>
      <Hero />
        <SpecialDishes />
        <Category beefDishes={beef} setBeef={setBeef} category={category} />
      </Context>
    </div>
  );
}
export default Menu;
