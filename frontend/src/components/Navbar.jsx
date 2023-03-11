import React from "react";
import styles from "../css/navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftnav}>
        <button>Logo</button>
      </div>
      <div className={styles.rightnav}>
        <div className={styles.cartdiv}>
          <FaShoppingCart fontSize={"1.5em"} className={styles.carticon} />
          <span>10</span>
        </div>
        <div className={styles.profile}>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.Gfp0lwE6h7139625a-r3aAHaHa&pid=Api&P=0"
            alt=""
          />
          <select name="" id="">
            <option value="">logout</option>
            <option value="">Profile</option>
            <option value="">code challenge</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
