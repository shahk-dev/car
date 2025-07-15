import React from 'react'

function Footer() {
  return (
    <div className='w-full h-[425px] p-16'>
       <div className='flex items-baseline mb-8 justify-between '>
                <div>
               <h1 className="font-[Plus_Jakarta_Sans] text-[32px] font-bold text-[#3563E9] pb-4">MORENT</h1>
               <p className='text-[16px] font-[Plus_Jakarta_Sans] w-[292px]'>Our vision is to provide convenience and help increase your sales business.</p>
          </div>
          <div className='flex items-baseline gap-[60px]'>
            <div>
                  <h2 className='text-[20px] font-semibold font-[Plus_Jakarta_Sans] pb-6 '>About</h2>
                <p className='text-[16px] font-[Plus_Jakarta_Sans] text-gray-800 font-medium pb-4.5'>How it works</p>
                <p className='text-[16px] font-[Plus_Jakarta_Sans] text-gray-800 font-medium pb-4.5'>Featured</p>
                <p className='text-[16px] font-[Plus_Jakarta_Sans] text-gray-800 font-medium pb-4.5'>Partnership</p>
                <p className='text-[16px] font-[Plus_Jakarta_Sans] text-gray-800 font-medium pb-4.5'>Bussiness Relation</p>
            </div>
            <div>
                  <h2 className='text-[20px] font-semibold font-[Plus_Jakarta_Sans] pb-6 '>Community</h2>
                <p className='text-[16px] font-[Plus_Jakarta_Sans] text-gray-800 font-medium pb-4.5'>Events</p>
                <p className='text-[16px] font-[Plus_Jakarta_Sans] text-gray-800 font-medium pb-4.5'>Blog</p>
                <p className='text-[16px] font-[Plus_Jakarta_Sans] text-gray-800 font-medium pb-4.5'>Podcast</p>
                <p className='text-[16px] font-[Plus_Jakarta_Sans] text-gray-800 font-medium pb-4.5'>Invite a friend</p>
            </div>
            <div>
                  <h2 className='text-[20px] font-semibold font-[Plus_Jakarta_Sans] pb-6 '>Socials</h2>
                <p className='text-[16px] font-[Plus_Jakarta_Sans] text-gray-800 font-medium pb-4.5'>Discord</p>
                <p className='text-[16px] font-[Plus_Jakarta_Sans] text-gray-800 font-medium pb-4.5'>Instagram</p>
                <p className='text-[16px] font-[Plus_Jakarta_Sans] text-gray-800 font-medium pb-4.5'>Twitter</p>
                <p className='text-[16px] font-[Plus_Jakarta_Sans] text-gray-800 font-medium pb-4.5'>Facebook</p>
            </div>
               
          </div>
       </div>
       <div className='h-0.5 w-full  mb-8 bg-neutral-500'></div>
       <div className='flex items-center justify-between '>
         <div>
             <p className='text-[16px] font-[Plus_Jakarta_Sans] font-semibold '>©2022 MORENT. All rights reserved</p>
         </div>
         <div className='flex items-center gap-16'>
             <p className='text-[16px] font-[Plus_Jakarta_Sans] font-semibold'>Privacy & Policy</p>
             <p className='text-[16px] font-[Plus_Jakarta_Sans] font-semibold'>Terms & Condition</p>
         </div>
       </div>
    </div>
  )
}

export default Footer
