import React from 'react'
import "./Profile.css"
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft"
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
import PostShare from '../../components/PostShare/PostShare'
import Posts from '../../components/Posts/Posts'
import InfoCard from '../../components/InfoCard/InfoCard'
import {UilUserCircle} from '@iconscout/react-unicons'
import {UilSetting} from '@iconscout/react-unicons'

import Comment from '../../img/comment.png'
import Home from '../../img/home.png'

import { useState, useEffect } from 'react'


const Profile = () => {
  const [mobile,setMobile] = useState(false);
  
  useEffect(() => {

    if(window.innerWidth<768){
      setMobile(true);
    }
  });
  return (
    <div className="Profile">
        <ProfileLeft/>
        <div className="Profile-center">
          {mobile? <div className="navIcons">
              <img src={Home} alt="" />
              <img src={Comment} alt="" />
              <UilSetting/>
              <UilUserCircle/>
          </div> : ""}
            <ProfileCard/>
            {mobile ? <InfoCard/> :<PostShare/>}
            <Posts/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile