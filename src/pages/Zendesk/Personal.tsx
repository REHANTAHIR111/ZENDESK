import React, { useEffect, useRef, useState } from 'react'
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import sound1 from '../../../public/sound1.mp3';
import sound2 from '../../../public/sound2.mp3';
import sound3 from '../../../public/sound3.mp3';
import sound4 from '../../../public/sound4.mp3';
import sound5 from '../../../public/sound5.mp3';
import IconWarning from '../../components/Icon/IconWarning';

export default function Personal() {

  const dispatch = useDispatch();
  const [profile, setProfile] = useState<any>(true);
  const [sound, setSound] = useState<any>(false);
  const [idleTime, setidleTime] = useState<any>(false);
  const [emailRepo, setemailRepo] = useState<any>(false);
  const [labs, setLabs] = useState<any>(false);
  const [remove, setRemove] = useState<any>(true);
  const img = 'https://via.placeholder.com/150';
  const [image, setImage] = useState<any>(img);
  const fileInputRef = useRef<any>(null);
  const [selectedSound, setSelectedSound] = useState<any>();
  const [selectedSound2, setselectedSound2] = useState<any>();
  const [selectedSound3, setselectedSound3] = useState<any>();
  const [selectedSound4, setselectedSound4] = useState<any>();
  const [selectedSound5, setselectedSound5] = useState<any>();
  const [selectedSound6, setselectedSound6] = useState<any>();
  const [idletimeOf, setidletimeOf] = useState<any>(false);
  const [idletimeOn, setidletimeOn] = useState<any>(true);


  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      
      reader.onloadend = () => {
        setImage(reader.result as string); 
        setRemove(false)
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    dispatch(setPageTitle('Personal'));
  }, []);

  if(selectedSound == sound1){
    const audio = new Audio(sound1);
    audio.play(); 
  }
  else if(selectedSound == sound2){
    const audio = new Audio(sound2);
    audio.play(); 
  }
  else if(selectedSound == sound3){
    const audio = new Audio(sound3);
    audio.play(); 
  }
  else if(selectedSound == sound4){
    const audio = new Audio(sound4);
    audio.play(); 
  }
  else if(selectedSound == sound5){
    const audio = new Audio(sound5);
    audio.play(); 
  }

  if(selectedSound2 == sound1){
    const audio = new Audio(sound1);
    audio.play(); 
  }
  else if(selectedSound2 == sound2){
    const audio = new Audio(sound2);
    audio.play(); 
  }
  else if(selectedSound2 == sound3){
    const audio = new Audio(sound3);
    audio.play(); 
  }
  else if(selectedSound2 == sound4){
    const audio = new Audio(sound4);
    audio.play(); 
  }
  else if(selectedSound2 == sound5){
    const audio = new Audio(sound5);
    audio.play(); 
  }

  if(selectedSound3 == sound1){
    const audio = new Audio(sound1);
    audio.play(); 
  }
  else if(selectedSound3 == sound2){
    const audio = new Audio(sound2);
    audio.play(); 
  }
  else if(selectedSound3 == sound3){
    const audio = new Audio(sound3);
    audio.play(); 
  }
  else if(selectedSound3 == sound4){
    const audio = new Audio(sound4);
    audio.play(); 
  }
  else if(selectedSound3 == sound5){
    const audio = new Audio(sound5);
    audio.play(); 
  }

  if(selectedSound4 == sound1){
    const audio = new Audio(sound1);
    audio.play(); 
  }
  else if(selectedSound4 == sound2){
    const audio = new Audio(sound2);
    audio.play(); 
  }
  else if(selectedSound4 == sound3){
    const audio = new Audio(sound3);
    audio.play(); 
  }
  else if(selectedSound4 == sound4){
    const audio = new Audio(sound4);
    audio.play(); 
  }
  else if(selectedSound4 == sound5){
    const audio = new Audio(sound5);
    audio.play(); 
  }
  
  if(selectedSound5 == sound1){
    const audio = new Audio(sound1);
    audio.play(); 
  }
  else if(selectedSound5 == sound2){
    const audio = new Audio(sound2);
    audio.play(); 
  }
  else if(selectedSound5 == sound3){
    const audio = new Audio(sound3);
    audio.play(); 
  }
  else if(selectedSound5 == sound4){
    const audio = new Audio(sound4);
    audio.play(); 
  }
  else if(selectedSound5 == sound5){
    const audio = new Audio(sound5);
    audio.play(); 
  }

  if(selectedSound6 == sound1){
    const audio = new Audio(sound1);
    audio.play(); 
  }
  else if(selectedSound6 == sound2){
    const audio = new Audio(sound2);
    audio.play(); 
  }
  else if(selectedSound6 == sound3){
    const audio = new Audio(sound3);
    audio.play(); 
  }
  else if(selectedSound6 == sound4){
    const audio = new Audio(sound4);
    audio.play(); 
  }
  else if(selectedSound6 == sound5){
    const audio = new Audio(sound5);
    audio.play(); 
  }
  return (
    <div>
          <div className='flex'>
                <button className={`${!sound && !idleTime && !emailRepo && !labs ? 'bg-gray-200' : ''} h-7  focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200 btn btn-sm shadow-none font-[sans-serif] text-[11.5px] px-2 duration-150 hover:bg-gray-50 border rounded-none rounded-l`} onClick={() => {
                setProfile(true),
                  setSound(false),
                  setidleTime(false),
                  setemailRepo(false),
                  setLabs(false)
              }}>
                Profile
              </button>
              <button className={`h-7 px-2.5 rounded-none duration-150 border hover:bg-gray-50 btn btn-sm  focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200  shadow-none font-[sans-serif] text-[11.5px] ${sound ? 'bg-gray-200' : ''}`} onClick={() => {
                setProfile(false),
                  setSound(true),
                  setidleTime(false),
                  setemailRepo(false),
                  setLabs(false)
              }}>
                Sound & notifications
              </button>

              <button className={`h-7 px-2.5 rounded-none duration-150 border hover:bg-gray-50 btn btn-sm  focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200  shadow-none font-[sans-serif] text-[11.5px] ${idleTime ? 'bg-gray-200' : ''}`} onClick={() => {
                setProfile(false),
                  setSound(false),
                  setidleTime(true),
                  setemailRepo(false),
                  setLabs(false)
              }}>
                Idle timeout
              </button>

              <button className={`h-7 px-2.5 rounded-none duration-150 border hover:bg-gray-50 btn btn-sm  focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200  shadow-none font-[sans-serif] text-[11.5px] ${emailRepo ? 'bg-gray-200' : ''}`} onClick={() => {
                setProfile(false),
                  setSound(false),
                  setidleTime(false),
                  setemailRepo(true),
                  setLabs(false)
              }}>
                Email reports
              </button>

              <button className={`h-7 px-2.5 rounded-none rounded-r duration-150 border hover:bg-gray-50 btn btn-sm focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200  shadow-none font-[sans-serif] text-[11.5px] ${labs ? 'bg-gray-200' : ''}`} onClick={() => {
                setProfile(false),
                  setSound(false),
                  setidleTime(false),
                  setemailRepo(false),
                  setLabs(true)
              }}>
                Labs
              </button>
          </div>
          <hr className='bg-gray-200 h-[0.0rem] w-full mt-2.5' />
          <div className='grid grid-cols-2'>
              {profile ? 
                  <div>
                      <h2 className='text-[1.2rem] text-[#4A4A4A] font-bold p-0 mt-9'>Profile</h2>
                      <div className='flex mt-2 mb-4'>
                          <hr className='bg-blue-500 h-0.5 w-16' />
                          <hr className='bg-gray-200 h-0.5 w-full' />
                      </div>
                      <div className='flex w-full font-normal text-[12.5px] mt-8'>
                          <label className='w-[22%]'>Name</label>
                          <h3>Zac Ellis</h3>
                      </div>
                      <div className='flex w-full font-normal text-[12.5px] mt-6'>
                          <label className='w-[22%]'>Email</label>
                          <h3>hdesign316@gmail.com</h3>
                      </div>
                      <div className='flex w-full font-normal text-[12.5px] mt-6'>
                          <label className='w-[22%]'>Profile</label>
                          <div>
                              <a className='hover:underline text-blue-600' href='https://teamsupport1.zendesk.com/admin/staff/5891754072861'>Edit profile</a>
                              <label className='text-gray-500 mt-2.5'>Update your name email and password</label>
                          </div>
                      </div>
                      <div className='flex w-full font-normal text-[12.5px] mt-4'>
                          <label className='w-[22%]'>Display name</label>
                          <input type='text' className='w-44 rounded p-1 border focus:ring focus:ring-blue-400'/>
                      </div>
                      <div className='flex w-full font-normal text-[12.5px] mt-5'>
                          <label className='w-[22%]'>Display name</label>
                          <input type='text' className='w-44 rounded p-1 border focus:ring focus:ring-blue-400'/>
                      </div>
                      <div className='w-full flex mt-6'>
                          <div className='w-[22%]'>
                              <h3 className='text-[13px] mt-2.5 font-normal'>Avatar</h3>
                          </div>
                          <img src={image} className='w-[3.6rem] h-[3.6rem]' />
                          <div className='ml-4'>
                              <div className='flex gap-3'>
                                <button type='button' className='h-[1.9rem] px-3 text-gray-500 py-1.5 font-bold rounded text-xs border hover:bg-gray-200 duration-150' onClick={handleButtonClick}>Upload image</button>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleImageChange}
                                />
                                <button type='button' className={`${remove ? 'bg-[#F8F9F9]' : ''} h-[1.9rem] px-2 py-1.5 text-gray-500 font-bold rounded text-xs border hover:bg-gray-200 duration-150`} disabled={remove} onClick={() => {setImage(img), setRemove(true)}}>Remove</button>
                              </div>
                              <p className='text-xs font-normal mt-2 leading-5'>Appears in greeting and status messages <br /> Maximum size 100 KB, recommended dimensions 50x50px</p>
                          </div>
                      </div>
                      <h2 className='text-[1.2rem] text-[#4A4A4A] font-bold p-0 mt-9'>Preferences</h2>
                      <div className='flex mt-2 mb-4'>
                          <hr className='bg-blue-500 h-0.5 w-28' />
                          <hr className='bg-gray-200 h-0.5 w-full' />
                      </div>
                      <div className='flex w-full font-normal text-[12.5px] mt-5'>
                          <label className='w-[22%] mt-1.5'>Dashboard language</label>
                          <select id="countries" className={`text-xs border rounded focus:ring focus:ring-blue-400 p-1 w-52 h-[1.9rem]`}>
                              <option>Chinese</option>
                              <option value="US" selected>English</option>
                              <option value="CA">Netherlands</option>
                              <option value="FR">Turkish</option>
                              <option value="DE">Japanese</option>
                          </select> 
                      </div>
                      <div className='flex w-full font-normal text-[12.5px] mt-5'>
                          <label className='w-[22%] mt-1.5'>Chat limit</label>
                          <div>
                            <input type='number' className='w-[11.5rem] rounded p-1 border focus:ring focus:ring-blue-400'/>
                            <p className='text-gray-600 mt-1 leading-4'>Number of chats you are allowed to take. Admins can edit other chat routing settings under <br /> <a href="/zendex/routing" className='hover:underline text-blue-600'>Routing &gt; Settings</a></p>
                            <p className='font-bold text-gray-500 mt-2'>Chat limit is not enabeled</p>
                          </div>
                      </div>
                      <div className='flex w-full font-normal text-[12.5px] mt-6'>
                          <label className='w-[22%] mt-1.5'>Skills</label>
                          <div>
                            <input type='text' className='w-[11.5rem] rounded px-1 py-1.5 border focus:ring focus:ring-blue-400'/>
                            <p className='text-gray-600 mt-1 leading-4'>Identify the agent's capabilities. Assign up to 5 skills per agent. Add skills under <a href="/zendex/routing" className='hover:underline text-blue-600'>Routing &gt; <br /> Skills</a></p>
                          </div>
                      </div>
                      <div className='flex w-full font-normal text-[12.5px] mt-1'>
                          <label className='w-[22%] mt-1.5' htmlFor='key'>Keyboard shortcuts</label>
                          <input type='checkbox' id='key' className='w-3.5 rounded-full'/>
                          <label className=' mt-1.5 ml-2.5 text-gray-500' htmlFor='key'>Enable keyboard shortcuts</label>
                      </div>
                      <div className='flex w-full font-normal text-[12.5px] mt-2.5'>
                          <label className='w-[22%] mt-1.5' htmlFor='notify'>Offline message</label>
                          <input type='checkbox' id='notify' className='w-3.5 rounded-full'/>
                          <label className=' mt-1.5 ml-2.5 text-gray-500' htmlFor='notify'>Receive email notification when visitors send an offline message</label>
                      </div>
                      <div className='flex w-full font-normal text-[12.5px] mt-2.5'>
                          <label className='w-[22%] mt-1.5' htmlFor='update'>Zendesk Chat updates</label>
                          <input type='checkbox' id='update' className='w-3.5 rounded-full'/>
                          <label className=' mt-1.5 ml-2.5 text-gray-500' htmlFor='update'>Receive periodic email updates from Zendesk Chat</label>
                      </div>
                      <hr className='bg-gray-200 w-full mt-7' />
                      <div className='flex mt-5 flex gap-3 mb-4'>
                          <button className='btn btn-sm bg-[#1F73B7] shadow-none text-white rounded font-bold '>Save changes</button>
                          <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded'>Revert changes</button>
                      </div>
                  </div> 
                  : sound ? 
                        <div>
                            <h2 className='text-[1.2rem] text-[#4A4A4A] font-bold p-0 mt-9'>Notification</h2>
                            <div className='flex mt-2 mb-4'>
                                <hr className='bg-blue-500 h-0.5 w-32' />
                                <hr className='bg-gray-200 h-0.5 w-full' />
                            </div>
                            <p className='font-normal text-xs text-gray-500 mt-1'>Set your notification preferences for when you are in or away from the dashboard. You will need to configure your browser settings to allow notifications from teamsupport1.zendesk.com.</p>
                              <div className='flex w-full font-normal text-[12.5px] mt-1.5'>
                                  <label className='w-[25.5%] mt-2 text-gray-600' htmlFor='requests'>Chat requests</label>
                                  <input type='checkbox' id='requests' className='w-3.5 rounded-full'/>
                                  <label className=' mt-1.5 ml-2.5 text-gray-500' htmlFor='requests'>Show notifications for incoming chat requests</label>
                              </div>
                              <div className='flex w-full font-normal text-[12.5px] mt-2.5'>
                                  <label className='w-[25.5%] mt-2 text-gray-600' htmlFor='Newmessages'>New messages</label>
                                  <input type='checkbox' id='Newmessages' className='w-3.5 rounded-full'/>
                                  <label className=' mt-1.5 ml-2.5 text-gray-500' htmlFor='Newmessages'>Show notifications for new messages in open chats</label>
                              </div>
                              <div className='flex w-full font-normal text-[12.5px] mt-2.5'>
                                  <label className='w-[25.5%] mt-2 text-gray-600' htmlFor='stchanges'>Status changes</label>
                                  <input type='checkbox' id='stchanges' className='w-3.5 rounded-full'/>
                                  <label className=' mt-1.5 ml-2.5 text-gray-500' htmlFor='stchanges'>Show notifications for automatic status changes</label>
                              </div>
                              <div className='flex w-full font-normal text-[12.5px] mt-2.5'>
                                  <label className='w-[25.5%] mt-2 text-gray-600' htmlFor='expiry'>Session expiry</label>
                                  <input type='checkbox' id='expiry' className='w-3.5 rounded-full'/>
                                  <label className=' mt-1.5 ml-2.5 text-gray-500' htmlFor='expiry'>Show notifications within 1 minute of session expiry</label>
                              </div>
                              <h2 className='text-[1.2rem] text-[#4A4A4A] font-bold p-0 mt-16'>Sound</h2>
                              <div className='flex mt-3'>
                                  <hr className='bg-blue-500 h-0.5 w-16' />
                                  <hr className='bg-gray-200 h-0.5 w-full' />
                              </div>
                              <div className='flex w-full font-normal text-[12.5px] mt-5'>
                                  <label className='w-[28%] mt-1.5 text-[#4A4A4A]'>Incoming visitor</label>
                                  <div>
                                      <select id="countries" className={`text-[13px] pl-1 font-bold border border-gray-300 rounded focus:ring focus:ring-blue-400 w-64 h-[1.9rem]`} onChange={(e) => {setSelectedSound(e.target.value), setselectedSound2(false), setselectedSound3(false), setselectedSound4(false), setselectedSound5(false), setselectedSound6(false)}}>
                                          <option value='none' className='text-xs p-0' >None</option>
                                          <option value={sound1} className='text-xs p-0' >Alert</option>
                                          <option value={sound2} className='text-xs p-0' >Door knock</option>
                                          <option value={sound3} className='text-xs p-0' >Flute</option>
                                          <option value={sound4} className='text-xs p-0' >Fog horn</option>
                                          <option value={sound5} className='text-xs p-0' >Warning</option>
                                      </select> 
                                    {selectedSound  != 'none' ? <input type="range" min="40" max="100" className='w-64 mt-6'/> : ''}

                                  </div>
                              </div>
                              <div className='flex w-full font-normal text-[12.5px] mt-5'>
                                  <label className='w-[28%] mt-1.5 text-[#4A4A4A]'>Chat request</label>
                                  <div>
                                      <select id="countries" className={`text-[13px] pl-1 font-bold border border-gray-300 rounded focus:ring focus:ring-blue-400 w-64 h-[1.9rem]`} onChange={(e) => {setselectedSound2(e.target.value), setselectedSound6(false), setselectedSound4(false), setselectedSound3(false), setselectedSound5(false), setSelectedSound(false)}}>
                                          <option value='none' className='text-xs p-0'>None</option>
                                          <option value={sound1} className='text-xs p-0'>Alert</option>
                                          <option value={sound2} className='text-xs p-0'>Door knock</option>
                                          <option value={sound3} className='text-xs p-0' >Flute</option>
                                          <option value={sound4} className='text-xs p-0' >Fog horn</option>
                                          <option value={sound5} className='text-xs p-0' >Warning</option>
                                      </select> 
                                    {selectedSound2 != 'none'  ? 
                                      <>
                                        <input type="range" min="40" max="100" className='w-64 mt-6'/> 
                                        <div className='gap-1 flex mt-3'>
                                            <h3 className='text-gray-500 mt-1.5'>Repeat:</h3>
                                            <input type='number' className='w-[3.7rem] rounded p-1 border focus:ring focus:ring-blue-400'/>
                                            <p className='text-gray-500 mt-1.5'>(1 to 10)</p>
                                        </div>
                                      </>  
                                    : ''}  
                                  </div>
                              </div>
                              <div className='flex w-full font-normal text-[12.5px] mt-5'>
                                  <label className='w-[28%] mt-1.5 text-[#4A4A4A]'>Incoming message</label>
                                  <div>
                                      <select id="countries" className={`text-[13px] pl-1 font-bold border border-gray-300 rounded focus:ring focus:ring-blue-400 w-64 h-[1.9rem]`} onChange={(e) => {setselectedSound3(e.target.value), setselectedSound6(false), setselectedSound4(false), setselectedSound5(false), setselectedSound2(false), setSelectedSound(false)}}>
                                          <option value='none' className='text-xs p-0' >None</option>
                                          <option value={sound1} className='text-xs p-0' >Alert</option>
                                          <option value={sound2} className='text-xs p-0' >Door knock</option>
                                          <option value={sound3} className='text-xs p-0' >Flute</option>
                                          <option value={sound4} className='text-xs p-0' >Fog horn</option>
                                          <option value={sound5} className='text-xs p-0' >Warning</option>
                                      </select> 
                                    {selectedSound3 != 'none'  ? <input type="range" min="40" max="100" className='w-64 mt-6'/> : ''}

                                  </div>
                              </div>
                              <div className='flex w-full font-normal text-[12.5px] mt-5'>
                                  <label className='w-[28%] mt-1.5 text-[#4A4A4A]'>Automatic status change</label>
                                  <div>
                                      <select id="countries" className={`text-[13px] pl-1 font-bold border border-gray-300 rounded focus:ring focus:ring-blue-400 w-64 h-[1.9rem]`} onChange={(e) => {setselectedSound4(e.target.value), setselectedSound6(false), setselectedSound5(false), setselectedSound3(false), setselectedSound2(false), setSelectedSound(false)}}>
                                          <option value='none' className='text-xs p-0' >None</option>
                                          <option value={sound1} className='text-xs p-0' >Alert</option>
                                          <option value={sound2} className='text-xs p-0' >Door knock</option>
                                          <option value={sound3} className='text-xs p-0' >Flute</option>
                                          <option value={sound4} className='text-xs p-0' >Fog horn</option>
                                          <option value={sound5} className='text-xs p-0' >Warning</option>
                                      </select> 
                                    {selectedSound4 != 'none'  ? <input type="range" min="40" max="100" className='w-64 mt-6'/> : ''}

                                  </div>
                                </div>
                                <div className='flex w-full font-normal text-[12.5px] mt-5'>
                                    <label className='w-[28%] mt-1.5 text-[#4A4A4A]'>Trigger activated</label>
                                    <div>
                                        <select id="countries" className={`text-[13px] pl-1 font-bold border border-gray-300 rounded focus:ring focus:ring-blue-400 w-64 h-[1.9rem]`} onChange={(e) => {setselectedSound5(e.target.value), setselectedSound6(false), setselectedSound4(false), setselectedSound3(false), setselectedSound2(false), setSelectedSound(false)}}>
                                            <option value='none' className='text-xs p-0' >None</option>
                                            <option value={sound1} className='text-xs p-0' >Alert</option>
                                            <option value={sound2} className='text-xs p-0' >Door knock</option>
                                            <option value={sound3} className='text-xs p-0' >Flute</option>
                                            <option value={sound4} className='text-xs p-0' >Fog horn</option>
                                            <option value={sound5} className='text-xs p-0' >Warning</option>
                                        </select> 
                                      {selectedSound5 != 'none'  ? <input type="range" min="40" max="100" className='w-64 mt-6'/> : ''}

                                    </div>
                                </div>
                                <div className='flex w-full font-normal text-[12.5px] mt-5'>
                                    <label className='w-[28%] mt-1.5 text-[#4A4A4A]'>Operating hours start/end</label>
                                    <div>
                                        <select id="countries" className={`text-[13px] pl-1 font-bold border border-gray-300 rounded focus:ring focus:ring-blue-400 w-64 h-[1.9rem]`} onChange={(e) => {setselectedSound6(e.target.value), setselectedSound5(false), setselectedSound4(false), setselectedSound3(false), setselectedSound2(false), setSelectedSound(false)}}>
                                            <option value='none' className='text-xs p-0' selected>None</option>
                                            <option value={sound1} className='text-xs p-0' >Alert</option>
                                            <option value={sound2} className='text-xs p-0' >Door knock</option>
                                            <option value={sound3} className='text-xs p-0' >Flute</option>
                                            <option value={sound4} className='text-xs p-0' >Fog horn</option>
                                            <option value={sound5} className='text-xs p-0' >Warning</option>
                                        </select> 
                                        {selectedSound6 != 'none' ? <input type="range" min="40" max="100" className='w-64 mt-6'/> : ''}
                                    </div>
                                </div>
                                <hr className='bg-gray-200 w-full mt-7' />
                                <div className='flex mt-5 flex gap-3 mb-4'>
                                    <button className='btn btn-sm bg-[#1F73B7] shadow-none text-white rounded font-bold '>Save changes</button>
                                    <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded'>Revert changes</button>
                                </div>
                          </div>  
                          : idleTime ?
                              <div>
                                  <div className='justify-between flex mt-9'>
                                      <div>
                                          <h2 className='text-[1.3rem] text-[#0E1726] font-bold mt-1.5'>Idle time</h2>
                                      </div>
                                      <div className='flex'>
                                          <button className={`h-7 w-10 text-xs rounded-none focusable focus:outline-none border focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] rounded-l font-bold ${!idletimeOf ? 'bg-[#1F73B7] text-white' : ''}`} onClick={() => { setidletimeOn(true), setidletimeOf(false) }}>On</button>
                                          <button className={`h-7 w-10 text-xs rounded-none rounded-r focusable focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] font-bold border ${idletimeOf ? 'bg-gray-200' : ''}`} onClick={() => { setidletimeOn(false), setidletimeOf(true) }}>Off</button>
                                      </div>
                                  </div>
                                  <div className={`flex mt-1.5`}>
                                      <hr className='bg-blue-500 h-0.5 w-32' />
                                      <hr className='bg-gray-200 h-0.5 w-full' />
                                  </div>
                                  <p className='font-normal text-xs mt-2 text-gray-500'>Set your status to Away or Invisible after a period on inactivity.</p>
                                  <div className={`${idletimeOf ? 'text-gray-400' : 'text-gray-600'} flex w-full font-normal text-[12.5px] mt-1.5`}>
                                      <label className='w-[20.5%] mt-2' htmlFor='ignore'>Ignore if chating</label>
                                      <input disabled={idletimeOf} type='checkbox' id='ignore' className='w-3.5 rounded-full'/>
                                      <label className=' mt-1.5 ml-2.5' htmlFor='ignore'>Do not change my status if I have open chat windows</label>
                                  </div>
                                  <div className={`${idletimeOf ? 'text-gray-400' : 'text-gray-600'} flex w-full font-normal text-[12.5px] mt-3`}>
                                      <label className='w-[20.5%] mt-1.5' htmlFor='inactive'>Inactivity period</label>
                                      <div>
                                        <input disabled={idletimeOf} type='number' id='inactive' className='border h-8 w-16 pl-2 rounded'/>
                                        <label className=' mt-1.5 ml-1' htmlFor='inactive'>Time (in minutes) before going Away or Invisible.</label>
                                      </div>
                                  </div>
                                  <div className={`${idletimeOf ? 'text-gray-400' : 'text-gray-600'} flex w-full font-normal text-[12.5px] mt-4`}>
                                      <label className='w-[20.5%] mt-2'>Idle status</label>
                                      <div>
                                          <div className="form-check flex gap-3">
                                              <input className='form-check-input' disabled={idletimeOf} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                              <label className="form-check-label relative top-1" htmlFor="flexRadioDefault1">
                                                Away
                                              </label>
                                            </div>
                                            <div className="form-check flex gap-3">
                                              <input className='form-check-input' disabled={idletimeOf} type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                              <label className="form-check-label relative top-1" htmlFor="flexRadioDefault2">
                                                Invisible
                                              </label>
                                          </div>
                                      </div>
                                  </div>
                                  <hr className='bg-gray-200 w-full mt-7' />
                                  <div className='flex justify-between mt-5 mb-4'>
                                      <div className='flex gap-3'>
                                          <button className='btn btn-sm bg-[#1F73B7] shadow-none text-white rounded font-bold '>Save changes</button>
                                          <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded'>Revert changes</button>
                                      </div>
                                      <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded'>Reset to defaults</button>
                                  </div>
                              </div>  
                              : emailRepo ?
                                  <div>
                                        <div className='mt-9 bg-[#FFF8CE] px-3 pt-4 pb-2.5'>
                                            <h2 className='font-semibold text-[16px]'>Restricted feature</h2>
                                            <p className='mt-3 font-normal text-xs text-gray-600'>Your current package does not include these features. <a href='https://teamsupport1.zendesk.com/admin/billing' className='hover:underline text-blue-600'>Upgrade your package</a> to unlock them.  </p>
                                        </div>
                                        <h2 className='text-[1.2rem] text-[#4A4A4A] font-bold p-0 mt-8'>Analytics reports</h2>
                                        <div className='flex mt-2 mb-2'>
                                            <hr className='bg-blue-500 h-0.5 w-44' />
                                            <hr className='bg-gray-200 h-0.5 w-full' />
                                        </div>
                                        <p className='font-normal text-xs text-gray-600'>Track website statistics and agent performance.</p>
                                        <div className='flex w-full text-gray-300 font-normal text-[12.5px] mt-1.5'>
                                            <label className='w-[21%] mt-2'>Daily</label>
                                            <input type='checkbox' className='w-3 rounded-full' disabled/>
                                            <label className=' mt-1.5 ml-2.5'>Show notifications for incoming chat requests</label>
                                        </div>
                                        <div className='flex w-full text-gray-300 font-normal text-[12.5px] mt-2.5'>
                                            <label className='w-[21%] mt-2'>New messages</label>
                                            <input type='checkbox' className='3 rounded-full' disabled/>
                                            <label className=' mt-1.5 ml-2.5'>Show notifications for new messages in open chats</label>
                                        </div>
                                        <div className='flex w-full text-gray-300 font-normal text-[12.5px] mt-2.5'>
                                            <label className='w-[21%] mt-2'>Status changes</label>
                                            <input type='checkbox' className='w-3 rounded-full' disabled/>
                                            <label className=' mt-1.5 ml-2.5'>Show notifications for automatic status changes</label>
                                        </div>
                                        <hr className='bg-gray-200 w-full mt-7' />
                                        <div className='flex justify-between mt-5 mb-4'>
                                            <div className='flex gap-3'>
                                                <button className='text-[12px] px-1.5 py-1 border border-gray-300 bg-[#f8f9f9] shadow-none text-gray-400 rounded font-bold' disabled >Save changes</button>
                                                <button className='text-[12px] px-1.5 py-1 border border-gray-300 text-gray-400 bg-[#f8f9f9] font-bold shadow-none rounded' disabled >Revert changes</button>
                                            </div>
                                            <button className='text-[12px] px-1.5 py-1 border border-gray-300 bg-[#f8f9f9] text-gray-400 font-bold shadow-none rounded' disabled >Reset to defaults</button>
                                        </div>
                                    </div>
                                    : labs ?
                                        <div>
                                            <div className='w-full rounded border border-[#F4B500] h-10 flex gap-3 px-4 pt-3 mt-9'>
                                                <IconWarning/>
                                                <p className='text-xs'>Some visitors might experience longer waiting times if reassignment is disabled.</p>
                                            </div>
                                            <h2 className='text-[1.2rem] text-[#4A4A4A] font-bold p-0 mt-6'>Chat panel</h2>
                                            <div className='flex mt-2 mb-2'>
                                                <hr className='bg-blue-500 h-0.5 w-24' />
                                                <hr className='bg-gray-200 h-0.5 w-full' />
                                            </div>
                                            <div className='flex w-full text-[12.5px] mt-1.5'>
                                                <label className='w-[21%] mt-2 text-gray-600' htmlFor='panel'>Docked chat panel</label>
                                                <input type='checkbox' id='panel' className='w-3.5 rounded-full'/>
                                                <label className=' mt-2 ml-3.5 text-gray-500' htmlFor='panel'>Attach chat panel to right edge of screen</label>
                                            </div>
                                            <hr className='bg-gray-200 w-full mt-7' />
                                            <div className='flex justify-between mt-5 mb-4'>
                                                <div className='flex gap-3'>
                                                    <button className='btn btn-sm bg-[#1F73B7] shadow-none text-white rounded font-bold '>Save changes</button>
                                                    <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded'>Revert changes</button>
                                                </div>
                                                <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded'>Reset to defaults</button>
                                            </div>
                                        </div>
                                        : '' }
          </div>
    </div>
  )
}

