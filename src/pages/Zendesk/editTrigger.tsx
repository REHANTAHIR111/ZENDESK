import { useState } from 'react'
import IconInfoCircle from '../../components/Icon/IconInfoCircle';
import IconPlus from '../../components/Icon/IconPlus';
import IconMinus from '../../components/Icon/IconMinus';
import { useNavigate } from 'react-router-dom';
import IconPlayCircle from '../../components/Icon/IconPlayCircle';

export default function addTrigger() {

  const navigate = useNavigate();
  const [nullTextarea, setnullTextarea] = useState<any>('');
  const [nullInput, setnullInput] = useState<any>('');
  const [visual, setVisual] = useState<any>(true);
  const [developer, setDeveloper] = useState<any>(false);
  const [inputFields, setInputFields] = useState([{ value: '' }]);
  const [input, setInput] = useState([{ value: '' }]);


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

  //addmore 2---
  const handleAdd = () => {
    setInput([...input, { value: '' }]);
   };

   const handleRemove = (key: number) => {
       const fields = [...input];
       fields.splice(key, 1);
       setInput(fields);
   };

   const handleChange = (key: number, event: any) => {
       const fields = [...input];
       fields[key].value = event.target.value;
       setInput(fields);
   };

   console.log(input)

  return (
    <div>
        <div className='gap-8 w-full mt-4 flex text-gray-600 font-normal text-[12.5px] leading-4'>
            <div className='w-[49%]'>
                <div className='flex w-full'>
                      <label className='w-[22%]'>Trigger status</label>
                      <div>
                          <div className='flex gap-3'>
                              <input type="checkbox" className='w-3 h-3' />
                              <label>Enable trigger</label>
                          </div>
                          <p className='mt-1 text-gray-500 ml-6 mb-3'>1 of 2 Triggers used. <a target='_blank' className='hover:underline text-blue-700' href='https://teamsupport1.zendesk.com/admin/billing'>Upgrade now</a> to increase the feature limit.</p>
                      </div>
                </div>     
                <hr className='my-6'/>  
                <div className='flex w-full mt-4.5'>
                    <label className='w-[22%] mt-1'>Trigger name</label>
                    <div>
                      <input value={nullInput} onChange={(e) => setnullInput(e.target.value)} type='text' className={`${!nullInput ? 'focus:outline-none focus:border-red-500 focus:ring-[2.5px] focus:ring-[#EDB8BC]' : 'focus:outline-none focus:border-blue-500 focus:ring-[2.5px] focus:ring-blue-400'} w-44 rounded py-1.5 px-1 duration-300 border duration-300`}/>
                      {!nullInput ? <p className='text-red-600 mt-2 gap-1 flex'><IconInfoCircle className='h-4 w-4'/>Enter a value</p> : ''}
                    </div>
                </div>
                <div className='flex w-full mt-3'>
                    <label className='w-[22%] mt-1.5'>Description</label>
                    <div>
                      <textarea value={nullTextarea} onChange={(e) => setnullTextarea(e.target.value)} className={`${!nullTextarea ? 'focus:outline-none focus:border-red-500 focus:ring-[2.5px] focus:ring-[#EDB8BC]' : 'focus:outline-none focus:border-blue-500 focus:ring-[2.5px] focus:ring-blue-400'} w-[16rem] resize-none h-12 p-2 border border-gray-300 mt-2 rounded duration-500`}></textarea>
                      {!nullTextarea ? <p className='text-red-600 mt-2 gap-1 flex'><IconInfoCircle className='h-4 w-4'/>Enter a value</p> : ''}
                    </div>
                </div> 
                <div className='flex w-full mt-6'>
                      <label className='w-[22%]'>Fire only once per visitor</label>
                      <div className='flex gap-3'>
                          <input type="checkbox" className='w-3 h-3' />
                          <label className='text-gray-500'>Each visitor will receive this message only once</label>
                      </div>
                </div>  
                <hr className='my-4'/>  
                <div className='justify-between flex mt-5'>
                    <div>
                        <h2 className='text-[1rem] text-gray-700 font-normal mt-2'>Customize trigger</h2>
                    </div>
                    <div className='flex'>
                        <button className={`duration-300 py-1.5 px-2.5 text-[12.5px] rounded-none focus:outline-none border focus:ring-2 focus:ring-[#A3C1DA] rounded-l font-bold ${!developer ? 'bg-gray-200' : ''}`} onClick={() => { setVisual(true), setDeveloper(false) }}>Visual</button>
                        <button className={`duration-300 py-1.5 px-2.5 text-[12.5px] rounded-none rounded-r focus:outline-none focus:ring-2 focus:ring-[#A3C1DA] font-bold border ${developer ? 'bg-gray-200' : ''}`} onClick={() => { setVisual(false), setDeveloper(true) }}>Developer</button>
                    </div>
                </div>
                {visual ? 
                    <>
                      <div className='flex w-full mt-4.5'>
                        <label className='w-[22%] mt-1.5'>Run trigger</label>
                        <select id="countries"  className="form-select rounded w-[20rem] h-[1.9rem] py-0 px-2 text-[12.5px] font-bold">
                                <option selected>When a visitor has loaded the chat widget</option>
                                <option>When a visitor request a chat</option>
                                <option>When a chat message is sent</option>
                        </select>
                      </div>
                      <div className='flex w-full mt-2'>
                          <label className='w-[22%] mt-1.5'>Check condition</label>
                          <select id="countries"  className="form-select rounded w-[20rem] h-[1.9rem] py-0 px-2 text-[12.5px] font-bold">
                                  <option selected>When a visitor has loaded the chat widget</option>
                                  <option>When a visitor request a chat</option>
                                  <option>When a chat message is sent</option>
                          </select>
                      </div>
                      <div className='flex w-full mt-3'>
                          <div className='w-full'>   
                              {inputFields.map((field, index) => (
                                  <div className={`${inputFields?.length > 1 ? 'mb-2.5' : ''} flex justify-between p-3 bg-[#F1F7FB] rounded gap-2`} key={index}>
                                      <div>
                                        <select className={`${!field.value || field.value == 'Select condition' ? 'focus:outline-none border-red-500 ring-[2.5px] ring-[#EDB8BC]' : 'focus:outline-none focus:border-blue-500 focus:ring-[2.5px] focus:ring-blue-400'} rounded resize-none h-8 form-select w-44 mt-1 pl-2 p-1 text-[13px] font-normal`} required value={field.value} onChange={(event) => handleInputChange(index, event)}>
                                          <option selected>Select condition</option>
                                          <option>When a visitor request</option>
                                          <option>When a chat message</option>
                                        </select>
                                        {!field.value || field.value == 'Select condition' ? <p className='text-red-600 mt-2 gap-1 flex'><IconInfoCircle className='h-4 w-4'/>Select condition</p> : ''}
                                      </div>
                                      {field.value == 'When a visitor request' || field.value == 'When a chat message' ? 
                                        <div className='flex gap-2'>
                                            <select className={`focus:outline-none focus:border-blue-500 focus:ring-[2.5px] focus:ring-blue-400 rounded resize-none mt-1 h-8 form-select w-44 pl-2 p-1 text-[13px] font-normal`}>
                                                <option selected>Equal</option>
                                                <option>Equal</option>
                                                <option>Less than</option>
                                                <option>greater than</option>
                                            </select>
                                            <input type="text" className='form-input h-8 w-44 mt-1 pl-2 p-1' />
                                        </div>
                                      : ''}
                                      <div className='flex gap-2'>
                                          <div  className='space-x-1.5'>
                                              {inputFields.length >= 1 ? 
                                                  <button className={`px-[0.4rem] mt-1 py-[0.4rem] rounded-full border hover:bg-[#E9EBED] cursor-pointer`} onClick={() => {handleRemoveField(index)}} disabled={inputFields?.length == 1}><IconMinus className='w-4 h-4'/></button> : ''}
                                                  <button className={`px-[0.4rem] mt-1 py-[0.4rem] rounded-full border hover:bg-[#E9EBED]`} onClick={handleAddField}>
                                                      <IconPlus className='w-4 h-4'/>
                                                  </button>                                            
                                          </div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                      <p className='text-xs pt-2.5'>Perform the following actions</p>
                      <div className='flex w-full mt-2.5'>
                          <div className='w-full'>   
                              {input.map((field, key) => (
                                  <div className={`${input?.length > 1 ? 'mb-2.5' : ''} flex justify-between p-3 bg-[#F1F7FB] rounded gap-2`} key={key}>
                                      <div>
                                        <select className={`${!field.value || field.value == 'Select action' ? 'focus:outline-none border-red-500 ring-[2.5px] ring-[#EDB8BC]' : 'focus:outline-none focus:border-blue-500 focus:ring-[2.5px] focus:ring-blue-400'} rounded resize-none h-8 form-select w-44 mt-1 pl-2 p-1 text-[13px] font-normal`} required value={field.value} onChange={(event) => handleChange(key, event)}>
                                          <option selected>Select action</option>
                                          <option>When a visitor request</option>
                                          <option>When a chat message</option>
                                        </select>
                                        {!field.value || field.value == 'Select action' ? <p className='text-red-600 mt-2 gap-1 flex'><IconInfoCircle className='h-4 w-4'/>Select action</p> : ''}
                                      </div>
                                      {field.value == 'When a visitor request' || field.value == 'When a chat message' ? 
                                        <div className='flex gap-2'>
                                            <select className={`focus:outline-none focus:border-blue-500 focus:ring-[2.5px] focus:ring-blue-400 rounded resize-none mt-1 h-8 form-select w-44 pl-2 p-1 text-[13px] font-normal`}>
                                                <option selected>Equal</option>
                                                <option>Equal</option>
                                                <option>Less than</option>
                                                <option>greater than</option>
                                            </select>
                                            <input type="text" className='form-input h-8 w-44 mt-1 pl-2 p-1' />
                                        </div>
                                      : ''}
                                      <div className='flex gap-2'>
                                          <div className='space-x-1.5'>
                                            {input.length >= 1 ? 
                                                <button className={`px-[0.4rem] mt-1 py-[0.4rem] rounded-full border hover:bg-[#E9EBED] cursor-pointer`} onClick={() => handleRemove(key)} disabled={input?.length == 1}><IconMinus className='w-4 h-4'/></button> : ''}
                                                <button className={`px-[0.4rem] mt-1 py-[0.4rem] rounded-full border hover:bg-[#E9EBED]`} onClick={handleAdd}>
                                                    <IconPlus className='w-4 h-4'/>
                                                </button>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                    </>
                    : 
                    <>
                      <textarea className='mt-4 w-full rounded h-[18rem] p-3 resize-none border border-gray-300 text-xs focus:outline-none focus:border-blue-500 focus:ring-[2.5px] focus:ring-blue-400 duration-300'></textarea>
                    </>
                }
                <hr className='bg-gray-200 mt-8' />
                  <div className='flex mt-4 flex gap-3'>
                      <button type='submit' className='py-1.5 border px-3 bg-[#3681BE] hover:bg-[#5293C7] text-white rounded font-bold'>Save changes</button>
                      <button className='py-1.5 px-3 border border-gray-300 hover:bg-gray-200 font-bold rounded' type='button' onClick={() => {localStorage.setItem('header', 'Triggers'), navigate('/zendesk/triggers')}}>Cancel</button>
                  </div>
             </div>
             <div className='w-60'>
                <h2 className='text-lg font-bold p-0'>Quick tips</h2>
                <div className='flex'>
                    <hr className='bg-blue-500 h-[3px] w-32' />
                    <hr className='bg-gray-500 h-[1.2px] mt-0.5 w-full' />
                </div>
                <h2 className='text-[14px] mt-3 font-bold'>Create triggers</h2>
                <p className='mt-1.5 text-gray-500 leading-[17.5px]'>Triggers let you create automated actions based on specific criteria. For example, you can create a trigger to assist visitors who get stuck on a particular page of your website. <a target='_blank' href='https://support.zendesk.com/hc/en-us/articles/4408821714458-Enabling-push-notifications-for-the-Chat-SDK-for-the-mobile-app' className='text-blue-700 hover:underline'>Learn more</a></p>
                <p className='mt-3 text-gray-500 leading-[17.5px]'>Let's say a visitor is on your product page for more than 30 seconds, with a trigger you can automatically ask them, “Would you like more information about the product?”.</p>       
            </div>
        </div>           
    </div>
  )
}
