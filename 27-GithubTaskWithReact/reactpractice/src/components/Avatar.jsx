import React from 'react'
import './avatar.css'


const Avatar = () => {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';


  return (
//     <img
//     className="avatar"
//     src="https://i.imgur.com/7vQD0fPs.jpg"
//     alt="Gregorio Y. Zara"
//   />
<img
      className="avatar"
      src={avatar}
      alt={description}
    />
  )
}

export default Avatar
