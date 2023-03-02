import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import LogoSearch from "../logoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./ProfileSide.css";
import { useState, useEffect } from "react";
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
