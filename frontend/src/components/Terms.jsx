import React from "react";
import style from "../css/Terms.module.css";
import btn from "../css/Button.module.css";
export default function Terms({ setShow }) {
  return (
    <div className={style.termsdiv}>
      <div className={style.termsContainer}>
        <h3>TERMS AND CONDITION</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          maiores corrupti molestias error? Aliquid quibusdam itaque saepe iure
          officia, tempora debitis temporibus eum suscipit porro error tempore
          at obcaecati perspiciatis praesentium iste fugiat facere cupiditate
          soluta magnam sit alias incidunt. Similique sequi consequatur cum
          porro neque magni debitis vel tempora repudiandae? Esse voluptas vero
          iusto temporibus maiores corrupti assumenda voluptatum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          maiores corrupti molestias error? Aliquid quibusdam itaque saepe iure
          officia, tempora debitis temporibus eum suscipit porro error tempore
          at obcaecati perspiciatis praesentium iste fugiat vel tempora
          repudiandae? Esse voluptas vero iusto temporibus maiores corrupti
          assumenda voluptatum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          maiores corrupti molestias error? Aliquid quibusdam itaque saepe iure
          officia, tempora debitis temporibus eum suscipit porro error tempore
          at obcaecati perspiciatis praesentium iste fugiat facere cupiditate
          soluta magnam sit alias incidunt. Similique sequi consequatur cum
          porro neque magni ptatum!
        </p>
        <div className={style.termsbtns}>
          <div className={btn.btmbtn}>CANCEL</div>
          <div className={btn.btmbtn} onClick={() => setShow(false)}>
            ACCEPT
          </div>
        </div>
      </div>
    </div>
  );
}
