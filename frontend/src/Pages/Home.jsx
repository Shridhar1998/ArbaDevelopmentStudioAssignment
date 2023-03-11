import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { arr } from "../images/images";
import style from "../css/home.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Home() {
  const [i, setI] = useState(0);
  const [products, setProducts] = useState([]);

  const handleLeft = () => {
    if (i == 0) {
      setI(arr.length - 1);
    } else {
      setI(i - 1);
    }
  };
  const handleRight = () => {
    if (i == arr.length - 1) {
      setI(0);
    } else {
      setI((p) => p + 1);
    }
  };
  // console.log(arr);
  useEffect(() => {
    try {
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((res) => {
          setProducts(res);
          console.table(res);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={style.container}>
      <div className={style.slider}>
        <div className={style.mainarrows}>
          <div className={style.leftarw} onClick={handleLeft}>
            <FaAngleLeft />
          </div>
          <div className={style.rightarw} onClick={handleRight}>
            <FaAngleRight />
          </div>
        </div>
        <img src={arr[i]} alt={arr[i] + "image"} />
        <div className={style.arraydiv}>
          <div className={style.arrayinnerdiv}>
            {arr?.map((e, ind) =>
              ind == i ? (
                <img className={style.thumbimg} src={e} alt={ind} />
              ) : (
                <div className={style.thumbdiv}></div>
              )
            )}
          </div>
        </div>
      </div>
      {/* products */}
      <br />
      <h3 className={style.heading}>Products</h3>
      <div className={style.products}>
        {products?.map((e) => (
          <div className={style.product}>
            <div className={style.prodimg}>
              <img src={e.image} alt="" />
            </div>
            <div className={style.prodinfo}>
              <h4 className={style.title}>{e?.title.slice(1, 15)}</h4>
              <p className={style.desc}>{e?.description.slice(0, 45).toLowerCase()}</p>
              <p className={style.price}> Rs. {e?.price}</p>
              <div className={style.addtocart}>Add To Cart</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
