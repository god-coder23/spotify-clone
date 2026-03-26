import React from 'react'
import Sidebar from './Components/Sidebar'
import TopBar from './Components/TopBar'
import MiddleContent from './Components/MiddleContent'
import MediaPlayer from './Components/MediaPlayer'

const App = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex flex-row flex-1 overflow-hidden'>
        <Sidebar />
        <div className='flex flex-col w-full'>
          <TopBar />
          <MiddleContent />
        </div>
      </div>
      <MediaPlayer />
    </div>
  )
}

export default App
