import React, { useEffect } from 'react'
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';

export default function Monitor() {

const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Monitor'));
  }, []);

  return (
    <>
      <div className='flex justify-center text-center mt-12'>
        <div>
            <h2 className='text-4xl font-[400]'>Real-Time monitoring</h2>
            <p className='text-base mt-4'>View real-time metrics on chat volume, visitor experience, and agent performance.</p>
            <button className='btn btn-info rounded mx-auto my-5'>Upgrade now</button>
            <span className='text-xs'>Available only for customers on Enterprise.</span>
            <span className='text-blue-600 ml-2 text-xs hover:underline cursor-pointer'>Learn more</span>
            <img src="https://dashboard-latest.zopim.com/dashboard/images/realtime_landing/rtm_feature_landing@2x.gif" alt="" width='750' className='mt-6'/>
        </div>
      </div>
      <hr className='bg-gray-400 h-0.5 mt-8 mx-auto w-[51rem]' />
      <div className='flex justify-center text-center mt-8'>
      <div className='grid grid-cols-3 gap-16'>
          <div className='flex justify-center text-center'>
              <div>
                  <img src="https://dashboard-latest.zopim.com/dashboard/images/realtime_landing/rtm_feature_landing_feature_1@2x.png" alt="" width='100' className='mx-auto'/>
                  <h2 className='text-base font-bold mb-3 mt-6'>Granular metrics</h2>
                  <p className='text-sm mt-3'>Data on agent availability, chat <br /> duration, and assignment gives <br /> you insight into account activity.</p>
              </div>
          </div>
          <div className='flex justify-center text-center'>
              <div>
                  <img src="https://dashboard-latest.zopim.com/dashboard/images/realtime_landing/rtm_feature_landing_feature_2@2x.png" alt="" width='100' className='mx-auto'/>
                  <h2 className='text-base font-bold mb-3 mt-6'>Better customizability</h2>
                  <p className='text-sm mt-3'>Select only the relevant metrics <br /> and filter by department for a <br /> real-time overview.</p>
              </div>
          </div>
          <div className='flex justify-center text-center'>
              <div>
                  <img src="https://dashboard-latest.zopim.com/dashboard/images/realtime_landing/rtm_feature_landing_feature_3@2x.png" alt="" width='100' className='mx-auto'/>
                  <h2 className='text-base font-bold mb-3 mt-6'>More control</h2>
                  <p className='text-sm mt-3'>Use the real-time APIs to extract <br /> metrics and create your own <br /> dashboards. <br />Learn more</p>
              </div>
          </div>
      </div>
      </div>
    </>
  )
}
