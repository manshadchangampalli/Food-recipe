import React, { useState } from "react";
import NotFound from "../NotFound/NotFound";
import Pagination from "../Pagination/Pagination";
import "./Category.scss";

function Category(props) {
  const [allMenus, setAllMenus] = useState(props.allDishes);
  const [filter, setFilter] = useState([]);
  const [forClass, setForClass] = useState("Beef");
  const [noOfItems,setNumberOfItems] = useState(4);
  const [pageNumber,setPageNumber] = useState(1)


// for pagination

let lastIndex =  pageNumber * noOfItems;

// 1*4=4
// 2*4=8

let firstIndex = lastIndex - noOfItems;
// 4-4=0
// 8-4=4
// 12-4=8
let showTheseItmes = filter.slice(firstIndex,lastIndex)



  function displayTheCategory(category) {
    props.setBeef([]);
    setForClass(category);
    let filteredDish = allMenus
      .filter((items) => {
        return items.strCategory === category;
      })
      .map((item) => {
        return (
          <div className="category-card">
            <img src={item.strMealThumb} alt="" />
            <h4>{item.strMeal}</h4>
            <p>
              Category: <span> {item.strCategory}</span>
            </p>
          </div>
        );
      });
    setFilter(filteredDish);
  }

  let allCategory = props.category.map((items) => {
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
      <div className="allCategories">
        <ul>{allCategory}</ul>
      </div>
      <div className="show-category">
        {props.beefDishes &&
          props.beefDishes.map((items) => {
            return (
              <div className="category-card">
                <img src={items.strMealThumb} alt="" />
                <h4>{items.strMeal}</h4>
                <p>
                  Category: <span> Beef</span>
                </p>
              </div>
            );
          })}

        {filter.length != 0 ? showTheseItmes  : props.beefDishes == 0 && <NotFound />}
      </div>
      <div>
        <Pagination filter={filter} pagenumber={setPageNumber} page={pageNumber} />
      </div>
    </div>
  );
}

export default Category;
