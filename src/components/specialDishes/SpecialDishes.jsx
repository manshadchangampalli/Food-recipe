import { useState } from 'react';
import Card from '../Card/Card';
import Popup from '../Popup/Popup';
import './SpecialDishes.scss'


function SpecialDishes (props){ 
    const[popupDetailsState,setPopupDetailsState]=useState({})
    const[showPopup,setShowPopup ]=useState(false)
    let maxNumberOfSpecial=8;
    function showPopupHandler(img,title,category,area,id,description){
        setShowPopup(true)
         let price=id/100
        console.log(price);
        setPopupDetailsState( {img:img,title:title,category:category,area:area,price:price,desc:description} )
        
    }
    return(
        <div className="specialdishes">
            
            <div className="container-special-recipe">
                <div className="special-recipe-heading">
                    <h1>Special Recipes</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat architecto quia unde maxime alias sapiente ut quaerat. Ipsa, mollitia suscipit. Nostrum autem architecto aut animi rerum velit error iure.</p>
                </div>
                
                {showPopup && <Popup  setShowPopup={setShowPopup} {...popupDetailsState} />}
            
                <div className="Special-card">
                {

                    props.card_details.map((items,index)=>{
                        if(maxNumberOfSpecial>index){
                            console.log(items.strInstructions, items.strIngredient1);
                            return(
                                <a href="javascript:;"
                                 onClick={()=>
                                 showPopupHandler(items.strMealThumb,items.strMeal,items.strCategory,items.strArea,items.idMeal,items.strInstructions)}>
                               <Card strMealThumb={items.strMealThumb} strMeal={items.strMeal} />
                                </a>
                            )
                        }
                        
                    })
                }
               </div>
            </div>
        </div>
    )
}

export default SpecialDishes