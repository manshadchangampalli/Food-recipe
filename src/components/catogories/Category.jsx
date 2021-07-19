import React, { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import NotFound from "../NotFound/NotFound";
import Pagination from "../Pagination/Pagination";
import Popup from "../Popup/Popup";
import "./Category.scss";
import {AllMenuContext} from "../Context"


function Category() {
  const MenusContext = useContext(AllMenuContext)
  const [allMenus, setAllMenus] = useState(MenusContext);
  const [popupDetailsState, setPopupDetailsState] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [filter, setFilter] = useState([]);
  const [forClass, setForClass] = useState("Beef");
  const [noOfItems, setNumberOfItems] = useState(4);
  const [pageNumber, setPageNumber] = useState(1);
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



  
  // for pagination

  let lastIndex = pageNumber * noOfItems;

  // 1*4=4
  // 2*4=8

  let firstIndex = lastIndex - noOfItems;
  // 4-4=0
  // 8-4=4
  // 12-4=8
  let showTheseItmes = filter.slice(firstIndex, lastIndex);

  let descriptions="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla incidunt corrupti quasi rerum dolorum voluptatibus pariatur dolore, delectus quo earum amet eveniet adipisci rem nam atque exercitationem sint dicta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla incidunt corrupti quasi rerum dolorum voluptatibus pariatur dolore, delectus quo earum amet eveniet adipisci rem nam atque exercitationem sint dicta."
     function showPopupHandler(img, title, category, area, id,description) {
     setShowPopup(true);
    let price = id / 100;
    let desc=null
    // {description=null || !description?  desc=description:desc=descriptions}
    setPopupDetailsState({
      img: img,
      title: title,
      category: category,
      area: area,
      price: price,
      desc:desc
    });
  }

  function displayTheCategory(category) {
    setBeef([]);
    setForClass(category);
    let filteredDish = allMenus
      .filter((items) => {
        return items.strCategory === category;
      })
      .map((items) => {
        return (
          <a
            onClick={() =>
              showPopupHandler(
                items.strMealThumb,
                items.strMeal,
                items.strCategory,
                items.strArea,
                items.idMeal,
                items.strInstructions
               
              )
            }
            href="javascript:;"
          >
            <Card
              strMealThumb={items.strMealThumb}
              strMeal={items.strMeal}
              strMealThumb={items.strMealThumb}
              strMeal={items.strMeal}
              showPopupHandler={showPopupHandler}
            />
          </a>
        );
      });
    setFilter(filteredDish);
  }

  let allCategory =category.map((items) => { 
    return (
      <li
        className={items.strCategory === forClass ? "active" : null}
        onClick={() => displayTheCategory(items.strCategory)}
      >
        {items.strCategory}{" "}
      </li>
    );
  });

  let maxNumberOfSpecial = 8;

  return (
    <div className="category">
      <div className="category-recipe-heading">
        <h1>The All Categories</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat
          architecto quia unde maxime alias sapiente ut quaerat. Ipsa, mollitia
          suscipit. Nostrum autem architecto aut animi rerum velit error iure.
        </p>
      </div>
      {showPopup && (
        <Popup setShowPopup={setShowPopup} {...popupDetailsState} />
      )}
      <div className="allCategories">
        <ul>{allCategory}</ul>
      </div>
      <div className="show-category">
        {beef &&
          beef.map((items, index) => {
            if (index < 8) {
              return (
                <a
                  onClick={() =>
                    showPopupHandler(
                      items.strMealThumb,
                      items.strMeal,
                      items.strCategory,
                      items.strArea,
                      items.idMeal,
                      items.strInstructions
                    
                    )
                  }
                  href="javascript:;"
                >
                  <Card
                    strMealThumb={items.strMealThumb}
                    strMeal={items.strMeal}
                    strMealThumb={items.strMealThumb}
                    strMeal={items.strMeal}
                  />
                </a>
              );
            }
          })}

        {filter.length != 0
          ? showTheseItmes
          : beef == 0 && <NotFound />}
      </div>
      <div>
        <Pagination
          filter={filter}
          pagenumber={setPageNumber}
          page={pageNumber}
        />
      </div>
    </div>
  );
}

export default Category;
