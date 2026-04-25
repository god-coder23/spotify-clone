import React from 'react'
import { ArrowLeftToLine, Bookmark, Heart, Logs, Maximize2, Pin, Plus, Search } from 'lucide-react';
const Sidebar = () => {
  return (
    <div className='p-5 px-3 flex flex-col gap-5 h-screen w-120 '>
      <div className='px-6'>
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" 
            className='h-9 w-9' 
            alt="Spotify" 
          />
      </div>
      {/*your library and create expand */}
      <div className='h-[85%] w-full bg-white/8 rounded-3xl'>
        <div className='p-4 flex justify-between'>
          <div className='flex flex-row gap-2 items-center'>
            <ArrowLeftToLine color='white' size={18} />
            <h1 className='text-white font-segoe text-md f'>Your Library</h1>
          </div>
          <div className='flex gap-5 items-center'>
            <div className='flex flex-row px-3 gap-1 py-2 rounded-2xl bg-white/9 items-center'>
            <Plus color='white' size={20} strokeWidth={1.5} />
            <h1 className='text-white font-segoe text-sm font-semibold'>Create</h1>
          </div>
            <Maximize2 color='white' size={15} />
          </div>
        </div>
        {/* playlist buttons etc */}
        <div className='px-3 flex flex-row gap-2'>
          <div className='bg-white/10 w-fit rounded-3xl px-3 py-1'>
            <h1 className='text-white text-sm'>Playlists</h1>
          </div>
          <div className='bg-white/10 w-fit rounded-3xl px-3 py-1'>
            <h1 className='text-white text-sm'>Artists</h1>
          </div>
          <div className='bg-white/10 w-fit rounded-3xl px-3 py-1'>
            <h1 className='text-white text-sm'>Albums</h1>
          </div>
        </div>
        {/* search and recent icons */}
        <div className='p-4 flex justify-between'>
          <Search color='gray' size={18} />
          <div className='flex gap-3'>
            <h1 className='text-white/60 text-sm font-segoe'>Recents</h1>
            <Logs color='gray' size={18} />
          </div>
        </div>
        {/* button content */}
        <div className='px-3 flex flex-row gap-3'>
          {/* liked songs */}
          <div className='h-12 w-12 bg-gradient-to-br from-blue-700 via-pink-500 to-blue-200 justify-center items-center flex rounded-md'>
            <div className=''>
              <Heart color='white' size={18} fill='white' />
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <h1 className='text-white text-md font-light'>Liked Songs</h1>
            <div className='flex flex-row gap-1'>
              <div className='flex flex-row gap-1 items-center'>
                <div className=' transform rotate-45'>
                <Pin color='#1fc759' fill='#1fc759' size={15} />
                </div>
                <h1 className='text-white/60 text-sm'>Playlist •</h1>
              </div>
              <div>
                <h1 className='text-white/60 text-sm'>27 songs</h1>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* your episodes */}
                <div className='px-3 py-5 flex flex-row gap-3'>
          <div className='h-12 w-12 bg-emerald-800 justify-center items-center flex rounded-md'>
            <div className=''>
              <Bookmark color='#1fc759' size={25} fill='#1fc759' />
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <h1 className='text-white text-md font-light'>Your episodes</h1>
            <div className='flex flex-row gap-1'>
              <div className='flex flex-row gap-1 items-center'>
                <div className=' transform rotate-45'>
                <Pin color='#1fc759' fill='#1fc759' size={15} />
                </div>
                <h1 className='text-white/60 text-sm'>Playlist •</h1>
              </div>
              <div>
                <h1 className='text-white/60 text-sm'>Saved & downloaded epis...</h1>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Sidebar
