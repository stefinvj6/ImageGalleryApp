import React, { useState,useEffect } from 'react'
import './Gallery.css'
import image1 from '../assets/1920x1080-px-code-coding-programming-simple-background-anime-ah-my-goddess-hd-art-wallpaper-thumb.jpg'
import image2 from '../assets/796832.jpg'
import image3 from '../assets/harry-potter-albus-dumbledore-quote-simple-background-wallpaper-thumb.jpg'
import image4 from '../assets/humor-minimalism-simple-background-wallpaper-thumb.jpg'
import image5 from '../assets/images.jpeg'
import image6 from '../assets/minimalism-black-typography-simple-background-wallpaper-thumb.jpg'
import image7 from '../assets/minimalism-programming-code-lyrics-wallpaper-preview.jpg'
import image8 from '../assets/quote-inspirational-typography-motivational-wallpaper-thumb.jpg'
import image9 from '../assets/quote-motivational-digital-art-typography-wallpaper-thumb.jpg'
import image10 from '../assets/simple-minimalism-digital-art-motivational-wallpaper-thumb.jpg'
import image11 from '../assets/technology-programming-code-wallpaper-thumb.jpg'
import image12 from '../assets/wtf-typography-minimalism-simple-background-wallpaper-thumb.jpg'

function Gallery() {

    const [images, setimages] = useState([])

    useEffect(() => {
      const fetchImages =()=>{
      const data = [
        {
            id:1,
            url:image1,
            title:'image1'
        },
        {
            id:2,
            url:image2,
            title:'image2'
        },
        {
            id:3,
            url:image3,
            title:'image3'
        },
        {
            id:4,
            url:image4,
            title:'image4'
        },
        {
            id:5,
            url:image5,
            title:'image5'
        },
        {
            id:6,
            url:image6,
            title:'image6'
        },
        {
            id:7,
            url:image7,
            title:'image7'
        },
        {
            id:8,
            url:image8,
            title:'image8'
        },
        {
            id:9,
            url:image9,
            title:'image9'
        },
        {
            id:10,
            url:image10,
            title:'image10'
        },
        {
            id:11,
            url:image11,
            title:'image11'
        },
        {
            id:12,
            url:image12,
            title:'image12'
        },
    ]
    setimages(data)
    
    }
    fetchImages()  
    }, [])

    const handleDeleteImage = (id)=>{
        setimages(images.filter((image)=>image.id !== id))
    }

  return (
    <div>
        <h1 className="title">Image Gallery App</h1>
        {
            images.length >0?
            (
                <div className="image-grid">
                {
                    images.map((image)=>(
                        <div className="image-card" key={image.id}>
                            <img className='img' src={image.url} alt="" />
                        <div className="image-details">
                            <h3>{image.title}</h3>
                            <button onClick={()=>handleDeleteImage(image.id)}>Delete</button>
                        </div>
                    </div>
                    ))
                }
                </div>
            ):
            <p className='no-images'>No Images Found</p>
        }
    </div>
  )
}

export default Gallery