import React from 'react'
import './Post.css'
import Comment from "../../img/comment.png"
import Share from "../../img/share.png"
import Heart from "../../img/like.png"
import NotLike from "../../img/notlike.png"
import { useState } from 'react'




const Post = ({data}) => {

    const [like, setLike] = useState(false);

    const LikeDislike = ()=>{
        if(like==true){
            setLike(false);
        }
        else{
            setLike(true);
        }
    }

  return (
    <div className="Post">
        {data.tp==="image"&&(
            <img src={data.img} alt="" />
        )}
        {data.tp==="video" &&(
            <video  controls >
                <source src={data.vid} type="video/mp4"/>
            </video>
        )}
        <div className="postReact">
            {/* <img src={data.liked?Heart:NotLike} alt="" onClick={() => setLike(true)}/> */}
            <img src={like?Heart:NotLike} alt="" onClick={() => LikeDislike()}/>
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>
        <span style={{color: "var(--gray)",fontSize:'12px'}}>{data.likes} Likes</span>
        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc} </span>
        </div>
    </div>
  )
}

export default Post