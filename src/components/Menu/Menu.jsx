import React, { useState, useEffect } from "react";
import Category from "../catogories/Category";
import Hero from "../Hero/Hero";
import Popup from "../Popup/Popup";
import SpecialDishes from "../specialDishes/SpecialDishes";
import "./Menu.css";
import Context from "../Context";

function Menu() {
 
  return (
    <div className="menu_main_div">
    <Context>
      <Hero />
        <SpecialDishes />
        <Category  />
      </Context>
    </div>
  );
}
export default Menu;
// beefDishes={beef} setBeef={setBeef} category={category}