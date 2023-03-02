import React from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { UilUserCircle } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";
import FollowersCard from "../FollowersCard/FollowersCard";
import TrendCard from "../TrendCard/TrendCard";

const RightSide = () => {
  const ProfilePage = false;
  const navigate = useNavigate();
  return (
    <div className="RightSide">
      <div className="navIcons">
        <div
          onClick={() => {
            navigate("/home");
          }}
        >
          <img src={Home} alt="" />
        </div>
        <img src={Comment} alt="" />
        <UilSetting />
        <div
          onClick={() => {
            navigate("/profile");
          }}
        >
          <UilUserCircle />
        </div>
      </div>
      <div class="foll">{ProfilePage ? <FollowersCard /> : <TrendCard />}</div>

      <button className="button r-button">Share</button>
    </div>
  );
};

export default RightSide;
