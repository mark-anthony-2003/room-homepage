import { createContext, useContext, useState } from "react"

import imgHero1 from '../assets/images/desktop-image-hero-1.jpg'
import imgHero2 from '../assets/images/desktop-image-hero-2.jpg'
import imgHero3 from '../assets/images/desktop-image-hero-3.jpg'

type RoomHomepageContextType = {
   heroImages: string[]
   selectedHeroImg: number
   handlePrevHeroImg: () => void
   handleNextHeroImg: () => void
}

const RoomHomepageContent = createContext<RoomHomepageContextType | null>(null)

export const RoomHomepageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

   const heroImages: string[] = [ imgHero1, imgHero2, imgHero3 ]
   const [selectedHeroImg, setSelectedHeroImg] = useState<number>(0)

   const handlePrevHeroImg = () => {
      setSelectedHeroImg((prevIndex) => prevIndex === 0 ? 0 : prevIndex - 1)
   }
   const handleNextHeroImg = () => {
      setSelectedHeroImg((prevIndex) => prevIndex === heroImages.length - 1 ? heroImages.length - 1 : prevIndex + 1)
   }   

   return (
      <RoomHomepageContent.Provider
         value={{ heroImages, selectedHeroImg, handlePrevHeroImg, handleNextHeroImg }}
      >
         { children }
      </RoomHomepageContent.Provider>
   )
}

export const useRoomHomepageContext = () => useContext(RoomHomepageContent)
