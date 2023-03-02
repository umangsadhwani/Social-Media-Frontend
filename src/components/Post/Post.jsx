import React from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { useState } from "react";

const Post = ({ data }) => {
  const [like, setLike] = useState(false);
  const [countLikes, setCountLikes] = useState(data.likes);
  const [commentId, setCommentId] = useState();
  const [comment, setComment] = useState();
  const [show, setShow] = useState(false);

  const addComment = () => {
    setShow(true);
  };

  const LikeDislike = () => {
    if (like == true) {
      setLike(false);
      setCountLikes(countLikes - 1);
    } else {
      setLike(true);
      setCountLikes(countLikes + 1);
    }
  };

  return (
    <div className="Post">
      {data.tp === "image" && <img src={data.img} alt="" />}
      {data.tp === "video" && (
        <video controls>
          <source src={data.vid} type="video/mp4" />
        </video>
      )}
      <div className="postReact">
        {/* <img src={data.liked?Heart:NotLike} alt="" onClick={() => setLike(true)}/> */}
        <img
          src={like ? Heart : NotLike}
          alt=""
          onClick={() => LikeDislike()}
        />
        <img src={Comment} alt="" onClick={() => setCommentId(data.id)} />
        <img src={Share} alt="" />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {countLikes} Likes
      </span>
      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc} </span>
        {data.id === commentId ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {" "}
            <textarea
              style={{ width: "250px", height: "70px" }}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></textarea>
            <button style={{ alignSelf: "flex-start" }} onClick={addComment}>
              Comment
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {show ? (
        <div>
          {" "}
          <p>{comment}</p>{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Post;
