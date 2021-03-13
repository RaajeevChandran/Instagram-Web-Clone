import React from "react";
import "../Home/home.css";
import header from "./Feed/header"
import Feed from "./Feed/feed"
import infocontainer from "./Feed/infocontainer";
const Home = () => {
  
  return (
    <div>
      {header()}  

      <div className="main">
        <Feed/>
        <div className="infoc">
          {infocontainer()}
        </div>
      </div>
    </div>
  );
};

export default Home;
