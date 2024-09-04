import React, { useEffect, useState } from 'react'
import IconPlus from '../../components/Icon/IconPlus'
import { setPageTitle } from '../../store/themeConfigSlice';
import IconMinus from '../../components/Icon/IconMinus'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function addDepartment() {
    
    const dispatch = useDispatch();
    const [add, setAdd] = useState<any>(false)
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setPageTitle('Add department')); 
      }, []);

  return (
    <div>
        <div className='gap-10 w-full flex font-normal text-[12.5px] leading-4'>
            <div className='w-[48.5%]'>
                <div className='flex w-full font-normal text-[12.5px] mt-3.5'>
                    <label className='w-[23%] mt-1.5 text-gray-700' htmlFor='dpt'>Department status</label>
                    <div className='mt-2'>
                        <input type='checkbox' id='dpt' className='w-3.5 rounded-full'/>
                    </div>
                    <div>
                        <label className='mt-2 ml-2.5 text-gray-700' htmlFor='dpt'>Enable department</label>
                        <p className='text-gray-500 font-normal mt-3 ml-3'>0 of 2 Departments used. <a target='_blank' className='hover:underline text-blue-700' href='https://teamsupport1.zendesk.com/admin/billing'>Upgrade now</a> to increase the feature limit.</p>
                    </div>
                </div>
                <hr className='mt-12'/>
                <div className='flex w-full mt-5'>
                    <h3 className='w-[23%] mt-1'>Name</h3>
                    <input type="text" className='py-1 px-3 border duration-300 border-gray-300 rounded w-44 focus:ring-2 focus:ring-blue-500 focus:outline-none' />
                </div>    
                <div className='flex w-full mt-5'>
                    <h3 className='w-[23%] mt-1'>Description</h3>
                    <textarea className='resize-none h-20 w-[24rem] duration-300 px-1.5 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none'></textarea>
                </div>
                <div className='flex mt-8 w-full'>
                    <h3 className='w-[30.8%] mt-1.5 text-gray-700'>Department agents</h3>
                    <div className='mt-1.5 w-full'>
                        {add ? 
                            <div className='bg-[#D8D8D8] font-bold py-1  px-2.5 rounded w-[5rem]'>
                                <button className='flex' onClick={() => setAdd(false)}><IconMinus className='h-3 w-3 mt-0.5 mr-0.5'/> Zac Ellis</button>
                            </div>
                        : 
                            <p className='text-gray-500'>No agents yet</p>
                        }    
                        <hr className='mt-8'/>
                        {!add ? <p className='text-gray-500 mt-7'>Select at least 1 active agent to add to this department</p> : <p className='text-gray-500 mt-7'>No agents left to add</p> }
                        {!add ?
                            <div className='bg-[#D8D8D8] font-bold py-1  px-2.5 rounded w-[5rem] mt-3 '>
                                <button className='flex' onClick={() => setAdd(true)}><IconPlus className='h-3 w-3 mt-0.5 mr-0.5'/> Zac Ellis</button>
                            </div>
                        :''}    
                    </div>  
                </div>
                <hr className='bg-gray-200 mt-12' />
                <div className='flex mt-4 flex gap-3'>
                    <button type='submit' className='py-1.5 px-3 bg-[#1F73B7] shadow-none text-white rounded font-bold'>Create department</button>
                    <button className='py-1.5 px-3 border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded' type='button' onClick={() => navigate('/zendesk/departments')}>Cancel</button>
                </div>
            </div>   
            <div className='w-56'>
                <h2 className='text-lg font-bold p-0 mt-6'>Quick tips</h2>
                <div className='flex'>
                    <hr className='bg-blue-500 h-[3px] w-32' />
                    <hr className='bg-gray-500 h-[1.2px] mt-0.5 w-full' />
                </div>
                <h2 className='text-[14px] mt-3 font-bold'>Assign agents to departments</h2>
                <p className='mt-1.5 text-gray-500 leading-[17px] w-[15rem]'>You can assign agents to the departments you have created (e.g. sales, technical support, etc). Once configured, visitors can direct chat requests towards the appropriate department.</p>
                <h2 className='text-[14px] mt-3 font-bold'>Enable pre-chat forms</h2>
                <p className='mt-1.5 text-gray-500 leading-[17px] w-[15rem]'>Visitors can select a department before starting a chat, using the pre-chat form (located in Widget &gt; Forms).</p>
            </div>
        </div>     
    </div>
  )
}
