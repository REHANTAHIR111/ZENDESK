import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';


export default function Goals() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Goals'));
}, []);


  return (
    <>
      <div className='flex justify-center text-center mt-12'>
        <div>
            <h2 className='text-4xl font-[400]'>Conversion tracking</h2>
            <p className='text-base mt-4'>Measure your business goals and grow your bottom line</p>
            <button className='btn btn-info rounded mx-auto my-5'>Upgrade now</button>
            <span className='text-xs'>Available only for customers on the Professional and Enterprise plans.</span>
            <span className='text-blue-600 ml-2 text-xs hover:underline cursor-pointer'>Learn more</span>
            <img src="https://dashboard-latest.zopim.com/dashboard/images/goals_landing/splashscreen@2x.png" alt="" width='750' className='mt-6'/>
        </div>
      </div>
      <hr className='bg-gray-400 h-0.5 mt-8 mx-auto w-[51rem]' />
      <div className='flex justify-center text-center mt-8'>
      <div className='grid grid-cols-3 gap-16 mb-2'>
          <div className='flex justify-center text-center'>
              <div>
                  <img src="https://dashboard-latest.zopim.com/dashboard/images/goals_landing/define@2x.png" alt="" width='100' className='mx-auto'/>
                  <h2 className='text-base font-bold mb-3 mt-6 text-[#49545C]'>Define goals</h2>
                  <p className='text-sm mt-3 text-[#49545C]'>Create business goals using <br /> URLs to identify which pages, <br /> chats, and agents create <br /> conversion opportunities</p>
              </div>
          </div>
          <div className='flex justify-center text-center'>
              <div>
              <img src="https://dashboard-latest.zopim.com/dashboard/images/goals_landing/monitor@2x.png" alt="" width='100' className='mx-auto'/>
                  <h2 className='text-base font-bold mb-3 mt-6 text-[#49545C]'>Monitor performance</h2>
                  <p className='text-sm mt-3 text-[#49545C]'>Track which chats fulfill your <br /> target objectives - whether it’s <br /> completing a purchase or <br /> signing up for a newsletter</p>
              </div>
          </div>
          <div className='flex justify-center text-center'>
              <div>
                  <img src="https://dashboard-latest.zopim.com/dashboard/images/goals_landing/improve@2x.png" alt="" width='100' className='mx-auto'/>
                  <h2 className='text-base font-bold mb-3 mt-6 text-[#49545C]'>Improve and iterate</h2>
                  <p className='text-sm mt-3 text-[#49545C]'>Use the data to optimize your <br /> website conversion funnel and <br /> reward high performing agents</p>
              </div>
          </div>
      </div>
      </div>
    </>
  )
}
