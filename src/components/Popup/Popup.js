import React from "react";
import "./Popup.css";
import Close from "../icons/Icons"

function Popup(props) {

  return (
    <div className="mainPopup">
      <div className="popup">
        <div onClick={()=>props.setShowPopup(false)} className="close-icon">
         <Close/>
        </div>
        <div className="popup-div">
          <div className="popup-img">
            <img src={props.img} alt="" />
          </div>
          <div style={{background:"url("+ props.img +")"}} className="popup-details">
            <div className="for-blur">
              <h1 className="popup-title">{props.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
