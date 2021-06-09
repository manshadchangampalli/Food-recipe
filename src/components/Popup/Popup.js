import React, { useState } from "react";
import "./Popup.css";
import Close from "../icons/Icons";

function Popup(props) {
  const [viewmore,setViewmore] =useState(false)
 



  let priceByOffer = props.price / 2;


  return (
    <div className="mainPopup">
      <div className="popup">
        <div className="priceTag">
          <p className="strikeprice">${props.price}</p>
          <p className="priceByOffer">${priceByOffer}</p>
        </div>
        <div onClick={() => props.setShowPopup(false)} className="close-icon">
          <Close />
        </div>
        <div className="addtocartbtn">
          <button>Add to Cart</button>
        </div>
        <div className="popup-div">
          <div className="popup-img">
            <div className="popup-title">
              <h1>{props.title.toUpperCase()}</h1>
            </div>
            <img src={props.img} alt="" />
          </div>
          <div
            style={{ background: "url(" + props.img + ")" }}
            className="popup-details"
          >
            <div className="for-blur">
              <div className="popupcontent">
                <li >Its an {props.area} Dish</li>
                <li>
                  {props.title} is one of {props.category} itmes
                </li>

                
                {props.desc?<p>{props.desc.length<400?props.desc : props.desc.slice(0,399)+" ..." }
                <span onClick={()=>setViewmore(true)} className="viewmore">{props.desc.length>600&& "view more"}</span></p>
              :null }</div>
            </div>
          </div>
        </div>
        {
        viewmore && <div style={{ background: "url(" + props.img + ")" }} className="viewmorediv">
          <div className="viewmoreconten">
            <h1>{props.title}</h1>
            <div className="descriptioninviewmore">
              <p>{props.desc}</p>
              </div>
            <button onClick={()=>setViewmore(false)} className="btn-back-fromViewMore">Back</button>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default Popup;
