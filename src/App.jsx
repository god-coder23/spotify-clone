import React from 'react'
import Sidebar from './Components/Sidebar'
import TopBar from './Components/TopBar'
import MiddleContent from './Components/MiddleContent'
import MediaPlayer from './Components/MediaPlayer'
import RightSide from './Components/RightSide'

const App = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex flex-row flex-1 overflow-hidden'>
        <Sidebar />
        <div className='flex flex-col w-full'>
          <TopBar />
          <div className='flex flex-row relative'>
            <MiddleContent />
            <div className='absolute'>
              <RightSide />
            </div>
          </div>
        </div>
      </div>
      <MediaPlayer />
    </div>
  )
}

export default App
