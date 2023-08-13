import React, { useState } from 'react'
import Navdots from './navdots'

function Carousel() {
    function rotate() {
        setImageno((imageno) => ((imageno<len-1)?imageno+1:0))
    }
    const images = [
        {
            link:"https://homebazaar-blog.s3.ap-south-1.amazonaws.com/knowledge/wp-content/uploads/2023/02/13125949/FeatureImage_Why-To-Invest-In-Whitefield-jpg.webp",
            id:0,
            alt:"white_field_image",
            text:"White field",
        },
        {
            link:"https://images.unsplash.com/photo-1581533961790-5ab6ecdf8254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2382&q=80",
            id:1,
            alt:"white_field_image",
            text:"White field2"
        },
        {
            link:"https://images.unsplash.com/photo-1581533961790-5ab6ecdf8254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2382&q=80",
            id:2,
            alt:"white_field_image3",
            text:"White field3"
        },
        {
            link:"https://images.unsplash.com/photo-1581533961790-5ab6ecdf8254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2382&q=80",
            id:3,
            alt:"white_field_image4",
            text:"White field4"
        },
    ]
    const len = images.length
    const [imageno,setImageno] = useState(0)
  return (
    <div className='bg-blue-500 h-screen'>
        <div className='flex flex-col justify-center cursor-pointer h-full' onClick={() => rotate()}>
            <img className="px-8 h-5/6 object-fit" src={images[imageno]?.link} alt={images[imageno]?.alt}></img>
            <div className='h-1/6 bg-slate-50'>

            <div className=' flex  text-slate-700 font-serif h-1/3 items-center justify-center'>{images[imageno]?.text}</div>
            <div className='flex justify-center gap-4 h-1/2'>{images.map((image) => (<div key={image.id}><Navdots id={image.id} cur_id={imageno}/></div>))} </div>
            </div>
            
        </div>
</div>
  )
}

export default Carousel