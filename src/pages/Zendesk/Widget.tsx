import { Fragment, useEffect, useRef, useState } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import IconMinus from '../../components/Icon/IconMinus';
import Tippy from '@tippyjs/react';
import IconLogin from '../../components/Icon/IconLogin';
import IconUrl from '../../components/Icon/IconUrl';
import IconMore from '../../components/Icon/IconMore';
import IconSend from '../../components/Icon/IconSend';
import IconPlus from '../../components/Icon/IconPlus';
import { Transition, Dialog } from '@headlessui/react';
import IconX from '../../components/Icon/IconX';

export default function Widget() {

  const dispatch = useDispatch();
  const [getstart, setgetStart] = useState<any>(true);
  const [appear, setAppear] = useState<any>('');
  const [form, setForm] = useState<any>('');
  const [setting, setSetting] = useState<any>('');
  const [bottomLeft, setBottomleft] = useState<any>('');
  const [bottomRight, setBottomright] = useState<any>('');
  const [webWid, setwebWid] = useState<any>('');
  const [on, setOn] = useState<any>('');
  const [of, setOf] = useState<any>('');
  const [topTile, settopTitle] = useState<any>('Live Representative Here');
  const [changeColor, setchangeColor] = useState<any>('#44BBAA');
  const [changeBgColor, setchangeBgColor] = useState<any>('#455613');
  const [imgLeft, setimgLeft] = useState<any>('');
  const [imgRight, setimgRight] = useState<any>('');
  const [textOnly, settextOnly] = useState<any>('');
  const [cusImg, setcusImg] = useState<any>('');
  const [sameColor, setsameColor] = useState<any>(false);
  const [message, setMessage] = useState<any>('Chat with us to avail a flat discount, click here -->');
  const [displayTile, setdisplayTile] = useState<any>('Chat With A Live Agent Not A Bot');
  const [bylineTile, setbylineTile] = useState<any>('Flat 50% off. Chat now!');
  const [select, setSelect] = useState<any>('');
  const [visproOf, setvisproOf] = useState<any>('');
  const [visproOn, setvisproOn] = useState<any>('');
  const [prechatOf, setprechatOf] = useState<any>('');
  const [prechatOn, setprechatOn] = useState<any>('');
  const [offlinechatOf, setofflinechatOf] = useState<any>('');
  const [offlinechatOn, setofflinechatOn] = useState<any>('');
  const [fbCheck, setfbCheck] = useState<any>(true);
  const [googleCheck, setgoogleCheck] = useState<any>(true);
  const [allowNum, setallowNum] = useState<any>(true);
  const [requireId, setrequireId] = useState<any>('');
  const [requirePhone, setrequirePhone] = useState<any>('');
  const [requireComment, setrequireComment] = useState<any>('');
  const [requireVisphone, setrequireVisphone] = useState<any>('');
  const [tweet, setTweet] = useState<any>('');
  const [messenger, setMessenger] = useState<any>('');
  const [rating, setRating] = useState<any>(true);
  const [blockOn, setblockOn] = useState<any>('');
  const [blockOf, setblockOf] = useState<any>(true);
  const [allwedOn, setallwedOn] = useState<any>('');
  const [allwedOf, setallwedOf] = useState<any>(true);
  const [inputFields, setInputFields] = useState([{ value: '' }]);
  const [modal, setModal] = useState<any>(false);
  const [codePlace, setcodePlace] = useState<any>(false);
  const [text, setText] = useState<string>('');
  const [copy, setCopy] = useState<string>('Copy');
  const copySelect = ('<!-- Start of  Zendesk Widget script --> <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=3c659566-3aa9-43a6-892a-00c81a96a1b6"> </script> <!-- End of  Zendesk Widget script -->');
  const [remove, setRemove] = useState<any>(true);
  const [remove2, setRemove2] = useState<any>(true);
  const img = 'https://via.placeholder.com/150';
  const img2 = 'https://via.placeholder.com/150';
  const [image, setImage] = useState<any>(img);
  const [mediaimage, setmediaImage] = useState<any>(img2);
  const fileInputRef = useRef<any>(null);
  const fileInputRef2 = useRef<any>(null);


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

  //generate code ---
  const generateRandomText = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };

  const handleRegenerateClick = () => {
    const largeCodeLength = 100;
    setText(generateRandomText(largeCodeLength));
  };

  //copy code ---
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
    setCopy('Copied✔')
  };

  // copy select code--
  const handleSelect = () => {
    const textarea = document.getElementById('copyTextarea') as HTMLTextAreaElement;

    if (textarea) {
      textarea.select();
      document.execCommand('copy');
      alert('Text copied to clipboard!');
    }
  };


  //
  const handleUpload = () => {
    if (fileInputRef2.current) {
      fileInputRef2.current.click();
    }
  };

  const handleImageChange2 = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setmediaImage(reader.result as string);
        setRemove2(false)
      };

      reader.readAsDataURL(file);
    }
  };

  const getTextColor = () => {
    if (changeColor === '#ffffff') {
      return 'text-black';
    } else {
      return 'text-white';
    }
  };

  let CHAT = [
    <div className={`w-[30%] ${getTextColor()}`}>
      <div className='flex justify-between'>
        <h2 className='text-[1.2rem] text-[#4A4A4A] font-bold p-0 mt-9'>Preview</h2>
        <select id="countries" className="form-select rounded w-44 h-[1.9rem] py-0 mt-6 focusable focus:ring-offset-0 focus:ring-2 focus:outline-none focus:ring-info text-[13px] font-[600]" onChange={(e) => setSelect(e.target.value)}>
          <option value={0} selected={select == 0} className='text-[13px]'>Online: chat window</option>
          <option value={1} selected={select == 1} disabled={prechatOf} className={`${prechatOf ? 'text-gray-300' : ''} text-[13px]`}>Online: Pre-chat form</option>
          <option value={2} selected={select == 2} className='text-[13px]' >Online: Chat badge</option>
          <option value={3} selected={select == 3} disabled={offlinechatOf} className={`${offlinechatOf ? 'text-gray-300' : ''} text-[13px]`}>Online: Offline form</option>
        </select>
      </div>
      <div className='flex mt-2 mb-4'>
        <hr className='bg-blue-500 h-0.5 w-24' />
        <hr className='bg-gray-200 h-0.5 w-full' />
      </div>
      <span className='text-xs text-gray-500'>This is how your Web Widget (classNameic) will look in a desktop browser. <br /> Find out what it'll look like in a </span>
      <span className="font-normal text-[#1F73B7] text-xs cursor-pointer hover:underline"><a href="https://support.zendesk.com/hc/en-us/articles/4408834237338-Customizing-the-Chat-widget-for-mobile-devices">mobile browser.</a></span>
      <div id="chat-container" className={`${select != 2 ? 'w-[22rem] ml-5' : 'w-64 ml-32'} mt-12 shadow-md`}>
        <div className={`shadow-md rounded-lg max-w-lg w-full ${select != 2 ? 'pb-2.5' : ''}`}>
          {select != 2 ?

            <div className={`py-3 border-b text-current	rounded-t-lg flex justify-between items-center ${getTextColor()}`} style={{ background: changeColor}}>
              <p className="text-[16px] font-bold w-full text-center">{topTile}</p>
              <button id="close-chat" className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                <IconMinus className='!text-white mr-6' />
              </button>
            </div>

            : ''}
          {select == 0 ?
            <>
              <div id="chatbox" className="p-4 h-80 overflow-y-auto">
                <div className="mb-2 text-right">
                  <p className="rounded-full py-2 px-4 inline-block" style={{ background: changeColor }}>I see. Yes please!</p>
                </div>
                <div className="mb-2">
                  <p className="bg-gray-200 text-gray-700 rounded-2xl py-2 px-4 inline-block leading-4">You're welcome. I’ll transfer <br /> you to the department now. <br /> Please wait for an agent to <br /> attend to you.</p>
                </div>
                <div className="mb-2 text-right">
                  <p className="rounded-full py-2 px-4 inline-block" style={{ background: changeColor }}>I see. Yes please! example of chat</p>
                </div>
                <div className="mb-2">
                  <p className="bg-gray-200 text-gray-700 rounded-2xl py-2 px-4 inline-block leading-4">You're welcome. I’ll transfer <br /> you to the department now. <br /> Please wait for an agent to <br /> attend to you.</p>
                </div>
                <div className="mb-2 text-right">
                  <p className="rounded-full py-2 px-4 inline-block" style={{ background: changeColor }}>I see. Yes please! example of chat</p>
                </div>
                <div className={`${rating ? 'mb-6' : 'mb-2'}`}>
                  <p className="bg-gray-200 text-gray-70 rounded-2xl py-2 px-4 inline-block leading-4">You're welcome. I’ll transfer <br /> you to the department now. <br /> Please wait for an agent to <br /> attend to you.</p>
                </div>
                <>
                  {rating ?
                    <div className='flex justify-center'>
                      <button className='mb-2 border border-black px-3.5 py-2.5 rounded-md hover:bg-black hover:text-white duration-300'>Rate this chat</button>
                    </div>
                    : ''}
                </>
              </div>
              <div className="p-4 flex">
                <textarea id="user-input" placeholder="Type a message here..." className="w-full px-3 py-2 h-20 border rounded-md focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-gray-400"></textarea>
              </div>
              <div className='flex justify-between'>
                <h3 className='ml-4 text-gray-500'><a target='_blank' href="https://www.zendesk.com/service/messaging/live-chat-software/?iref=null&lang=en-us&utm_campaign=poweredbyzendesk&utm_content=undefined&utm_medium=poweredbyzendeskchat&utm_source=webwidgetchat&utm_term=null">Zendesk</a></h3>
                <div className='flex gap-2 mr-4'>
                  <Tippy content='End chat' className='bg-[#03363D] text-white text-sm rounded px-2 pt-0.5 text-auto mr-16 mt-10 h-6 font-semibold'>
                    <button className='hover:bg-gray-300 duration-150 p-1 rounded'>
                      <IconLogin />
                    </button>
                  </Tippy>
                  <button className='hover:bg-gray-300 duration-150 p-1 rounded'>
                    <IconUrl />
                  </button>
                  <Tippy content='Options' className='bg-[#03363D] text-sm text-white rounded px-2 pt-0.5 text-auto mt-10 h-6 font-semibold'>
                    <button className='hover:bg-gray-300 duration-150 p-1 rounded'>
                      <IconMore />
                    </button>
                  </Tippy>
                </div>
              </div>
            </>
            : select == 1 ?
              <>
                <form className=' p-4 h-[26rem] overflow-y-auto'>
                  {!visproOf ?
                    <>
                      <label htmlFor="name" className='form-label font-bold text-[15px] text-gray-600 flex gap-1'>Name {!requireId ? <label className='text-[#7C8287]'>(optional)</label> : ''}</label>
                      <input type="text" className='form-input rounded focus:ring-offset-0 focus:ring-2 focus:ring-gray-300 hover:border hover:border-black duration-500' name='name' id='name' />
                      {fbCheck || googleCheck ? <p className='font-normal text-gray-600 mt-3.5'>Or social sign in:</p> : null}
                      <label htmlFor="email" className='form-label font-bold text-[15px] text-gray-600 flex gap-1 mt-5'>Email {!requireId ? <label className='text-[#7C8287]'>(optional)</label> : ''}</label>
                      <input type="email" className='form-input rounded focus:ring-offset-0 focus:ring-2 focus:ring-gray-300 hover:border hover:border-black duration-500' name='email' id='email' />
                      {allowNum ?
                        <>
                          <label htmlFor="phone" className='form-label font-bold text-[15px] text-gray-600 flex gap-1 mt-5'>Phone {!requirePhone ? <label className='text-[#7C8287]'>(optional)</label> : ''}</label>
                          <input type="text" className='form-input rounded focus:ring-offset-0 focus:ring-2 focus:ring-gray-300 hover:border hover:border-black duration-500' name='phone' id='phone' />
                        </>
                        : ''}
                    </>
                    : ''}
                  <label htmlFor="msg" className={`${!visproOf ? 'mt-5' : ''}form-label font-bold text-[15px] text-gray-600 flex gap-1 mt-5`}>Message {!requireComment ? <label className='text-[#7C8287]'>(optional)</label> : ''}</label>
                  <textarea className='form-input h-28 resize-none focus:ring-offset-0 focus:ring-2 focus:ring-gray-300 rounded hover:border hover:border-black duration-500' name='msg' id='msg'></textarea>
                </form>
                <div className='flex justify-between px-4 pb-2 pt-3'>
                  <h3 className='text-gray-500 mt-4'><a target='_blank' href="https://www.zendesk.com/service/messaging/live-chat-software/?iref=null&lang=en-us&utm_campaign=poweredbyzendesk&utm_content=undefined&utm_medium=poweredbyzendeskchat&utm_source=webwidgetchat&utm_term=null">Zendesk</a></h3>
                  <button className='h-9 w-24 rounded mr-3' type='button' style={{ background: changeColor, color: 'currentcolor' }}>Start chat</button>
                </div>
              </>
              : select == 2 ?
                <>
                  <div className='p-10 text-white rounded-t-lg relative flex justify-between h-40' style={{ backgroundImage: 'url("https://v2assets.zopim.io/JHCfOsl2bT75lsNA6tisF9vp3LQiGPaV-banner?1668554852212")' }}>
                    <span className='text-white absolute top-2 w-full ml-12'>zendesk chat</span>
                    <span className='text-white rounded relative h-6 w-10 items-center pl-3 text-center pt-0.5 left-44 bottom-9 ' style={{background:sameColor ? changeColor : changeBgColor}}><IconMinus/></span>
                  </div>
                  <div className="flex">
                    <input id="user-input" type="text" placeholder="Type your message here" className="w-full px-3 py-2.5 rounded-bl-lg rounded-t-0 focus:outline-none focus:border-[2.5px] focus:border-blue-300" />
                    <button id="send-button" className="bg-white px-4 rounded-br-lg rounded-0 border-none hover:bg-[#E8F0FE] duration-300"><IconSend className='rotate-45' /></button>
                  </div>
                </>
                : select == 3 ?
                  <>
                    <form className=' p-4 h-[26rem] overflow-y-auto'>
                      <p className='font-normal text-gray-600 mb-1'>Sorry, we aren't online at the moment. Leave a message and we'll get back to you.</p>
                      {tweet || messenger ? <h2 className='font-bold text-[15px] text-gray-600 flex gap-1 mt-2'>Conatct us here</h2> : ''}
                      <div className='flex gap-2 my-2'>
                        {messenger ? <img className='h-7 w-7' src='../../../public/messenger.jpg' alt="Messenger" /> : ''}
                        {tweet ? <img className='h-6 w-6 relative top-0.5' src='../../../public/twitter.jpg' alt="Twitter" /> : ''}
                      </div>
                      <label htmlFor="name" className='form-label font-bold text-[15px] text-gray-600 flex gap-1'>Name</label>
                      <input type="text" className='form-input rounded focus:ring-offset-0 focus:ring-2 focus:ring-gray-300 hover:border hover:border-black duration-500' name='name' id='name' />
                      {fbCheck || googleCheck ? <p className='font-normal text-gray-600 mt-3.5'>Or social sign in:</p> : null}
                      <label htmlFor="email" className='form-label font-bold text-[15px] text-gray-600 flex gap-1 mt-5'>Email</label>
                      <input type="email" className='form-input rounded focus:ring-offset-0 focus:ring-2 focus:ring-gray-300 hover:border hover:border-black duration-500' name='email' id='email' />
                      {allowNum ?
                        <>
                          <label htmlFor="phone" className='form-label font-bold text-[15px] text-gray-600 flex gap-1 mt-5'>Phone {!requireVisphone ? <label className='text-[#7C8287]'>(optional)</label> : ''}</label>
                          <input type="text" className='form-input rounded focus:ring-offset-0 focus:ring-2 focus:ring-gray-300 hover:border hover:border-black duration-500' name='phone' id='phone' />
                        </>
                        : ''}
                      <label htmlFor="msg" className='form-label font-bold text-[15px] text-gray-600 flex gap-1 mt-5'>Message</label>
                      <textarea className='form-input h-28 resize-none focus:ring-offset-0 focus:ring-2 focus:ring-gray-300 rounded hover:border hover:border-black duration-500' name='msg' id='msg'></textarea>
                    </form>
                    <div className='flex justify-between px-4 pb-2 pt-3'>
                      <h3 className='text-gray-500 mt-4'><a target='_blank' href="https://www.zendesk.com/service/messaging/live-chat-software/?iref=null&lang=en-us&utm_campaign=poweredbyzendesk&utm_content=undefined&utm_medium=poweredbyzendeskchat&utm_source=webwidgetchat&utm_term=null">Zendesk</a></h3>
                      <button className='h-9 rounded mr-3 p-2' type='button' style={{ background: changeColor }}>Send message</button>
                    </div>
                  </>
                  : ''}
        </div>
      </div>
    </div>
  ]

  useEffect(() => {
    dispatch(setPageTitle('Widget'));
  }, []);

  return (
    <div>
      <div className='flex'>
        <button className={`${!appear && !form && !setting && !webWid ? 'bg-gray-200' : ''} h-7  focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200 btn btn-sm shadow-none font-[sans-serif] text-[11.5px] px-2 duration-150 hover:bg-gray-50 border rounded-none rounded-l`} onClick={() => {
          setgetStart(true),
            setAppear(false),
            setForm(false),
            setSetting(false),
            setwebWid(false)
        }}>
          Getting started
        </button>
        <button className={`h-7 px-2.5 rounded-none duration-150 border hover:bg-gray-50 btn btn-sm  focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200  shadow-none font-[sans-serif] text-[11.5px] ${appear ? 'bg-gray-200' : ''}`} onClick={() => {
          setgetStart(false),
            setAppear(true),
            setForm(false),
            setSetting(false),
            setwebWid(false)
        }}>
          Appearance
        </button>

        <button className={`h-7 px-2.5 rounded-none duration-150 border hover:bg-gray-50 btn btn-sm  focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200  shadow-none font-[sans-serif] text-[11.5px] ${form ? 'bg-gray-200' : ''}`} onClick={() => {
          setgetStart(false),
            setAppear(false),
            setForm(true),
            setSetting(false),
            setwebWid(false)
        }}>
          Forms
        </button>

        <button className={`h-7 px-2.5 rounded-none duration-150 border hover:bg-gray-50 btn btn-sm  focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200  shadow-none font-[sans-serif] text-[11.5px] ${setting ? 'bg-gray-200' : ''}`} onClick={() => {
          setgetStart(false),
            setAppear(false),
            setForm(false),
            setSetting(true),
            setwebWid(false)
        }}>
          Settings
        </button>

        <button className={`h-7 px-2.5 rounded-none rounded-r duration-150 border hover:bg-gray-50 btn btn-sm focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200  shadow-none font-[sans-serif] text-[11.5px] ${webWid ? 'bg-gray-200' : ''}`} onClick={() => {
          setgetStart(false),
            setAppear(false),
            setForm(false),
            setSetting(false),
            setwebWid(true)
        }}>
          Web Widget (classNameic) security
        </button>
      </div>
      <hr className='bg-gray-200 h-[0.0rem] w-full mt-2.5' />

      {getstart ?

        <div className='w-[50%]'>
          <h2 className='text-[1.2rem] text-[#4A4A4A] font-bold p-0 mt-9'>Embed Web Widget (classNameic)</h2>
          <div className='flex mt-2 mb-4'>
            <hr className='bg-blue-500 h-0.5 w-40' />
            <hr className='bg-gray-200 h-0.5 w-full' />
          </div>
          <span className='text-[13px] mt-4 font-normal'>Copy the following script and insert it into your website's HTML source code between the </span>
          <span className="italic mx-1 font-bold">&lt;head&gt;</span>
          <span className="text-[13px] font-normal">tags <br /> This code must be inserted into every page where you want to display the widget.</span>
          <textarea cols={105} rows={8} className='p-2 border mt-2 text-[13px] text-left rounded focus:ring focus:ring-info focus:outline-none' id="copyTextarea" value={copySelect} onSelect={handleSelect}></textarea>
          <h2 className='text-[1.2rem] text-[#4A4A4A] font-bold p-0 mt-9'>Enable visitor authentication</h2>
          <div className='flex mt-2 mb-4'>
            <hr className='bg-blue-500 h-0.5 w-40' />
            <hr className='bg-gray-200 h-0.5 w-full' />
          </div>
          <p className='text-[13px] mt-4 font-normal'>You can configure your widget to ensure that visitors you are talking to are your actual customers.</p>
          <span className="font-normal text-[#1F73B7] text-xs cursor-pointer hover:underline"><a onClick={() => {
            setgetStart(false),
              setAppear(false),
              setForm(false),
              setSetting(false),
              setwebWid(true)
          }}>
            Setup visitor authentication</a></span>
          <span className='mx-1 text-xs'>or</span>
          <span className="font-normal text-[#1F73B7] text-xs cursor-pointer hover:underline"><a href="https://support.zendesk.com/hc/en-us/articles/4408838925082-Enabling-authenticated-visitors-in-Web-Widget-classNameic">Learn more</a></span>
        </div>

        : appear ?

          <div className='w-full flex gap-16 '>
            <div className='w-[44%]'>
              <h2 className='text-[1.2rem] text-[#4A4A4A] font-bold p-0 mt-9'>Chat window</h2>
              <div className='flex mt-2 mb-4'>
                <hr className='bg-blue-500 h-0.5 w-40' />
                <hr className='bg-gray-200 h-0.5 w-full' />
              </div>
              <div className='w-full flex'>
                <div className='w-[22%]'>
                  <h3 className='text-[13px] mt-1 font-normal'>Top title</h3>
                </div>
                <input type="text" value={topTile} className='w-[33%] form-input rounded h-[1.9rem] text-[13px] p-1 font-normal' onChange={(e) => settopTitle(e.target.value)} />
              </div>
              <div className='w-full flex mt-5'>
                <div className='w-[22%]'>
                  <h3 className='text-[13px] mt-1 font-normal'>Theme color</h3>
                </div>
                <input type="color" id="favcolor" name="favcolor" className='w-7 h-[1.9rem] rounded-l border' value={changeColor} onChange={(e) => setchangeColor(e.target.value)} />
                <input type='text' className='border h-[1.9rem] w-[28%] rounded-r focus:outline-none p-2 font-normal text-xs' value={changeColor} onChange={(e) => setchangeColor(e.target.value)} />
              </div>
              <div className='w-full flex mt-5'>
                <div className='w-[22%]'>
                  <h3 className='text-[13px] mt-1 font-normal'>Widget postion</h3>
                </div>
                <button className={`btn btn-sm shadow-none font-bold ${!bottomRight ? 'bg-gray-200' : ''} h-[1.8rem] focusable focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] w-[14%] p-0 rounded-none rounded-l`} onClick={() => {
                  setBottomleft(true),
                    setBottomright(false)
                }}>Bottom Left</button>

                <button className={`btn btn-sm shadow-none font-bold ${bottomRight ? 'bg-gray-200' : ''} h-[1.8rem] focusable focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] w-[14%] p-0 rounded-none rounded-r`} onClick={() => {
                  setBottomright(true),
                    setBottomleft(false)
                }}>Bottom Right</button>
              </div>
              <div className='justify-between flex mt-9'>
                <div>
                  <h2 className='text-[1.3rem] text-[#0E1726] font-bold mt-1.5'>Chat badge</h2>
                </div>
                <div className='flex'>
                  <button className={`h-7 w-10 text-xs rounded-none focusable focus:outline-none border focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] rounded-l font-bold ${!of ? 'bg-[#1F73B7] text-white' : ''}`} onClick={() => { setOn(true), setOf(false) }}>On</button>
                  <button className={`h-7 w-10 text-xs rounded-none rounded-r focusable focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] font-bold border ${of ? 'bg-gray-200' : ''}`} onClick={() => { setOn(false), setOf(true) }}>Off</button>
                </div>
              </div>
              <div className={`flex mt-1.5`}>
                <hr className='bg-blue-500 h-0.5 w-32' />
                <hr className='bg-gray-200 h-0.5 w-full' />
              </div>
              <div className={`flex mt-5 gap-3 ${of ? 'text-gray-400' : ''}`}>
                <button disabled={of} className={`${imgRight ? 'bg-gray-200' : ''} border focusable focus:bg-gray-200 duration-150 h-20 hover:bg-gray-50 w-24 text-xs rounded`} onClick={() => { setimgRight(true), setimgLeft(false), settextOnly(false), setcusImg(false) }}>Image right</button>
                <button disabled={of} className={`border h-20 w-24 text-xs duration-150 rounded focusable focus:bg-gray-200 ${imgLeft ? 'bg-gray-200' : ''} hover:bg-gray-50`} onClick={() => { setimgRight(false), setimgLeft(true), settextOnly(false), setcusImg(false) }}>Image left</button>
                <button disabled={of} className={`border h-20 w-24 text-xs duration-150 rounded focusable focus:bg-gray-200 ${textOnly ? 'bg-gray-200' : ''} hover:bg-gray-50`} onClick={() => { setimgRight(false), setimgLeft(false), settextOnly(true), setcusImg(false) }}>Text only</button>
                <button disabled={of} className={`border h-20 w-24 text-xs duration-150 rounded focusable focus:bg-gray-200 ${!textOnly && !imgLeft && !imgRight ? 'bg-gray-200' : ''} hover:bg-gray-50`} onClick={() => { setimgRight(false), setimgLeft(false), settextOnly(false), setcusImg(true) }}>Custom image</button>
              </div>
              <div className={`w-full flex mt-5 ${of ? 'text-[#DBDBDB]' : ''}`}>
                <div className='w-[22%]'>
                  <h3 className='text-[13px] mt-1 font-normal text-gray-400'>Background color</h3>
                </div>
                <input disabled={of} type="color" id="favcolor" name="favcolor" className='w-7 h-[1.9rem] rounded-l border' value={sameColor ? changeColor : changeBgColor} onChange={(e) => setchangeBgColor(e.target.value)} />
                <input disabled={of} type='text' className='border h-[1.9rem] w-[28%] rounded-r focus:outline-none p-2 font-normal text-xs' value={changeBgColor} onChange={(e) => setchangeBgColor(e.target.value)} />
                <input disabled={of} type='checkbox' id='same' name='same' className='form-check-input rounded h-[0.9rem] w-8 mt-2 ml-1.5' checked={sameColor} onChange={(e) => setsameColor(e.target.checked)} />
                <label htmlFor='same' className='font-normal text-xs pt-2 pl-1'>Same as theme color</label>
              </div>
              {!cusImg ?
                <div className={`w-full flex mt-5 ${of ? 'text-[#DBDBDB]' : ''}`}>
                  <div className='w-[22%]'>
                    <h3 className='text-[13px] mt-2.5 font-normal text-gray-400'>Message</h3>
                  </div>
                  <textarea value={message} disabled={of} className={`${of ? 'text-gray-400' : ''} w-[57%] p-1 resize-none form-input focusable focus:ring-offset-0 focus:ring-2 focus:ring-info rounded h-[3.4rem] text-[13px] font-normal`} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                : ''}
              {!textOnly ?
                <div className={`w-full flex mt-5 ${of ? 'text-[#DBDBDB]' : ''}`}>
                  <div className='w-[22%]'>
                    <h3 className='text-[13px] mt-2.5 font-normal text-gray-400'>Image</h3>
                  </div>
                      <img
                        src={mediaimage}
                        alt="Uploaded"
                        className='w-[3.6rem] h-[3.6rem]'
                      />
                        <div className='ml-4'>
                          <button type='button' className='h-[1.9rem] px-4 py-1.5 font-bold rounded text-xs border hover:bg-gray-200 duration-150' onClick={handleUpload}>Choose from gallery</button>
                          <div className='flex gap-3 mt-3'>
                            <button type='button' className='h-[1.9rem] px-4 py-1.5 font-bold rounded text-xs border hover:bg-gray-200 duration-150' onClick={handleUpload}>Upload image</button>
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef2}
                                style={{ display: 'none' }}
                                onChange={handleImageChange2}
                              />
                            <button type='button' className={` ${remove2 ? 'bg-gray-100' : ''} h-[1.9rem] px-4 py-1.5 font-bold rounded text-xs border hover:bg-gray-200 duration-150`} disabled={remove2} onClick={() => { setmediaImage(img2), setRemove2(true) }}>Remove</button>
                          </div>
                          <p className='text-xs font-normal mt-2 leading-5'>Maximum size 1 MB. Recommended dimensions 100x100px. <br />To support retina displays, recommended dimensions are 200x200px.</p>
                        </div>
                      </div>
                : ''}
              <h2 className='text-[1.2rem] text-[#4A4A4A] font-bold p-0 mt-9'>Concierge</h2>
              <div className='flex mt-2 mb-4'>
                <hr className='bg-blue-500 h-0.5 w-40' />
                <hr className='bg-gray-200 h-0.5 w-full' />
              </div>
              <div className='w-full flex'>
                <div className='w-[27%]'>
                  <h3 className='text-[13px] mt-1 font-normal'>Display title</h3>
                </div>
                <div className='w-full'>
                  <input type="text" value={displayTile} className='w-[43%] form-input rounded h-[1.9rem] text-[13px] p-1 font-normal' onChange={(e) => setdisplayTile(e.target.value)} />
                  <p className='mt-1.5 text-xs font-normal'>Customize this name to give the Concierge a personality.</p>
                </div>
              </div>
              <div className='w-full flex mt-5'>
                <div className='w-[27%]'>
                  <h3 className='text-[13px] mt-1 font-normal'>Byline</h3>
                </div>
                <div className='w-full'>
                  <input type="text" value={bylineTile} className='w-[43%] form-input rounded h-[1.9rem] text-[13px] p-1 font-normal' onChange={(e) => setbylineTile(e.target.value)} />
                  <p className='mt-1.5 text-xs font-normal'>Write a short message to pique your visitors' interest</p>
                </div>
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
                    <button type='button' className={`${remove ? 'bg-gray-100' : ''} h-[1.9rem] px-2 py-1.5 text-gray-500 font-bold rounded text-xs border hover:bg-gray-200 duration-150`} disabled={remove} onClick={() => { setImage(img), setRemove(true) }}>Remove</button>
                  </div>
                  <p className='text-xs font-normal mt-2 leading-5'>Appears in greeting and status messages <br /> Maximum size 100 KB, recommended dimensions 50x50px</p>
                </div>
              </div>
              <div className='mt-5 bg-[#EEEEEE] py-2 px-3 border-l-2 border-[#999999]'>
                <span className='text-xs font-normal'>To change your own display name, tagline, and avatar, go to</span>
                <span className='font-bold mt-1 ml-1 text-[13px] text-gray-600'><a href='/zendesk/personal' className='hover:underline'>Settings {'>'} Personal</a></span>
              </div>
              <h2 className='text-[1.2rem] text-[#4A4A4A] font-bold p-0 mt-9'>Message Style</h2>
              <div className='flex mt-2 mb-4'>
                <hr className='bg-blue-500 h-0.5 w-40' />
                <hr className='bg-gray-200 h-0.5 w-full' />
              </div>
              <div className='w-full flex mt-5'>
                <div className='w-[22%]'>
                  <h3 className='text-[13px] mt-1.5 font-normal'>Show avatars</h3>
                </div>
                <input type='checkbox' id='display agents' name='display agents' className='form-check-input rounded h-[0.9rem] w-8 mt-2 ml-1.5' />
                <label htmlFor='display agents' className='font-normal text-xs pt-2 pl-1'>Display agents' and visitors' avatars in chat messages</label>
              </div>
              <hr className='bg-gray-200 w-full mt-5' />
              <div className='flex justify-between mb-8'>
                <div className='mt-4 flex gap-3'>
                  <button className='btn btn-sm bg-[#1F73B7] shadow-none text-white rounded font-bold '>Save changes</button>
                  <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded'>Revert changes</button>
                </div>
                <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded mt-4 w-[115px] h-8'>Reset to default</button>
              </div>
            </div>
            {CHAT}
          </div>

          : form ?

            <div className='flex gap-16'>
              <div className='w-[44%]'>
                <div className='justify-between flex mt-9'>
                  <div>
                    <h2 className='text-[1.3rem] text-[#0E1726] font-bold mt-1.5'>Visitor profile</h2>
                  </div>
                  <div className='flex'>
                    <button className={`h-7 w-10 text-xs rounded-none focusable focus:outline-none border focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] rounded-l font-bold ${!visproOf ? 'bg-[#1F73B7] text-white' : ''}`} onClick={() => { setvisproOn(true), setvisproOf(false) }}>On</button>
                    <button className={`h-7 w-10 text-xs rounded-none rounded-r focusable focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] font-bold border ${visproOf ? 'bg-gray-200' : ''}`} onClick={() => { setvisproOn(false), setvisproOf(true) }}>Off</button>
                  </div>
                </div>
                <div className={`flex mt-1.5`}>
                  <hr className='bg-blue-500 h-0.5 w-40' />
                  <hr className='bg-gray-200 h-0.5 w-full' />
                </div>
                <div className='w-full flex mt-5'>
                  <div className='w-[22%]'>
                    <label className={`${visproOf ? 'text-[#C2C5C7]' : ''} text-[12px] mt-1.5 font-normal`} htmlFor='allow'>Allow phone number</label>
                  </div>
                  <input disabled={visproOf} type='checkbox' id='allow' name='allow' className='form-check-input rounded h-[0.9rem] w-8 mt-2 ml-1.5' checked={allowNum} onChange={(e) => setallowNum(e.target.checked)} />
                  <label htmlFor='allow' className={`${visproOf ? 'text-[#C2C5C7]' : ''} font-normal text-xs pt-2 pl-1`}>Allow non-authenticated visitors to enter their phone number</label>
                </div>
                <div className='w-full flex mt-5'>
                  <div className='w-[22%]'>
                    <label className={`${visproOf ? 'text-[#C2C5C7]' : ''} text-[12px] mt-1.5 font-normal`} htmlFor='allow'>Allow social login</label>
                  </div>
                  <div className='flex gap-1 ml-1.5 mt-2'>
                    <input disabled={visproOf} type='checkbox' className='form-check-input rounded h-[0.9rem] w-8' checked={fbCheck} onChange={(e) => setfbCheck(e.target.checked)} />
                    <img className={`h-4 w-4 ${visproOf ? 'grayscale-[40%]' : ''}`} src='../../../public/facbook.jpeg' alt='Facebook' />
                    <label className={`${visproOf ? 'text-[#C2C5C7]' : ''} font-normal text-xs ml-1`}>Facebook</label>
                  </div>
                  <div className='gap-1 flex ml-2 mt-2'>
                    <input disabled={visproOf} type='checkbox' className='form-check-input rounded h-[0.9rem] w-8' checked={googleCheck} onChange={(e) => setgoogleCheck(e.target.checked)} />
                    <img className={`h-4 w-4 ${visproOf ? 'grayscale-[40%]' : ''}`} src='../../../public/google.png' alt='Google' />
                    <label className={`${visproOf ? 'text-[#C2C5C7]' : ''} font-normal text-xs`}>Google</label>
                  </div>
                </div>
                <p className={`${visproOf ? 'text-[#C2C5C7]' : ''} text-xs font-gray-500 font-normal ml-36 mt-1`}>Allow visitors to provide their name, email, and profile picture using a social network.</p>
                <div className='justify-between flex mt-10'>
                  <div>
                    <h2 className='text-[1.3rem] text-[#0E1726] font-bold mt-1.5'>Pre-chat form</h2>
                  </div>
                  <div className='flex'>
                    <button className={`h-7 w-10 text-xs rounded-none focusable focus:outline-none border focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] rounded-l font-bold ${!prechatOf ? 'bg-[#1F73B7] text-white' : ''}`} onClick={() => { setprechatOn(true), setprechatOf(false), setSelect(1) }}>On</button>
                    <button className={`h-7 w-10 text-xs rounded-none rounded-r focusable focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] font-bold border ${prechatOf ? 'bg-gray-200' : ''}`} onClick={() => { setprechatOf(true), setprechatOn(false), setSelect(0) }}>Off</button>
                  </div>
                </div>
                <div className={`flex mt-1.5`}>
                  <hr className='bg-blue-500 h-0.5 w-40' />
                  <hr className='bg-gray-200 h-0.5 w-full' />
                </div>
                <p className='text-xs font-normal mt-2 text-gray-500'>Require visitors to complete a form before starting a chat.</p>
                <div className={`w-full flex mt-5 ${prechatOf ? 'text-[#C2C5C7]' : ''}`}>
                  <div className='w-[22%]'>
                    <label htmlFor='Pre-chat greeting' className='text-[13px] mt-2.5 font-normal'>Pre-chat greeting</label>
                  </div>
                  <textarea id='Pre-chat greeting' disabled={prechatOf} className={`${prechatOf ? 'text-gray-400 bg-[#FBFCFC]' : ''} w-[62%] p-1 resize-none form-input focusable focus:ring-offset-0 focus:ring-2 focus:ring-info rounded h-[3.3rem] text-[13px] font-normal`} onChange={(e) => setprechatOf(e.target.value)}></textarea>
                </div>
                {!visproOf ?
                  <>
                    <div className='w-full flex mt-5'>
                      <div className='w-[22%]'>
                        <label className={`text-[13px] ${prechatOf ? 'text-[#C2C5C7]' : ''} mt-1.5 font-normal`} htmlFor='RequireIDcheck'>Require identity</label>
                      </div>
                      <input type='checkbox' disabled={prechatOf} id='RequireIDcheck' name='RequireIDcheck' className='form-check-input rounded h-[0.9rem] w-8 mt-2 ml-1.5' checked={requireId} onChange={(e) => { setrequireId(e.target.checked), setSelect(1) }} />
                      <label htmlFor='RequireIDcheck' className={`${prechatOf ? 'text-[#C2C5C7]' : ''} font-normal text-xs pt-2 pl-1`}>Visitors must provide their name and email or use a social network.</label>
                    </div>
                    <div className='w-full flex mt-5'>
                      <div className='w-[22%]'>
                        <label className={`text-[13px] ${prechatOf ? 'text-[#C2C5C7]' : ''} mt-1.5 font-normal`} htmlFor='RequirePhncheck'>Require phone number</label>
                      </div>
                      <input type='checkbox' disabled={prechatOf} id='RequirePhncheck' name='RequirePhncheck' className='form-check-input rounded h-[0.9rem] w-8 mt-2 ml-1.5' checked={requirePhone} onChange={(e) => { setrequirePhone(e.target.checked), setSelect(1) }} />
                      <label htmlFor='RequirePhncheck' className={`${prechatOf ? 'text-[#C2C5C7]' : ''} font-normal text-xs pt-2 pl-1`}>Visitors must enter their phone number before starting a chat.</label>
                    </div>
                  </>
                  : ''}
                <div className='w-full flex mt-5'>
                  <div className='w-[22%]'>
                    <label className={`text-[13px] ${prechatOf ? 'text-[#C2C5C7]' : ''} mt-1.5 font-normal`} htmlFor='RequireQuecheck'>Require question</label>
                  </div>
                  <input type='checkbox' disabled={prechatOf} id='RequireQuecheck' name='RequireQuecheck' className='form-check-input rounded h-[0.9rem] w-8 mt-2 ml-1.5' checked={requireComment} onChange={(e) => { setrequireComment(e.target.checked), setSelect(1) }} />
                  <label htmlFor='RequireQuecheck' className={`${prechatOf ? 'text-[#C2C5C7]' : ''} font-normal text-xs pt-2 pl-1`}>Visitors must choose a department before starting a chat.</label>
                </div>
                <div className='justify-between flex mt-6'>
                  <div>
                    <h2 className='text-[1.3rem] text-[#0E1726] font-bold mt-1.5'>Offline form</h2>
                  </div>
                  <div className='flex'>
                    <button disabled={visproOf} className={`h-7 ${visproOf ? 'bg-[#F8F9F9]' : ''} w-10 text-xs rounded-none focusable focus:outline-none border focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] rounded-l font-bold ${!offlinechatOf ? 'bg-[#1F73B7]' : ''}`} onClick={() => { setofflinechatOn(true), setofflinechatOf(false), setSelect(3) }}>On</button>
                    <button disabled={visproOf} className={`h-7 ${visproOf ? 'bg-[#E9EBED]' : ''} w-10 text-xs rounded-none rounded-r focusable focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] font-bold border ${offlinechatOf ? 'bg-gray-200' : ''}`} onClick={() => { setofflinechatOf(true), setofflinechatOn(false), setSelect(0) }}>Off</button>
                  </div>
                </div>
                <div className={`flex mt-1.5`}>
                  <hr className='bg-blue-500 h-0.5 w-40' />
                  <hr className='bg-gray-200 h-0.5 w-full' />
                </div>
                <div className={`w-full flex mt-5 ${offlinechatOf ? 'text-[#C2C5C7]' : ''}`}>
                  <div className='w-[22%]'>
                    <label htmlFor='Offline greeting' className='text-[13px] mt-2.5 font-normal'>Offline greeting</label>
                  </div>
                  <textarea id='Offline greeting' disabled={offlinechatOf} className={`${offlinechatOf ? 'text-gray-400 bg-[#FBFCFC]' : ''} w-[62%] p-1 resize-none form-input focusable focus:ring-offset-0 focus:ring-2 focus:ring-info rounded h-[3.3rem] text-[13px] font-normal`} onChange={(e) => setofflinechatOf(e.target.value)}></textarea>
                </div>
                {!visproOf ?
                  <div className='w-full flex mt-5'>
                    <div className='w-[22%]'>
                      <label className={`text-[13px] ${offlinechatOf ? 'text-[#C2C5C7]' : ''} mt-1.5 font-normal`} htmlFor='Requireoffphn'>Require phone number</label>
                    </div>
                    <input type='checkbox' disabled={offlinechatOf} id='Requireoffphn' name='Requireoffphn' className='form-check-input rounded h-[0.9rem] w-8 mt-2 ml-1.5' checked={requireVisphone} onChange={(e) => { setrequireVisphone(e.target.checked), setSelect(3) }} />
                    <label htmlFor='Requireoffphn' className={`${offlinechatOf ? 'text-[#C2C5C7]' : ''} font-normal text-xs pt-2 pl-1 leading-5`}>Visitors must enter their phone number when sending you an offline <br /> message</label>
                  </div>
                  : ''}
                <div className='w-full flex mt-5'>
                  <div className='w-[22%]'>
                    <label className={`${offlinechatOf ? 'text-[#C2C5C7]' : ''} text-[13px] mt-1.5 font-normal`}>Allow messaging <br /> channels</label>
                  </div>
                  <div className='ml-1.5 mt-2'>
                    <div className='flex gap-0.5 '>
                      <input disabled={offlinechatOf} type='checkbox' className='form-check-input rounded h-[0.9rem] w-8' checked={messenger} onChange={(e) => { setMessenger(e.target.checked), setSelect(3) }} />
                      <img className={`h-6 w-6 relative bottom-1 ${offlinechatOf ? 'grayscale-[40%]' : ''}`} src='../../../public/messenger.jpg' alt='Messenger' />
                      <label className={`${offlinechatOf ? 'text-[#C2C5C7]' : ''} font-normal text-xs ml-1`}>Messenger</label>
                    </div>
                    <p className={`${offlinechatOf ? 'text-[#C2C5C7]' : ''} font-normal text-xs text-gray-500 ml-10 my-0.5`}>Add your Messenger username or Facebook page ID</p>
                    <input type="text" className='form-input rounded ml-10 h-[1.9rem] w-60 mt-3 p-1.5 focusable focus:ring-offset-0 focus:ring-2 focus:ring-info duration-500' />
                    <div className='flex gap-0.5 mt-3.5'>
                      <input disabled={offlinechatOf} type='checkbox' className='form-check-input rounded h-[0.9rem] w-8' checked={tweet} onChange={(e) => { setTweet(e.target.checked), setSelect(3) }} />
                      <img className={`h-4.5 w-4.5 relative bottom-0.5 ${offlinechatOf ? 'grayscale-[40%]' : ''}`} src='../../../public/twitter.jpg' alt='Messenger' />
                      <label className={`${offlinechatOf ? 'text-[#C2C5C7]' : ''} font-normal text-xs ml-1`}>Twitter</label>
                    </div>
                    <p className={`${offlinechatOf ? 'text-[#C2C5C7]' : ''} font-normal text-xs text-gray-500 ml-10 my-0.5`}>Add your Twitter ID</p>
                    <input type="text" className='form-input rounded ml-10 h-[1.9rem] w-60 mt-3 p-1.5 focusable focus:ring-offset-0 focus:ring-2 focus:ring-info duration-500' />
                  </div>
                </div>
                <hr className='bg-gray-200 w-full mt-12' />
                <div className='flex justify-between mb-10'>
                  <div className='mt-4 flex gap-3'>
                    <button className='btn btn-sm bg-[#1F73B7] shadow-none text-white rounded font-bold '>Save changes</button>
                    <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded'>Revert changes</button>
                  </div>
                  <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded mt-4 w-[115px] h-8'>Reset to default</button>
                </div>
              </div>
              {CHAT}
            </div>
            : setting ?
              <div className='flex gap-16'>
                <div className='w-[44%]'>
                  <h2 className='text-[1.2rem] text-[#4A4A4A] font-bold p-0 mt-9'>General preferences</h2>
                  <div className='flex mt-2 mb-4'>
                    <hr className='bg-blue-500 h-0.5 w-60' />
                    <hr className='bg-gray-200 h-0.5 w-full' />
                  </div>
                  <div className='w-full flex mt-5'>
                    <div className='w-[22%]'>
                      <label htmlFor='General' className='text-[13px] mt-1.5 font-normal'>Notification sound</label>
                    </div>
                    <input type='checkbox' id='General' name='General' className='form-check-input rounded h-[0.9rem] w-8 mt-2 ml-1.5' />
                    <label htmlFor='General' className='font-normal text-xs pt-2 pl-1'>Play a sound for the visitor when a new message is received</label>
                  </div>
                  <h2 className='text-[1.2rem] text-[#4A4A4A] font-bold p-0 mt-9'>Satisfication rating</h2>
                  <div className='flex mt-2 mb-4'>
                    <hr className='bg-blue-500 h-0.5 w-56' />
                    <hr className='bg-gray-200 h-0.5 w-full' />
                  </div>
                  <div className='w-full flex mt-5'>
                    <div className='w-[22%]'>
                      <label htmlFor='rate' className='text-[13px] mt-1.5 font-normal'>Enable satisfaction ratings</label>
                    </div>
                    <input type='checkbox' id='rate' name='rate' className='form-check-input rounded h-[0.9rem] w-8 mt-2 ml-1.5' checked={rating} onChange={(e) => setRating(e.target.checked)} />
                    <div className='flex'>
                      <label htmlFor='rate' className='font-normal text-xs pt-2 pl-1'>Allow visitors to rate their chats with your agents. </label>
                      <a target='_blank' href='https://support.zendesk.com/hc/en-us/articles/4408883190682-Measuring-visitor-satisfaction-with-chat-rating' className='font-normal text-xs pt-2 pl-1 text-blue-500 hover:underline'>Learn more.</a>
                    </div>
                  </div>
                  <hr className='bg-gray-200 w-full mt-5' />
                  <div className='flex justify-between'>
                    <div className='mt-4 flex gap-3'>
                      <button className='btn btn-sm bg-[#1F73B7] shadow-none text-white rounded font-bold '>Save changes</button>
                      <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded'>Revert changes</button>
                    </div>
                    <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded mt-4 w-[115px] h-8'>Reset to default</button>
                  </div>
                </div>
                {CHAT}
              </div>

              : webWid ?
                <>
                  <div className='w-[48%]'>
                    <div className='justify-between flex mt-9'>
                      <div>
                        <h2 className='text-[1.2rem] text-gray-700 font-bold mt-1.5'>Blocked countries</h2>
                      </div>
                      <div className='flex'>
                        <button className={`h-7 w-10 text-xs rounded-none focusable focus:outline-none border focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] rounded-l font-bold ${blockOn ? 'bg-[#1F73B7] text-white' : ''}`} onClick={() => { setblockOn(true), setblockOf(false) }}>On</button>
                        <button className={`h-7 w-10 text-xs rounded-none rounded-r focusable focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] font-bold border ${!blockOn ? 'bg-gray-200' : ''}`} onClick={() => { setblockOf(true), setblockOn(false) }}>Off</button>
                      </div>
                    </div>
                    <div className='flex mt-2 mb-4'>
                      <hr className='bg-blue-500 h-0.5 w-56' />
                      <hr className='bg-gray-200 h-0.5 w-full' />
                    </div>
                    <div className='flex'>
                      <label htmlFor='rate' className='font-normal text-xs'>Allow visitors to rate their chats with your agents. </label>
                      <a target='_blank' href='https://support.zendesk.com/hc/en-us/articles/4408883190682-Measuring-visitor-satisfaction-with-chat-rating' className='font-normal text-xs text-blue-700 hover:underline pl-1'>Learn about blocked countries</a>
                    </div>
                    <select id="countries" className={`${blockOf ? 'bg-gray-50' : ''} form-multiselect text-xs border rounded hover:border px-1 hover:border-blue-500 w-52 h-[1.9rem] my-1`} disabled={blockOf}>
                      <option>China</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                    <div className='justify-between flex mt-9'>
                      <div>
                        <h2 className='text-[1.2rem] text-gray-700 font-bold mt-1.5'>Allowed domains</h2>
                      </div>
                      <div className='flex'>
                        <button className={`h-7 w-10 text-xs rounded-none focusable focus:outline-none border focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] rounded-l font-bold ${allwedOn ? 'bg-[#1F73B7] text-white' : ''}`} onClick={() => { setallwedOn(true), setallwedOf(false) }}>On</button>
                        <button className={`h-7 w-10 text-xs rounded-none rounded-r focusable focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#A3C1DA] font-bold border ${!allwedOn ? 'bg-gray-200' : ''}`} onClick={() => { setallwedOf(true), setallwedOn(false) }}>Off</button>
                      </div>
                    </div>
                    <div className='flex mt-2 mb-4'>
                      <hr className='bg-blue-500 h-0.5 w-56' />
                      <hr className='bg-gray-200 h-0.5 w-full' />
                    </div>
                    <div className='flex'>
                      <label className='font-normal text-xs'>List the domains where the widget should be displayed.</label>
                      <a target='_blank' href='https://support.zendesk.com/hc/en-us/articles/4408883190682-Measuring-visitor-satisfaction-with-chat-rating' className='font-normal text-xs text-blue-700 hover:underline pl-1'>Learn about blocked domains</a>
                    </div>
                    {inputFields.map((field, index) => (
                      <div className='flex gap-2' key={index}>
                        <input type="text" className={`${allwedOf ? 'bg-gray-50' : ''} rounded h-8 form-input w-52 mt-1 pl-2 p-1 text-[13px] font-normal`} disabled={allwedOf} placeholder='Enter domain name' value={field.value} onChange={(event) => handleInputChange(index, event)} />
                        {inputFields.length > 1 ? <button className={`${allwedOf ? 'bg-gray-50' : ''} px-[0.4rem] mt-1 rounded-full border hover:bg-[#E9EBED]`} disabled={allwedOf} onClick={() => handleRemoveField(index)} ><IconMinus className='w-4 h-4' /></button> : ''}
                        {index === inputFields?.length - 1 ?
                          <button className={`${allwedOf ? 'bg-gray-50' : ''} px-[0.4rem] mt-1 rounded-full border hover:bg-[#E9EBED]`} disabled={allwedOf} onClick={handleAddField}>
                            <IconPlus className='w-4 h-4' />
                          </button>
                          : null}
                      </div>
                    ))}
                    <h2 className='text-[1.2rem] text-[#4A4A4A] font-bold p-0 mt-9'>Visitor authentication</h2>
                    <div className='flex mt-2 mb-4'>
                      <hr className='bg-blue-500 h-0.5 w-60' />
                      <hr className='bg-gray-200 h-0.5 w-full' />
                    </div>
                    <div className='flex'>
                      <label className='font-normal text-gray-600 text-[13px]'>Enable visitor authentication for cross-domain support and the ability to show past chats in the widget. <a target='_blank' href='https://support.zendesk.com/hc/en-us/articles/4408883190682-Measuring-visitor-satisfaction-with-chat-rating' className='font-normal text-xs text-blue-700 hover:underline pl-1'>Learn about visitor authentication</a></label>
                    </div>
                    <div className='flex gap-10 mt-2'>
                      <h2 className='font-normal text-[12.5px]'>Shared secret</h2>
                      <div className='flex gap-2'>
                        <p className='font-normal text-[13px]'>{text ? text.slice(0, 7) : '5dge5j6'}</p>
                        <button className='border border-gray-300 hover:bg-gray-200 font-bold text-xs shadow-none rounded px-2.5 py-1.5 relative bottom-1' onClick={() => setModal(true)}>Regenerate</button>
                      </div>
                    </div>
                    <p className='font-normal text-xs text-gray-500 mt-1.5 ml-28'>For security reasons, we only display the first seven characters of your shared secret.</p>
                  </div>
                  <hr className='bg-gray-200 w-[48%] mt-5' />
                  <div className='flex mt-4 flex gap-3 mb-4'>
                    <button className='btn btn-sm bg-[#1F73B7] shadow-none text-white rounded font-bold '>Save changes</button>
                    <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded'>Revert changes</button>
                  </div>
                </>
                : ''}
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
            <div className="flex items-start justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="panel border-0 rounded w-full max-w-xl mt-72 text-black dark:text-white-dark relative pb-0 px-0 h-[14.1rem]">
                  <div className=" bg-white flex items-center w-full justify-center">
                    {codePlace ? <h6 className="text-base font-bold">Shared secret generated</h6> : <h6 className="text-base font-bold">Regenerarte shared secret</h6>}
                  </div>
                  <hr className='h-[1.5px] rounded w-[88%] mx-8 bg-gray-200 my-4' />
                  {!codePlace ?
                    <>
                      <p className='font-normal text-[13px] w-full text-center mt-1'>Authenticated visitors will be disconnected for up to five minutes. <br /> Are you sure you want to proceed?</p>
                      <p className='font-normal text-red-600 text-[13px] w-full text-center mt-1.5'>It is recommended that you schedule this for when your account is offline.</p>
                      <div className='bg-[#F4F4F4] p-2 border-t border-gray-200 flex gap-2 justify-center mt-9'>
                        <button className='border bg-[#1570b5] border-gray-300 text-white hover:bg-[#5293C7] font-semibold text-xs rounded px-2.5 py-1.5' onClick={() => { handleRegenerateClick(), setcodePlace(true) }}>Regenerate</button>
                        <button className='border border-gray-300 hover:bg-gray-200 font-bold text-xs rounded px-5 py-1.5' onClick={() => setModal(false)}>Cancel</button>
                      </div>
                    </>
                    :
                    <>
                      <div className='ml-12'>
                        <p className='text-xs font-normal'>This is your shared secret:</p>
                        <div className='flex mt-1'>
                          <input value={text} readOnly type="text" className='form-input rounded-l h-[2rem] w-[60%] rounded-none bg-[#F8F9F9] text-xs font-normal px-2' />
                          <button className='border-l-0 hover:bg-gray-200 duration-300 border rounded-r h-[2rem] px-4 text-xs font-bold' onClick={() => handleCopyClick()}>{copy}</button>
                        </div>
                        <p className='text-xs font-normal text-red-700 mt-4'>Note: This shared secret will only be fully displayed once, please keep it safe.</p>
                      </div>
                      <div className='bg-[#F4F4F4] p-2 border-t border-gray-200 flex gap-2 justify-center mt-3'>
                        <button className='border bg-[#1570b5] border-gray-300 text-white hover:bg-[#5293C7] text-[13px] font-bold rounded px-5 py-1.5' onClick={() => { setModal(false), setcodePlace(false), setCopy('Copy') }}>Ok, got it!</button>
                      </div>
                    </>
                  }
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
