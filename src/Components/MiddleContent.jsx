import React from 'react'

const MiddleContent = () => {
  return (
    <div className='w-full h-screen'>
        <div className='h-[98%] overflow-auto w-[75%] flex flex-col gap-5 bg-gradient-to-b from-[#5f4126] via-[#1c1917] to-[#121212] rounded-xl p-5'>
            <div className='flex flex-row gap-2'>
                <div className='h-8 w-12 rounded-2xl bg-white flex items-center justify-center'>
                    <h1 className='text-black text-sm'>All</h1>
                </div>
                <div className='h-8 w-15 rounded-2xl bg-white/20 flex items-center justify-center'>
                    <h1 className='text-white text-sm'>Music</h1>
                </div>
                <div className='h-8 w-20 rounded-2xl bg-white/20 flex items-center justify-center'>
                    <h1 className='text-white text-sm'>Podcasts</h1>
                </div>
            </div>
            {/* most recent songs */}
            <div className='flex flex-col gap-3'>
                <div className='flex flex-row gap-2'>
                    <div className='px-1'>
                        <div className='h-13 w-45 bg-white/15 rounded-lg flex flex-row gap-2 items-center'>
                            <div className='h-full w-[30%] bg-gray-700'></div>
                            <h1 className='text-white text-sm font-segoe font-bold line-clamp-1'>Runaway Audio</h1>
                        </div>
                    </div>
                    <div className='px-1'>
                        <div className='h-13 w-45 bg-white/15 rounded-lg flex flex-row gap-2 items-center'>
                            <div className='h-full w-[30%] bg-gray-700'></div>
                            <h1 className='text-white text-sm font-segoe font-bold line-clamp-1'>Runaway Audio</h1>
                        </div>
                    </div>
                    <div className='px-1'>
                        <div className='h-13 w-45 bg-white/15 rounded-lg flex flex-row gap-2 items-center'>
                            <div className='h-full w-[30%] bg-gray-700'></div>
                            <h1 className='text-white text-sm font-segoe font-bold line-clamp-1'>Runaway Audio</h1>
                        </div>
                    </div>
                    <div className='px-1'>
                        <div className='h-13 w-45 bg-white/15 rounded-lg flex flex-row gap-2 items-center'>
                            <div className='h-full w-[30%] bg-gray-700'></div>
                            <h1 className='text-white text-sm font-segoe font-bold line-clamp-1'>Runaway Audio</h1>
                        </div>
                    </div>
            </div>
            <div className='flex flex-row gap-2'>
                    <div className='px-1'>
                        <div className='h-13 w-45 bg-white/15 rounded-lg flex flex-row gap-2 items-center'>
                            <div className='h-full w-[30%] bg-gray-700'></div>
                            <h1 className='text-white text-sm font-segoe font-bold line-clamp-1'>Runaway Audio</h1>
                        </div>
                    </div>
                    <div className='px-1'>
                        <div className='h-13 w-45 bg-white/15 rounded-lg flex flex-row gap-2 items-center'>
                            <div className='h-full w-[30%] bg-gray-700'></div>
                            <h1 className='text-white text-sm font-segoe font-bold line-clamp-1'>Runaway Audio</h1>
                        </div>
                    </div>
                    <div className='px-1'>
                        <div className='h-13 w-45 bg-white/15 rounded-lg flex flex-row gap-2 items-center'>
                            <div className='h-full w-[30%] bg-gray-700'></div>
                            <h1 className='text-white text-sm font-segoe font-bold line-clamp-1'>Runaway Audio</h1>
                        </div>
                    </div>
                    <div className='px-1'>
                        <div className='h-13 w-45 bg-white/15 rounded-lg flex flex-row gap-2 items-center'>
                            <div className='h-full w-[30%] bg-gray-700'></div>
                            <h1 className='text-white text-sm font-segoe font-bold line-clamp-1'>Runaway Audio</h1>
                        </div>
                    </div>
            </div>
            </div>
            {/* its music friday ke niche se */}
            <div className=''>
                <div>
                    <h1 className='text-white text-2xl font-bold'>It's New Music Friday!</h1>
                    <div className='h-60 w-40 hover:bg-white/5 rounded-2xl py-5'>
                        <div className=''>
                            <img className='w-40 h-40 object-cover flex-shrink-0 rounded-2xl' src="https://i.pinimg.com/1200x/db/3f/3a/db3f3af6e5b6356dc8f46ab144fa9aff.jpg" alt="" />
                            <h1 className='text-white/60 line-clamp-2 text-xs font-segoe p-2'>VIRAT KOHLI 4K WALLPAPERVIRAT</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MiddleContent
