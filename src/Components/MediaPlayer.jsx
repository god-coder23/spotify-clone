import { Check, Play, Repeat2, Shuffle, SkipBack, SkipForward } from 'lucide-react'
import React from 'react'

const MediaPlayer = () => {
  return (
    <div className='w-full flex flex-row items-center justify-between px-4 py-2 bg-[#0a0a0a]'>
      
      {/* song info */}
      <div className='flex flex-row gap-3 items-center w-[30%]'>
        <img className='w-14 h-14 rounded-xl object-cover flex-shrink-0' src="https://i.pinimg.com/1200x/db/3f/3a/db3f3af6e5b6356dc8f46ab144fa9aff.jpg" alt="" />
        <div className='flex flex-row items-start gap-2'>
          <div className='flex flex-col'>
            <h1 className='text-white text-sm'>Virat Kohli 2026</h1>
            <h1 className='text-white/60 text-xs'>RCB</h1>
          </div>
          <div className='bg-[#21d761] mt-1 flex rounded-full h-4 w-4 justify-center items-center flex-shrink-0'>
            <Check color='black' size={10} strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* Media  Control */}
      <div className='flex flex-col items-center gap-2 w-[40%]'>
        <div className='flex items-center gap-7'>
          <Shuffle color='white' size={18} />
          <SkipBack color='gray' size={18} fill='gray' />
          <div className='bg-white rounded-full h-8 w-8 flex items-center justify-center'>
            <Play color='black' size={14} fill='black' />
          </div>
          <SkipForward color='gray' size={18} fill='gray' />
          <Repeat2 color='gray' size={22} />
        </div>
        <div className='flex flex-row gap-3 items-center w-full'>
          <h1 className='text-gray-400 text-xs'>3:18</h1>
          <div className='flex-1 h-1 bg-white/30 rounded-2xl'>
            <div className='w-[50%] h-full bg-white rounded-2xl'></div>
          </div>
          <h1 className='text-gray-400 text-xs'>6:23</h1>
        </div>
      </div>

      {/* Right - Volume (placeholder) */}
      <div className='w-[30%]'></div>

    </div>
  )
}
export default MediaPlayer
