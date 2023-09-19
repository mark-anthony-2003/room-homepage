import React, { useState } from 'react'
import { useRoomHomepageContext } from '../context/RoomHomepageProvider'
import imgLogo from '../assets/images/logo.svg'

const Box1: React.FC = () => {
   const { heroImages, selectedHeroImg } = useRoomHomepageContext()

   const menuItems: string[] = ["Home", "Shop", "About", "Contact"]
   const [selectedMenu, setSelectedMenu] = useState<string>("")
   const handleSelectMenu = (menuIndex: number) => setSelectedMenu(menuItems[menuIndex])

   return (
      <div className="col-span-7 relative">
         <div className="absolute inset-0 bg-cover bg-no-repeat bg-right-top" style={{ backgroundImage: `url(${heroImages[selectedHeroImg]})` }}></div>
         <nav className="relative z-10 px-16 py-8 flex gap-14">
            <div className="flex justify-center items-center">
               <img src={imgLogo} alt="logo image" />
            </div>
            <ul className="flex gap-8 text-white lowercase">
               { menuItems.map((menuItem, menuIndex) => (
                  <div onClick={() => handleSelectMenu(menuIndex)} key={menuIndex} className="cursor-pointer relative">
                     <li className="py-2">{menuItem}</li>
                     <div className={`${selectedMenu === menuItem && "border-b-[2.5px] border-white" } w-full hover:border-b-[2.5px] border-white absolute inset-0`}></div>
                  </div>
               ))}
            </ul>
         </nav>
      </div>
   )
}

export default Box1
