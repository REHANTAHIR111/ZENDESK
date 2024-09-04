import React, { useEffect, useState, Fragment, useRef} from 'react'
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import IconTrashLines from '../../components/Icon/IconTrashLines';
import Tippy from '@tippyjs/react';
import IconEye from '../../components/Icon/IconEye';
import IconPencil from '../../components/Icon/IconPencil';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import sortBy from 'lodash/sortBy';
import { List } from 'lodash';
import IconMinus from '../../components/Icon/IconMinus';
import IconArrowBackward from '../../components/Icon/IconArrowBackward';
import IconPlus from '../../components/Icon/IconPlus';
import { Transition, Dialog } from '@headlessui/react';
import { Space } from '@mantine/core';


const rowData: List<any> | null | undefined = [
];

export default function Account() {
  const dispatch = useDispatch();
  const [subscribe, setSubscribe] = useState<any>(true);
  const [app, setApp] = useState<any>('');
  const [sdks, setSdks] = useState<any>('');
  const [emailPipe, setemailPipe] = useState<any>('');
  const [chatTag, setchatTag] = useState<any>('');
  const [fileSend, setfileSend] = useState<any>('');
  const [operating, setOperating] = useState<any>('');
  const [timeZone, settimeZone] = useState<any>('');
  const [security, setsecurity] = useState<any>('');
  const [visList, setvisList] = useState<any>('');
  const [installBtn, setinstallBtn] = useState<any>(true);
  const [privateBtn, setprivateBtn] = useState<any>(false);
  const [page, setPage] = useState(1);
  const PAGE_SIZES = [15, 20, 30, 50, 100];
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });
  const [dataArray, setdataArray] = useState([{ name: 'Zendesk', company: 'Zendesk1', client: 'FGXegpNwpliugoOTfsiiCuJAkJFECvkCaOQnCP8JdZR8bl0P5G' }]);
  const [dataarray, setdataarray] = useState([{ NAME: 'a', Platform: '', DATE: '26/08/2024' ,AppId: '748186944379150337'}]);
  const [recordsData, setRecordsData] = useState(dataArray);
  const [recordsdata, setrecordsData] = useState(dataarray);
  const [loader, setLoader] = useState<any>(true);
  const [selectedRecords, setSelectedRecords] = useState<any>([]);
  const [selectedsecRecords, setselectedsecRecords] = useState<any>([]);
  const [addApi, setaddApi] = useState<any>('');
  const [editApi, seteditApi] = useState<any>('');
  const [addApp, setaddApp] = useState<any>('');
  const [editApp, seteditApp] = useState<any>('');
  const [text, setText] = useState<string>('');
  const [copy, setCopy] = useState<string>('Copy');
  const [inputFields, setInputFields] = useState([{ value: '' }]);
  const [modal, setModal] = useState<any>(false);
  const [codePlace, setcodePlace] = useState<any>(false);
  const [error, setError] = useState<any>('');
  const [file, setFile] = useState<any>('');
  const [pemError, setpemError] = useState<any>('');
  const [pemFile, setpemFile] = useState<any>('');
  const fileInput = useRef<any>(null);
  const pemInput = useRef<any>(null);
  const [fileError, setfileError] = useState<any>('');
  const [jsonFile, setjsonFile] = useState<any>('');
  const [pemfileError, setpemfileError] = useState<any>('');
  const [pemDoc, setpemDoc] = useState<any>('');
  const fileRef = useRef<any>(null);
  const pemfileRef = useRef<any>(null);
  const [textarea, setTextarea] = useState<any>('748186944379150337');
  const [textCopy, settextCopy] = useState<any>('');
  const [time, setTime] = useState<any>(true);
  const [emailOf, setemailOf] = useState<any>(false);
  const [emailOn, setemailOn] = useState<any>(true);
  const [input, setInput] = useState([{ value: '' }]);
  const [inputText, setinputText] = useState([{ value: '' }]);
  const [fileOn, setfileOn] = useState<any>(true);
  const [fileOf, setfileOf] = useState<any>(false);
  const [shareLimit, setshareLimit] = useState<any>(true);
  const [allowPdf, setallowPdf] = useState<any>(false);
  const [checkedMethod, setcheckedMethod] = useState<any>(false);
  const [nullTextarea, setnullTextarea] = useState<any>('');
  const [operateOn, setoperateOn] = useState<any>(false);
  const [operateOf, setoperateOf] = useState<any>(true);
  const [account, setAccount] = useState<any>(true);
  const [department, setDepartment] = useState<any>(false);
  const [startTime, setStartTime] = useState<number>(540);
  const [endTime, setEndTime] = useState<number>(1020);
  const [timeCheck, settimeCheck] = useState<any>(true);

  const [startTime1, setStartTime1] = useState<number>(540);
  const [endTime1, setEndTime1] = useState<number>(1020);
  const [timeCheck1, settimeCheck1] = useState<any>(true);
  const [startTime2, setStartTime2] = useState<number>(540);
  const [endTime2, setEndTime2] = useState<number>(1020);
  const [timeCheck2, settimeCheck2] = useState<any>(true);
  const [startTime3, setStartTime3] = useState<number>(540);
  const [endTime3, setEndTime3] = useState<number>(1020);
  const [timeCheck3, settimeCheck3] = useState<any>(true);
  const [startTime4, setStartTime4] = useState<number>(540);
  const [endTime4, setEndTime4] = useState<number>(1020);
  const [timeCheck4, settimeCheck4] = useState<any>(true);
  const [startTime5, setStartTime5] = useState<number>(540);
  const [endTime5, setEndTime5] = useState<number>(1020);
  const [timeCheck5, settimeCheck5] = useState<any>(false  );
  const [startTime6, setStartTime6] = useState<number>(540);
  const [endTime6, setEndTime6] = useState<number>(1020);
  const [timeCheck6, settimeCheck6] = useState<any>(false  );

  const handleStartTimeChange = (event: any) => {
    const newStartTime = Number(event.target.value);
    if (newStartTime <= endTime) { 
      setStartTime(newStartTime);
    }
  };

  const handleEndTimeChange = (event: any) => {
    const newEndTime = Number(event.target.value);
    if (newEndTime >= startTime) {
      setEndTime(newEndTime);
    }
  };

  const handleStartTimeChange1 = (event: any) => {
    const newStartTime = Number(event.target.value);
    if (newStartTime <= endTime1) { 
      setStartTime1(newStartTime);
    }
  };

  const handleEndTimeChange1 = (event: any) => {
    const newEndTime = Number(event.target.value);
    if (newEndTime >= startTime1) {
      setEndTime1(newEndTime);
    }
  };

  const handleStartTimeChange2 = (event: any) => {
    const newStartTime = Number(event.target.value);
    if (newStartTime <= endTime2) { 
      setStartTime2(newStartTime);
    }
  };

  const handleEndTimeChange2 = (event: any) => {
    const newEndTime = Number(event.target.value);
    if (newEndTime >= startTime2) {
      setEndTime2(newEndTime);
    }
  };

  const handleStartTimeChange3 = (event: any) => {
    const newStartTime = Number(event.target.value);
    if (newStartTime <= endTime3) { 
      setStartTime3(newStartTime);
    }
  };

  const handleEndTimeChange3 = (event: any) => {
    const newEndTime = Number(event.target.value);
    if (newEndTime >= startTime3) {
      setEndTime3(newEndTime);
    }
  };

  const handleStartTimeChange4 = (event: any) => {
    const newStartTime = Number(event.target.value);
    if (newStartTime <= endTime4) { 
      setStartTime4(newStartTime);
    }
  };

  const handleEndTimeChange4 = (event: any) => {
    const newEndTime = Number(event.target.value);
    if (newEndTime >= startTime4) {
      setEndTime4(newEndTime);
    }
  };

  const handleStartTimeChange5 = (event: any) => {
    const newStartTime = Number(event.target.value);
    if (newStartTime <= endTime5) { 
      setStartTime5(newStartTime);
    }
  };

  const handleEndTimeChange5 = (event: any) => {
    const newEndTime = Number(event.target.value);
    if (newEndTime >= startTime5) {
      setEndTime5(newEndTime);
    }
  };

  const handleStartTimeChange6 = (event: any) => {
    const newStartTime = Number(event.target.value);
    if (newStartTime <= endTime6) { 
      setStartTime6(newStartTime);
    }
  };

  const handleEndTimeChange6 = (event: any) => {
    const newEndTime = Number(event.target.value);
    if (newEndTime >= startTime6) {
      setEndTime6(newEndTime);
    }
  };

  const formatTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = mins < 10 ? `0${mins}` : mins;
    return `${formattedHours}:${formattedMinutes} ${period}`;
  };

  useEffect(() => {
    dispatch(setPageTitle('Accounts')); 

    setTimeout(() => {
      setLoader(false)
    }, 3000); 

  }, []);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecordsData([...dataArray.slice(from, to)]);
  }, [page, pageSize, dataArray]);

  useEffect(() => {
    const data = sortBy(dataArray, sortStatus.columnAccessor);
    setdataArray(sortStatus.direction === 'desc' ? data.reverse() : data);
    setPage(1);
}, [sortStatus]); 

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setrecordsData([...dataarray.slice(from, to)]);
  }, [page, pageSize, dataarray]);

  useEffect(() => {
    const data = sortBy(dataarray, sortStatus.columnAccessor);
    setdataarray(sortStatus.direction === 'desc' ? data.reverse() : data);
    setPage(1);
}, [sortStatus]); 

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
        setTime(false)
        setTimeout(() => {
            const largeCodeLength = 100; 
            setText(generateRandomText(largeCodeLength));
            setTime(true)
        }, 1000);
    };

        //copy code ---
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        setCopy('Copied✔')
    };
    
 //select json file
    const handleFileChange = (event:any) => {
        const file = event.target.files?.[0];

        if (file && file.type === 'application/json') {
            setError(false)
            event.target.value = '';
            setFile(file.name);
        } 
        else {
            setFile(null);
            setError(true)
            event.target.value = '';
        }
    };   

    const handleButtonClick = () => {
        
        fileInput.current?.click();
        
    };

 //select Pem  file
    const handlePemChange = (event:any) => {
        const pem = event.target.files?.[0];

        if (pem && pem.name.endsWith('.pem')) {
            setpemError(false)
            event.target.value = '';
            setpemFile(pem.name);
        } 
        else {
            setpemFile(null);
            setpemError(true)
            event.target.value = '';
        }
    };   

    const handlePemClick = () => {
        
        pemInput.current?.click();
        
    };

    //select json file
    const handleSecChange = (event:any) => {
        const changefile = event.target.files?.[0];

        if (changefile && changefile.type === 'application/json') {
            setfileError(false)
            event.target.value = '';
            setjsonFile(changefile.name);
        } 
        else {
            setjsonFile(null);
            setfileError(true)
            event.target.value = '';
        }
    };   

    const handleSecClick = () => {
        
        fileRef.current?.click();
        
    };

    //addmore 2---
    const handleAddInput = () => {
        setInput([...input, { value: '' }]);
       };
   
       const handleRemoveInput = (indexes: number) => {
           const field = [...input];
           field.splice(indexes, 1);
           setInput(field);
       };
   
       const handleChangeInput = (indexes: number, event: any) => {
           const field = [...input];
           field[indexes].value = event.target.value;
           setInput(field);
       };

 //select Pem  file
    const handlepemfileChange = (event:any) => {
        const pemfile = event.target.files?.[0];

        if (pemfile && pemfile.name.endsWith('.pem')) {
            setpemfileError(false)
            event.target.value = '';
            setpemDoc(pemfile.name);
        } 
        else {
            setpemDoc(null);
            setpemfileError(true)
            event.target.value = '';
        }
    };   

    const handleClick = () => {
        pemfileRef.current?.click();   
    };

    const copyarea = () => {
        navigator.clipboard.writeText(textarea)
        settextCopy('Your ID Has Been Copied')
    }

    //email validation 

    // const valid = (email: any) => {
    //     let match = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //     return match.test(email);
    // }

    interface Field {
        name: string;
        value: string;
    }

     //addmore 3---
     const addMoreField = () => {
        setinputText([...inputText, { value: '' }]);
    };
   
       const removeField = (key: number) => {
           const textField = [...inputText];
           textField.splice(key, 1);
           setinputText(textField);
       };
   
       const changeFieldData = (key: number, event: any) => {
           const textField = [...inputText];
           textField[key].value = event.target.value;
           setinputText(textField);
       };
    
  return (
    <div>
        <div className='flex'>
                <button className={`${!app && !sdks && !emailPipe && !chatTag && !fileSend && !operating && !timeZone && !security && !visList ? 'bg-gray-200' : ''} h-7 px-2 border-gray-300 rounded-none rounded-l duration-150 border hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200 font-[sans-serif] text-[11.5px]`} onClick={() => {
                  setSubscribe(true),
                  setApp(false),
                  setSdks(false),
                  setemailPipe(false),
                  setchatTag(false)
                  setfileSend(false),
                  setOperating(false),
                  settimeZone(false),
                  setsecurity(false),
                  setvisList(false)
                  setaddApp(false),
                  seteditApp(false),
                  setaddApi(false),
                  seteditApi(false),
                  settextCopy('')
              }}>
                Subscriptions
              </button>
              <button className={`h-7 px-2.5 rounded-none duration-150 border border-r-0 border-l-0 border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200 font-[sans-serif] text-[11.5px] ${app ? 'bg-gray-200' : ''}`} onClick={() => {
                setSubscribe(false),
                setApp(true),
                setSdks(false),
                setemailPipe(false),
                setchatTag(false)
                setfileSend(false),
                setOperating(false),
                settimeZone(false),
                setsecurity(false),
                setvisList(false),
                setaddApp(false),
                seteditApp(false),
                setaddApi(false),
                seteditApi(false),
                settextCopy('')
              }}>
                Apps
              </button>

              <button className={`h-7 px-2.5 rounded-none duration-150 border border-r-0 hover:bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200 font-[sans-serif] text-[11.5px] ${sdks ? 'bg-gray-200' : ''}`} onClick={() => {
                setSubscribe(false),
                setApp(false),
                setSdks(true),
                setemailPipe(false),
                setchatTag(false)
                setfileSend(false),
                setOperating(false),
                settimeZone(false),
                setsecurity(false),
                setvisList(false)
              }}>
                Api & SDKs
              </button>

              <button className={`h-7 px-2.5 rounded-none duration-150 border border-r-0 hover:bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200 font-[sans-serif] text-[11.5px] ${emailPipe ? 'bg-gray-200' : ''}`} onClick={() => {
                setSubscribe(false),
                setApp(false),
                setSdks(false),
                setemailPipe(true),
                setchatTag(false)
                setfileSend(false),
                setOperating(false),
                settimeZone(false),
                setsecurity(false),
                setvisList(false),
                setaddApp(false),
                seteditApp(false),
                setaddApi(false),
                seteditApi(false),
                settextCopy('')
              }}>
                Email piping
              </button>

              <button className={`h-7 px-2.5 rounded-none duration-150 border border-r-0 hover:bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200 font-[sans-serif] text-[11.5px] ${chatTag ? 'bg-gray-200' : ''}`} onClick={() => {
                setSubscribe(false),
                setApp(false),
                setSdks(false),
                setemailPipe(false),
                setchatTag(true)
                setfileSend(false),
                setOperating(false),
                settimeZone(false),
                setsecurity(false),
                setvisList(false),
                setaddApp(false),
                seteditApp(false),
                setaddApi(false),
                seteditApi(false),
                settextCopy('')
              }}>
                Chat tags
              </button>
                <button className={`${fileSend ? 'bg-gray-200' : ''} border border-r-0 h-7 px-2.5 rounded-none border-gray-300 duration-150 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200 font-[sans-serif] text-[11.5px]`} onClick={() => {
                  setSubscribe(false),
                  setApp(false),
                  setSdks(false),
                  setemailPipe(false),
                  setchatTag(false)
                  setfileSend(true),
                  setOperating(false),
                  settimeZone(false),
                  setsecurity(false),
                  setvisList(false),
                  setaddApp(false),
                  seteditApp(false),
                  setaddApi(false),
                  seteditApi(false),
                  settextCopy('')
              }}>
                File sending
              </button>
              <button className={`h-7 px-2.5 rounded-none duration-150 border border-r-0 hover:bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200 font-[sans-serif] text-[11.5px] ${operating ? 'bg-gray-200' : ''}`} onClick={() => {
                setSubscribe(false),
                setApp(false),
                setSdks(false),
                setemailPipe(false),
                setchatTag(false)
                setfileSend(false),
                setOperating(true),
                settimeZone(false),
                setsecurity(false),
                setvisList(false),
                setaddApp(false),
                seteditApp(false),
                setaddApi(false),
                seteditApi(false),
                settextCopy('')
              }}>
                Operating hours
              </button>

              <button className={`h-7 px-2.5 rounded-none border border-r-0 duration-150 hover:bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200 font-[sans-serif] text-[11.5px] ${timeZone ? 'bg-gray-200' : ''}`} onClick={() => {
                setSubscribe(false),
                setApp(false),
                setSdks(false),
                setemailPipe(false),
                setchatTag(false)
                setfileSend(false),
                setOperating(false),
                settimeZone(true),
                setsecurity(false),
                setvisList(false),
                setaddApp(false),
                seteditApp(false),
                setaddApi(false),
                seteditApi(false),
                settextCopy('')
              }}>
                Timezone
              </button>

              <button className={`h-7 px-2.5 rounded-none border duration-150 hover:bg-gray-50 focus:outline-none border-gray-300 focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200 font-[sans-serif] text-[11.5px] ${security ? 'bg-gray-200' : ''}`} onClick={() => {
                setSubscribe(false),
                setApp(false),
                setSdks(false),
                setemailPipe(false),
                setchatTag(false)
                setfileSend(false),
                setOperating(false),
                settimeZone(false),
                setsecurity(true),
                setvisList(false),
                setaddApp(false),
                seteditApp(false),
                setaddApi(false),
                seteditApi(false),
                settextCopy('')
              }}>
                Security
              </button>

              <button className={`h-7 px-2.5 rounded-none border border-l-0 rounded-r duration-150 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#A3C1DA] focusable focus:bg-gray-200 font-[sans-serif] text-[11.5px] ${visList ? 'bg-gray-200' : ''}`} onClick={() => {
                setSubscribe(false),
                setApp(false),
                setSdks(false),
                setemailPipe(false),
                setchatTag(false)
                setfileSend(false),
                setOperating(false),
                settimeZone(false),
                setsecurity(false),
                setvisList(true),
                setaddApp(false),
                seteditApp(false),
                setaddApi(false),
                seteditApi(false),
                settextCopy('')
              }}>
                Visitor List
              </button>
          </div>
          <hr className='bg-gray-200 w-full mt-2.5' />
          {subscribe ?
              <div className='grid grid-cols-2 font-normal text-[13px]'>
                  <div>
                      <h2 className='text-[1.2rem] text-[#4A4A4A] font-bold p-0 mt-9'>Team plan</h2>
                      <div className='flex mt-2 mb-3'>
                          <hr className='bg-blue-500 h-0.5 w-24' />
                          <hr className='bg-gray-200 h-0.5 w-full' />
                      </div>
                      <p className='text-gray-500 text-xs'>The features of your current plan are shown below. Compare Zendesk Chat's <a href='https://teamsupport1.zendesk.com/admin/billing' target='_blank' className='hover:underline text-blue-600'>pricing plans.</a></p>
                      <div className='flex w-full mt-4'>
                          <h3 className='w-[31.5%]'>Agents</h3>
                          <p className='text-gray-500'>1 agent allowed</p>
                      </div>
                      <div className='flex w-full mt-7'>
                          <h3 className='w-[31.5%]'>Concurrent chats</h3>
                          <p className='text-gray-500'>Unlimited</p>
                      </div>
                      <div className='flex w-full mt-7'>
                          <h3 className='w-[31.5%]'>Triggers</h3>
                          <p className='text-gray-500'>2</p>
                      </div>
                      <div className='flex w-full mt-7'>
                          <h3 className='w-[31.5%]'>Departments</h3>
                          <p className='text-gray-500'>2</p>
                      </div>
                      <div className='flex w-full mt-7'>
                          <h3 className='w-[31.5%]'>Web Widget (Classic) customization	</h3>
                          <p className='text-gray-500'>Yes</p>
                      </div>
                      <p className='text-gray-500 text-xs mt-9'>Visit <a href='https://teamsupport1.zendesk.com/admin/billing' target='_blank' className='hover:underline text-blue-600'> Account management </a>to upgrade your plan or add more agents at any time. Adjust plan</p>
                      <hr className='bg-gray-200 w-full mt-5' />
                      <button className='btn btn-sm bg-[#1F73B7] mt-4  shadow-none text-white rounded font-bold '>Adjust plan</button>
                  </div>    
              </div>
              : app ?
                  <div className='font-normal text-[13px] flex w-full'>
                      <div className='w-[64%]'>
                          <div className='px-3 py-2.5 mt-9 bg-[#FFF8CE]'>
                              <p className='text-xs'>Private apps are not available on your plan.<a href='https://teamsupport1.zendesk.com/admin/billing' target='_blank' className='hover:underline text-blue-600 m-0'> Upgrade </a>for access to upload your own private apps.</p>
                          </div>
                          <div className='flex w-[95%] mt-16 justify-between'>
                              <h3 className='font-semibold text-2xl'>My Apps</h3>
                              <a href='https://www.zendesk.com/marketplace/apps/?utm_medium=zendesk_support&utm_source=marketplace_directory_my_apps_link' className='font-normal text-xs text-[#1F73B7] border hover:bg-[#1F73B7] hover:text-white duration-300 border-[#5293C7] py-2 rounded px-7'>Marketplace</a>
                          </div>
                          <div className='mt-16 flex gap-8'> 
                              <button className={`text-[14px] ${installBtn ? 'border-b-[3px] border-[#1F73B7] text-blue-700' : ''} duration-150 cursor-pointer text-[#4A4A4A] pb-2 font-normal px-6`} onClick={() => {setinstallBtn(true), setprivateBtn(false)}}>Currently installed</button>
                              <button className={`text-[14px] ${privateBtn ? 'border-b-[3px] border-[#1F73B7] text-blue-700' : ''} duration-150 cursor-pointer text-[#4A4A4A] pb-2 font-normal px-8`} onClick={() => {setprivateBtn(true), setinstallBtn(false)}}>Private apps</button>
                          </div>
                          <hr className='bg-gray-300 w-full' />
                          {installBtn ? 
                              <>
                                  <div className='flex justify-between mt-6'>
                                      <select id="countries" className="form-select rounded w-[10rem] border-0 h-[1.9rem] py-0">
                                            <option selected hidden>Filter apps</option>
                                            <option>All</option>
                                            <option>Public Apps</option>
                                            <option>Private Apps</option>
                                            <option>Preview Apps</option>
                                      </select>
                                      <button className='font-normal text-xs text-white bg-[#1F73B7] hover:bg-[#1F73B7] duration-300 py-2 rounded px-7'>Reorder apps</button>
                                  </div>
                                  <div className='mt-5'>
                                      <h3 className='font-semibold'>Enabled apps</h3>
                                      <p className='text-gray-500'>Enabled apps in your Zendesk</p>
                                  </div>
                                  <hr className='bg-gray-300 mt-4'/>
                                  <div className='mt-5'>
                                      <h3 className='font-semibold'>Disabled apps</h3>
                                      <p className='text-gray-500'>Disabled apps in your Zendesk</p>
                                  </div>
                              </>
                              : privateBtn ?
                                  <div className='mt-5'>
                                      <h3 className='font-semibold text-gray-700'>Private Apps</h3>
                                      <p className='text-gray-500'>These Private Apps are ready to install</p>
                                  </div> 
                                  : ''}    
                      </div>
                      <div className='ml-16 mt-3'>
                            <h2 className='text-lg font-bold p-0 mt-6'>Quick tips</h2>
                            <div className='flex'>
                              <hr className='bg-blue-500 h-0.5 w-32' />
                              <hr className='bg-gray-200 h-0.5 w-full' />
                            </div>
                            <p className='text-gray-500 text-[13px] mt-3 leading-5'>
                                  Apps enable you to add <br /> functionality to your Zendesk <br /> Chat account. You can discover <br /> and install apps from the <a href='https://www.zendesk.com/apps' className='hover:underline text-blue-800'> Zendesk <br /> Marketplace.</a>
                            </p>
                      </div>    
                  </div>
                  : sdks && !addApp && !editApp && !addApi && !editApi ?
                      <div className='font-normal text-[12.5px] flex w-full'>
                          <div className='w-[49%]'>
                              <div className='px-3 py-2.5 mt-9 bg-[#FFF8CE]'>
                                  <p className='text-xs'><a href='https://teamsupport1.zendesk.com/admin/billing' target='_blank' className='hover:underline text-blue-700 mr-0.5'>Upgrade </a>to the Enterprise plan for access to the real-time APIs.</p>
                              </div>
                              <h2 className='text-[20px] font-bold p-0 mt-6 text-gray-700'>API</h2>
                              <div className='flex mt-1'>
                                  <hr className='bg-blue-500 h-[3px] w-8' />
                                  <hr className='bg-gray-200 h-[0.1rem] w-full mt-[1px]' />
                              </div>
                              <p className='text-gray-500 mt-3'>Integrate Zendesk Chat features in your own applications to create agents, update visitor information, or delete chats.</p>
                              <div className='justify-between flex mt-4'>
                                  <button className='rounded py-1.5 px-3 bg-[#1F73B7] text-white hover:bg-[#5293C7] rounded font-semibold' onClick={() => {setaddApi(true)}}>Add API client</button>
                                  <p className='text-sm mt-2.5'>1 active</p>
                              </div>
                              <hr className='mt-2.5 mb-4'/>
                              <div className="datatables">
                                  <DataTable
                                      noRecordsText="No results match your search query"
                                      highlightOnHover
                                      className="whitespace-nowrap table-hover"
                                      records={dataArray}
                                      fetching={loader}
                                      customLoader={
                                          <span className="animate-spin border-4 border-transparent border-l-primary rounded-full w-10 h-10 inline-block align-middle mb-10"></span>
                                      }
                                      loaderBackgroundBlur={5}
                                      columns={[
                                          {
                                              accessor: 'Name',
                                              title: 'Name',
                                              sortable: true,
                                              render: ({ name }: any) => <strong className="text-info">{name}</strong>,
                                          },
                                          {
                                              accessor: 'Company',
                                              title: 'Company',
                                              sortable: true,
                                              render: ({ company }: any) => <div className="font-semibold">{company}</div>,
                                          },
                                          {
                                              accessor: 'Client ID',
                                              title: 'Client ID',
                                              sortable: true,
                                              render: ({ client }: any) => <div className="font-semibold font-serif">{client ? client.slice(0,8) : ''}</div>,
                                          },
                                          {
                                              accessor: 'action',
                                              title: 'Action',
                                              titleClassName: '!text-center',
                                              render: ({  }: any) => (
                                                  <div className="flex items-center w-max mx-auto gap-2">
                                                      <button type="button"  onClick={() => {seteditApi(true), setaddApi(false), seteditApp(false), setaddApp(false)}}>
                                                          <IconPencil />  
                                                      </button>
                                                      <button type="button">
                                                          <IconTrashLines />
                                                      </button>
                                                  </div>
                                              ),
                                          },
                                      ]}
                                      selectedRecords={selectedRecords}
                                      onSelectedRecordsChange={setSelectedRecords}
                                  />
                              </div>
                              <h2 className='text-[20px] font-bold p-0 mt-12 text-gray-700'>Mobile SDK</h2>
                              <div className='flex mt-1'>
                                  <hr className='bg-blue-500 h-[3px] w-28' />
                                  <hr className='bg-gray-200 h-[0.1rem] w-full mt-[1px]' />
                              </div>
                              <p className='text-gray-500 mt-3'>Integrate Zendesk Chat into your mobile apps using the iOS and Android SDKs. Available on all paid plans. <a target='_blank' href='https://support.zendesk.com/hc/en-us/articles/4408821714458-Enabling-push-notifications-for-the-Chat-SDK-for-the-mobile-app' className='text-blue-700 hover:underline'>Learn more</a></p>
                              <div className='justify-between flex mt-5'>
                                  <button className='rounded py-1.5 px-3 bg-[#1F73B7] text-white hover:bg-[#5293C7] rounded font-semibold' onClick={() => {setaddApp(true), seteditApp(false), setaddApi(false), seteditApi(false)}}>Add APP</button>
                                  <p className='text-sm mt-2.5'>1 active</p>
                              </div>
                              <hr className='mt-2.5 mb-4'/>
                              <div className="datatables mb-6">
                                  <DataTable
                                      noRecordsText="No results match your search query"
                                      highlightOnHover
                                      className="whitespace-nowrap table-hover"
                                      records={dataarray}
                                      fetching={loader}
                                      customLoader={
                                          <span className="animate-spin border-4 border-transparent border-l-primary rounded-full w-10 h-10 inline-block align-middle mb-10"></span>
                                      }
                                      loaderBackgroundBlur={5}
                                      columns={[
                                          {
                                              accessor: 'Name',
                                              title: 'Name',
                                              sortable: true,
                                              render: ({ NAME }: any) => <strong className="text-info">{NAME}</strong>,
                                          },
                                          {
                                              accessor: 'Platform',
                                              title: 'Platform',
                                              sortable: true,
                                              render: ({ Platform }: any) => <div className="font-semibold">{Platform}</div>,
                                          },
                                          {
                                              accessor: 'Date modified',
                                              title: 'Date modified',
                                              sortable: true,
                                              render: ({ DATE }: any) => <div className="font-semibold font-serif">{DATE}</div>,
                                          },
                                          {
                                              accessor: 'App ID',
                                              title: 'App ID',
                                              sortable: true,
                                              render: ({ AppId }: any) => <div className="font-semibold font-serif">{AppId ? AppId.slice(0,8) : ''}</div>,
                                          },
                                          {
                                              accessor: 'action',
                                              title: 'Action',
                                              titleClassName: '!text-center',
                                              render: ({  }: any) => (
                                                  <div className="flex items-center w-max mx-auto gap-2">
                                                      <button type="button" onClick={() => {seteditApi(false), setaddApi(false), seteditApp(true), setaddApp(false)}}>
                                                          <IconPencil />
                                                      </button>
                                                      <button type="button">
                                                          <IconTrashLines />
                                                      </button>
                                                  </div>
                                              ),
                                          },
                                      ]}
                                      selectedRecords={selectedsecRecords}
                                      onSelectedRecordsChange={setselectedsecRecords}
                                  />
                              </div>
                          </div>  
                          <div className='ml-16 mt-3 w-48'>
                              <h2 className='text-lg font-bold p-0 mt-6'>Quick tips</h2>
                              <div className='flex'>
                                  <hr className='bg-blue-500 h-0.5 w-32' />
                                  <hr className='bg-gray-200 h-0.5 w-full' />
                              </div>
                              <p className='text-[12.5px] mt-3 leading-4.5'>
                                  Your use and access to the API is expressly conditioned on your compliance with the policies, restrictions, and other provisions related to the API set forth in our <a className='text-blue-700 hover:underline' href='https://developer.zendesk.com/api-reference/introduction/restrictions/' target='_blank'>API Restrictions <br/> and Responsibilities </a>and the other documentation we provide you.
                                  <br/><br/>You must also comply with the restrictions set forth in the <br /> <a className='text-blue-700 hover:underline' href='https://www.zendesk.com/company/customers-partners/#terms-of-use' target='_blank'>Zendesk Terms and Conditions</a> and the <a className='text-blue-700 hover:underline' href='https://www.zendesk.com/company/agreements-and-terms/#privacy-policy' target='_blank'>Zendesk Privacy Policy,</a> in all uses of the API.
                                  <br/><br/>If Zendesk believes that you have or attempted to violate any term, condition, or the spirit of these policies or agreements, your right to access and use the API may be temporarily or permanently <br /> revoked. <a className='text-blue-700 hover:underline' href='https://developer.zendesk.com/rest_api/docs/chat/introduction' target='_blank'>Learn more</a>
                              </p>
                          </div>  
                      </div>  
                        : emailPipe ? 
                            <div className='w-[50%]'>
                                <div className='justify-between flex mt-4.5'>
                                      <div>
                                          <h2 className='text-[1.3rem] text-[#0E1726] font-bold mt-1.5'>Email piping</h2>
                                      </div>
                                      <div className='flex'>
                                          <button className={`duration-300 h-7 w-10 text-xs rounded-none focus:outline-none border focus:ring-2 focus:ring-[#A3C1DA] rounded-l font-bold ${!emailOf ? 'bg-[#1F73B7] text-white' : ''}`} onClick={() => { setemailOn(true), setemailOf(false) }}>On</button>
                                          <button className={`duration-300 h-7 w-10 text-xs rounded-none rounded-r focus:outline-none focus:ring-2 focus:ring-[#A3C1DA] font-bold border ${emailOf ? 'bg-gray-200' : ''}`} onClick={() => { setemailOn(false), setemailOf(true) }}>Off</button>
                                      </div>
                                  </div>
                                  <div className={`flex mt-1.5`}>
                                      <hr className='bg-blue-500 h-0.5 w-32' />
                                      <hr className='bg-gray-200 h-0.5 w-full' />
                                  </div>
                                  <p className='text-gray-500 mt-2.5 text-xs mb-7'>Automatically send the chat transcript to your email after the chat ends.</p>
                                  <form>
                                        {input.map((field, indexes) => {
                                            return (
                                                <div className='flex gap-2.5 mt-1' key={indexes}>
                                                    <input type="text" className={`rounded focus:outline-none focus:ring focus:ring-blue-400 duration-300 border w-40 mt-1 m-0 pl-2 p-1 text-[13px] font-normal ${emailOf ? 'bg-[#f8f9f9] text-gray-400' : ''}`} disabled={emailOf} value={field.value} onChange={(event) => handleChangeInput(indexes, event)}/>
                                                    {input.length > 1 ? <button className={`h-[1.9rem] w-[1.9rem] pl-[6.3px] mt-1 rounded-full border hover:bg-[#E9EBED]`} onClick={() => handleRemoveInput(indexes)} ><IconMinus className='w-4 h-4'/></button> : ''}
                                                        {indexes === input?.length - 1 && input?.length >= 1 ? 
                                                        <button className={`h-[1.9rem] w-[1.9rem] pl-[6.3px] mt-1 rounded-full border hover:bg-[#E9EBED] ${emailOf ? 'bg-[#f8f9f9] text-gray-400' : ''}`} disabled={emailOf} onClick={handleAddInput}>
                                                            <IconPlus className='w-4 h-4'/>
                                                        </button>   
                                                    : null}
                                                </div>   
                                            )
                                        })}
                                        <hr className='bg-gray-200 mt-7' />
                                        <div className='flex mt-4 flex gap-3 mb-4'>
                                            <button type='submit' className='btn btn-sm bg-[#1F73B7] shadow-none text-white rounded font-bold'>Save changes</button>
                                            <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded' type='button'>Revert changes</button>
                                        </div>
                                 </form>       
                            </div>
                            : chatTag ? 
                                <>
                                    <div className='gap-16 w-full flex font-normal text-[12.5px] leading-4'>
                                        <div className='w-[48.5%]'>
                                            <h2 className='text-[19px] font-bold p-0 mt-8 text-gray-600'>General preferences</h2>
                                            <div className='flex mt-2'>
                                                <hr className='bg-blue-500 h-[3px] w-60' />
                                                <hr className='bg-gray-500 h-[1.3px] w-full mt-[2px]' />
                                            </div>
                                            <div className='flex gap-6 text-[12.5px] mt-5'>
                                                <label className='w-[20%] text-gray-600' htmlFor='general' >Allow tag creation during rain</label>
                                                <div className='flex gap-4'>
                                                    <input type="checkbox"  id='general' className='w-3 h-3' />
                                                    <label className='text-gray-500 leading-5' htmlFor='general'>Allow admins to create new tags during chats. If not enabled, admins can <br /> only create tags in the predefined tags list below and in shortcuts.</label>
                                                </div>
                                            </div>
                                            <div className='mt-6 bg-[#EEEEEE] w-[34.5rem] py-1 w-full text-center border-l-2 border-[#999999]'>
                                                <p className='text-xs'>Admins can create new tags under <a href="/zendesk/shortcuts" target='_blank' className='font-bold text-gray-600 mx-0.5 text-[13px]'>Settings &gt; Shortcuts</a> and edit chat tags in <a href="/zendesk/history" target='_blank' className='font-bold text-gray-600 mx-0.5 text-[13px]'> History. </a></p>
                                            </div>
                                            <h2 className='text-[19px] font-bold p-0 mt-8 text-gray-600'>Predefined tags list</h2>
                                            <div className='flex mt-2'>
                                                <hr className='bg-blue-500 h-[3px] w-60' />
                                                <hr className='bg-gray-500 h-[1.2px] w-full mt-[2px]' />
                                            </div>
                                            <p className='mt-3.5 w-[98%] text-gray-500 mb-1.5'>Add or delete tags from your account’s list of available tags. Deleting a tag here does not remove it from existing chats. Spaces and special characters other than underscore (_) and hyphen (-) are not allowed. <a target='_blank' href='https://support.zendesk.com/hc/en-us/articles/4408844177050-Setting-up-chat-tags' className='hover:underline text-blue-700'>Learn more</a></p>
                                            {inputText.map((i, key) => (
                                                <form>
                                                <div className='flex gap-1' key={key}>
                                                    <input type="text" id='add' className={`rounded border w-40 mt-1 h-[1.9rem] px-2 border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 duration-500 text-[13px] font-normal`} required value={i.value} onChange={(event) => changeFieldData(key, event)}/>
                                                    {inputText.length > 1 ? <button className={`p-[0.4rem] mt-2 rounded-full border hover:bg-[#E9EBED]`} onClick={() => removeField(key)} ><IconMinus className='w-4 h-4'/></button> : ''}
                                                        {key === inputText?.length - 1 && inputText?.length >= 1 ? 
                                                        <button className={`p-[0.4rem] mt-2 rounded-full border hover:bg-[#E9EBED] cursor-pointer`} disabled={!i.value} onClick={addMoreField}>
                                                            <IconPlus className='w-4 h-4'/>
                                                        </button>
                                                        : null} 
                                                </div>
                                                </form>
                                            ))}
                                            <hr className='bg-gray-200 mt-4' />
                                            <div className='flex my-4 justify-between'>
                                                <div className='flex gap-3'>
                                                    <button type='button' className='btn btn-sm bg-[#1F73B7] shadow-none text-white rounded font-bold'>Save changes</button>
                                                    <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded' type='button'>Revert changes</button>
                                                </div>
                                                <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded' type='button'>Reset to defaults</button>
                                            </div>                                            
                                        </div>
                                        <div className='mt-[6px] w-48'>
                                            <h2 className='text-lg font-bold p-0 mt-6'>Quick tips</h2>
                                            <div className='flex'>
                                                <hr className='bg-blue-500 h-[3px] w-32' />
                                                <hr className='bg-gray-500 h-[1.2px] mt-0.5 w-full' />
                                            </div>
                                            <h2 className='text-[14px] mt-3 font-bold'>Using chat tags</h2>
                                            <p className='mt-1.5 text-gray-500 leading-[17px] w-[11rem]'>Tag your chats manually during a chat or add tags to shortcuts to automatically tag the chat when you use them.</p>
                                            <h2 className='text-[14px] mt-5 font-bold'>Other tags</h2>
                                            <p className='mt-1.5 text-gray-500 leading-[17px] w-[11rem]'>Tags added by triggers or through the JS API are separate and do not appear here.</p>
                                        </div> 
                                    </div>
                                </>
                                : fileSend ? 
                                <>
                                    <div className={`w-[50%] text-[12.5px] font-normal relative`}>
                                        <div className='justify-between flex mt-6'>
                                            <div>
                                                <h2 className='text-[1.2rem] text-gray-600 font-bold mt-1.5'>File sending</h2>
                                            </div>
                                            <div className='flex'>
                                                <button className={`duration-300 h-7 w-10 text-xs rounded-none focus:outline-none border focus:ring-2 focus:ring-[#A3C1DA] rounded-l font-bold ${!fileOf ? 'bg-[#1F73B7] text-white' : ''}`} onClick={() => { setfileOn(true), setfileOf(false) }}>On</button>
                                                <button className={`duration-300 h-7 w-10 text-xs rounded-none rounded-r focus:outline-none focus:ring-2 focus:ring-[#A3C1DA] font-bold border ${fileOf ? 'bg-gray-200' : ''}`} onClick={() => { setfileOn(false), setfileOf(true) }}>Off</button>
                                            </div>
                                        </div>
                                        <div className={`flex mt-1.5`}>
                                            <hr className='bg-blue-500 h-0.5 w-32' />
                                            <hr className='bg-gray-200 h-0.5 w-full' />
                                        </div>
                                        <p className={`leading-4 mt-3`}>Set your preferences for receiving and sending files during a chat. Specify allowed safe file extensions below. <a className='text-blue-700 hover:underline' href='https://support.zendesk.com/hc/en-us/articles/360022183834' target='_blank'>Learn about file sending preferences</a></p>
                                        <div className={`${fileOf ? 'text-gray-300' : ''} mt-2 flex`}>
                                            <h3 className='w-[21.5%] mt-2'>File types</h3>
                                            <div>
                                                <div className='flex gap-3'>
                                                    <input className='mt-1' type="radio" name="firstRad" checked={shareLimit} id="firstRad" disabled={fileOf} onChange={(e) => {setshareLimit(e.target.checked), setallowPdf('')}}/>
                                                    <label htmlFor="firstRad" className='relative top-2'>Sharing is limited to PDF (.pdf), PNG (.png), JPEG (.jpg), GIF (.gif) or text (.txt) file types.</label>
                                                </div>
                                                <div className='flex gap-3'>
                                                    <input type="radio" className='relative bottom-2' name="firstRad" id="secRad" disabled={fileOf} checked={allowPdf} onChange={(e) => {setallowPdf(e.target.checked), setshareLimit('')}}/>
                                                    <label htmlFor="secRad" className='relative top-2'>Allow PDF (.pdf), PNG (.png), JPEG (.jpg), GIF (.gif), text (.txt), and the additional file types specified below.</label>
                                                </div>
                                                <div className='ml-[1.7rem] mt-0.5'>
                                                    <p className={`${fileOf ? 'text-gray-300' : 'text-gray-500'} text-[12.5px] leading-4`}>Use commas to separate file types. Include a period (.) before each extension. Example: .svg, <br /> .html</p>
                                                    <div className='flex gap-1.5 mb-3'>
                                                        <textarea 
                                                            className={`${fileOf ? 'text-gray-300 bg-[#f8f9f9]' : !nullTextarea ? 'focus:outline-none focus:border-red-500 focus:ring-[2.5px] focus:ring-[#EDB8BC]' : ''} w-[69.5%] resize-none h-20 p-2 border border-gray-300 mt-2 rounded focus:outline-none focus:border-blue-500 focus:ring-[2.5px] focus:ring-blue-400 duration-500`} 
                                                            disabled={fileOf || shareLimit} 
                                                            value={nullTextarea} 
                                                            onChange={(e) => setnullTextarea(e.target.value)}>
                                                        </textarea>
                                                        {!nullTextarea && !fileOf && !shareLimit ? <p className='text-red-600 mt-3.5'>Required</p> : ''}
                                                    </div>
                                                    <div className={`bg-[#EEEEEE] w-full relative flex pt-2.5 pb-1 pl-2.5 gap-x-2`}>
                                                        <div>
                                                            <input className='w-3' type="checkbox" checked={checkedMethod} onChange={(e) => setcheckedMethod(e.target.checked)} name="understand-check" id="understand-check" disabled={fileOf || shareLimit}/>
                                                        </div>
                                                        <div>
                                                            <label htmlFor='understand-check' className={`${fileOf ? 'text-gray-400' : 'text-gray-600'} p-0 m-0 leading-4`}>I understand there may be potential risks associated with allowing these extensions <br /> and agree to assume these risks when enabling extensions.</label>
                                                            <label htmlFor='understand-check' className={`${fileOf ? 'text-gray-300' : 'text-gray-500'} leading-4 mt-1`}>Take care to only enable safe extensions that you need for your business operations. <br /> If you accept compressed files, keep in mind that they could contain any <br /> attachment type when extracted.</label>
                                                        </div>
                                                    </div>
                                                    {!checkedMethod ? <p className='text-red-600'>You must select the check box above indicating your agreement before you can proceed.</p> :''}
                                                </div>
                                            </div>
                                        </div>
                                        <hr className={`bg-gray-200 ${checkedMethod ? 'mt-[52px]' : 'mt-8'}`} />
                                        <div className='flex my-4 justify-between'>
                                            <div className='flex gap-3'>
                                                <button type='button' className='btn btn-sm bg-[#1F73B7] shadow-none text-white rounded font-bold'>Save changes</button>
                                                <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded' type='button'>Revert changes</button>
                                            </div>
                                            <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded' type='button'>Reset to defaults</button>
                                        </div>  
                                    </div>
                                </>    
                                : operating ? 
                                        <>
                                            <div className='gap-16 w-full flex font-normal text-[12.5px] leading-4'>
                                                <div className='w-[48.5%]'>
                                                    <div className='mt-7 bg-[#FFF8CE] px-3 pt-4 pb-2.5'>
                                                        <h2 className='font-semibold text-[16px]'>Restricted feature</h2>
                                                        <p className='mt-4 font-normal text-xs text-gray-600'>The operating hours feature is unavailable for your package.</p>
                                                        <p className='mt-1 font-normal text-xs text-gray-600'><a href='https://teamsupport1.zendesk.com/admin/billing' target='_blank' className='hover:underline text-blue-600'>Upgrade your account</a> to the Professional or Enterprise plan to enable this feature.</p>
                                                    </div>
                                                    <div className='justify-between flex mt-6'>
                                                        <div>
                                                            <h2 className='text-[1.2rem] text-gray-600 font-bold mt-1.5'>Operating hours</h2>
                                                        </div>
                                                        <div className='flex'>
                                                            <button className={`duration-300 h-7 w-10 text-xs rounded-none focus:outline-none border focus:ring-2 focus:ring-[#A3C1DA] rounded-l font-bold ${operateOn ? 'bg-[#1F73B7] text-white' : ''}`} onClick={() => { setoperateOn(true), setoperateOf(false) }}>On</button>
                                                            <button className={`duration-300 h-7 w-10 text-xs rounded-none rounded-r focus:outline-none focus:ring-2 focus:ring-[#A3C1DA] font-bold border ${!operateOn ? 'bg-gray-200' : ''}`} onClick={() => { setoperateOn(false), setoperateOf(true) }}>Off</button>
                                                        </div>
                                                    </div>
                                                    <div className={`flex mt-1.5`}>
                                                        <hr className='bg-blue-500 h-0.5 w-32' />
                                                        <hr className='bg-gray-200 h-0.5 w-full' />
                                                    </div>
                                                    <p className={`leading-4 mt-3 text-gray-500`}>Configure your operating hours schedule for your account. Schedules can be account-wide or department-specific and determine when your widget appears online to visitors. <a className='text-blue-700 hover:underline' href='https://support.zendesk.com/hc/en-us/articles/4408822398106-Creating-a-schedule-with-operating-hours' target='_blank'>Learn more</a></p>
                                                    <div className='mt-8 flex'>
                                                        <h3 className={`w-36 mt-1.5 font-base ${operateOf ? 'text-gray-400' : ''}`}>Set schedule</h3>
                                                        <div className='flex w-1/2'>
                                                            <h3 className={`w-32 mt-1.5 font-base ${operateOf ? 'text-gray-400' : ''}`}>Set schedule</h3>
                                                            <div className='flex'>
                                                                <button className={`duration-300 text-xs focus:outline-none border focus:ring-2 focus:ring-[#A3C1DA] px-3 py-1.5 rounded-l font-bold ${account ? 'bg-gray-200' : ''}`} onClick={() => { setAccount(true), setDepartment(false) }} disabled={operateOf}>Account</button>
                                                                <button className={`duration-300 text-xs rounded-r focus:outline-none focus:ring-2 focus:ring-[#A3C1DA] px-2.5 py-1.5 font-bold border ${!account ? 'bg-gray-200' : ''}`} onClick={() => { setAccount(false), setDepartment(true) }} disabled={operateOf}>Departments</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                   {!department ? 
                                                        <>
                                                        <div className='mt-7 flex'>
                                                            <h3 className={`w-36 font-base ${operateOf ? 'text-gray-400' : ''}`}>Online schedule</h3>
                                                            <select id="countries" className="form-select rounded w-60 h-[1.9rem] py-0 focusable focus:ring-offset-0 focus:ring-2 focus:outline-none focus:ring-info text-[13px] font-[600]" disabled={operateOf}>
                                                                <option value={0} className='text-[13px]'>Weekday/weekend</option>
                                                                <option value={1} className={`text-[13px]`}>Daily</option>
                                                            </select>
                                                        </div>
                                                        <div className='flex mt-6'>
                                                            <p className='w-36'>&nbsp;</p>
                                                            <div className='gap-2 flex w-32'>
                                                                <div><input type="checkbox" name="timChe" id="timChe" disabled={operateOf} checked={timeCheck} onChange={(e) => settimeCheck(e.target.checked)}/></div>
                                                                <label htmlFor="timChe" className={`font-bold ${operateOf ? 'text-[#979CA0]' : ''} text-[14px]`}>Monday</label>
                                                            </div>
                                                            {timeCheck ? <p className={`font-base ${operateOf ? 'text-[#979CA0]' : ''} text-[12.5px]`}>({formatTime(startTime)} to {formatTime(endTime)})</p> : '(Closed all days)'}
                                                        </div>
                                                        {timeCheck ? 
                                                            <div className='flex mt-2'>
                                                                <p className='w-48'>&nbsp;</p>
                                                                <div className='flex w-full'>
                                                                    <input
                                                                        type="range"
                                                                        min="0"
                                                                        max="1440"
                                                                        value={startTime}
                                                                        onChange={handleStartTimeChange}
                                                                        className={`w-1/2 h-1 appearance-none bg-gray-200 ${operateOf ? 'custom-range' : 'custom-slide'}`}
                                                                        disabled={operateOf}
                                                                    />
                                                                    <input
                                                                        type="range"
                                                                        min="0"
                                                                        max="1440"
                                                                        value={endTime}
                                                                        onChange={handleEndTimeChange}
                                                                        className={`w-1/2 h-1 appearance-none bg-gray-200 ${operateOf ? 'custom-range' : 'custom-slide'}`}
                                                                        disabled={operateOf}
                                                                    />
                                                                </div>
                                                            </div>
                                                        : <div className='h-6'></div>}    
                                                        <div className='flex mt-1'>
                                                            <p className='w-36'>&nbsp;</p>
                                                            <div className='gap-2 flex w-32'>
                                                                <div><input type="checkbox" name="timChe1" id="timChe1" disabled={operateOf} checked={timeCheck1} onChange={(e) => settimeCheck1(e.target.checked)}/></div>
                                                                <label htmlFor="timChe1" className={`font-bold ${operateOf ? 'text-[#979CA0]' : ''} text-[14px]`}>Tuesday</label>
                                                            </div>
                                                            {timeCheck1 ? <p className={`font-base ${operateOf ? 'text-[#979CA0]' : ''} text-[12.5px]`}>({formatTime(startTime1)} to {formatTime(endTime1)})</p> : '(Closed all days)'}
                                                        </div>
                                                        {timeCheck1 ? 
                                                            <div className='flex mt-2'>
                                                                <p className='w-48'>&nbsp;</p>
                                                                <div className='flex w-full'>
                                                                    <input
                                                                        type="range"
                                                                        min="0"
                                                                        max="1440"
                                                                        value={startTime1}
                                                                        onChange={handleStartTimeChange1}
                                                                        className={`w-1/2 h-1 appearance-none bg-gray-200 ${operateOf ? 'custom-range' : 'custom-slide'}`}
                                                                        disabled={operateOf}
                                                                    />
                                                                    <input
                                                                        type="range"
                                                                        min="0"
                                                                        max="1440"
                                                                        value={endTime1}
                                                                        onChange={handleEndTimeChange1}
                                                                        className={`w-1/2 h-1 appearance-none bg-gray-200 ${operateOf ? 'custom-range' : 'custom-slide'}`}
                                                                        disabled={operateOf}
                                                                    />
                                                                </div>
                                                            </div>
                                                        : <div className='h-6'></div>}    
                                                        <div className='flex mt-1'>
                                                            <p className='w-36'>&nbsp;</p>
                                                            <div className='gap-2 flex w-32'>
                                                                <div><input type="checkbox" name="timCh2" id="timChe2" disabled={operateOf} checked={timeCheck2} onChange={(e) => settimeCheck2(e.target.checked)}/></div>
                                                                <label htmlFor="timChe2" className={`font-bold ${operateOf ? 'text-[#979CA0]' : ''} text-[14px]`}>Wednesday</label>
                                                            </div>
                                                            {timeCheck2 ? <p className={`font-base ${operateOf ? 'text-[#979CA0]' : ''} text-[12.5px]`}>({formatTime(startTime2)} to {formatTime(endTime2)})</p> : '(Closed all days)'}
                                                        </div>
                                                        {timeCheck2 ? 
                                                            <div className='flex mt-2'>
                                                                <p className='w-48'>&nbsp;</p>
                                                                <div className='flex w-full'>
                                                                    <input
                                                                        type="range"
                                                                        min="0"
                                                                        max="1440"
                                                                        value={startTime2}
                                                                        onChange={handleStartTimeChange2}
                                                                        className={`w-1/2 h-1 appearance-none bg-gray-200 ${operateOf ? 'custom-range' : 'custom-slide'}`}
                                                                        disabled={operateOf}
                                                                    />
                                                                    <input
                                                                        type="range"
                                                                        min="0"
                                                                        max="1440"
                                                                        value={endTime2}
                                                                        onChange={handleEndTimeChange2}
                                                                        className={`w-1/2 h-1 appearance-none bg-gray-200 ${operateOf ? 'custom-range' : 'custom-slide'}`}
                                                                        disabled={operateOf}
                                                                    />
                                                                </div>
                                                            </div>
                                                        : <div className='h-6'></div>}    
                                                        <div className='flex mt-1'>
                                                            <p className='w-36'>&nbsp;</p>
                                                            <div className='gap-2 flex w-32'>
                                                                <div><input type="checkbox" name="timCh3" id="timChe3" disabled={operateOf} checked={timeCheck3} onChange={(e) => settimeCheck3(e.target.checked)}/></div>
                                                                <label htmlFor="timChe3" className={`font-bold ${operateOf ? 'text-[#979CA0]' : ''} text-[14px]`}>Thursday</label>
                                                            </div>
                                                            {timeCheck3 ? <p className={`font-base ${operateOf ? 'text-[#979CA0]' : ''} text-[12.5px]`}>({formatTime(startTime3)} to {formatTime(endTime3)})</p> : '(Closed all days)'}
                                                        </div>
                                                        {timeCheck3 ? 
                                                            <div className='flex mt-2'>
                                                                <p className='w-48'>&nbsp;</p>
                                                                <div className='flex w-full'>
                                                                    <input
                                                                        type="range"
                                                                        min="0"
                                                                        max="1440"
                                                                        value={startTime3}
                                                                        onChange={handleStartTimeChange3}
                                                                        className={`w-1/2 h-1 appearance-none bg-gray-200 ${operateOf ? 'custom-range' : 'custom-slide'}`}
                                                                        disabled={operateOf}
                                                                    />
                                                                    <input
                                                                        type="range"
                                                                        min="0"
                                                                        max="1440"
                                                                        value={endTime3}
                                                                        onChange={handleEndTimeChange3}
                                                                        className={`w-1/2 h-1 appearance-none bg-gray-200 ${operateOf ? 'custom-range' : 'custom-slide'}`}
                                                                        disabled={operateOf}
                                                                    />
                                                                </div>
                                                            </div>
                                                        : <div className='h-6'></div>}    
                                                        <div className='flex mt-1'>
                                                            <p className='w-36'>&nbsp;</p>
                                                            <div className='gap-2 flex w-32'>
                                                                <div><input type="checkbox" name="timCh4" id="timChe4" disabled={operateOf} checked={timeCheck4} onChange={(e) => settimeCheck4(e.target.checked)}/></div>
                                                                <label htmlFor="timChe4" className={`font-bold ${operateOf ? 'text-[#979CA0]' : ''} text-[14px]`}>Friday</label>
                                                            </div>
                                                            {timeCheck4 ? <p className={`font-base ${operateOf ? 'text-[#979CA0]' : ''} text-[12.5px]`}>({formatTime(startTime4)} to {formatTime(endTime4)})</p> : '(Closed all days)'}
                                                        </div>
                                                        {timeCheck4 ? 
                                                            <div className='flex mt-2'>
                                                                <p className='w-48'>&nbsp;</p>
                                                                <div className='flex w-full'>
                                                                    <input
                                                                        type="range"
                                                                        min="0"
                                                                        max="1440"
                                                                        value={startTime4}
                                                                        onChange={handleStartTimeChange4}
                                                                        className={`w-1/2 h-1 appearance-none bg-gray-200 ${operateOf ? 'custom-range' : 'custom-slide'}`}
                                                                        disabled={operateOf}
                                                                    />
                                                                    <input
                                                                        type="range"
                                                                        min="0"
                                                                        max="1440"
                                                                        value={endTime4}
                                                                        onChange={handleEndTimeChange4}
                                                                        className={`w-1/2 h-1 appearance-none bg-gray-200 ${operateOf ? 'custom-range' : 'custom-slide'}`}
                                                                        disabled={operateOf}
                                                                    />
                                                                </div>
                                                            </div>
                                                        : <div className='h-6'></div>}    
                                                        <div className='flex mt-1'>
                                                            <p className='w-36'>&nbsp;</p>
                                                            <div className='gap-2 flex w-32'>
                                                                <div><input type="checkbox" name="timCh5" id="timChe5" disabled={operateOf} checked={timeCheck5} onChange={(e) => settimeCheck5(e.target.checked)}/></div>
                                                                <label htmlFor="timChe5" className={`font-bold ${operateOf ? 'text-[#979CA0]' : ''} text-[14px]`}>Saturday</label>
                                                            </div>
                                                            {timeCheck5 ? <p className={`font-base ${operateOf ? 'text-[#979CA0]' : ''} text-[12.5px]`}>({formatTime(startTime5)} to {formatTime(endTime5)})</p> : '(Closed all days)'}
                                                        </div>
                                                        {timeCheck5 ? 
                                                            <div className='flex mt-2'>
                                                                <p className='w-48'>&nbsp;</p>
                                                                <div className='flex w-full'>
                                                                    <input
                                                                        type="range"
                                                                        min="0"
                                                                        max="1440"
                                                                        value={startTime5}
                                                                        onChange={handleStartTimeChange5}
                                                                        className={`w-1/2 h-1 appearance-none bg-gray-200 ${operateOf ? 'custom-range' : 'custom-slide'}`}
                                                                        disabled={operateOf}
                                                                    />
                                                                    <input
                                                                        type="range"
                                                                        min="0"
                                                                        max="1440"
                                                                        value={endTime5}
                                                                        onChange={handleEndTimeChange5}
                                                                        className={`w-1/2 h-1 appearance-none bg-gray-200 ${operateOf ? 'custom-range' : 'custom-slide'}`}
                                                                        disabled={operateOf}
                                                                    />
                                                                </div>
                                                            </div>
                                                        : <div className='h-6'></div>}    
                                                        <div className='flex mt-1'>
                                                            <p className='w-36'>&nbsp;</p>
                                                            <div className='gap-2 flex w-32'>
                                                                <div><input type="checkbox" name="timCh6" id="timChe6" disabled={operateOf} checked={timeCheck6} onChange={(e) => settimeCheck6(e.target.checked)}/></div>
                                                                <label htmlFor="timChe6" className={`font-bold ${operateOf ? 'text-[#979CA0]' : ''} text-[14px]`}>Sunday</label>
                                                            </div>
                                                            {timeCheck6 ? <p className={`font-base ${operateOf ? 'text-[#979CA0]' : ''} text-[12.5px]`}>({formatTime(startTime6)} to {formatTime(endTime6)})</p> : '(Closed all days)'}
                                                        </div>
                                                        {timeCheck6 ? 
                                                            <div className='flex mt-2'>
                                                                <p className='w-48'>&nbsp;</p>
                                                                <div className='flex w-full'>
                                                                    <input
                                                                        type="range"
                                                                        min="0"
                                                                        max="1440"
                                                                        value={startTime6}
                                                                        onChange={handleStartTimeChange6}
                                                                        className={`w-1/2 h-1 appearance-none bg-gray-200 ${operateOf ? 'custom-range' : 'custom-slide'}`}
                                                                        disabled={operateOf}
                                                                    />
                                                                    <input
                                                                        type="range"
                                                                        min="0"
                                                                        max="1440"
                                                                        value={endTime6}
                                                                        onChange={handleEndTimeChange6}
                                                                        className={`w-1/2 h-1 appearance-none bg-gray-200 ${operateOf ? 'custom-range' : 'custom-slide'}`}
                                                                        disabled={operateOf}
                                                                    />
                                                                </div>
                                                            </div>
                                                        : <div className='h-6'></div>}  
                                                       </> 
                                                    : ''}   
                                                    <hr className='my-3 bg-gray-300'/>
                                                    {department ? <button type='button' className='px-2 py-1.5 border text-gray-400 bg-[#f8f9f9] mt-5 rounded font-bold'>+ Add schedule</button> : ''}
                                                    <div className='mt-6 bg-[#EEEEEE] w-[34.5rem] py-2 w-full pl-4 border-l-2 border-[#999999]'>
                                                        <p className={`text-xs ${operateOf ? 'text-[#979CA0]' : ''}`}>Change your timezone under  <b className={`${operateOf ? 'text-[#979CA0]' : 'text-gray-600'} font-bold  mx-0.5 cursor-pointer select-none text-[13px]`}>Settings &gt; Accounts &gt; Timezone</b></p>
                                                    </div>
                                                    <div className={`flex gap-6 text-[12.5px] mt-5`}>
                                                        <label className={`w-[18%] ${operateOf ? 'text-gray-400' : 'text-gray-600'}`} htmlFor='general' >Display operating <br /> hours</label>
                                                        <div className={`flex gap-3 ${operateOf ? 'text-gray-400' : 'text-gray-500'}`}>
                                                            <input type="checkbox"  id='general' className='w-3 h-3 mt-0.5' disabled={operateOf}/>
                                                            <label className='leading-5' htmlFor='general'>Show operating hours on offline and pre-chat forms. Forms must be <br /> enabled under Settings &gt; Widget &gt; Forms.</label>
                                                        </div>
                                                    </div>
                                                    <hr className='bg-gray-200 mt-4' />
                                                    <div className='flex my-4 justify-between'>
                                                        <div className='flex gap-3'>
                                                            <button type='button' className='btn btn-sm bg-[#1F73B7] shadow-none text-white rounded font-bold'>Save changes</button>
                                                            <button className='px-2 py-1.5 border border-gray-300 hover:bg-gray-200 font-bold rounded' type='button'>Revert changes</button>
                                                        </div>
                                                        <button className='px-2 py-1.5 border border-gray-300 hover:bg-gray-200 font-bold rounded' type='button'>Reset to defaults</button>
                                                    </div>  
                                                </div>
                                                <div className='mt-[6px] w-48'>
                                                    <h2 className='text-lg font-bold p-0 mt-6'>Quick tips</h2>
                                                    <div className='flex'>
                                                        <hr className='bg-blue-500 h-[3px] w-32' />
                                                        <hr className='bg-gray-500 h-[1.2px] mt-0.5 w-full' />
                                                    </div>
                                                    <h2 className='text-[14px] mt-3 font-bold'>Operating hours</h2>
                                                    <p className='mt-1.5 text-gray-500 leading-[17px] w-[11.3rem]'>Create multiple schedules to manage your operating hours. There are two types of schedules: account-wide and department-specific.</p>
                                                    <h2 className='text-[14px] mt-5 font-bold'>Account schedule</h2>
                                                    <p className='mt-1.5 text-gray-500 leading-[17px] w-[11.3rem]'>A single account-wide schedule that applies across your entire account. You cannot use department-specific schedules.</p>
                                                    <h2 className='text-[14px] mt-5 font-bold'>Department schedule</h2>
                                                    <p className='mt-1.5 text-gray-500 leading-[17px] w-[11.3rem]'>Multiple departments can use department schedules. Each department can use multiple schedules and multiple departments can also be part of the same schedule.</p>
                                                </div> 
                                            </div>
                                        </>
                                            : timeZone ? 
                                                <>
                                                    <div className='gap-16 w-full flex font-normal text-[12.5px] leading-4'>
                                                        <div className='w-[48.5%]'>
                                                            <h2 className='text-[19px] font-bold p-0 mt-8 text-gray-600'>Timezone</h2>
                                                            <div className='flex mt-2'>
                                                                <hr className='bg-blue-500 h-[3px] w-24' />
                                                                <hr className='bg-gray-500 h-[1.3px] w-full mt-[2px]' />
                                                            </div>
                                                            <p className='mt-3 text-gray-500'>Select the timezone for your account.</p>
                                                            <div className='mt-7 mb-12'>
                                                                <select id="countries" className="form-select rounded w-[12rem] h-[1.8rem] py-0 px-2">
                                                                        <option selected hidden>29T15:30:00+01:00 UTC</option>
                                                                        <option>00:00:00 UTC</option>
                                                                        <option>15:30:00 UTC+1</option>
                                                                        <option>16:30:00 UTC+1</option>
                                                                        <option>5:30:00 UTC+1</option>
                                                                </select>
                                                            </div>
                                                            <hr className='bg-gray-200 mt-4' />
                                                            <div className='flex my-4 justify-between'>
                                                                <div className='flex gap-3'>
                                                                    <button type='button' className='btn btn-sm bg-[#1F73B7] shadow-none text-white rounded font-bold'>Save changes</button>
                                                                    <button className='px-2 py-1.5 border border-gray-300 hover:bg-gray-200 font-bold rounded' type='button'>Revert changes</button>
                                                                </div>
                                                                <button className='px-2 py-1.5 border border-gray-300 hover:bg-gray-200 font-bold rounded' type='button'>Reset to defaults</button>
                                                            </div>  
                                                        </div>
                                                        <div className='mt-[6px] w-48'>
                                                            <h2 className='text-lg font-bold p-0 mt-6'>Quick tips</h2>
                                                            <div className='flex'>
                                                                <hr className='bg-blue-500 h-[3px] w-32' />
                                                                <hr className='bg-gray-500 h-[1.2px] mt-0.5 w-full' />
                                                            </div>
                                                            <h2 className='text-[14px] mt-3 font-bold'>Timezone</h2>
                                                            <p className='mt-1.5 text-gray-500 leading-[17px] w-[11.3rem]'>The timezone is account specific and affects all admins. You should select a timezone where a majority of your admins or your head office is located.</p>
                                                            <p className='mt-2.5 text-gray-500 leading-[17px] w-[11.3rem]'>The default timezone is set to UTC. <a className='text-blue-700 hover:underline' href='https://support.zendesk.com/hc/en-us/articles/4408821714458-Enabling-push-notifications-for-the-Chat-SDK-for-the-mobile-app' target='_blank'>Learn more</a></p>
                                                        </div> 
                                                    </div>
                                                </>
                                                : security ? 
                                                        <div className='gap-16 w-full flex font-normal text-[12.5px] leading-4'>
                                                            <div className='w-[48.5%]'>
                                                                <div className='mt-7 bg-[#FFF8CE] px-3 pt-4 pb-2.5'>
                                                                    <h2 className='font-semibold text-[16px]'>Restricted feature</h2>
                                                                    <p className='mt-5 font-normal text-xs text-gray-600'>Your current package does not include these features. <a href='https://teamsupport1.zendesk.com/admin/billing' target='_blank' className='hover:underline text-blue-600'>Upgrade your package</a> to unlock them</p>
                                                                </div>
                                                                <h2 className='text-[19px] font-bold p-0 mt-8 text-gray-600'>Authentication options</h2>
                                                                <div className='flex mt-2'>
                                                                    <hr className='bg-blue-500 h-[3px] w-64' />
                                                                    <hr className='bg-gray-500 h-[1.3px] w-full mt-[2px]' />
                                                                </div>
                                                                 <p className='mt-3 text-gray-500'>Manage how your agents sign in to your Zendesk account.</p>
                                                                 <button className='py-1.5 hover:bg-[#5293C7] duration-300 px-2.5 border bg-[#1F73B7] mt-2.5 rounded text-white font-bold'>Manage</button>
                                                                 <h2 className='text-[19px] font-bold p-0 mt-8 text-gray-600'>Automatic redaction</h2>
                                                                 <div className='flex mt-2'>
                                                                    <hr className='bg-blue-500 h-[3px] w-64' />
                                                                    <hr className='bg-gray-300 h-[1px] w-full mt-[2px]' />
                                                                 </div>
                                                                 <p className='mt-3 text-gray-500'>Automatically redact credit card numbers submitted by visitors during chat sessions to protect sensitive data. If a set of numbers matches a credit card pattern, some digits will be replaced with block characters. <a className='text-blue-700 hover:underline' href='https://support.zendesk.com/hc/en-us/articles/4408821714458-Enabling-push-notifications-for-the-Chat-SDK-for-the-mobile-app' target='_blank'>Learn more</a></p>
                                                                 <div className='flex w-full font-normal text-[12.5px] mt-1 text-gray-400 mt-2.5'>
                                                                    <label className='w-[22%] mt-1.5' htmlFor='reda'>Credit card redaction</label>
                                                                    <input type='checkbox' id='reda' className='w-3.5 rounded-full' disabled/>
                                                                    <label className=' mt-1.5 ml-2.5' htmlFor='reda'>Enable automatic redaction of credit card numbers</label>
                                                                </div>
                                                                <hr className='bg-gray-200 w-full mt-7' />
                                                                <div className='flex justify-between mt-5 mb-4'>
                                                                    <div className='flex gap-3'>
                                                                        <button className='text-[12px] px-2 py-1.5 border border-gray-300 bg-[#f8f9f9] shadow-none text-gray-400 rounded font-bold' disabled >Save changes</button>
                                                                        <button className='text-[12px] px-2 py-1.5 border border-gray-300 text-gray-400 bg-[#f8f9f9] font-bold shadow-none rounded' disabled >Revert changes</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        : visList ? 
                                                            <div className='gap-16 w-full flex font-normal text-[12.5px] leading-4'>
                                                                <div className='w-[48.5%]'>
                                                                    <h2 className='text-[19px] font-bold p-0 mt-8 text-gray-600'>Visitor List (High Load Dashboard)</h2>
                                                                    <div className='flex mt-2'>
                                                                        <hr className='bg-blue-500 h-[3px] w-[73%]' />
                                                                        <hr className='bg-gray-300 h-[1px] w-full mt-[2px]' />
                                                                    </div>
                                                                    <p className='mt-3 text-gray-500'>The High Load Dashboard is an alternative version of the Visitor List that only shows visitors in your Incoming Chats and Currently Served sections. All other visitors are hidden.</p>
                                                                    <div className='flex w-full font-normal text-[12.5px] text-gray-500 mt-5'>
                                                                        <label className='w-[22%] mt-1.5' htmlFor='traffic'>High Load Dashboard</label>
                                                                        <input type='checkbox' id='traffic' className='w-3.5 rounded-full'/>
                                                                        <label className=' mt-1.5 ml-2.5' htmlFor='traffic'>Enable this for websites with high visitor traffic</label>
                                                                    </div>
                                                                    <hr className='bg-gray-200 w-full mt-5  ' />
                                                                    <div className='flex my-4 justify-between'>
                                                                        <div className='flex gap-3'>
                                                                            <button type='button' className='btn btn-sm bg-[#1F73B7] shadow-none text-white rounded font-bold'>Save changes</button>
                                                                            <button className='px-2 py-1.5 border border-gray-300 hover:bg-gray-200 font-bold rounded' type='button'>Revert changes</button>
                                                                        </div>
                                                                        <button className='px-2 py-1.5 border border-gray-300 hover:bg-gray-200 font-bold rounded' type='button'>Reset to defaults</button>
                                                                    </div> 
                                                                </div>
                                                            </div>                                                            
             : ''}

                    { addApi ? 
                            <> 
                                <div className='font-normal text-[12.5px] w-full mt-4'>
                                    <div className='flex'>
                                        <button className='text-gray-600 mr-3' onClick={() => {setaddApi(false)}}><IconArrowBackward className='hover:!text-black h-6 w-6'/></button>
                                        <h3 className='font-bold text-[16px] text-gray-600'>Add Api client</h3>
                                    </div>
                                    <hr className='mt-2.5'/>
                                </div>
                               <div className='mt-4 font-normal text-[12.5px] w-full flex'>
                                  <div className='w-[49%]'>
                                        <form> 
                                            <div className='flex w-full mt-5'>
                                                <h3 className='w-[24%] mt-1'>Client name</h3>
                                                <div>
                                                  <input type="text" name="" id="" className='py-1 px-3 border rounded w-60' required />
                                                  <p className='mt-2 text-gray-600'>Your client name shown to users when asked to grant access to your application or when <br /> viewing the list of apps that have been granted access.</p>
                                                </div>
                                            </div>
                                            <div className='flex w-full mt-5'>
                                                <h3 className='w-[24%] mt-1'>Company</h3>
                                                <div>
                                                  <input type="text" name="" id="" className='py-1 px-3 border rounded w-60'/>
                                                  <p className='mt-2 text-gray-600'>Choose a company name to display when users are asked to approve access to your <br /> application. The name will help users understand who they are granting access to.</p>
                                                </div>
                                            </div>
                                            <div className='flex w-full mt-5'>
                                                <h3 className='w-[60%] mt-1'>Rediret URLs</h3>
                                                <div>
                                                    {inputFields.map((field, index) => (
                                                        <div className='flex gap-4' key={index}>
                                                            <input type="text" className={`rounded h-8 form-input w-44 mt-1 pl-2 p-1 text-[13px] font-normal`} required value={field.value} onChange={(event) => handleInputChange(index, event)}/>
                                                            {inputFields.length > 1 ? <button className={`px-[0.4rem] mt-1 rounded-full border hover:bg-[#E9EBED]`} onClick={() => handleRemoveField(index)} ><IconMinus className='w-4 h-4'/></button> : ''}
                                                              {index === inputFields?.length - 1 && inputFields?.length >= 1 ? 
                                                                <button className={`px-[0.4rem] mt-1 rounded-full border hover:bg-[#E9EBED]`} disabled={inputFields?.length >= 4} onClick={handleAddField}>
                                                                  <IconPlus className='w-4 h-4'/>
                                                                </button>
                                                              : null}
                                                        </div>
                                                    ))}
                                                    <p className='mt-2 text-gray-600'>Specify the URL(s) that Zendesk Chat should use to redirect users after they decide whether or not to authorize your application to access Zendesk Chat. The URLs must be absolute and not relative. A maximum of four URLs can be added. </p>
                                                </div>
                                            </div>
                                            <hr className='bg-gray-200 w-full mt-7' />
                                            <div className='flex mt-5 flex gap-3 mb-4'>
                                                <button className='btn btn-sm bg-[#1F73B7] shadow-none text-white rounded font-bold' type='submit'>Create APi clint</button>
                                                <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded' onClick={() => {setaddApi(false)}}>Cancel</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className='ml-9 w-[20%]'>
                                        <h2 className='text-lg font-bold p-0 mt-6'>Quick tips</h2>
                                        <div className='flex'>
                                            <hr className='bg-blue-500 h-0.5 w-32' />
                                            <hr className='bg-gray-200 h-0.5 w-full' />
                                        </div>
                                        <p className='text-[12.5px] mt-3 leading-4.5'>
                                              Your use and access to the API is expressly conditioned on your compliance with the <br/> policies, restrictions, and other provisions <br/> related to the API set forth in our <a className='text-blue-700 hover:underline' href='https://developer.zendesk.com/api-reference/introduction/restrictions/'>API <br/> Restrictions and Responsibilities </a> and the <br/>other documentation we provide you.
                                              <br/> <br/> You must also comply with the restrictions <br/>set forth in the <a className='text-blue-700 hover:underline' href='https://www.zendesk.com/company/customers-partners/#terms-of-use'>Zendesk Terms and <br/>Conditions </a> and the <a className='text-blue-700 hover:underline' href='https://www.zendesk.com/company/customers-partners/#terms-of-use'> Zendesk Privacy Policy,</a> in <br/>all uses of the API.
                                              <br /> <br /> If Zendesk believes that you have or <br/>attempted to violate any term, condition, or <br/>the spirit of these policies or agreements, <br/>your right to access and use the API may be <br/>temporarily or permanently revoked. <a className='text-blue-700 hover:underline' href='https://developer.zendesk.com/rest_api/docs/chat/introduction' target='_blank'>Learn <br/>more</a>
                                        </p>
                                    </div>
                               </div>
                            </>
                            : '' }
                            {editApi ? 
                                <>
                                    <div className='font-normal text-[12.5px] w-full mt-4'>
                                        <div className='flex'>
                                            <button className='text-gray-600 mr-3' onClick={() => {seteditApi(false)}}><IconArrowBackward className='hover:!text-black h-6 w-6'/></button>
                                            <h3 className='font-bold text-[16px] text-gray-600'>Edit Api client</h3>
                                        </div>
                                        <hr className='mt-2.5'/>
                                    </div>
                                    <div className='mt-4 font-normal text-[12.5px] w-full flex'>
                                        <div className='w-[49%]'>
                                              <form> 
                                                  <div className='flex w-full mt-5'>
                                                      <h3 className='w-[24%] mt-1'>Client name</h3>
                                                      <div>
                                                        <input type="text" name="" id="" className='py-1 px-3 border rounded w-60' required />
                                                        <p className='mt-2 text-gray-600'>Your client name shown to users when asked to grant access to your application or when <br /> viewing the list of apps that have been granted access.</p>
                                                      </div>
                                                  </div>
                                                  <div className='flex w-full mt-5'>
                                                      <h3 className='w-[24%] mt-1'>Company</h3>
                                                      <div>
                                                        <input type="text" name="" id="" className='py-1 px-3 border rounded w-60'/>
                                                        <p className='mt-2 text-gray-600'>Choose a company name to display when users are asked to approve access to your <br /> application. The name will help users understand who they are granting access to.</p>
                                                      </div>
                                                  </div>
                                                  <div className='flex w-full mt-5'>
                                                      <h3 className='w-[24%] mt-1.5'>Clint ID</h3>
                                                      <div>
                                                        <h3 className=''>FGXegpNwpliugoOTfsiiCuJAkJFECvkCaOQnCP8JdZR8bl0P5G</h3>
                                                        <p className='text-gray-600'>ChooseThis is the name of your client used at the code level.</p>
                                                      </div>
                                                  </div>
                                                  <div className='flex w-full mt-5'>
                                                      <h3 className='w-[60%] mt-1'>Rediret URLs</h3>
                                                      <div>
                                                          {inputFields.map((field, index) => (
                                                              <div className='flex gap-4' key={index}>
                                                                  <input type="text" className={`rounded h-8 form-input w-40 mt-1 pl-2 p-1 text-[13px] font-normal`} required value={field.value} onChange={(event) => handleInputChange(index, event)}/>
                                                                  {inputFields.length > 1 ? <button className={`px-[0.4rem] mt-1 rounded-full border hover:bg-[#E9EBED]`} onClick={() => handleRemoveField(index)} ><IconMinus className='w-4 h-4'/></button> : ''}
                                                                    {index === inputFields?.length - 1 && inputFields?.length >= 1 ? 
                                                                      <button className={`px-[0.4rem] mt-1 rounded-full border hover:bg-[#E9EBED]`} disabled={inputFields?.length >= 4} onClick={handleAddField}>
                                                                        <IconPlus className='w-4 h-4'/>
                                                                      </button>
                                                                    : null}
                                                              </div>
                                                          ))}
                                                          <p className='mt-2 text-gray-600'>Specify the URL(s) that Zendesk Chat should use to redirect users after they decide whether or not to authorize your application to access Zendesk Chat. The URLs must be absolute and not relative. A maximum of four URLs can be added. </p>
                                                      </div>
                                                  </div>
                                                  <div className='flex w-full mt-5'>
                                                      <h3 className='w-[24%] mt-1.5'>Clint secret</h3>
                                                      <div>
                                                            <div className='flex gap-3.5'>
                                                                <p className='font-normal text-[13px] mt-1'>{text ? text.slice(0,7) : '3dgr5j6'}</p>
                                                                <button className='border border-gray-300 hover:bg-gray-200 font-bold text-xs shadow-none rounded px-2.5 py-1.5 relative' onClick={() => setModal(true)}>Regenerate</button>
                                                            </div>
                                                            <p className='mt-1.5 text-gray-500'>For security reasons we only display the first eight characters of your client secret.</p>
                                                      </div>
                                                  </div>
                                                  <hr className='bg-gray-200 w-full mt-5' />
                                                  <div className='flex mt-5 flex gap-3 mb-4'>
                                                      <button className='btn btn-sm bg-[#1F73B7] shadow-none text-white rounded font-bold' type='submit'>Save changes</button>
                                                      <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded' onClick={() => seteditApi(false)}>Cancel</button>
                                                  </div>
                                              </form>
                                          </div>
                                          <div className='ml-9 w-[20%]'>
                                              <h2 className='text-lg font-bold p-0 mt-6'>Quick tips</h2>
                                              <div className='flex'>
                                                  <hr className='bg-blue-500 h-0.5 w-32' />
                                                  <hr className='bg-gray-200 h-0.5 w-full' />
                                              </div>
                                              <p className='text-[12.5px] mt-3 leading-4.5'>
                                                    Your use and access to the API is expressly conditioned on your compliance with the <br/> policies, restrictions, and other provisions <br/> related to the API set forth in our <a className='text-blue-700 hover:underline' href='https://developer.zendesk.com/api-reference/introduction/restrictions/'>API <br/> Restrictions and Responsibilities </a> and the <br/>other documentation we provide you.
                                                    <br/> <br/> You must also comply with the restrictions <br/>set forth in the <a className='text-blue-700 hover:underline' href='https://www.zendesk.com/company/customers-partners/#terms-of-use'>Zendesk Terms and <br/>Conditions </a> and the <a className='text-blue-700 hover:underline' href='https://www.zendesk.com/company/customers-partners/#terms-of-use'> Zendesk Privacy Policy,</a> in <br/>all uses of the API.
                                                    <br /> <br /> If Zendesk believes that you have or <br/>attempted to violate any term, condition, or <br/>the spirit of these policies or agreements, <br/>your right to access and use the API may be <br/>temporarily or permanently revoked. <a className='text-blue-700 hover:underline' href='https://developer.zendesk.com/rest_api/docs/chat/introduction' target='_blank'>Learn <br/>more</a>
                                              </p>
                                          </div>
                                    </div>
                                </> : ''}
                                { addApp ? 
                                    <>
                                        <div className='font-normal text-[12.5px] w-full mt-3'>
                                            <div className='flex'>
                                                <button className='text-gray-600 mr-3' onClick={() => setaddApp(false)}><IconArrowBackward className='hover:!text-black h-6 w-6'/></button>
                                                <h3 className='font-bold text-[14.5px] text-gray-500 mt-0.5'>Add App</h3>
                                            </div>
                                            <hr className='mt-2.5'/>
                                        </div>
                                        <div className='mt-4 font-normal text-[12.5px] w-full flex'>
                                            <div className='w-[56%]'>
                                                <div className='flex w-full mt-5'>
                                                    <h3 className='w-[21%] mt-1'>Name</h3>
                                                    <input type="text" className='py-1 px-3 border duration-300 border-gray-300 rounded w-44 focus:ring-2 focus:ring-blue-500 focus:outline-none' />
                                                </div>    
                                                <div className='flex w-full mt-5'>
                                                    <h3 className='w-[21%] mt-1'>Description</h3>
                                                    <textarea className='resize-none h-20 w-[24rem] duration-300 px-1.5 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none'></textarea>
                                                </div>    
                                                <div className='flex w-full mt-5'>
                                                    <h3 className='w-[21%] mt-1'>Description</h3>
                                                    <div>
                                                        <input
                                                            type="file"
                                                            className="hidden"
                                                            ref={fileInput}
                                                            onChange={handleFileChange}
                                                        />
                                                        <div className='flex gap-1'>
                                                            {file && <p className="text-xs mt-2">{file}</p>}
                                                            <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded' onClick={handleButtonClick}>Select Json file</button>
                                                        </div>
                                                        {error && <p className="text-red-500 text-xs mt-2">File is not a JSON file containing FCM <br /> push notification credentials.</p>}
                                                        <p className='mt-1 text-gray-500'>This is the JSON file containing the FCM push notification credentials. <a className='text-blue-700 hover:underline' target='_blank' href="https://support.zendesk.com/hc/en-us/articles/4408821714458-Enabling-push-notifications-for-the-Chat-SDK-for-the-mobile-app">Learn more</a></p>
                                                        <div className='mt-3.5 bg-[#EEEEEE] w-[34.5rem] py-2.5 pl-3 border-l-2 border-[#999999]'>
                                                            <p className='text-xs font-normal'>Reminder: Update this JSON file when the FCM push notification credentials are regenerated.</p>
                                                        </div>
                                                    </div>
                                                </div>    
                                                <div className='flex w-full mt-5'>
                                                    <h3 className='w-[21%] mt-1'>iOS</h3>
                                                    <div>
                                                        <input
                                                            type="file"
                                                            className="hidden"
                                                            ref={pemInput}
                                                            onChange={handlePemChange}
                                                        />
                                                        <div className='justify-between flex'>
                                                            <div className='flex gap-1'>
                                                                {pemFile && <p className="text-xs mt-2">{pemFile}</p>}
                                                                <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded' onClick={handlePemClick}>Select Pem file</button>
                                                            </div>
                                                            <div className='flex gap-4'>
                                                                <input disabled type="checkbox" className='w-3 h-3 mt-2' />
                                                                <p className='text-gray-600 mt-1'>For APNs Sandbox</p>
                                                            </div>
                                                        </div>    
                                                        {pemError && <p className="text-red-500 text-xs mt-2">File is not a PEM file.</p>}
                                                        <p className='mt-1 text-gray-500'>Ensure the certificate and private key are combined before uploading. <a className='text-blue-700 hover:underline' target='_blank' href="https://support.zendesk.com/hc/en-us/articles/4408821714458-Enabling-push-notifications-for-the-Chat-SDK-for-the-mobile-app">Learn more</a></p>
                                                        <div className='mt-3.5 bg-[#EEEEEE] w-[34.5rem] py-2.5 pl-3 border-l-2 border-[#999999]'>
                                                            <p className='text-xs font-normal'>Reminder: Update this combined PEM file when push certificate is regenerated.</p>
                                                        </div>
                                                    </div>
                                                </div>   
                                                <div className='flex w-full mt-5'>
                                                    <h3 className='w-[21%] mt-1'>App ID</h3>
                                                    <div>
                                                      <input type="text" readOnly className='py-1 px-3 bg-[#F8F9F9] border duration-300 border-gray-300 rounded w-44 focus:ring-2 focus:ring-blue-500 focus:outline-none' />
                                                       <p className='text-gray-500 mt-2'>App ID is generated when you create the app. Provide it to your mobile app developers to identify the <br /> app.</p>
                                                    </div> 
                                                </div>    
                                                <hr className='bg-gray-200 w-full mt-7' />
                                                <div className='flex mt-5 flex gap-3'>
                                                    <button className='px-2.5 py-[3.5px] border border-gray-300 bg-[#F87F9F9] text-gray-400 rounded font-bold '>Save changes</button>
                                                    <button className='px-2.5 py-[3.5px] border border-gray-300 hover:bg-gray-200 font-bold rounded' onClick={() => setaddApp(false)}>Cancel</button>
                                                </div>
                                            </div>    
                                        </div>
                                    </> :''}
                                    { editApp ? 
                                        <>
                                            <div className='font-normal text-[12.5px] w-full mt-3'>
                                                <div className='flex'>
                                                    <button className='text-gray-600 mr-3' onClick={() => {seteditApp(false), settextCopy('')}}><IconArrowBackward className='hover:!text-black h-6 w-6'/></button>
                                                    <h3 className='font-bold text-[14.5px] text-gray-500 mt-0.5'>Edit App</h3>
                                                </div>
                                                <hr className='mt-2.5'/>
                                            </div>
                                            <div className='mt-4 font-normal text-[12.5px] w-full flex'>
                                                <div className='w-[56%]'>
                                                    <div className='flex w-full mt-5'>
                                                        <h3 className='w-[21%] mt-1'>Name</h3>
                                                        <input type="text" className='py-1 px-3 border duration-300 border-gray-300 rounded w-44 focus:ring-2 focus:ring-blue-500 focus:outline-none' />
                                                    </div>    
                                                    <div className='flex w-full mt-5'>
                                                        <h3 className='w-[21%] mt-1'>Description</h3>
                                                        <textarea className='resize-none h-20 w-[24rem] duration-300 px-1.5 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none'></textarea>
                                                    </div>    
                                                    <div className='flex w-full mt-5'>
                                                        <h3 className='w-[21%] mt-1'>Andriod</h3>
                                                        <div>
                                                            <input
                                                                type="file"
                                                                className="hidden"
                                                                ref={fileRef}
                                                                onChange={handleSecChange}
                                                            />
                                                            <div className='flex gap-1'>
                                                                {jsonFile && <p className="text-xs mt-2">{jsonFile}</p>}
                                                                <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded' onClick={handleSecClick}>Select Json file</button>
                                                            </div>
                                                            {fileError && <p className="text-red-500 text-xs mt-2">File is not a JSON file containing FCM <br /> push notification credentials.</p>}
                                                            <p className='mt-1 text-gray-500'>This is the JSON file containing the FCM push notification credentials. <a className='text-blue-700 hover:underline' target='_blank' href="https://support.zendesk.com/hc/en-us/articles/4408821714458-Enabling-push-notifications-for-the-Chat-SDK-for-the-mobile-app">Learn more</a></p>
                                                            <div className='mt-3.5 bg-[#EEEEEE] w-[34.5rem] py-2.5 pl-3 border-l-2 border-[#999999]'>
                                                                <p className='text-xs font-normal'>Reminder: Update this JSON file when the FCM push notification credentials are regenerated.</p>
                                                            </div>
                                                        </div>
                                                    </div>    
                                                    <div className='flex w-full mt-5'>
                                                        <h3 className='w-[21%] mt-1'>iOS</h3>
                                                        <div>
                                                            <input
                                                                type="file"
                                                                className="hidden"
                                                                ref={pemfileRef}
                                                                onChange={handlepemfileChange}
                                                            />
                                                            <div className='justify-between flex'>
                                                                <div className='flex gap-1'>
                                                                    {pemDoc && <p className="text-xs mt-2">{pemDoc}</p>}
                                                                    <button className='btn btn-sm border border-gray-300 hover:bg-gray-200 font-bold shadow-none rounded' onClick={handleClick}>Select Pem file</button>
                                                                </div>
                                                                <div className='flex gap-4'>
                                                                    <input disabled type="checkbox" className='w-3 h-3 mt-2' />
                                                                    <p className='text-gray-600 mt-1'>For APNs Sandbox</p>
                                                                </div>
                                                            </div>    
                                                            {pemfileError && <p className="text-red-500 text-xs mt-2">File is not a PEM file.</p>}
                                                            <p className='mt-1 text-gray-500'>Ensure the certificate and private key are combined before uploading. <a className='text-blue-700 hover:underline' target='_blank' href="https://support.zendesk.com/hc/en-us/articles/4408821714458-Enabling-push-notifications-for-the-Chat-SDK-for-the-mobile-app">Learn more</a></p>
                                                            <div className='mt-3.5 bg-[#EEEEEE] w-[34.5rem] py-2.5 pl-3 border-l-2 border-[#999999]'>
                                                                <p className='text-xs font-normal'>Reminder: Update this combined PEM file when push certificate is regenerated.</p>
                                                            </div>
                                                        </div>
                                                    </div>   
                                                    <div className='flex w-full mt-5'>
                                                        <h3 className='w-[21%] mt-1'>App ID</h3>
                                                        <div>
                                                            <div className='flex gap-2'>
                                                                <input type="text" value={textarea} onSelect={copyarea} readOnly className='py-1 px-3 bg-[#F8F9F9] border duration-300 border-gray-300 rounded w-44 focus:ring-2 focus:ring-blue-500 focus:outline-none' />
                                                                {textCopy ===  'Your ID Has Been Copied' ? <p className='mt-1 text-green-600 font-bold'>{textCopy} ✔</p> : ''}
                                                            </div>
                                                            <p className='text-gray-500 mt-2'>Provide it to your mobile app developers to identify the app.</p>
                                                        </div> 
                                                    </div>    
                                                    <hr className='bg-gray-200 w-[92%] mt-7' />
                                                    <div className='flex justify-between w-[92%]'>
                                                        <div className='flex mt-5 flex gap-3'>
                                                            <button className='px-2.5 py-[3.5px] border border-gray-300 bg-[#F87F9F9] text-gray-400 rounded font-bold '>Save changes</button>
                                                            <button className='px-2.5 py-[3.5px] border border-gray-300 hover:bg-gray-200 font-bold rounded' onClick={() => {seteditApp(false), settextCopy('')}}>Cancel</button>
                                                        </div>
                                                        <p className='text-gray-400 mt-6'>Created on 26/08/2024. Modified on 26/08/2024</p>
                                                    </div>
                                                </div>    
                                            </div>
                                        </> 
                                    : ''}
            {time ? 
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
                                        <Dialog.Panel className={`panel border-0 rounded w-full text-black dark:text-white-dark relative pb-0 px-0 ${codePlace ? 'h-[14.1rem] max-w-[32rem] mt-72' : 'h-[5rem] max-w-[31rem] mt-80'}`}>
                                            <div className=" bg-white flex items-center w-full justify-center">
                                                {codePlace ? <h6 className="text-base font-bold">API client saved</h6> : <h6 className="text-[18px] font-bold">Are you sure you want to regenerate the client secret?</h6>}
                                            </div>
                                            {codePlace ? <hr className='h-[1.5px] rounded w-[88%] mx-8 bg-gray-200 my-4'/> : ''}
                                            {!codePlace ? 
                                                <>
                                                <div className='bg-[#F4F4F4] p-2 border-t border-gray-200 flex gap-2 justify-center rounded-b mt-3'>
                                                    <button className='border bg-[#1570b5] border-gray-300 text-white hover:bg-[#5293C7] font-semibold text-xs rounded px-2.5 py-1.5' onClick={() => {handleRegenerateClick(), setcodePlace(true)}}>{time ? 'Regenerate' : 'Loading'}</button>
                                                    <button className='border border-gray-300 hover:bg-gray-200 font-bold text-xs rounded px-5 py-1.5' onClick={() => setModal(false)}>Cancel</button>
                                                </div>
                                                </>
                                            :      
                                                <>
                                                    <div className='ml-6'>
                                                        <p className='text-xs font-normal'>This is your shared secret:</p>
                                                        <div className='flex mt-1'>
                                                            <input value={text} readOnly type="text" className='form-input rounded-l h-[2rem] w-[60%] rounded-none bg-[#F8F9F9] text-xs font-normal px-2'/>
                                                            <button className='border-l-0 hover:bg-gray-200 duration-300 border rounded-r h-[2rem] px-4 text-xs font-bold' onClick={() => handleCopyClick()}>{copy}</button>
                                                        </div>
                                                        <p className='text-xs font-normal text-red-700 mt-3.5 ml-1'>Note: This shared secret will only be fully displayed once, please keep it safe.</p>
                                                    </div>
                                                    <div className='bg-[#F4F4F4] p-2 border-t border-gray-200 flex gap-2 justify-center mt-3'>
                                                        <button className='border bg-[#1570b5] border-gray-300 text-white hover:bg-[#5293C7] text-[13px] font-bold rounded px-5 py-1.5' onClick={() => {setModal(false), setcodePlace(false), setCopy('Copy')}}>Ok, got it!</button>
                                                    </div>
                                                </>
                                            }
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition> 
                : ''}
    </div>
  )
}

