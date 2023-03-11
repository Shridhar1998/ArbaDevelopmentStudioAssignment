import React from "react";
import style from "../css/coding.module.css";

function MyCartPage() {
  return (
    <div className={style.codediv}>
      <p className={style.head}>Code Challenge</p>
      <div className={style.question}>
        <p></p>
      </div>
      <p className={style.head}>Data Collection</p>
      <div className={style.dataCollection}>
        <div className={style.input}>
          <input type="text" />
          <button>Print Result</button>
          <p>
          Enter the values with comma(,) seperator eg: 1,3,6,4,1,2

          </p>
        </div>
      
      </div>
      <p className={style.head}>Output</p>
      <div className={style.input}>
        <button>5</button>
      </div>
    </div>
  );
}

export default MyCartPage;
