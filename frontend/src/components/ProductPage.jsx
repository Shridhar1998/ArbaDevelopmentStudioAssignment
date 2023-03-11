import React, { useEffect, useState } from "react";
import style from "../css/products.module.css";
import { ImPlus, ImMinus } from "react-icons/im";

function ProductPage({title}) {
  const [products, setProducts] = useState([]);

  function handleQuantity(id, val) {
    let arr = products?.map((e) => (e.id === id ? { ...e, quantity: val } : e));
    setProducts(arr);
  }

  function addtocart(id) {
    setProducts(products?.map((e) => (e.id == id ? { ...e, added: true } : e)));
  }

  useEffect(() => {
    try {
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((res) => {
          let arr = res.map((e) =>
            !e.quantity ? { ...e, quantity: 1, added: false } : e
          );
          setProducts(arr);
          console.table(arr);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h2 className={style.heading}>{title}</h2>
      <div className={style.products}>
        {products?.map((e, i) => (
          <div className={style.product} key={i}>
            <div className={style.prodimg}>
              <img src={e.image} alt="" />
            </div>
            <div className={style.prodinfo}>
              <h4 className={style.title}>{e?.title.slice(1, 15)}</h4>
              <p className={style.desc}>
                {e?.description.slice(0, 45).toLowerCase()}
              </p>
              <p className={style.price}> Rs. {e?.price}</p>
              {!e?.added ? (
                <div onClick={()=>addtocart(e?.id)} className={style.addtocart}>Add To Cart</div>
              ) : (
                <div className={style.quantity}>
                  <button
                    onClick={() => handleQuantity(e?.id, e?.quantity + 1)}
                  >
                    <ImPlus />
                  </button>
                  <span> {e?.quantity} </span>
                  <button
                    disabled={e?.quantity == 1}
                    onClick={() => handleQuantity(e?.id, e?.quantity - 1)}
                  >
                    <ImMinus />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
