import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/signup.module.css";
function Signup() {
    const navigate =useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.topcircle}></div>
        <div className={styles.btmcircle}>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={(styles.child, styles.right)}>
        <div className={styles.formdiv}>
          <div className={styles.round}></div>
          <h2>APP NAME</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. ?</p>
          <form action="">
            <input placeholder="Username" />

            <input placeholder="Fullname" />
            <input placeholder="Email" />
            <input placeholder="Password" />
            <input placeholder="Confirm Password" />

            <br />
            <button type="submit" className={styles.submitbtn}
            onClick={()=>{navigate("/login")}}
            >
              Register
            </button>
          </form>
          <div className={styles.note}>
            <h5>
              Already have an account? <span onClick={()=>{navigate("/login")}}>Login</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
