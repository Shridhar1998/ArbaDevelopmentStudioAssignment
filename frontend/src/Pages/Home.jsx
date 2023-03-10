import React from "react";
import {Link} from "react-router-dom";

function Home() {
  return <div>home


    <Link to= "/login">login</Link>
    <Link to= "/signup">register</Link>
  </div>;
}

export default Home;
