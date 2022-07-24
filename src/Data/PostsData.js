import postPic1 from '../img/postpic1.jpg'
import postPic2 from '../img/postpic2.jpg'
import postPic3 from '../img/postpic3.jpg'
import president from '../img/president.avif'
import postVid from '../video/vid2.mp4'

export const PostsData = [
    {
        tp:"image",
        vid:null,
        img: postPic1,
        name: 'PM Office',
        desc: "Neeraj Chopra creates history, wins Silver in World Athletic Championship '22",
        likes: 2300,
        liked: true
    },
    {
        tp:"image",
        vid:null,
        img: president,
        name: 'PMO Office',
        desc: "Congratulations to Madam President Draupadi Murmu!",
        likes: 2300,
        liked: true
    },
    {
        tp:"image",
        vid:null,
        img: postPic2,
        name: 'Shubham',
        desc: "Caught this policeman taking bribe from an offender @CP, Delhi",
        likes: 500,
        liked: false

    },
    {
        tp:"video",
        vid: postVid,
        img: null,
        name: 'Paridhi',
        desc: "Enjoying the mountains of Leh. Love my India <3",
        likes: 2300,
        liked: false

    },
    {
        tp:"image",
        vid:null,
        img:postPic3,
        name: "Varun",
        desc: "Why isn't any one taking action on these traffic violations? @PoliceHQ pay attention!",
        likes: 800,
        liked: false
    }
]