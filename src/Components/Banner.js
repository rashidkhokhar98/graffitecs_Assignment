import React from "react";
import Images from "../Images/index";
import '../App.css';

export default function Banner(props) {
  const value = props.number;
  return (
    <div>
      {value <= 0 ? (
        <h4>*Number must be 1 or greater than 1.</h4>
      ) : value > 9999 ? (
        <h4> *enter a natural number N, where N ≤ 9999</h4>
      ) : Images[value] ? (
          <div>
              <div style={{marginTop:"20px"}}>
        <img src={Images[value]} alt="one" width="60" height="60" />
        </div>
        <a className="button" href={Images[value]} download="image">Download</a>
      
        </div>
      ) : (
        <h4>*image representation of this number does not exist</h4>
      )}
    </div>
  );
}
