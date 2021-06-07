import { useState } from 'react';
import Popup from '../Popup/Popup';
import './SpecialDishes.scss'

function SpecialDishes (props){
    const[showPopup,setShowPopup ]=useState(false)
    let maxNumberOfSpecial=8;
    function showPopupHandler(){
        setShowPopup(true)
    }
    return(
        <div className="specialdishes">
            
            <div className="container-special-recipe">
                <div className="special-recipe-heading">
                    <h1>Special Recipes</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat architecto quia unde maxime alias sapiente ut quaerat. Ipsa, mollitia suscipit. Nostrum autem architecto aut animi rerum velit error iure.</p>
                </div>
                {showPopup && <Popup/>}
                <div className="Special-card">
                {

                    props.card_details.map((items,index)=>{
                        if(maxNumberOfSpecial>index){
                            
                            return(
                                <a href="javascript:;" onClick={showPopupHandler}>
                                <div className="recipe-card">
                                <img src={items.strMealThumb} alt="" />                          
                                <div className="card-content">
                                <h3>{items.strMeal}</h3>
                                <h5>Category:{items.strCategory}</h5>
                                <p>{items.strTags}</p>
                                </div>
                                </div>
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