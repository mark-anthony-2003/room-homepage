import React from 'react'
import imgAboutLight from '../assets/images/image-about-light.jpg'

const Box5: React.FC = () => {
   return (
      <div className="col-span-2 relative">
         <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${imgAboutLight})` }}></div>
      </div>
   )
}

export default Box5
