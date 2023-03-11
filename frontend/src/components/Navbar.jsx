import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  function navigateTo(route) {
    if (route == "/logout") {
      alert("logged out");
    } else {
      navigate(route);
    }
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.leftnav}>
        <button>Logo</button>
      </div>
      <div className={styles.rightnav}>
        <div className={styles.cartdiv} onClick={()=>navigate("/cart")}>
          <FaShoppingCart fontSize={"1.5em"} className={styles.carticon} />
          <span>10</span>
        </div>
        <div className={styles.profile}>
          <img
            onClick={() => navigate("/profile")}
            src="https://tse2.mm.bing.net/th?id=OIP.Gfp0lwE6h7139625a-r3aAHaHa&pid=Api&P=0"
            alt=""
          />

          <select name="" id="" onChange={(e) => navigateTo(e.target.value)}>
            <option value="/logout">logout</option>
            <option value="/login">login</option>

            <option value="/profile">Profile </option>
            <option value="/code">code challenge</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
