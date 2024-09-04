import React, { Fragment, useEffect, useState, SetStateAction } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { toggleSidebar } from '../../store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { IRootState } from '../../store';
import IconCaretDown from '../Icon/IconCaretDown';
import { get, post } from "../../pages/api/ApiCalls";
import IconHome from '../Icon/IconHome';
import IconUser from '../Icon/IconUser';
import IconClock from '../Icon/IconClock';
import IconBarChart from '../Icon/IconBarChart';
import IconMonitor from '../Icon/IconMonitor';
import IconSettings from '../Icon/IconSettings';
import IconConnect from '../Icon/IconConnect';
import { Transition, Dialog } from '@headlessui/react';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import IconEye from '../../components/Icon/IconEye';
import IconPencil from '../../components/Icon/IconPencil';
import sortBy from 'lodash/sortBy';


const Sidebar = () => {
    const [modal, setModal] = useState<any>(false);
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const location = useLocation();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    const toggleShow = (value: string) => {
        setShow((oldvalue: string) => {
            return oldvalue === value ? '' : value;
        });
    };

    //set sidebar links

    const [search, setSearch] = useState('');
    // permissions data
    const [permissionData, setpermissionData] = useState<any>([]);
    const [online, setOnline] = useState<any>('');
    const [away, setAway] = useState<any>('');
    const [invisible, setInvisible] = useState<any>('');
    const [show, setShow] = useState<any>('');

    //DATATABLE
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [15, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });
    const [dataArray, setdataArray] = useState([{ agent: 'All agents (1/1)', admin: '✔', chat: '- / 3' }]);
    const [recordsData, setRecordsData] = useState(dataArray);
    const [loader, setLoader] = useState<any>(true);
    const [selectedRecords, setSelectedRecords] = useState<any>([]);
    const [modal1, setModal1] = useState<any>(false);

    useEffect(() => {
        if (localStorage.getItem("userid")) {
            getPermissions()
        }
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
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
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    const getPermissions = () => {
        get("get-permission/" + localStorage.getItem("userid")).then((responseJson: any) => {
            setpermissionData(responseJson?.data)
            localStorage.setItem("permissions", JSON.stringify(responseJson?.data));
        })
    }

    // Function to handle changes in the search input
    const handleSearchChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearchTerm(event.target.value);
    };
    return (
        <div className={semidark ? 'dark' : ''}>
            <nav
                className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[200px] z-50 transition-all duration-300 ${semidark ? 'text-[#355E62]' : ''}`}
            >
                <div className="bg-[#03363D] dark:bg-[#355E64] h-full relative">
                    <div className="flex justify-between items-center px-4 py-3 mb-1">
                        <img className="h-8 w-8 ml-[62px] flex-none" src="https://dashboard-latest.zopim.com/dashboard/images/nav_bar/chat-logo-navbar.png" alt="logo" />
                    </div>

                    <PerfectScrollbar className="h-[calc(100vh-80px)] relative pb-[150px]">
                        <ul className="relative font-semibold space-y-0.5 px-0 py-0">
                            <>
                                <li className="menu w-40 ml-5 text-white">
                                    <button type="button" className='bg-[#071B1D] w-[100%] h-7 flex justify-between pt-1 px-3 rounded-2xl mb-1 relative' onClick={() => toggleShow('online')}>
                                        <div className="flex items-center">
                                            <div className={`rounded-[50%] inline-block w-[10px] h-[10px] ${online ? 'bg-[#1EB848]' : away ? 'bg-[#FFB24D]' : invisible ? 'bg-[#999999]' : 'bg-[#1EB848]'}`}></div>
                                            <span className="ltr:pl-3 rtl:pr-3 text-white">{online ? 'Online' : away ? 'Away' : invisible ? 'Invisible' : 'Online'}</span>
                                        </div>

                                        <div className={show !== 'online' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                            <IconCaretDown className='!text-white mt-1' />
                                        </div>
                                    </button>

                                    {show ?
                                        <ul className="sub-menu text-gray-500 bg-white rounded-md py-4 mt-1 mb-0.5 absolute z-10 w-40">
                                            <>
                                                <button className='w-full' onClick={() => {
                                                    setOnline(true),
                                                        setAway(false),
                                                        setInvisible(false),
                                                    setShow(false)
                                                }}>
                                                    <div className="flex items-center pl-5 py-1.5 hover:bg-[#EEEEEE] cursor-pointer">
                                                        <div className='rounded-[50%] inline-block w-[10px] h-[10px] bg-[#1EB848]'></div>
                                                        <span className="ltr:pl-3 rtl:pr-3 text-black">Online</span>
                                                    </div>
                                                </button>
                                            </>
                                            <>
                                                <button className='w-full' onClick={() => {
                                                    setAway(true),
                                                        setOnline(false),
                                                        setInvisible(false),
                                                    setShow(false)
                                                }}>
                                                    <div className="flex items-center pl-5 py-1.5 hover:bg-[#EEEEEE] cursor-pointer">
                                                        <div className='rounded-[50%] inline-block w-[10px] h-[10px] bg-[#FFB24D]'></div>
                                                        <span className="ltr:pl-3 rtl:pr-3 text-black">Away</span>
                                                    </div>
                                                </button>
                                            </>
                                            <>
                                                <button className='w-full' onClick={() => {
                                                    setInvisible(true),
                                                        setOnline(false),
                                                        setAway(false),
                                                    setShow(false)                                                
                                                }}>
                                                    <div className="flex items-center pl-5 py-1.5 hover:bg-[#EEEEEE] cursor-pointer">
                                                        <div className='rounded-[50%] inline-block w-[10px] h-[10px] bg-[#999999]'></div>
                                                        <span className="ltr:pl-3 rtl:pr-3 text-black">Invisible</span>
                                                    </div>
                                                </button>
                                            </>
                                        </ul>
                                        : ''}
                                </li>
                            </>
                            <>
                                <li className="menu nav-item text-[#9cbbad] text-[15px] font-base">
                                    <li className='nav-item menu pt-1'>
                                        <NavLink to="/" className="nav-link group" onClick={() => localStorage.setItem('header','Home')}>
                                            <div className="flex items-center pl-2.5 gap-1.5 py-1">
                                                <IconHome className='group-hover:!text-black shrink-0' />
                                                <span className="ltr:pl-3 rtl:pr-3">Home</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className='nav-item menu'>
                                        <NavLink to="/zendesk/visitors" className="nav-link group" onClick={() => localStorage.setItem('header','Vistors')}>
                                            <div className="flex items-center pl-2.5 gap-1.5 py-1">
                                                <IconUser className='group-hover:!text-black shrink-0' />
                                                <span className="ltr:pl-3 rtl:pr-3">Visitors</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className='nav-item menu'>
                                        <NavLink to="/zendesk/history" onClick={() => localStorage.setItem('header','History')}>
                                            <div className="flex items-center pl-2.5 gap-1.5 py-1">
                                                <IconClock className='group-hover:!text-black shrink-0' />
                                                <span className="ltr:pl-3 rtl:pr-3">History</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className='nav-item menu'>
                                        <NavLink to="/zendesk/zendesk-analytics" className="nav-link group" onClick={() => localStorage.setItem('header','Analytics')}>
                                            <div className="flex items-center pl-2.5 gap-1.5 py-1">
                                                <IconBarChart className='group-hover:!text-black shrink-0' />
                                                <span className="ltr:pl-3 rtl:pr-3">Analytics</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className='nav-item menu'>
                                        <NavLink to="/zendesk/monitor" className="nav-link group" onClick={() => localStorage.setItem('header','Monitor')}>
                                            <div className="flex items-center pl-2.5 gap-1.5 py-1">
                                                <IconMonitor className='group-hover:!text-black shrink-0' />
                                                <span className="ltr:pl-3 rtl:pr-3">Monitor</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className='menu nav-item nav-2'>
                                        <button type="button" className={`${currentMenu === 'Setting' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('Setting')}>
                                            <div className="flex items-center pl-2.5 gap-1.5 py-1">
                                                <IconSettings className="group-hover:!text-black shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">Setting</span>
                                            </div>
                                            <div className={currentMenu !== 'Setting' ? '' : '-rotate-180'}>
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu == 'Setting' ? 'auto' : 0}>
                                            <ul className="sub-menu text-[#869A9D] text-[13px] bg-[#012C32]">
                                                <>
                                                    {(searchTerm.trim() === '' || t('agents').toLowerCase().includes(searchTerm.toLowerCase())) && (
                                                        <li>
                                                            <NavLink to="/zendesk/agents" onClick={() => localStorage.setItem('header','Agents')}>Agents</NavLink>
                                                        </li>
                                                    )}
                                                </>
                                                <>
                                                    {(searchTerm.trim() === '' || t('departments').toLowerCase().includes(searchTerm.toLowerCase())) && (
                                                        <li>
                                                            <NavLink to="/zendesk/departments" onClick={() => localStorage.setItem('header','Departments')}>Departments</NavLink>
                                                        </li>
                                                    )}
                                                </>
                                                <>
                                                    {(searchTerm.trim() === '' || t('roles').toLowerCase().includes(searchTerm.toLowerCase())) && (
                                                        <li>
                                                            <NavLink to="/zendesk/zendesk-roles" onClick={() => localStorage.setItem('header','Roles')}>Roles</NavLink>
                                                        </li>
                                                    )}
                                                </>
                                                <>
                                                    {(searchTerm.trim() === '' || t('routing').toLowerCase().includes(searchTerm.toLowerCase())) && (
                                                        <li>
                                                            <NavLink to="/zendesk/routing" onClick={() => localStorage.setItem('header','Routing')}>Routing</NavLink>
                                                        </li>
                                                    )}
                                                </>
                                                <>
                                                    {(searchTerm.trim() === '' || t('shortcuts').toLowerCase().includes(searchTerm.toLowerCase())) && (
                                                        <li>
                                                            <NavLink to="/zendesk/shortcuts" onClick={() => localStorage.setItem('header','Shortcuts')}>Shortcuts</NavLink>
                                                        </li>
                                                    )}
                                                </>
                                                <>
                                                    {(searchTerm.trim() === '' || t('banned').toLowerCase().includes(searchTerm.toLowerCase())) && (
                                                        <li>
                                                            <NavLink to="/zendesk/banned" onClick={() => localStorage.setItem('header','Banned visitors')}>Banned</NavLink>
                                                        </li>
                                                    )}
                                                </>
                                                <>
                                                    {(searchTerm.trim() === '' || t('triggers').toLowerCase().includes(searchTerm.toLowerCase())) && (
                                                        <li>
                                                            <NavLink to="/zendesk/triggers" onClick={() => localStorage.setItem('header','Triggers')}>Triggers</NavLink>
                                                        </li>
                                                    )}
                                                </>
                                                <>
                                                    {(searchTerm.trim() === '' || t('goals').toLowerCase().includes(searchTerm.toLowerCase())) && (
                                                        <li>
                                                            <NavLink to="/zendesk/goals" onClick={() => localStorage.setItem('header','Goals')}>Goals</NavLink>
                                                        </li>
                                                    )}
                                                </>
                                                <>
                                                    {(searchTerm.trim() === '' || t('widget').toLowerCase().includes(searchTerm.toLowerCase())) && (
                                                        <li>
                                                            <NavLink to="/zendesk/widget" onClick={() => localStorage.setItem('header','Widget')}>Widget</NavLink>
                                                        </li>
                                                    )}
                                                </>
                                                <>
                                                    {(searchTerm.trim() === '' || t('personal').toLowerCase().includes(searchTerm.toLowerCase())) && (
                                                        <li>
                                                            <NavLink to="/zendesk/personal" onClick={() => localStorage.setItem('header','Personal')}>Personal</NavLink>
                                                        </li>
                                                    )}
                                                </>
                                                <>
                                                    {(searchTerm.trim() === '' || t('account').toLowerCase().includes(searchTerm.toLowerCase())) && (
                                                        <li>
                                                            <NavLink to="/zendesk/account" onClick={() => localStorage.setItem('header','Account')}>Account</NavLink>
                                                        </li>
                                                    )}
                                                </>
                                            </ul>
                                        </AnimateHeight>
                                    </li>
                                    <li className='menu nav-item nav-2'>
                                        <button type="button" className={`${currentMenu === 'Team' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('Team')}>
                                            <div className="flex items-center pl-2.5 gap-1.5 py-1">
                                                <IconConnect className="group-hover:!text-black shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">Team</span>
                                            </div>
                                            <div className={currentMenu !== 'Team' ? '' : '-rotate-180'}>
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu == 'Team' ? 'auto' : 0}>
                                            <ul className="sub-menu text-[#869A9D] text-[13px] text-[15px] bg-[#012C32] py-3">
                                                <>
                                                    {(searchTerm.trim() === '' || t('viewall').toLowerCase().includes(searchTerm.toLowerCase())) && (
                                                        <li>
                                                            <a className='cursor-pointer' onClick={() => setModal1(true)}>View all</a>
                                                        </li>
                                                    )}
                                                </>
                                            </ul>
                                        </AnimateHeight>
                                    </li>
                                    <li className='menu nav-item nav-2'>
                                         <div className='relative top-[14rem] w-full'>
                                            <div className='w-full flex justify-center mb-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="20" viewBox="0 0 22 16" fill="#4F7378">
                                                    <path d="M0 16h9.753V4.226zM9.753 0A4.876 4.876 0 1 1 0 0h9.753zm1.607 16a4.876 4.876 0 1 1 9.753 0H11.36zm0-4.226V0h9.753z"></path>
                                                </svg>
                                            </div>
                                            <div className='w-full flex justify-center text-center text-base font-bold'>
                                                <p className='w-[90%] rounded-full py-2 bg-[#05292D] text-[#4F7378]'>0 request</p>
                                            </div>
                                        </div>
                                    </li>
                                </li>
                            </>
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
            <Transition appear show={modal1} as={Fragment}>
          <Dialog as="div" open={modal1} onClose={() => setModal1(false)}>
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
                          <Dialog.Panel className="panel border-0 rounded w-full relative max-w-[51rem] h-[32rem] px-5 p-0 my-32 pt-1.5 pb-1 text-black dark:text-white-dark">
                              <div className="flex items-center rounded-t-lg justify-between px- py-3 ">
                                <div>&nbsp;</div>
                                   <h2 className='font-bold text-lg ml-8'>Agents signed in</h2>
                                  <button onClick={() => {
                                      setModal1(false)
                                  }} type="button" className="text-white-dark hover:text-dark border hover:bg-gray-200 duration-150 rounded-full py-1 px-1">
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
                              <div className="mt-2">
                                  <DataTable
                                      noRecordsText="No results match your search query"
                                      className="whitespace-nowrap table-hover"
                                      records={dataArray}
                                      fetching={loader}
                                      customLoader={
                                          <span className="animate-spin border-4 border-transparent border-l-primary rounded-full w-10 h-10 inline-block align-middle mb-10"></span>
                                      }
                                      loaderBackgroundBlur={5}
                                      columns={[
                                          {
                                              accessor: 'Agent',
                                              title: 'Agent',
                                              sortable: true,
                                              render: ({ agent }: any) => <strong className="font-normal">{agent}</strong>,
                                          },
                                          {
                                              accessor: 'Admin',
                                              title: 'Admin',
                                              sortable: true,
                                              render: ({ admin }: any) => <div className="font-semibold text-success">{admin}</div>,
                                          },
                                          {
                                              accessor: 'Chat',
                                              title: 'Chat',
                                              sortable: true,
                                              render: ({ chat }: any) => <div className="font-semibold font-serif">{chat}</div>,
                                          },
                                      ]}
                                  />
                               </div>
                          </Dialog.Panel>
                      </Transition.Child>
                  </div>
              </div>
          </Dialog>
        </Transition>
        </div>
    );
};

export default Sidebar;
