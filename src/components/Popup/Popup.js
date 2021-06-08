import React from "react";
import "./Popup.css";
import Close from "../icons/Icons";

function Popup(props) {




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
                <p>{props.desc.length<500?props.desc : props.desc.slice(0,499)+" ..." }<span className="viewmore">{props.desc.length>600&& "view more"}</span></p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
