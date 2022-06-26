import React from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import {UilUserCircle} from '@iconscout/react-unicons'

import FollowersCard from '../FollowersCard/FollowersCard'
import TrendCard from '../TrendCard/TrendCard'

const RightSide = () => {
    const ProfilePage = false;
  return (
    <div className="RightSide">
        <div className="navIcons">
            <img src={Home} alt="" />
            <img src={Comment} alt="" />
            <UilSetting/>
            <UilUserCircle/>
        </div>
        <div class="foll">
        {ProfilePage? <FollowersCard/>:<TrendCard/>}
        </div>
        
        <button className='button r-button'>Share</button>
    </div>
  )
}

export default RightSide