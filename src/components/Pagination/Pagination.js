import React,{useState} from 'react'
import './Pagination.css'


function Pagination(props) {
    const [activeClass,setActiveClass] = useState(1)
    let byFour= props.filter.length/4
   
    let ceil = Math.ceil(byFour)
    
    let numberOfPages=[]

    for(let i=1; i<= ceil;i++){
        numberOfPages.push(i)
    }

    function getPageNumber(number){
        console.log(number , "this is the number");
        props.pagenumber(number)
        setActiveClass(number )
    }


    let pages = numberOfPages.map((item)=>{
        return(
            <div className={activeClass===item  ? "actives-page-count":"page-count"}onClick={()=>getPageNumber(item)}>
            <p className="pagenumberdefault" >{item}</p>
            </div>
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
