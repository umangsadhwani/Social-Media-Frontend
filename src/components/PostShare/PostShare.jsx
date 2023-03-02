import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import me from "../../img/me.jpg";

import { PostsData } from "../../Data/PostsData";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [input, setInput] = useState("");

  const imageRef = useRef();
  const videoRef = useRef();

  const onImageChange = (event) => {
    if (video) {
      setVideo(null);
    }
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  const onVideoChange = (event) => {
    if (image) {
      setImage(null);
    }
    if (event.target.files && event.target.files[0]) {
      let vid = event.target.files[0];
      setVideo({
        video: URL.createObjectURL(vid),
      });
    }
  };

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input
          type="text"
          placeholder="whats happening"
          className="inp"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div
            className="option"
            style={{ color: "var(--video)" }}
            onClick={() => videoRef.current.click()}
          >
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button
            className="button ps-button"
            onclick={() => {
              let obj = {
                id: "6",
                tp: "image",
                vid: null,
                img: me,
                name: "",
                desc: { input },
                likes: 2300,
                liked: true,
              };
            }}
          >
            Share
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              accept="image/png, image/gif, image/jpeg"
              ref={imageRef}
              onChange={onImageChange}
              onClick={(event) => {
                event.target.value = null;
              }}
            />
          </div>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={videoRef}
              accept="video/mp4,video/x-m4v,video/*"
              onChange={onVideoChange}
              onClick={(event) => {
                event.target.value = null;
              }}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
        {video && (
          <div className="previewImage">
            <video width="100%" max-height="20rem" controls>
              <source src={video.video} type="video/mp4" />
            </video>
            <UilTimes onClick={() => setVideo(null)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
