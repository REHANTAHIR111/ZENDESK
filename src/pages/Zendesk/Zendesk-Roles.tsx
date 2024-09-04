import React, { useEffect } from 'react'
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';

export default function Roles() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Roles'));
      }, []);
  return (
    <>
      <div className='flex justify-center mt-20'>
          <div className='text-center'>
              <h2 className='text-4xl font-normal'>Roles and permissions</h2>
              <p className='text-base mt-4'>Create new roles for your agents and control what they have access to in Zendesk Chat</p>
              <button className='btn btn-info rounded mx-auto my-5'>Upgrade now</button>
              <span className='text-xs'>Available to customers on Chat Enterprise.</span>
              <span className='text-blue-600 ml-2 text-xs hover:underline cursor-pointer'>Learn more</span>
              <img src="https://dashboard-latest.zopim.com/dashboard/images/roles_landing/splashscreen@2x.png" alt="" width='640' className='mt-6'/>
          </div>
      </div>
      <hr className='bg-gray-400 h-0.5 mt-8 mx-auto w-[51rem]' />
      <div className='flex justify-center text-center mt-8'>
        <div className='grid grid-cols-3 gap-16'>
            <div className='flex justify-center text-center'>
                <div>
                    <img src="https://dashboard-latest.zopim.com/dashboard/images/roles_landing/flexible@2x.png" alt="" width='100' className='mx-auto'/>
                    <h2 className='text-base font-bold mb-3 mt-6'>Flexible team structure</h2>
                    <p className='text-sm mt-3'>Create new agent roles (such as <br /> QA, analyst, or team lead) to <br /> align with your organizational <br /> structure.</p>
                </div>
            </div>
            <div className='flex justify-center text-center'>
                <div>
                    <img src="https://dashboard-latest.zopim.com/dashboard/images/roles_landing/manage@2x.png" alt="" width='100' className='mx-auto'/>
                    <h2 className='text-base font-bold mb-3 mt-6'>Manage multiple brands</h2>
                    <p className='text-sm mt-3'>Customers who support <br /> multiple brands can limit access <br /> to chats in their department.</p>
                </div>
            </div>
            <div className='flex justify-center text-center'>
                <div>
                    <img src="https://dashboard-latest.zopim.com/dashboard/images/roles_landing/limit@2x.png" alt="" width='100' className='mx-auto'/>
                    <h2 className='text-base font-bold mb-3 mt-6'>Limit agent activity</h2>
                    <p className='text-sm mt-3'>Restrict agents to only the chats <br /> they serve and block access to <br /> all other features.</p>
                </div>
            </div>
        </div>
      </div>
    </>  
  )
}
