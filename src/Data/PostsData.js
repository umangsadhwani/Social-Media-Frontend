import postPic1 from '../img/postpic1.jpg'
import postPic2 from '../img/postpic2.jpg'
import postPic3 from '../img/postpic3.JPG'
import postVid from '../video/vid1.mp4'

export const PostsData = [
    {
        tp:"image",
        vid:null,
        img: postPic1,
        name: 'Tzuyu',
        desc: "Happy New Year all friends! #2023",
        likes: 2300,
        liked: true
    },
    {
        tp:"image",
        vid:null,
        img: postPic2,
        name: 'Maryam',
        desc: "Party time :)",
        likes: 2300,
        liked: false

    },
    {
        tp:"video",
        vid: postVid,
        img: null,
        name: 'Maryam',
        desc: "Party time :)",
        likes: 2300,
        liked: false

    },
    {
        tp:"image",
        vid:null,
        img:postPic3,
        name: "Salena Gomez",
        desc: "At Archery Festival",
        likes: 800,
        liked: false
    }
]