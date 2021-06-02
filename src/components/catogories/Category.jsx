import React,{useState} from 'react'
import './Category.scss'

function Category(props) {
    console.log(props.beefDishes);
    console.log(props.category,"category")
    const[allMenus,setAllMenus]=useState(props.allDishes)
    const[filter,setFilter]=useState([])
    const[forClass,setForClass]=useState('')

    
  
    

    function displayTheCategory(category){
        setForClass(category)
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

    
    
    let allCategory = props.category.map((items)=>{
        return(
            <li className={items.strCategory===forClass?"active":null} onClick={()=>displayTheCategory(items.strCategory)}>{items.strCategory} </li>

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
            props.beefDishes && props.beefDishes.map(items=>{
                return(
                    <div className="category-card">
                        <img src={items.strMealThumb} alt="" />
                        <h4>{items.strMeal}</h4>
                        <p>Category: <span> Beef</span></p>
                             
                    </div>
                )
            })
        
        }

            {filter.length!=0 ? filter:null}        
            </div>
        </div>               
                           
    )
}

export default Category
