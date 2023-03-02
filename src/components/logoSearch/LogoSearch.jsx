import React from "react";
import logo from "../../img/RGPVLOGO.jpeg";
import { UilSearch } from "@iconscout/react-unicons";
import "./LogoSearch.css";

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={logo} alt="" width={"15%"} />
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
