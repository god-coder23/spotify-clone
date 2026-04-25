import { Share } from 'lucide-react'
import React from 'react'

const RightSide = () => {
  return (
    <div className='ml-217 h-screen w-full'>
        <div className='h-[85%] w-[30%] bg-white/8 rounded-xl'>
            <div className='h-screen'>
                <img className='h-[50%] w-screen object-cover flex-shrink-0 rounded-2xl' src="https://i.pinimg.com/1200x/db/3f/3a/db3f3af6e5b6356dc8f46ab144fa9aff.jpg" alt="" />
                <div className='flex flex-row justify-between'>
                    <div className='absolute pb-3 z-20'>
                        <h1 className='text-white z-20 text-xl font-bold font-segoe'>Virat Kohli</h1>
                        <h1 className='text-white/60 z-20 text-sm font-segoe'>RCB 2026</h1>
                    </div>
                    <div className=''>
                        <Share color='white' size={20} />
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightSide
