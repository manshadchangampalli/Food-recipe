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
            <p className={activeClass===item  ? "actives":"pagenumberdefault"} onClick={()=>getPageNumber(item)} >{item}</p>
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
