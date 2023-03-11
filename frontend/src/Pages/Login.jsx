import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/signup.module.css";
function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault()
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_"
      }),
    })
      .then((res) => res.json())
      .then((json) => {alert("login Successfull")
    navigate("/")
    });
  }

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

            <input placeholder="Password" />
            <br />
            <button type="submit" 
            onClick={(e)=>handleLogin(e)}
            className={styles.submitbtn}>
              Login
            </button>
          </form>
          <div className={styles.note}>
            <h5>
              Don't have an account?{" "}
              <span
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Signup
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
