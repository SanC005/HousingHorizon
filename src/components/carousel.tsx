import React, { useState } from 'react'

function Carousel() {
    function rotate() {
        setImageno((imageno) => ((imageno<len-1)?imageno+1:0))
    }
    const images = [
        {
            link:"https://homebazaar-blog.s3.ap-south-1.amazonaws.com/knowledge/wp-content/uploads/2023/02/13125949/FeatureImage_Why-To-Invest-In-Whitefield-jpg.webp",
            id:0,
            alt:"white_field_image",
        },
        {
            link:"https://images.unsplash.com/photo-1581533961790-5ab6ecdf8254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2382&q=80",
            id:1,
            alt:"white_field_image",
        },
    ]
    const len = images.length
    const [imageno,setImageno] = useState(0)
  return (
    <div className='bg-blue-500 h-screen'>
        <div className='flex flex-col justify-center cursor-pointer h-full' onClick={() => rotate()}>
            <img className="px-16 h-5/6 object-fit" src={images[imageno]?.link} alt={images[imageno]?.alt}></img>
            <div className='bg-slate-50 text-slate-700 font-serif h-1/6'>text</div>
        </div>
</div>
  )
}

export default Carousel