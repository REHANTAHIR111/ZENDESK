import React, { useEffect, useState } from 'react'
import IconWarning from '../../components/Icon/IconWarning';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';

export default function Routing() {
  
  const dispatch = useDispatch();
  const [setting, setSetting] = useState<any>('');
  const [skills, setSkills] = useState<any>('');
  const [broadcast, setBroadcast] = useState<any>('');
  const [assigned, setAssigned] = useState<any>('');

  useEffect(() => {
    dispatch(setPageTitle('Routing'));
  }, []);

  return (
    <div>
      <div className='flex'>
        <button className={`${!skills ? 'bg-gray-200' : ''} h-7 w-16 duration-150 hover:bg-gray-50 border rounded-none rounded-l`} onClick={() => { setSetting(true), setSkills(false) }}>Setting</button>
        <button className={`h-7 px-2.5 rounded-none rounded-r duration-150 border hover:bg-gray-50 ${skills ? 'bg-gray-200' : ''}`} onClick={() => { setSkills(true), setSetting(false) }}>Skills</button>
      </div>
      <hr className='bg-gray-200 h-[0.0rem] w-full mt-2.5' />
      {skills ?
        <>
          <div className='flex justify-center mt-20'>
            <div className='text-center'>
              <h2 className='text-4xl font-normal'>Skills-based routing</h2>
              <p className='font-normal mt-4 text-base'>By automatically pairing customers with the right agent, you can reduce response time and increase customer <br /> satisfaction.</p>
              <button className='btn btn-info rounded mx-auto my-5'>Upgrade now</button>
              <span className='text-xs'>Available to customers on Chat Professional.</span>
              <span className='text-blue-600 ml-1 text-xs hover:underline'><a href='https://support.zendesk.com/hc/en-us/articles/4408836348058-Routing-chats-based-on-agent-skills' target='_blank'>Learn about skill-based routing</a></span>
              <div className='flex justify-center'>
                <img src="https://dashboard-latest.zopim.com/dashboard/images/skar_landing/skar_main@2x.png" alt="" width='420' className='mt-6' />
              </div>
            </div>
          </div>
          <hr className='bg-gray-400 h-0.5 mt-8 mx-auto w-[51rem]' />
          <div className='flex justify-center text-center mt-12 mb-6'>
            <div className='grid grid-cols-3 gap-16'>
              <div className='flex justify-center text-center'>
                <div>
                  <img src="https://dashboard-latest.zopim.com/dashboard/images/skar_landing/skar_feature_1@2x.png" alt="" width='100' className='mx-auto' />
                  <h2 className='text-base font-bold mb-3 mt-6'>Routing rules</h2>
                  <p className='text-sm mt-3'>Create trigger-based rules to <br /> route chats based on skills (like <br /> product knowledge, language, <br /> or geography).</p>
                </div>
              </div>
              <div className='flex justify-center text-center'>
                <div>
                  <img src="https://dashboard-latest.zopim.com/dashboard/images/skar_landing/skar_feature_2@2x.png" alt="" width='100' className='mx-auto' />
                  <h2 className='text-base font-bold mb-3 mt-6'>Agent specialization</h2>
                  <p className='text-sm mt-3'>Train agents to become subject- <br />matter experts or focus only on <br /> customers who speak a specific <br /> language.</p>
                </div>
              </div>
              <div className='flex justify-center text-center'>
                <div>
                  <img src="https://dashboard-latest.zopim.com/dashboard/images/skar_landing/skar_feature_3@2x.png" alt="" width='100' className='mx-auto' />
                  <h2 className='text-base font-bold mb-3 mt-6'>Tiered support</h2>
                  <p className='text-sm mt-3'>Automatically distribute chats to <br /> frontline agents and escalate <br /> when they are busy or <br /> unavailable.</p>
                </div>
              </div>
            </div>
          </div>
        </>
        :
        <>
          <div className='flex'>
            <div className='w-[50%]'>
              <div className='flex'>
                <div className='mt-8 pt-3 pb-2 pl-2 bg-[#FFF8CE] w-full'>
                  <h2 className='text-base'>Restricted feature</h2>
                  <p className='text-xs mt-3.5'>The customization option for chat routing are unavailable for your plan.</p>
                  <span className='text-blue-600 text-xs'>
                    <a href="" className='hover:underline'>Upgrade your account</a>
                  </span>
                  <span className='text-xs ml-1'>to Professional or Enterprise to enable all features.</span>
                </div>
              </div>
              <h2 className='text-[1.3rem] text-[#0E1726] font-bold p-0 mt-6'>Chat routing</h2>
              <div className='flex mt-2'>
                <hr className='bg-blue-500 h-0.5 w-40' />
                <hr className='bg-gray-200 h-0.5 w-full' />
              </div>
              <p className='text-xs mt-2.5'>Choose how agents will receive incoming chat requests.</p>
              <div className='flex mt-4 gap-3'>
                <button className={`${!assigned ? 'bg-gray-200' : ''} duration-150 h-20 hover:bg-gray-50 w-24 text-xs rounded`} onClick={() => { setBroadcast(true), setAssigned(false) }}>BroadCast</button>
                <button className={`border-none h-20 w-24 text-xs duration-150 rounded ${assigned ? 'bg-gray-200' : ''} hover:bg-gray-50`} onClick={() => { setAssigned(true), setBroadcast(false) }}>Assingned</button>
              </div>
              <p className='text-xs mt-4.5 text-gray-500'>Agents are notified of all incoming chat requests and serve chats from a shared queue</p>
              {assigned ?
                <>
                    <div className='justify-between flex mt-8'>
                        <div>
                          <h2 className='text-[1.3rem] text-[#0E1726] font-bold mt-1.5'>Skills routing</h2>
                        </div>
                        <div className='flex text-gray-400'>
                          <button className='bg-gray-100 h-8 w-11 rounded-none rounded-l'>On</button>
                          <button className='h-8 w-11 rounded-none rounded-r border bg-gray-200'>Off</button>
                        </div>
                    </div>
                    <div className='flex mt-1.5 mb-2'>
                      <hr className='bg-blue-500 h-0.5 w-40' />
                      <hr className='bg-gray-200 h-0.5 w-full' />
                    </div>
                    <span className='text-xs text-gray-500'>Route chat to agents based on skills they have and visitor tags applied to the visitor.</span>
                    <span className='ml-1 text-xs text-info hover:underline'><a href='https://support.zendesk.com/hc/en-us/articles/4408836348058-Routing-chats-based-on-agent-skills' target='_blank'>Learn more</a></span>
                    <div className='mt-3 text-xs'>
                        <span className='text-xs mt-3.5 text-gray-500 mr-11'>Minimum wait time</span>
                        <span>
                          <button className='bg-[#F8F9F9] border border-gray-300 h-8 w-16 rounded text-xs text-gray-400'>30</button><br />
                          <p className='text-gray-300 mt-1.5 ml-36'>Time (in seconds) without finding an agent with the exact skill-match before assigning the chat to <br /> the most available agent. Must be between 5 and 300 seconds (5 minutes).</p>
                        </span>
                    </div>
                    <div className='mt-3 pt-2 flex text-xs'>
                      <h2 className='text-xs text-gray-500'>Setup</h2>
                      <p>
                        <ul>
                          <li className='text-gray-300 ml-32 pt-1 list-decimal'>Create and apply skills to agents.</li>
                          <li className='text-gray-300 ml-32 pt-4 list-decimal'>Apply visitor tags to your visitors. Visitor tags identical to skills will be considered for skill <br /> routing.</li>
                          <li className='text-gray-300 ml-32 pt-4 list-decimal'>For incoming chats, chats with a set of tags will be routed to agents with the exact set of skills, <br /> up to maximum wait time. Subsequently, the chat will be routed to any available agent within <br /> the department or account.</li>
                        </ul>
                      </p>
                    </div>
                    <div className='justify-between flex mt-4'>
                        <div>
                          <h2 className='text-[1.3rem] text-[#0E1726] font-bold mt-1.5'>Chat limit</h2>
                        </div>
                        <div className='flex text-gray-400'>
                          <button className='bg-gray-100 h-8 w-11 rounded-none rounded-l'>On</button>
                          <button className='h-8 w-11 rounded-none rounded-r border bg-gray-200'>Off</button>
                        </div>
                    </div>
                    <div className='flex mt-1.5'>
                        <hr className='bg-blue-500 h-0.5 w-40' />
                        <hr className='bg-gray-200 h-0.5 w-full' />
                    </div>
                    <p className='text-xs mt-2.5 text-gray-500'>Limit the number of chats that each agent is allowed to take at one time.</p>
                    <div className='w-full rounded border border-[#F4B500] h-10 flex gap-3 px-4 pt-3 mt-2.5'>
                      <IconWarning/>
                      <p className='text-xs'>All incoming chats will be assigned immediately, even if agents are already serving many chats.</p>
                    </div>
                    <div className='mt-7'>
                        <span className='text-xs mt-3.5 text-gray-500 mr-20'>Apply to</span>
                          <span>
                            <button className='bg-gray-200 h-7 w-16 rounded-none rounded-l-sm text-xs text-gray-400'>Account</button>
                          </span>
                        <span>
                        <button className='h-7 w-14 rounded-none rounded-r-sm border bg-gray-100 text-xs text-gray-400'>Agents</button>
                      </span>
                    </div>
                    <div className='mt-3 text-xs'>
                        <span className='text-xs mt-3.5 text-gray-500 mr-11'>Minimum chats</span>
                        <span>
                          <button className='bg-gray-200 h-7 w-16 rounded-none rounded-l-sm text-xs text-gray-400'>3</button><br />
                          <p className='text-gray-500 mt-1.5 ml-32'>The chat limit will apply to all agents</p>
                        </span>
                    </div>
                    <div className='mt-10'>
                        <h2 className='text-[1.3rem] text-[#0E1726] font-bold p-0'>Hybrid Assignment Mode</h2>
                    </div>
                    <div className='flex mt-2.5'>
                        <hr className='bg-blue-500 h-0.5 w-40' />
                        <hr className='bg-gray-200 h-0.5 w-full' />
                    </div>
                    <p className='text-sm mt-2.5 text-gray-600 font-bold'>Enable chat limits to enable Hybrid Assignment Mode.</p>
                    <div className='w-full flex'>
                      <div className='w-[20%]'>
                          <p className='text-[13px] pt-4 text-gray-400'>Allow hybrid <br /> assignment</p>
                      </div>
                      <div className='w-[80%] gap-3 flex'>
                        <input type="checkbox" className='form-checked' disabled/>
                        <p className='text-[13px] pt-4 text-gray-400'>Agents can serve unassigned chats when they have reached their chat <br /> limits.</p>
                      </div>
                    </div>
                    <div className='justify-between flex mt-10'>
                        <div>
                          <h2 className='text-[1.3rem] text-[#0E1726] font-bold mt-1.5'>Reassignment</h2>
                        </div>
                        <div className='flex text-gray-400'>
                          <button className='bg-gray-100 h-8 w-11 rounded-none rounded-l'>On</button>
                          <button className='h-8 w-11 rounded-none rounded-r border bg-gray-200'>Off</button>
                        </div>
                    </div>
                    <div className='flex mt-1.5'>
                        <hr className='bg-blue-500 h-0.5 w-40' />
                        <hr className='bg-gray-200 h-0.5 w-full' />
                    </div>
                    <p className='text-xs mt-2.5 text-gray-500'>Limit the number of chats that each agent is allowed to take at one time.</p>
                    <div className='w-full rounded border border-[#F4B500] h-10 flex gap-3 px-4 pt-3 mt-2.5'>
                      <IconWarning/>
                      <p><small>All incoming chats will be assigned immediately, even if agents are already serving many chats.</small></p>
                    </div>
                    <div className='w-full flex'>
                      <div className='w-[20%]'>
                          <p className='text-[12px] pt-4 text-gray-400 mt-2'>Reassignment timeout</p>
                      </div>
                      <div className='w-[80%] gap-3 mt-4'>
                          <button className='bg-[#F8F9F9] border border-gray-300 h-8 w-16 rounded text-xs text-gray-400'>30</button><br />
                          <p className='text-[12px] text-gray-400 mt-1'>Time (in seconds) with no response before a chat is assigned to another agent.</p>
                      </div>
                    </div>
                    <div className='justify-between flex mt-10'>
                        <div>
                          <h2 className='text-[1.3rem] text-[#0E1726] font-bold mt-1.5'>Automatic idle</h2>
                        </div>
                        <div className='flex text-gray-400'>
                          <button className='bg-gray-100 h-8 w-11 rounded-none rounded-l'>On</button>
                          <button className='h-8 w-11 rounded-none rounded-r border bg-gray-200'>Off</button>
                        </div>
                    </div>
                    <div className='flex mt-1.5'>
                        <hr className='bg-blue-500 h-0.5 w-40' />
                        <hr className='bg-gray-200 h-0.5 w-full' />
                    </div>
                    <p className='text-xs mt-2.5 text-gray-500'>Set an agent's status to Away or Invisible if they have a consecutive number of chats reassigned.</p>
                    <p className='text-xs mt-2.5 font-bold'>Enable reassignment to enable automatic idle.</p>
                    <div className='w-full flex'>
                      <div className='w-[20%]'>
                          <p className='text-[12px] pt-4 text-gray-400 mt-2'>Chats reassigned</p>
                      </div>
                      <div className='w-[80%] gap-3 mt-4'>
                          <button className='bg-[#F8F9F9] border border-gray-300 h-8 w-16 rounded text-xs text-gray-400'>3</button><br />
                          <p className='text-[12px] text-gray-400 mt-1'>Number of chats reassigned before the agent's status is changed.</p>
                      </div>
                    </div>
                    <div className='w-full flex'>
                      <div className='w-[20%]'>
                          <p className='text-[13px] pt-4 text-gray-400'>Idle status</p>
                      </div>
                      <div className='w-[80%]'>
                        <div className='flex gap-x-2'>
                          <input type="radio" className='form-checked mt-4' disabled checked/>
                          <p className='text-[13px] pt-4 text-gray-400'>Away</p>
                        </div>
                        <div className='flex gap-x-2'>
                          <input type="radio" className='form-checked mt-1' disabled/>
                          <p className='text-[13px] pt-1 text-gray-400'>Invisible</p>
                        </div>
                      </div>
                    </div>
                    <hr className='bg-gray-200 w-full mt-5' />
                    <div className='flex justify-between mb-4'>
                        <div className='mt-4 flex gap-3'>
                            <button className='btn btn-sm bg-[#1F73B7] shadow-none text-white rounded font-bold '>Save changes</button>
                            <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded'>Revert changes</button>
                        </div>
                        <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded mt-4 w-[115px] h-8'>Reset to default</button>
                    </div>
                </>
                :
                <>
                  <div className='justify-between flex mt-8'>
                    <div>
                      <h2 className='text-lg font-bold p-0'>Chat limit</h2>
                    </div>
                    <div className='flex text-gray-400'>
                      <button className='bg-gray-100 h-7.5 w-11 rounded-none rounded-l'>On</button>
                      <button className='h-7.5 w-11 rounded-none rounded-r border bg-gray-200'>Off</button>
                    </div>
                  </div>
                  <div className='flex mt-1.5'>
                    <hr className='bg-blue-500 h-0.5 w-40' />
                    <hr className='bg-gray-200 h-0.5 w-full' />
                  </div>
                  <p className='text-xs mt-2.5 text-gray-500'>Limit the number of chats that each agent is allowed to take at one time.</p>
                  <div className='mt-5'>
                    <span className='text-xs mt-3.5 text-gray-500 mr-20'>Apply to</span>
                    <span>
                      <button className='bg-gray-200 h-7 w-16 rounded-none rounded-l-sm text-xs text-gray-400'>Account</button>
                    </span>
                    <span>
                      <button className='h-7 w-14 rounded-none rounded-r-sm border bg-gray-100 text-xs text-gray-400'>Agents</button>
                    </span>
                  </div>
                  <div className='mt-3 text-xs'>
                    <span className='text-xs mt-3.5 text-gray-500 mr-11'>Minimum chats</span>
                    <span>
                      <button className='bg-gray-200 h-7 w-16 rounded text-xs text-gray-400'>3</button><br />
                      <p className='text-gray-500 mt-1.5 ml-32'>The chat limit will apply to all agents</p>
                    </span>
                  </div>
                  <hr className='bg-gray-200 h-[0.0rem] w-full mt-10' />
                  <div className='flex justify-between mb-4'>
                      <div className='mt-4 flex gap-3'>
                          <button className='btn btn-sm bg-[#1F73B7] shadow-none text-white rounded font-bold '>Save changes</button>
                          <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded'>Revert changes</button>
                      </div>
                      <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded mt-4 w-[115px] h-8'>Reset to default</button>
                  </div>
                </>
              }
            </div>
            <div className='w-[20%] pl-16'>
              <h2 className='text-lg font-bold p-0 mt-6'>Quick tips</h2>
              <div className='flex'>
                <hr className='bg-blue-500 h-0.5 w-32' />
                <hr className='bg-gray-200 h-0.5 w-full' />
              </div>
              <h2 className='text-sm font-bold mt-2'>Broadcast</h2>
              <p className='text-gray-500 text-xs leading-5'>
                Broadcasting chats give agents <br /> more autonomy, allowing them <br /> to work at their own pace. Set a <br /> chat limit to control quality by <br /> preventing agents from taking on <br /> too many chats at once.
              </p>
              <h2 className='text-sm font-bold mt-2.5'>Assigned</h2>
              <p className='text-gray-500 text-xs leading-5 mb-3'>
                Assigned chats help maintain an even workload distribution, <br /> especially for larger teams. Chat <br /> limits keep agents from getting <br /> overwhelmed by chats, especially <br /> during high traffic. Experienced <br /> agents can help clear the queue <br /> faster with the Hybrid Assignment <br /> Mode. Enable Reassignments and <br /> Automatic Idle to reduce visitor <br /> wait time by preventing chats <br /> from getting assigned to inactive <br /> agents.
              </p>
              <a href="" className='text-blue-500 hover:underline text-xs'>Learn more</a>
            </div>
          </div>
        </>
      }
    </div>
  )
}
