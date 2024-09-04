import React, { useEffect } from 'react'
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';

export default function ZendexAnalytics() {

  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Analytics'));
      }, []);

  return (
    <>
      <div className='w-full flex justify-center text-center'>
          <div className='mt-4'>
              <h2 className='text-3xl font-normal p-0'>Track the chats you have with customers and turn them into <br /> actionable insights to improve performance.</h2>
              <div className='flex gap-3 justify-center mt-8'>
                  <button className='btn rounded shadow-none bg-[#1F73B7] text-white'>Upgrade now</button>
                  <button className='btn btn-light shadow-none rounded'>Learn More</button>
              </div>
              <p className='text-xs italic my-4'>*Available only for administrators and account owners on the Professional and Enterprise plans.</p>
          </div>
      </div>
      <div className='w-full flex justify-center'>
        <img src="https://dashboard-latest.zopim.com/dashboard/images/analytics_landing/newfeature_landing_csct@2x.png" alt="" width='900'/>
      </div>
      <hr className='bg-gray-200 h-0.5 w-[75rem] ml-12 mt-4' />
      <div className='grid grid-cols-3 mt-7'>
          <div className='flex justify-center text-center'>
              <div>
                <h2 className='text-lg font-bold mb-3'>Monitor</h2>
                <img src="https://dashboard-latest.zopim.com/dashboard/images/analytics_landing/newfeature_landing_monitor@2x.png" alt="" width='155' className='mx-auto'/>
                <p className='text-base mt-3'>Track your chat volume to <br /> get a better idea of which  <br /> days are the busiest.</p>
              </div>
          </div>
          <div className='flex justify-center text-center'>
              <div>
                <h2 className='text-lg font-bold mb-3'>Measure</h2>
                <img src="https://dashboard-latest.zopim.com/dashboard/images/analytics_landing/newfeature_landing_measure@2x.png" alt="" width='155' className='mx-auto'/>
                <p className='text-base mt-3'>Examine why chats are <br /> being missed and why wait <br /> times increase during <br /> certain periods.</p>
              </div>
          </div>
          <div className='flex justify-center text-center'>
              <div>
                <h2 className='text-lg font-bold mb-3'>Optimize</h2>
                <img src="https://dashboard-latest.zopim.com/dashboard/images/analytics_landing/newfeature_landing_optimize@2x.png" alt="" width='155' className='mx-auto'/>
                <p className='text-base mt-3'>Use the metrics to <br /> anticipate customer needs <br /> and increase satisfaction.</p>
              </div>
          </div>
      </div>
      <div className='flex gap-3 justify-center mt-10'>
          <button className='btn btn-info rounded'>Upgrade now</button>
          <button className='btn btn-light shadow-md rounded'>Learn More</button>
      </div>
    </>   
  )
}
