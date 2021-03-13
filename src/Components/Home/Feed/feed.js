import React from "react";
import "../home.css";

import Stories from "../Story/story"
import FeedCardsData from "./feedCardsData";
export default function Feed() {
  return (
      <div className="flc feed" >
        
        <Stories/>
        <FeedCardsData/>
      </div>
    );
  
}
