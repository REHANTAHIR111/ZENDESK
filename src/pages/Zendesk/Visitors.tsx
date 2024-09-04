import React, { Fragment, useEffect, useState } from 'react';
import IconCaretDown from '../../components/Icon/IconCaretDown';
import { Transition, Dialog } from '@headlessui/react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';

export default function Visitors() {

  const dispatch = useDispatch();
  const [visselect, setvisselect] = useState<any>('');
  const [visual, setvisual] = useState<any>(false);
  const [list, setlist] = useState<any>(false);

  useEffect(() => {
    dispatch(setPageTitle('Visitors'));
  }, []);

  //modal
  const [modal, setModal] = useState<any>(false);

  const visOPtions = [
    { value: '0', label: 'Activity' },
    { value: '1', label: 'Page title' },
    { value: '2', label: 'Page Url' },
    { value: '3', label: 'Country' },
    { value: '4', label: 'Serving agents' },
    { value: '5', label: 'Departments' },
    { value: '6', label: 'Browser' },
    { value: '7', label: 'Search engine' },
    { value: '8', label: 'Search terms' },
  ];


  function visualNext() {
    setvisual(true);
  }
  function listprev() {
    setlist(true);
    setvisual(false);
  }

  return (
    <>
      <div>
        <div className='flex justify-between mt-0'>
          <div className='flex'>
            <button className={`btn btn-sm shadow-none font-bold ${!visual ? 'bg-gray-200' : ''} h-7.5 w-12 rounded-none rounded-l`} onClick={() => {
              listprev();
            }}>List</button>
            <button className={`btn btn-sm shadow-none font-bold ${visual ? 'bg-gray-200' : ''} h-7.5 w-14 rounded-none rounded-r`} onClick={() => {
              visualNext();
            }}>Visual</button>
          </div>
          <h4 className='font-normal'>Total:</h4>
        </div>
        <hr className='bg-gray-200 h-[0.0rem] w-full mt-2.5' />
        <div className='flex justify-between mt-2'>
          <div className='flex gap-3'>
            <button className='btn btn-md shadow-none border-1.5 h-8 w-8 px-0 pb-2 rounded-full hover:bg-gray-200 focus:border-blue-500'><IconCaretDown /></button>
            <select id="countries" className="form-select border-gray-300 text-gray-900 text-[13px] font-bold rounded h-[2rem] p-0 px-2 w-60">
              <option selected>Group by Activity</option>
              <option value="1">Group by Page title</option>
              <option value="2">Group by Page Url</option>
              <option value="3">Group by Country</option>
              <option value="4">Group by Serving agents</option>
              <option value="5">Group by Departments</option>
              <option value="6">Group by Browser</option>
              <option value="7">Group by Search engine</option>
              <option value="8">Group by Search terms</option>
            </select>
          </div>
          <input type="search" className={`form-input w-[11rem] h-[2rem] rounded-full ${visual ? 'cursor-not-allowed opacity-70' : ''}`} disabled={visual} placeholder='Search...' />
        </div>
        <hr className='bg-gray-200 h-[0.0rem] w-full mt-2' />
        {visual ?
          <div className='flex justify-end mt-3 gap-3 text-xs w-full'>
            <div className='mr-4'>
              <div className='mt-1 flex'>
                  <p className={`w-2 h-2 mt-1.5 rounded-full bg-[#1EB848]`}>&nbsp;</p>
                  <span className='text-xs ml-2'>INCOMING</span>
                </div>
                <div className='mt-2 flex'>
                  <p className={`w-2 h-2 mt-1.5 rounded-full bg-[#FFB24D]`}>&nbsp;</p>
                  <span className='text-xs ml-2'>ASSIGNED</span>
                </div>
                <div className='mt-2 flex'>
                  <p className={`w-2 h-2 mt-1.5 rounded-full bg-[#999999]`}>&nbsp;</p>
                  <span className='text-xs ml-2'>CLICKED</span>
                </div>
                <div className='mt-2 flex'>
                  <p className={`w-2 h-2 mt-1.5 rounded-full bg-[#999999]`}>&nbsp;</p>
                  <span className='text-xs ml-2'>SERVED</span>
                </div>
                <div className='mt-2 flex'>
                  <p className={`w-2 h-2 mt-1.5 rounded-full bg-[#999999]`}>&nbsp;</p>
                  <span className='text-xs ml-2'>TRIGGERED</span>
                </div>
                <div className='mt-2 flex'>
                  <p className={`w-2 h-2 mt-1.5 rounded-full bg-[#999999]`}>&nbsp;</p>
                  <span className='text-xs ml-2'>ACTIVE</span>
                </div>
                <div className='mt-2 flex'>
                  <p className={`w-2 h-2 mt-1.5 rounded-full bg-[#999999]`}>&nbsp;</p>
                  <span className='text-xs ml-2'>IDLE</span>
                </div>
            </div>
          </div>
          : list ?
            <>
              <div className='flex justify-center mt-3 gap-3'>
                <p className='mt-1.5 font-light text-base text-gray-600'>No active visitors</p>
                <button className='btn btn-sm rounded shadow-none hover:bg-gray-100 font-bold'>Simulator visitor</button>
              </div>
              <div className='flex justify-center mt-3 gap-3'>
                <a  className='text-blue-700 hover:underline font-light text-base' onClick={()=>setModal(true)}>Watch how the Visitor List works</a>
              </div>
            </>
            :
            <>
              <div className='flex justify-center mt-3 gap-3'>
                <p className='mt-1.5 font-normal'>No active visitors</p>
                <button className='btn btn-sm rounded shadow-none hover:bg-gray-100 '>Simulator visitor</button>
              </div>
              <div className='flex justify-center mt-3 gap-3'>
                <a className='text-blue-700 hover:underline font-light text-base cursor-pointer' onClick={() => setModal(true)}>Watch how the Visitor List works</a>
              </div>
            </>
          }
      </div>
      <Transition appear show={modal} as={Fragment}>
          <Dialog as="div" open={modal} onClose={() => setModal(false)}>
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
              >
                  <div className="fixed inset-0" />
              </Transition.Child>
              <div className="fixed inset-0 bg-[black]/60 z-[999]">
                  <div className="flex items-start justify-center min-h-screen px-4">
                      <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                      >
                          <Dialog.Panel className="panel border-0 rounded w-full relative max-w-[51rem] h-[28rem] p-0 my-40 pt-1.5 pb-1 text-black dark:text-white-dark">
                              <div className="flex items-center rounded-t-lg justify-end px-5 py-3 ">
                                  <button onClick={() => {
                                      setModal(false)
                                  }} type="button" className="text-white-dark hover:text-dark border hover:bg-gray-200 duration-150 shadow-none rounded-full py-1 px-1">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="black"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                      >
                                          <line x1="18" y1="6" x2="6" y2="18"></line>
                                          <line x1="6" y1="6" x2="18" y2="18"></line>
                                      </svg>
                                  </button>
                              </div>
                              <h1 className='font-bold text-lg ml-8'>Tutorial videos</h1>
                              <div className='ml-6 mt-1 w-[30%]'>
                                  <button className={`py-1.5 pl-1.5 m-0 font-bold text-[12.5px] border-0 w-44 pr-[4rem] rounded-sm hover:bg-gray-200`}>Embed widget chat</button>
                                  <button className={`py-1.5 pl-1.5 m-0 font-bold text-[12.5px] border-0 w-44 pr-[2.3rem] rounded-sm hover:bg-gray-200`}>Chat with your customer</button>
                                  <button className={`py-1.5 pl-1.5 m-0 font-bold text-[12.5px] border-0 w-44 pr-[3.1rem] rounded-sm hover:bg-gray-200`}>Automatic translation</button>
                                  <button className={`py-1.5 pl-1.5 m-0 font-bold text-[12.5px] border-0 w-44 pr-[4.7rem] rounded-sm hover:bg-gray-200`}>Create shortcuts</button>
                                  <button className={`py-1.5 pl-1.5 m-0 font-bold text-[12.5px] border-0 w-44 pr-[3.8rem] rounded-sm hover:bg-gray-200`}>Browse the visitors</button>
                                  <button className={`py-1.5 pl-1.5 m-0 font-bold text-[12.5px] border-0 w-44 pr-[3rem] rounded-sm hover:bg-gray-200`}>Widget customization</button>
                                  <button className={`py-1.5 pl-1.5 m-0 font-bold text-[12.5px] border-0 w-44 pr-[5.2rem] rounded-sm hover:bg-gray-200`}>Create triggers</button>
                              </div>
                              <div className='h-[3.2rem] w-full bg-[#F4F4F4] mt-8 border-t rounded-b border-gray-300 flex absolute bottom-0 justify-end pt-2.5 pr-2'>
                                  <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded h-8 w-[4.7rem]' onClick={() => setModal(false)}>Dismiss</button>
                              </div>
                          </Dialog.Panel>
                      </Transition.Child>
                  </div>
              </div>
          </Dialog>
        </Transition>
      </>
  )
}
