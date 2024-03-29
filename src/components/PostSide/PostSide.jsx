import React from 'react'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import "./PostSide.css"

import {UilUserCircle} from '@iconscout/react-unicons'
import {UilSetting} from '@iconscout/react-unicons'

import Comment from '../../img/comment.png'
import Home from '../../img/home.png'

import { useState, useEffect } from 'react'
const PostSide = () => {

  const [mobile,setMobile] = useState(false);
  
  useEffect(() => {

    if(window.innerWidth<768){
      setMobile(true);
    }
  });

  return (
    <div className="PostSide">
        {mobile? <div className="navIcons">
            <img src={Home} alt="" />
            <img src={Comment} alt="" />
            <UilSetting/>
            <UilUserCircle/>
        </div> : ""}
        <PostShare/>
        <Posts/>
    </div>
  )
}

export default PostSide