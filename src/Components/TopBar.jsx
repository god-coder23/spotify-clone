import { GalleryVerticalEnd, House, Search } from 'lucide-react'
import React from 'react'

const TopBar = () => {
  return (
    <div className='py-5 flex flex-row gap-4 w-[65%] justify-center items-center'>
        <div className='h-10 w-10 bg-white/20 flex items-center justify-center rounded-full'>
            <House color='white' size={25} fill='white' />
        </div>
        <div className='w-[65%] h-10 px-3 py-2 rounded-3xl flex justify-between bg-white/10'>
            <div className='flex items-center'>
                <Search color='gray' />
                <h1 className='text-white/60 px-4'>What do you want to play?</h1>
            </div>
            <div className='flex flex-row gap-3 items-center'>
                <h1 className='text-white/60 text-xl'>|</h1>
                <GalleryVerticalEnd color="gray" />
            </div>
        </div>
    </div>
  )
}

export default TopBar
