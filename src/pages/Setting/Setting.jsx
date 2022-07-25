import React from 'react'
import "./Setting.css"
import InfoCard from '../../components/InfoCard/InfoCard'
import {UilUserCircle} from '@iconscout/react-unicons'
import {UilSetting} from '@iconscout/react-unicons'

import Comment from '../../img/comment.png'
import Home from '../../img/home.png'

import { useState, useEffect } from 'react'
const Setting = () => {
    const [mobile,setMobile] = useState(false);
  
  useEffect(() => {

    if(window.innerWidth<768){
      setMobile(true);
    }
  });
  return (
    <div className='Setting'>
        {mobile? <div className="navIcons">
            <img src={Home} alt="" />
            <img src={Comment} alt="" />
            <UilSetting/>
            <UilUserCircle/>
        </div> : ""}
        <InfoCard/>
    </div>
  )
}

export default Setting