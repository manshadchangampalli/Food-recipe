import React,{useState} from 'react'
import './Category.scss'

function Category(props) {
    const[allMenus,setAllMenus]=useState(props.allDishes)
    const[filter,setFilter]=useState([])
    

    function displayTheCategory(category){
        
        let filteredDish = allMenus.filter((items)=>{
            return items.strCategory===category
        }).map((item)=>{
            return(
                <div className="category-card">
                    <img src={item.strMealThumb} alt="" />
                    <h4>{item.strMeal}</h4>
                    <p>Category: <span> {item.strCategory}</span></p>
                                    
                  </div>
            )
        })
        setFilter(filteredDish)
     
    }

    
    let allCategory =props.category.map((items)=>{
        return(
            <li onClick={()=>displayTheCategory(items.strCategory)}>{items.strCategory}</li>
        )
    })
   let maxNumberOfSpecial=8
    return (
        <div className="category">
            <div className="category-recipe-heading">
                    <h1>The All Categories</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat architecto quia unde maxime alias sapiente ut quaerat. Ipsa, mollitia suscipit. Nostrum autem architecto aut animi rerum velit error iure.</p>
             </div>
            <div className="allCategories">
                <ul>
                    {allCategory}
                </ul>
            </div>
            <div className="show-category">
               {filter}
            </div>
        </div>               
                           
    )
}

export default Category
