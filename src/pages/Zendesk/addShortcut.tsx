import { useEffect, useState, Fragment } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import IconPlus from '../../components/Icon/IconPlus';
import { Transition, Dialog } from '@headlessui/react';
import IconMinus from '../../components/Icon/IconMinus';
import { useNavigate } from 'react-router-dom';
import IconPlayCircle from '../../components/Icon/IconPlayCircle';


export default function addShortcut() {
  const dispatch = useDispatch();
  const [inputFields, setInputFields] = useState([{ value: '' }]);
  const [modal, setModal] = useState<any>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const options = ["Visitor name", "Visitor email", "Visitor country", "Visitor city", "Visitor browser", "Visitor name", "Visitor email"];

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option); 
    setIsOpen(false);
  };

  const navigate = useNavigate();

    useEffect(() => {
        dispatch(setPageTitle('Add shortcut')); 
      }, []);

      //addmore ---
    const handleAddField = () => {
        setInputFields([...inputFields, { value: '' }]);
       };
   
       const handleRemoveField = (index: number) => {
           const fields = [...inputFields];
           fields.splice(index, 1);
           setInputFields(fields);
       };
   
       const handleInputChange = (index: number, event: any) => {
           const fields = [...inputFields];
           fields[index].value = event.target.value;
           setInputFields(fields);
       };

  return (
    <div>
        <div className='relative'>
            {isOpen && (
                <div className="fixed left-[48rem] top-16 w-[16rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <ul className="py-4">
                        {options.map((option) => (
                        <li key={option}>
                            <button
                            onClick={() => handleOptionSelect(option)}
                            className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-blue-100"
                            >
                            {option}
                            </button>
                        </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
        <div className='gap-8 w-full mt-4 flex text-gray-600 font-normal text-[12.5px] leading-4'>
            <div className='w-[48.5%]'>
                <div className='flex w-full'>
                    <label className='w-[22%] mt-1'>Shortcut</label>
                    <input type='text' className='w-44 rounded py-1.5 px-1 duration-300 border focus:ring focus:border-blue-500 focus:ring-blue-400'/>
                </div>
                <div className='flex w-full mt-4.5'>
                    <label className='w-[22%] mt-1'>Available for</label>
                    <select id="countries"  className="form-select rounded w-[8rem] h-[1.8rem] py-0 px-2">
                            <option selected>All agents</option>
                            <option disabled>Agents in department</option>
                            <option>Me only</option>
                    </select>
                </div>
                <div className='flex w-full mt-4.5'>
                    <label className='w-[22%] mt-1.5'>Message</label>
                    <textarea value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className='w-[60%] rounded py-1.5 px-1 h-[6rem] duration-300 border border-gray-200 focus:ring focus:border-blue-500 focus:ring-blue-400'></textarea>
                </div>  
                <div className='flex w-[81%] justify-end mt-2'>
                    <a className='underline cursor-pointer' onClick={handleButtonClick}>Insert placeholder</a>
                </div>
                <div className='flex w-full mt-4.5'>
                    <h3 className='w-[22%] mt-2'>Options</h3>
                    <div>   
                        {inputFields.map((field, index) => (
                            <div className='flex gap-2' key={index}>
                                <input type="text" className={`rounded h-8 form-input w-44 mt-1 pl-2 p-1 text-[13px] font-normal`} required value={field.value} onChange={(event) => handleInputChange(index, event)}/>
                                {inputFields.length > 1 ? <button className={`px-[0.4rem] mt-1 py-[0.3rem] rounded-full border hover:bg-[#E9EBED]`} onClick={() => handleRemoveField(index)} ><IconMinus className='w-4 h-4'/></button> : ''}
                                    {index === inputFields?.length - 1 && inputFields?.length >= 1 ? 
                                    <button className={`px-[0.4rem] mt-1 py-[0.3rem] rounded-full border hover:bg-[#E9EBED]`} onClick={handleAddField}>
                                        <IconPlus className='w-4 h-4'/>
                                    </button>
                                    : null}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex w-full mt-4.5'>
                    <label className='w-[22%] mt-2'>Tags</label>
                    <div className='w-[60%]'>
                        <select id="countries"  className="form-select rounded h-[2rem] py-0 px-2">
                            <option selected>All agents</option>
                            <option disabled>Agents in department</option>
                            <option>Me only</option>
                        </select>
                        <p className='mt-2 text-gray-500'> Automatically add the above tags to a chat when you use this shortcut</p>
                    </div>
                </div>
                <hr className='bg-gray-200 mt-4' />
                <div className='flex mt-4 flex gap-3'>
                    <button type='submit' className='py-1.5 border px-3 bg-[#f8f9f9] shadow-none text-gray-400 rounded font-bold'>Create shortcut</button>
                    <button className='py-1.5 px-3 border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded' type='button' onClick={() => {localStorage.setItem('header', 'Shortcuts'), navigate('/zendesk/shortcuts')}}>Cancel</button>
                </div>
            </div>
            <div className='w-44'>
                <h2 className='text-lg font-bold p-0'>Quick tips</h2>
                <div className='flex'>
                    <hr className='bg-blue-500 h-[3px] w-32' />
                    <hr className='bg-gray-500 h-[1.2px] mt-0.5 w-full' />
                </div>
                <div className='w-[84%] h-[82px] mt-3 rounded flex justify-center items-center bg-[url("../../public/agent.png")] relative bg-cover'>
                    <button onClick={() => setModal(true)}><IconPlayCircle className='h-10 w-10 bg-white rounded-full m-0'/></button>
                </div>
                <h2 className='text-[14px] mt-3 font-bold'>Create shortcuts</h2>
                <p className='mt-1.5 text-gray-500 leading-[17.5px]'>Set up a shortcut by entering a shortcut name (example, “hi”) and the message (example, “hello, how can I help you today?”).You can also add multiple choice options to let your visitors choose a reply from a list.</p>
                <h2 className='text-[14px] mt-3 font-bold'>Chat tags</h2>
                <p className='mt-1.5 text-gray-500 leading-[17.5px]'>Include tags in shortcuts to automatically tag the chat when you use them. <a target='_blank' href='https://support.zendesk.com/hc/en-us/articles/4408821714458-Enabling-push-notifications-for-the-Chat-SDK-for-the-mobile-app' className='text-blue-700 hover:underline'>Learn more</a></p>
                <h2 className='text-[14px] mt-3 font-bold'>While chatting</h2>
                <p className='mt-1.5 text-gray-500 leading-[17.5px]'>While in a chat, start typing and your shortcut messages will auto-complete. You can also type a forward slash (/) followed by the shortcut name.</p>
                <a target='_blank' href='https://support.zendesk.com/hc/en-us/articles/4408821714458-Enabling-push-notifications-for-the-Chat-SDK-for-the-mobile-app' className='text-blue-700 hover:underline mt-1.5'>Learn more about shortcut</a>
            </div>
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
    </div>
  )
}

