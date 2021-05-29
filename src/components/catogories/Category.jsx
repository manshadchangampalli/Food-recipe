import React,{useState} from 'react'
import './Category.scss'

function Category(props) {
    const[category,setCategory] = useState("")

    function displayTheCategory(category){
       
        setCategory(category)
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
                {
                    props.allDishes.map((items)=>{
                        if(items.strCategory==category){
                            return(
                                <div className="category-card">
                                    <img src={items.strMealThumb} alt="" />
                                    <h4>{items.strMeal}</h4>
                                    <p>Category: <span>{items.strCategory}</span></p>
                                    
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>               
                           
    )
}

export default Category
