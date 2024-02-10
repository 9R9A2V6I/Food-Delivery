import React from 'react';
import "./Blog_Stander.css";
import sta1 from "../../Assets/20.jpg";
const Blog_Stander = () => {
  return (
   <><div className='standerContainer'>
      <h1 className='blogTxt1'>STANDARD POST</h1>
    </div>
    <div className='standerContaier1'>
        <img src={sta1} className="blogStanderImg" />
      </div></>
  )
}

export default Blog_Stander
