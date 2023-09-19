import React from 'react'
import Box1 from './components/Box1'
import Box2 from './components/Box2'
import Box3 from './components/Box3'
import Box4 from './components/Box4'
import Box5 from './components/Box5'

const App: React.FC = () => {
  return (
    <main role="main" className="h-screen grid grid-rows-6">
      <div className="row-span-4 grid grid-cols-12">
        <Box1 />
        <Box2 />
      </div>
      <div className="row-span-2 grid grid-cols-7">
        <Box3 />
        <Box4 />
        <Box5 />
      </div>
    </main>
  )
}

export default App
