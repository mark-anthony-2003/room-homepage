import React from 'react'
import imgAboutDark from '../assets/images/image-about-dark.jpg'

const Box3: React.FC = () => {
   return (
      <div className="col-span-2 relative">
         <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${imgAboutDark})` }}></div>
      </div>
   )
}

export default Box3
