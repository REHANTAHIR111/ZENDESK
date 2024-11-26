import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, NavLink, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { toggleRTL, toggleTheme, toggleSidebar, toggleLocale } from '../../store/themeConfigSlice';
import { useTranslation } from 'react-i18next';
import Dropdown from '../Dropdown';
import IconMenu from '../Icon/IconMenu';
import IconSearch from '../Icon/IconSearch';
import IconSun from '../Icon/IconSun';
import IconMoon from '../Icon/IconMoon';
import IconLaptop from '../Icon/IconLaptop';
import IconUser from '../Icon/IconUser';
import IconLockDots from '../Icon/IconLockDots';
import IconLogout from '../Icon/IconLogout';
import i18n from '../../i18n';
import { routes } from '../../router/routes';
import IconProfile from '../Icon/IconProfile';
import IconMenuWidgets from '../Icon/Menu/IconMenuWidgets';
import IconInWidget from '../Icon/IconInWidget';
import IconInWidget2 from '../Icon/IconInWidget2';
import IconInWidget3 from '../Icon/IconInWIdget3';
import IconInWidget4 from '../Icon/IconInWidget4';
import IconInWidget5 from '../Icon/IconInWidget5';
import IconInWidget6 from '../Icon/IconInWidget6';
import IconInWidget7 from '../Icon/IconInWIdget7';
import IconInWidget8 from '../Icon/IconInWidget8';
import IconArrowBackward from '../Icon/IconArrowBackward';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [username, setusername] = useState<any>('Tamkeen');
    const [email, setemail] = useState<any>('tamkeen@gmail.com')
    useEffect(() => {
        if (localStorage.getItem("username")) {
            setusername(localStorage.getItem("username"))
        }
        if (localStorage.getItem("email")) {
            setemail(localStorage.getItem("email"))
        }
        const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const all: any = document.querySelectorAll('ul.horizontal-menu .nav-link.active');
            for (let i = 0; i < all.length; i++) {
                all[0]?.classList.remove('active');
            }
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link');
                if (ele) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele?.classList.add('active');
                    });
                }
            }
        }
    }, [location]);

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();

    function createMarkup(messages: any) {
        return { __html: messages };
    }
    const [messages, setMessages] = useState([
        {
            id: 1,
            image: '<span className="grid place-content-center w-9 h-9 rounded-full bg-success-light dark:bg-success text-success dark:text-success-light"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span>',
            title: 'Congratulations!',
            message: 'Your OS has been updated.',
            time: '1hr',
        },
        {
            id: 2,
            image: '<span className="grid place-content-center w-9 h-9 rounded-full bg-info-light dark:bg-info text-info dark:text-info-light"><svg g xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></span>',
            title: 'Did you know?',
            message: 'You can switch between artboards.',
            time: '2hr',
        },
        {
            id: 3,
            image: '<span className="grid place-content-center w-9 h-9 rounded-full bg-danger-light dark:bg-danger text-danger dark:text-danger-light"> <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>',
            title: 'Something went wrong!',
            message: 'Send Reposrt',
            time: '2days',
        },
        {
            id: 4,
            image: '<span className="grid place-content-center w-9 h-9 rounded-full bg-warning-light dark:bg-warning text-warning dark:text-warning-light"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">    <circle cx="12" cy="12" r="10"></circle>    <line x1="12" y1="8" x2="12" y2="12"></line>    <line x1="12" y1="16" x2="12.01" y2="16"></line></svg></span>',
            title: 'Warning',
            message: 'Your password strength is low.',
            time: '5days',
        },
    ]);

    const removeMessage = (value: number) => {
        setMessages(messages.filter((user) => user.id !== value));
    };

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            profile: 'user-profile.jpeg',
            message: '<strong className="text-sm mr-1">John Doe</strong>invite you to <strong>Prototyping</strong>',
            time: '45 min ago',
        },
        {
            id: 2,
            profile: 'profile-34.jpeg',
            message: '<strong className="text-sm mr-1">Adam Nolan</strong>mentioned you to <strong>UX Basics</strong>',
            time: '9h Ago',
        },
        {
            id: 3,
            profile: 'profile-16.jpeg',
            message: '<strong className="text-sm mr-1">Anna Morgan</strong>Upload a file',
            time: '9h Ago',
        },
    ]);

    const removeNotification = (value: number) => {
        setNotifications(notifications.filter((user) => user.id !== value));
    };
    const [search, setSearch] = useState(false);
    const setLocale = (flag: string) => {
        setFlag(flag);
        if (flag.toLowerCase() === 'ar') {
            dispatch(toggleRTL('rtl'));
        } else {
            dispatch(toggleRTL('ltr'));
        }
    };
    const [flag, setFlag] = useState(themeConfig.locale);
    const { t } = useTranslation();
    function signout() {
        localStorage.removeItem("userid")
        localStorage.removeItem("email")
        navigate("/admin/signin");
    }

    return (
        <header className={`z-40 horizontal`}>
            <div className="shadow-sm">
                <div className="relative bg-white flex w-[100%] px-5 py-2 dark:bg-black">
                    <div className="horizontal-logo flex lg:hidden justify-between items-center ltr:mr-2 rtl:ml-2">
                        {/* <h3>{routes === '/home' ? }</h3> */}
                        <button
                            type="button"
                            className="collapse-icon flex-none dark:text-[#d0d2d6] hover:text-primary dark:hover:text-primary flex lg:hidden ltr:ml-2 rtl:mr-2 p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
                            onClick={() => {
                                dispatch(toggleSidebar());
                            }}
                        >
                            <IconMenu className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="sm:flex-1 ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
                        <div className="hidden md:block sm:ltr:mr-auto sm:rtl:ml-auto">
                            <div className='flex gap-3'>
                                {localStorage.getItem('header') === ('Add department') ?    
                                    <button onClick={() => {localStorage.setItem('header', 'Departments'), navigate('/zendesk/departments')}}><IconArrowBackward/></button> 
                                        : localStorage.getItem('header') === ('Add shortcut') ? <button onClick={() => {localStorage.setItem('header', 'Shortcuts'), navigate('/zendesk/shortcuts')}}><IconArrowBackward/></button> 
                                            : localStorage.getItem('header') === ('Edit shortcut') ? <button onClick={() => {localStorage.setItem('header', 'Shortcuts'), navigate('/zendesk/shortcuts')}}><IconArrowBackward/></button> 
                                                : localStorage.getItem('header') === ('Add banned IP address') ? <button onClick={() => {localStorage.setItem('header', 'Banned visitors'), navigate('/zendesk/banned')}}><IconArrowBackward/></button> 
                                                    : localStorage.getItem('header') === ('Add trigger') ? <button onClick={() => {localStorage.setItem('header', 'Triggers'), navigate('/zendesk/triggers')}}><IconArrowBackward/></button> 
                                                        : localStorage.getItem('header') === ('Edit trigger') ? <button onClick={() => {localStorage.setItem('header', 'Triggers'), navigate('/zendesk/triggers')}}><IconArrowBackward/></button> 
                                : ''}
                                <h2 className='font-[600] text-base'>{localStorage.getItem('header')}</h2>
                            </div>
                            <button
                                type="button"
                                onClick={() => setSearch(!search)}
                                className="search_btn sm:hidden p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
                            >
                                <IconSearch className="w-4.5 h-4.5 mx-auto dark:text-[#d0d2d6]" />
                            </button>
                        </div>
                        <div className="dropdown shrink-0 flex">
                            <Dropdown
                                offset={[0, 8]}
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="relative group block mr-6"
                                button={<IconMenuWidgets className="group-hover:saturate-100" />}
                            >
                                <ul className="text-dark !py-0 w-[260px] font-semibold" style={{ boxShadow: '1px 13px 16px #E4E4E4' }}>
                                    <li className='pt-1.5'>
                                        <div className='hover:bg-[#EDF7FF] duration-150 py-1.5 pl-2.5'>
                                            <Link to={`/`}>
                                                <div className="flex items-center pr-6 gap-5 pl-3 py-3">
                                                    <IconInWidget/>
                                                    <h4 className="text-[13px] relative bottom-1">Support</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='hover:bg-[#EDF7FF] duration-150 py-1.5 pl-2.5'>
                                            <Link to={`/`}>
                                                <div className="flex items-center pr-6 gap-5 pl-3 py-3">
                                                    <IconInWidget2/>
                                                    <h4 className="text-[13px] relative bottom-1">Guide</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='hover:bg-[#EDF7FF] duration-150 py-1.5 pl-2.5'>
                                            <Link to={`/`}>
                                                <div className="flex items-center pr-6 gap-5 pl-3 py-3">
                                                    <IconInWidget3/>
                                                    <h4 className="text-[13px] relative bottom-1">Gather</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='hover:bg-[#EDF7FF] duration-150 py-1.5 pl-2.5'>
                                            <Link to={`/`}>
                                                <div className="flex items-center pr-6 gap-5 pl-3 py-3">
                                                    <IconInWidget4/>
                                                    <h4 className="text-[13px] relative bottom-1">Chat</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='hover:bg-[#EDF7FF] duration-150 py-1.5 pl-2.5'>
                                            <Link to={`/`}>
                                                <div className="flex items-center pr-6 gap-5 pl-3 py-3">
                                                    <IconInWidget5/>
                                                    <h4 className="text-[13px] relative bottom-1">Talk</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='hover:bg-[#EDF7FF] duration-150 py-1.5 pl-2.5'>
                                            <Link to={`/`}>
                                                <div className="flex items-center pr-6 gap-5 pl-3 py-3">
                                                    <IconInWidget6/>
                                                    <h4 className="text-[13px] relative bottom-1">Explore</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='hover:bg-[#EDF7FF] duration-150 py-1.5 pl-2.5'>
                                            <Link to={`/`}>
                                                <div className="flex items-center pr-6 gap-5 pl-3 py-3">
                                                    <IconInWidget7/>
                                                    <h4 className="text-[13px] relative bottom-1">Sell</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className='mb-1'>
                                        <div className='hover:bg-[#EDF7FF] duration-150 py-1.5 pl-2.5'>
                                            <Link to={`/`}>
                                                <div className="flex items-center pr-6 gap-5 pl-3 py-3">
                                                    <IconInWidget8/>
                                                    <h4 className="text-[13px] relative bottom-1">Workforce management</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <div className="border-t border-white-light flex justify-center">
                                        <Link to="https://teamsupport1.zendesk.com/admin" className="text-[14px] text-info hover:bg-[#EDF7FF] duration-150 my-1 h-10 w-full text-center pt-2.5" onClick={() => { signout() }}>
                                            Admin Center
                                        </Link>
                                    </div>
                                </ul>
                            </Dropdown>
                        </div>
                        <div className="dropdown shrink-0 flex">
                            <Dropdown
                                offset={[0, 8]}
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="relative group block mr-4"
                                button={<img src="https://dashboard-latest.zopim.com/dashboard/images/agent-default-avatar.png" className="w-[31px] h-[31px] rounded-full object-cover border border-[#BBBBBB] saturate-50 group-hover:saturate-100" />}
                            >
                                <ul className="text-dark dark:text-white-dark !py-0 w-[215px] font-semibold dark:text-white-light/90" style={{ boxShadow: '1px 13px 16px #E4E4E4' }}>
                                    <li className='py-1.5'>
                                        <button onClick={() => localStorage.setItem('header', 'Personal')}>
                                            <Link to={`/zendesk/personal`} className="dark:hover:text-white">
                                                <div className="flex items-center px-6 py-[-1]">
                                                    <img src={localStorage.getItem('img')} className="w-[37px] h-[37px] rounded-full object-cover border border-[#BBBBBB] saturate-50 group-hover:saturate-100" />
                                                    <div className="ltr:pl-4 truncate text-left">
                                                        <h4 className="text-sm">
                                                            {localStorage.getItem('email')
                                                                ? localStorage.getItem('email')!.split('@')[0]
                                                                : 'Zac Ellis'
                                                            } 
                                                            {/* <span className="text-xs bg-success-light rounded text-success px-1 ltr:ml-2 rtl:ml-2">Pro</span> */}
                                                        </h4>
                                                        <h6 className="text-[0.7rem]">
                                                            View profile
                                                        </h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        </button>    
                                    </li>
                                    <hr className='w-full h-[0.8px] bg-gray-400' />
                                    <li className='py-0.5'>
                                        <Link to={`/`} className="text-gray-700">
                                            <h4 className="text-[12.5px] pl-5">
                                                Get help
                                            </h4>
                                        </Link>
                                    </li>
                                    <li className='py-0.5'>
                                        <Link to={`/`} className="text-gray-700">
                                            <h4 className="text-[12.5px] pl-5">
                                                Chat help center
                                            </h4>
                                        </Link>
                                    </li>
                                    <li className='py-0.5'>
                                        <Link to={`/`} className="text-gray-700">
                                            <h4 className="text-[12.5px] pl-5">
                                                Keyboard shortcuts
                                            </h4>
                                        </Link>
                                    </li>
                                    <li className='py-0.5'>
                                        <Link to={`/`} className="text-gray-700">
                                            <h4 className="text-[12.5px] pl-5">
                                                Check connection
                                            </h4>
                                        </Link>
                                    </li>
                                    <li className='py-0.5'>
                                        <Link to={`/`} className="text-gray-700">
                                            <h4 className="text-[12.5px] pl-5">
                                                Download debug report
                                            </h4>
                                        </Link>
                                    </li>
                                    <li className='py-0.5'>
                                        <Link to={`/`} className="text-gray-700">
                                            <h4 className="text-[12.5px] pl-5">
                                                Privacy policy
                                            </h4>
                                        </Link>
                                    </li>
                                    <div className="border-t border-white-light flex justify-center">
                                        <Link to="/admin/signin" className="hover:text-danger !py-3" onClick={() => { signout() }}>
                                            Leave session
                                        </Link>
                                    </div>
                                </ul>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
