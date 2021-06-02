import React from 'react'
import './Pagination.css'


function Pagination(props) {
    let byFour= props.filter.length/4
   
    let ceil = Math.ceil(byFour)
    
    let numberOfPages=[]

    for(let i=1; i<= ceil;i++){
        numberOfPages.push(i)
    }

    let pages = numberOfPages.map((item)=>{
        return(
            <p className="pagenumber">{item}</p>
        )
    })
    console.log(numberOfPages)
    return (
        <div className="pagination">
            {pages}
        </div>
    )
}

export default Pagination
