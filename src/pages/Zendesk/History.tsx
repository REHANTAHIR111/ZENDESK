import { IRootState } from '../../store';

import { DataTable, DataTableSortStatus, useDataTableColumns } from 'mantine-datatable';
import { useDebouncedValue } from '@mantine/hooks';
import { Fragment, useEffect, useMemo, useState } from 'react';
import sortBy from 'lodash/sortBy';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import 'tippy.js/dist/tippy.css';
import { List } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import moment from "moment";
import IconCaretDown from '../../components/Icon/IconCaretDown';
import Dropdown from '../../components/Dropdown';

const history = (props: any) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const rowData: List<any> | null | undefined = [];
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [totalcount, settotalcount] = useState(0);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'id'));
    const [selectedRecords, setSelectedRecords] = useState<any>([]);
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });
    const [loader, setLoader] = useState(true);
    const [permissionsData, setpermissionsData] = useState<any>([]);
    const [filterData, setfilterData] = useState<any>(false);

    //Updated - DataTable 
    const [recordsData, setRecordsData] = useState(initialRecords);
    const [Listdata, setData] = useState<any>([]);

    //clear Text
    const [text, setText] = useState('');


    const [show, setShow] = useState<any>(false);
    const [all, setAll] = useState<any>(false);
    const [offline, setOffline] = useState<any>(false);
    const [chat, setChat] = useState<any>(false);

    // selected data
    const [query, setQuery] = useState('');
    const [inforNo, setinforNo] = useState('');
    const [filterOrderNo, setfilterOrderNo] = useState<any>('');
    const [filterCustomer, setfilterCustomer] = useState<any>('');
    const [filterWaybill, setfilterWaybill] = useState<any>('');
    const [filterInput, setfilterInput] = useState<any>('');
    const [filterStatus, setfilterStatus] = useState<any>('');

    useEffect(() => {
        dispatch(setPageTitle('History'));
        setTimeout(
            function () {
                setLoader(false)
            }.bind(this),
            3000
        );
        // if (localStorage.getItem("permissions") != 'undefined' && localStorage.getItem("permissions") != null) {
        //     var permisssion = JSON.parse(localStorage.getItem("permissions") || '{}')
        //     if (permisssion) {
        //         setpermissionsData(permisssion)
        //         if (permisssion?.filter((item: { module: { code: string; }; view: number; }) => item?.module?.code == "order" && item?.view === 1).length <= 0) {
        //             navigate(-1)
        //         }
        //     }
        // } else {
        //     navigate('/admin/signin')
        // }
    }, [props]);

    useEffect(() => {
        setInitialRecords(Listdata);
        setRecordsData(Listdata)
    }, [Listdata]);

    useEffect(() => {
        setPage(1);
        setLoader(true)
    }, [pageSize]);

    useEffect(() => {
        if (filterData)
            setLoader(true)
    }, [page, pageSize]);

    useEffect(() => {
        if (filterData)
            setLoader(true)
    }, [search]);

    useEffect(() => {
        if (filterData)
            setLoader(true)
    }, [sortStatus]);

    useEffect(() => {
        var filterData = Listdata.filter((item: any) => {
            return (
                item.order_no?.toString().toLowerCase().includes(search.toLowerCase()) ||
                item.madac_id?.toString().includes(search) ||
                item.user_detail?.first_name?.toString().toLowerCase().includes(search.toLowerCase()) ||
                item.user_detail?.last_name?.toString().toLowerCase().includes(search.toLowerCase()) ||
                item.user_detail?.phone_number?.toString().toLowerCase().includes(search.toLowerCase()) ||
                item.city?.toString().toLowerCase().includes(search.toLowerCase()) ||
                item.naqeel_waybill?.toString().toLowerCase().includes(search.toLowerCase()) ||
                item.samsa_waybill?.toString().toLowerCase().includes(search.toLowerCase()) ||
                item.aramex_waybill?.toString().toLowerCase().includes(search.toLowerCase()) ||
                item.logestechs_waybill?.toString().toLowerCase().includes(search.toLowerCase()) ||
                item.starlink_waybill?.toString().toLowerCase().includes(search.toLowerCase()) ||
                item.shipa_waybill?.toString().toLowerCase().includes(search.toLowerCase()) ||
                item.notes?.toString().toLowerCase().includes(search.toLowerCase()) ||
                item.flow_waybill?.toString().toLowerCase().includes(search.toLowerCase())
            );
        });
        setRecordsData(filterData);
    }, [search]);

    const key = 'draggable-example101 ';
    const [debouncedQuery]: any = useDebouncedValue(query, 200);
    const departments = useMemo<any>(() => {
        const departments = new Set(Listdata.map((e: any) => e.title));
        return [...departments];
    }, []);
    const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
    useEffect(() => {
        // city
        var fInput: any = [];
        if (filterInput?.length) {
            for (let index = 0; index < filterInput?.length; index++) {
                const element: any = filterInput[index];
                var item = element?.value;
                fInput.push(item);
            }
        }

        // status
        var fStatus: any = [];
        if (filterStatus?.length) {
            for (let index = 0; index < filterStatus?.length; index++) {
                const element: any = filterStatus[index];
                var item = element?.value;
                fStatus.push(item);
            }
        }


        setRecordsData(
            Listdata.filter((ldata: any) => {

                const queryDate = debouncedQuery ? new Date(debouncedQuery) : null;
                if (queryDate) {
                    queryDate.toLocaleString('en-US', { timeZone: 'Asia/Riyadh' });

                    if (isNaN(queryDate.getTime())) {
                        return false;
                    }
                }

                const itemDate = new Date(ldata.created_at);
                itemDate.toLocaleString('en-US', { timeZone: 'Asia/Riyadh' });
                if (isNaN(itemDate.getTime())) {
                    return false;
                }
                const queryDateString = queryDate ? queryDate.toISOString().substr(0, 10) : null;
                const itemDateString = itemDate.toISOString().substr(0, 10);

                // city
                const CityDataId = ldata.city;
                const isCityDataIdInFilter = fInput?.includes(CityDataId);

                // status
                const StatusDataId = ldata?.status;
                const isStatusDataIdInFilter = fStatus.length === 0 || fStatus.includes(StatusDataId);

                return (
                    (!queryDate || queryDateString === itemDateString) &&
                    ldata.order_no?.toString().toLowerCase().includes(filterOrderNo.toLowerCase()) &&
                    ldata.madac_id?.toString().toLowerCase().includes(inforNo.toLowerCase()) &&
                    (
                        ldata.user_detail?.first_name?.toString()?.toLowerCase().includes(filterCustomer?.toLowerCase()) ||
                        ldata.user_detail?.last_name?.toString()?.toLowerCase().includes(filterCustomer?.toLowerCase()) ||
                        ldata.user_detail?.phone_number?.toString()?.toLowerCase().includes(filterCustomer?.toLowerCase())
                    ) &&
                    (fInput?.length === 0 || isCityDataIdInFilter) &&
                    (
                        filterWaybill?.length == 0 ||
                        ldata.naqeel_waybill?.toString().toLowerCase().includes(filterWaybill.toLowerCase()) ||
                        ldata.samsa_waybill?.toString().toLowerCase().includes(filterWaybill.toLowerCase()) ||
                        ldata.aramex_waybill?.toString().toLowerCase().includes(filterWaybill.toLowerCase()) ||
                        ldata.logestechs_waybill?.toString().toLowerCase().includes(filterWaybill.toLowerCase()) ||
                        ldata.starlink_waybill?.toString().toLowerCase().includes(filterWaybill.toLowerCase()) ||
                        ldata.shipa_waybill?.toString().toLowerCase().includes(filterWaybill.toLowerCase()) ||
                        ldata.flow_waybill?.toString().toLowerCase().includes(filterWaybill.toLowerCase())
                    ) &&
                    (isStatusDataIdInFilter)
                )
            })
        )
    }, [debouncedQuery, filterOrderNo, inforNo, filterCustomer, filterInput, filterWaybill, filterStatus]);
    const { effectiveColumns, resetColumnsOrder } = useDataTableColumns<any>({
        key,
        columns: [
            {
                accessor: 'created_at',
                title: 'Name',
                draggable: true,
                sortable: false,
                width: 150,
                render: ({  }: any) => <div className="font-semibold"></div>,
                filter: (
                    <input id="title" type="date" name="title" className="form-input font-serif text-xs p-2 rounded-sm w-56" placeholder='Write here'
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                    />
                ),
                filtering: query !== '',
            },
            {
                accessor: 'order_no',
                title: 'Agent',
                draggable: true,
                sortable: true,
                render: ({  }: any) =>
                    <div className="font-bold text-success"></div>,
                filter: (
                    <input id="title" type="text" name="title" className="form-input font-serif text-xs p-2 rounded-sm w-56" placeholder='Write here'
                        value={filterOrderNo}
                        onChange={(e) => {
                            setfilterOrderNo(e.target.value)
                        }}
                    />
                ),
                filtering: filterOrderNo !== '',
            },
            {
                accessor: 'infroLN',
                title: 'Time',
                width: 200,
                draggable: true,
                sortable: true,
                render: ({  }: any) =>
                    <div className="font-bold text-success"></div>,
                filter: (
                    <input id="title" type="text" name="title" className="form-input font-serif text-xs p-2 rounded-sm w-56" placeholder='Write here'
                        value={inforNo}
                        onChange={(e) => {
                            setinforNo(e.target.value)
                        }}
                    />
                ),
                filtering: inforNo !== '',
            },
            {
                accessor: 'user_detail',
                title: 'Rating',
                draggable: true,
                sortable: true,
                render: ({  }: any) =>
                    <div className="font-semibold capitalize text-yellow-600 font-serif">
                        
                    </div>,
                filter: (
                    <input id="customer_name" type="text" name="customer_name" className="form-input font-serif text-xs p-2 rounded-sm w-56" placeholder='Write here'
                        onChange={(e) => {
                            setfilterCustomer(e.target.value)
                        }}
                    />
                ),
                filtering: filterCustomer !== '',
            },
            {
                accessor: 'messages',
                title: 'Messages',
                draggable: true,
                sortable: false,
                width: 200,
                render: ({  }: any) =>
                    <div className="font-serif font-semibold overflow-auto"></div>
                ,
            },
        ],
    });

    const clearText = () => {
        let newcltext = ('');
        setText(newcltext)
    }

    const toggleShow = (value: string) => {
        setShow((oldvalue: string) => {
            return oldvalue === value ? '' : value;
        });
    };

    return (
        <>
            <div className="">
                <div className="flex mb-3 gap-3">
                    <button className='rounded-l-full h-[29.1px] w-7 bg-[#E9EBED] pb-1 pt-1.5 relative bottom-[0.3px] left-3 px-2 font-bold relative' onClick={() => toggleShow('search')}><IconCaretDown /></button>
                    {show ?
                        <ul className={`text-dark w-[420px] font-semibold border border-gray-300 !py-0 ${!offline || all ? 'overflow-y-scroll h-[40rem]' : 'h-[29.8rem]'} absolute z-10 bg-white mt-10`}>
                            <div className='w-full flex pl-5 pt-5'>
                                <div className='w-[40%]'>
                                    <h3 className='text-[13px] mt-1'>Search</h3>
                                </div>
                                <div>
                                    <div className='w-[60%] flex'>
                                        <button className={`btn btn-sm shadow-none rounded-r-none rounded-sm ${!offline && !chat ? 'bg-gray-200' : ''} font-bold`} onClick={() => {setAll(true) , setOffline(false), setChat(false)}}>All</button>
                                        <button className={`btn btn-sm rounded-none shadow-none font-bold ${chat ? 'bg-gray-200' : ''}`} onClick={() => {setChat(true), setAll(false), setOffline(false)}}>Chat</button>
                                        <button className={`btn btn-sm shadow-none rounded-r-sm rounded-l-none font-bold ${offline ? 'bg-gray-200' : ''}`} onClick={() => {setOffline(true), setAll(false) , setChat(false)}}>Offline</button>
                                    </div>
                                    <div className='flex gap-1.5 mt-6 form-check'>
                                        <input type="checkbox" name="Unread" id="Unread" className='h-[14px] w-[14px] rounded-full form-check-input' />
                                        <label className='text-xs form-check-label' htmlFor='Unread'>Unread</label>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex px-5 pt-5'>
                                <div className='w-[40%]'>
                                    <h3 className='text-[13px] mt-1'>Keywords</h3>
                                </div>
                                <input type="text" className='w-[60%] form-input rounded h-[1.8rem]' />
                            </div>
                            <div className='w-full flex px-5 pt-5'>
                                <div className='w-[40%]'>
                                    <h3 className='text-[13px] mt-1'>Date Range</h3>
                                </div>
                                <div className='w-[60%] grid grid-cols-2 gap-3'>
                                    <div className="relative">
                                        <input id="datepicker-range-start" name="start" type="date" className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full h-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="MM/DD/YY" />
                                    </div>
                                    <div className="relative">
                                        <input id="datepicker-range-end" name="end" type="date" className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full h-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="MM/DD/YY" />
                                    </div>
                                    <div className="relative">
                                        <input id="datepicker-range-start" name="start" type="date" className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full h-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="MM/DD/YY" />
                                    </div>
                                    <div className="relative">
                                        <input id="datepicker-range-end" name="end" type="date" className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full h-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="MM/DD/YY" />
                                    </div>
                                </div>
                            </div>
                            {!offline || all ?
                                <>
                                    <hr className='h-1.5 w-[23.6rem] ml-5 mt-5' />
                                    <h2 className='font-bold text-[#68737D] mt-3 ml-5'>Chats</h2>
                                    <div className='w-full flex px-5 pt-5'>
                                        <div className='w-[40%]'>
                                            <h3 className='text-[13px] mt-1'>At least</h3>
                                        </div>
                                        <div className='flex gap-3'>
                                            <input type="number" className='w-[42%] form-input rounded h-[1.8rem]' />
                                            <h3 className='text-[13px] mt-1 font-normal'>messages</h3>
                                        </div>
                                    </div>
                                    <div className='w-full flex pl-5 pt-6'>
                                        <div className='w-[36%]'>
                                            <h3 className='text-[13px] mt-1'>Chat Served</h3>
                                        </div>
                                        <div className='flex gap-5 w-[64%]'>
                                            <div className='flex gap-3 ml-[2px]'>
                                                <input type="checkbox" name="Unread" id="Unread" className='h-[14px] w-[14px] rounded-full form-check-input' />
                                                <label className='text-xs form-check-label' htmlFor='Unread'>Completed</label>
                                            </div>
                                            <div className='flex gap-3 ml-7'>
                                                <input type="checkbox" name="Unread" id="Unread" className='h-[14px] w-[14px] rounded-full form-check-input' />
                                                <label className='text-xs form-check-label' htmlFor='Unread'>Dropped</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full flex mt-1.5'>
                                        <div className='w-[40%]'>&nbsp;</div>
                                        <div className='60% flex mt-2'>
                                            <div className='flex gap-1.5 form-check'>
                                                <input type="checkbox" name="Unread" id="Unread" className='h-[14px] w-[14px] rounded-full form-check-input' />
                                                <label className='text-xs form-check-label' htmlFor='Unread'>Missed</label>
                                            </div>
                                            <div className='flex gap-1.5 form-check ml-[4.4rem]'>
                                                <input type="checkbox" name="Unread" id="Unread" className='h-[14px] w-[14px] rounded-full form-check-input' />
                                                <label className='text-xs form-check-label' htmlFor='Unread'>Unresponsive</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full flex px-5 pt-3'>
                                        <h3 className='text-[13px] w-[40%]'>Satisfication rating</h3>
                                        <div className='flex form-check w-[60%] mr-2.5'>
                                            <div className='flex gap-1.5 form-check mt-1'>
                                                <input type="checkbox" name="Unread" id="Unread" className='h-[14px] w-[14px] rounded-full form-check-input' />
                                                <label className='text-xs form-check-label' htmlFor='Unread'>Good</label>
                                            </div>
                                            <div className='mt-1 ml-[5rem] flex gap-1.5'>
                                                <input type="checkbox" name="Unread" id="Unread" className='h-[14px] w-[14px] rounded-full form-check-input' />
                                                <label className='text-xs form-check-label' htmlFor='Unread'>Bad</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full flex px-5 pt-5'>
                                        <div className='w-[40%]'>
                                            <h3 className='text-[13px] mt-1'>Tags</h3>
                                        </div>
                                        <div className='w-[60%]'>
                                            <select id="countries" className="form-input rounded h-[1.8rem] py-0">
                                                <option selected>Group by Activity</option>
                                                <option value="1">Group by Page title</option>
                                                <option value="2">Group by Page Url</option>
                                                <option value="3">Group by Country</option>
                                            </select>
                                            <h3 className='font-light mt-1.5 text-sm'>Contain any of these tags</h3>
                                        </div>
                                    </div>
                                    <div className='w-full flex px-5 pt-5'>
                                        <div className='w-[40%]'>
                                            <h3 className='text-[13px]'>Others</h3>
                                        </div>
                                        <div className='w-[60%] gap-3 flex mt-1.5'>
                                            <input type="checkbox" name="Unread" id="Unread" className='h-[14px] w-[14px] rounded-full form-check-input' />
                                            <label className='text-xs form-check-label' htmlFor='Unread'>Triggered</label>
                                        </div>
                                    </div>
                                </>
                            : ''}    
                            <hr className='h-1.5 w-[23.6rem] ml-5 mt-3' />
                            <h2 className='font-bold text-[#68737D] mt-3 ml-5'>People</h2>
                            <div className='w-full flex px-5 pt-5'>
                                <div className='w-[40%]'>
                                    <h3 className='text-[13px] mt-1'>Chat initiated by</h3>
                                </div>
                                <div className='w-[60%]'>
                                    <select id="countries" className="form-select rounded h-[1.8rem] py-0">
                                        <option selected>Anyone</option>
                                        <option value="1">Agents</option>
                                        <option value="2">Visitors</option>
                                        <option value="3">Triggered</option>
                                    </select>
                                </div>
                            </div>
                            <div className='w-full flex px-5 pt-5'>
                                <div className='w-[40%]'>
                                    <h3 className='text-[13px] mt-1'>Visitor name</h3>
                                </div>
                                <input type="text" className='w-[60%] form-input rounded h-[1.8rem]' />
                            </div>
                            {!offline ?
                                <>
                                    <div className='w-full flex px-5 pt-5'>
                                        <div className='w-[40%]'>
                                            <h3 className='text-[13px] mt-1'>Visitor email</h3>
                                        </div>
                                        <input type="text" className='w-[60%] form-input rounded h-[1.8rem]' />
                                    </div>
                                    <div className='w-full flex px-5 pt-5'>
                                        <div className='w-[40%]'>
                                            <h3 className='text-[13px] mt-1'>Agent name</h3>
                                        </div>
                                        <input type="text" className='w-[60%] form-input rounded h-[1.8rem]' />
                                    </div>
                                </>
                            : <div className='h-4'></div>}
                            <div className='mt-6 relative bottom-0 h-12 w-full px-2 bg-[#EBEBEB] gap-3 flex justify-end pt-2.5'>
                                <button className='btn btn-sm shadow-none rounded border border-info btn-info h-8' onClick={() => setShow(false)}>Search</button>
                                <button className='btn btn-sm rounded shadow-none border h-8 border-gray-300' onClick={() => setShow(false)}>Cancel</button>
                            </div>
                        </ul>
                    : ''}
                    <input type="search" className="form-input w-40 h-[1.8rem] rounded-r-full text-sm font-normal p-2" value={text} placeholder='Search...' onChange={(e: any) => setText(e.target.value)} />
                    <button className='btn btn-light btn-sm shadow-none rounded hover:bg-[#E9EBED] h-8' onClick={clearText}>Clear search</button>
                </div>
                <hr className='h-1.5 w-full my-3' />
                <div className="datatables">
                    <DataTable
                        noRecordsText="No results match your search query"
                        highlightOnHover
                        className="whitespace-nowrap table-hover relative"
                        records={recordsData}
                        storeColumnsKey={key}
                        fetching={loader}
                        customLoader={
                            <span className="animate-spin border-4 border-transparent border-l-primary rounded-full w-10 h-10 inline-block align-middle mb-10"></span>
                        }
                        loaderBackgroundBlur={5}
                        columns={effectiveColumns}
                        totalRecords={totalcount}
                        recordsPerPage={pageSize}
                        page={page}
                        onPageChange={(p) => setPage(p)}
                        recordsPerPageOptions={PAGE_SIZES}
                        onRecordsPerPageChange={setPageSize}
                        sortStatus={sortStatus}
                        onSortStatusChange={setSortStatus}
                        selectedRecords={selectedRecords}
                        onSelectedRecordsChange={setSelectedRecords}
                        minHeight={200}
                        paginationText={({ from, to, totalRecords }) => `Showing ${from} to ${to} of ${totalRecords} entries`}
                    />
                </div>
            </div>
        </>
    );
};

export default history;