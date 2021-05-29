import './SpecialDishes.scss'

function SpecialDishes (props){
    let maxNumberOfSpecial=8;
    return(
        <div className="specialdishes">
            <div className="container-special-recipe">
                <div className="special-recipe-heading">
                    <h1>Special Recipes</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat architecto quia unde maxime alias sapiente ut quaerat. Ipsa, mollitia suscipit. Nostrum autem architecto aut animi rerum velit error iure.</p>
                </div>
                <div className="Special-card">
                {
                    props.card_details.map((items,index)=>{
                        if(maxNumberOfSpecial>index){
                            
                            return(

                                <div className="recipe-card">
                                <img src={items.strMealThumb} alt="" />                          
                                <div className="card-content">
                                <h3>{items.strMeal}</h3>
                                <h5>Category:{items.strCategory}</h5>
                                <p>{items.strTags}</p>
                                </div>
                                </div>
    
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