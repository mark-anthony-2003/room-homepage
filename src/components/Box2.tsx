import React from 'react'
import iconArrow from '../assets/images/icon-arrow.svg'
import iconArrowAngleLeft from '../assets/images/icon-angle-left.svg'
import iconArrowAngleRight from '../assets/images/icon-angle-right.svg'
import { useRoomHomepageContext } from '../context/RoomHomepageProvider'

const Box2: React.FC = () => {
   const { handlePrevHeroImg, handleNextHeroImg } = useRoomHomepageContext()

   return (
      <div className="col-span-5 relative">
         <div className="flex justify-center items-center h-full mx-24">
            <div className="flex flex-col gap-5">
               <h1 className="text-black text-5xl font-semibold">Discover innovative ways to decorate</h1>
               <p className="text-[#a1a1a1]">
                  We provide unmatched quality, comfort, and style for property <br /> owners across the country.
                  Our experts combine form and <br /> function in bringing your vision to life.
                  Create a room in your <br /> own style with our collection and make your property a <br /> reflection of you and what you love.
               </p>
               <div className="uppercase tracking-[0.8rem] cursor-pointer">
                  <span className="hover:text-[#a1a1a1]">
                     Shop now <img src={iconArrow} alt="icon arrow" className="inline-block" />
                  </span>
               </div>
            </div>
         </div>
         <div className="bg-[#000000] w-36 flex justify-evenly items-center absolute bottom-0">
            <div onClick={handlePrevHeroImg} className="px-7 py-5 hover:bg-[#454545] cursor-pointer">
               <img src={iconArrowAngleLeft} alt="icon arrow angle left" />
            </div>
            <div onClick={handleNextHeroImg} className="px-7 py-5 hover:bg-[#454545] cursor-pointer">
               <img src={iconArrowAngleRight} alt="icon arrow angle right" />
            </div>
         </div>
      </div>
   )
}

export default Box2
