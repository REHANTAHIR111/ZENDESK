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
import IconPencil from '../../components/Icon/IconPencil';
import IconTrashLines from '../../components/Icon/IconTrashLines';

const Triggers = (props: any) => {
    const { t } = useTranslation();
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


    // selected data
    const [query, setQuery] = useState('');
    const [inforNo, setinforNo] = useState('');
    const [filterOrderNo, setfilterOrderNo] = useState<any>('');
    const [filterCustomer, setfilterCustomer] = useState<any>('');
    const [filterWaybill, setfilterWaybill] = useState<any>('');
    const [filterInput, setfilterInput] = useState<any>('');
    const [filterStatus, setfilterStatus] = useState<any>('');

    const triggerData = [{
        name: 'Language',
        description: 'If you get visitors from different countries you can send them automated greetings in their native language.',
        enable: '✔'
    }]

    useEffect(() => {
        dispatch(setPageTitle('Triggers'));
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

    const key = 'draggable-example30010';
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
                accessor: 'Name',
                title: 'Name',
                draggable: true,
                sortable: false,
                width: 150,
                render: ({ name }: any) => <div className="font-semibold">{name}</div>,
                filter: (
                    <input id="title" type="date" name="title" className="form-input font-serif text-xs p-2 rounded-sm w-56" placeholder='Write Here'
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                    />
                ),
                filtering: query !== '',
            },
            {
                accessor: 'Description',
                title: 'Description',
                draggable: true,
                sortable: true,
                render: ({ description }: any) =>
                    <div className="font-semibold ">{description}</div>,
                filter: (
                    <input id="title" type="text" name="title" className="form-input font-serif text-xs p-2 rounded-sm w-56" placeholder='Write Here'
                        value={filterOrderNo}
                        onChange={(e) => {
                            setfilterOrderNo(e.target.value)
                        }}
                    />
                ),
                filtering: filterOrderNo !== '',
            },
            {
                accessor: 'Enbaled',
                title: t('Enbaled'),
                width: 200,
                draggable: true,
                sortable: true,
                render: ({ enable }: any) =>
                    <div className="font-bold text-success">{enable}</div>,
                filter: (
                    <input id="title" type="text" name="title" className="form-input font-serif text-xs p-2 rounded-sm w-56" placeholder='Write Here'
                        value={inforNo}
                        onChange={(e) => {
                            setinforNo(e.target.value)
                        }}
                    />
                ),
                filtering: inforNo !== '',
            },
            {
                accessor: 'action',
                title: 'Action',
                titleClassName: '!text-center',
                render: ({  }: any) => (
                    <div className="flex items-center w-max mx-auto gap-2">
                        <button type="button"  onClick={() => {localStorage.setItem('header','Edit trigger'), navigate('/zendesk/trigger/edittrigger')}}>
                            <IconPencil />  
                        </button>
                        <button type="button">
                            <IconTrashLines />
                        </button>
                    </div>
                ),
            },
        ],
    });

    return (
        <>
            <div className="">
                <div className="flex mb-3 w-full justify-between">
                    <div className='gap-3 flex'>
                        <input type="search" className="form-input w-44 h-[1.8rem] rounded-full text-sm font-normal" placeholder='Search...' />
                        <button className='btn btn-sm shadow-none hover:bg-[#5293C7] rounded text-white h-8 bg-[#3681BE]' onClick={() => {localStorage.setItem('header','Add trigger'), navigate('/zendesk/trigger/addtrigger')}}>Add trigger</button>
                    </div>
                    <div className='flex gap-3'>
                        <label className='text-sm pt-1 w-44 text-end font-normal'>1 enabled / 1 triggers</label>
                    </div>
                </div>
                <hr className='h-1.5 w-full my-3' />
                <div className="datatables">
                    <DataTable
                        noRecordsText="No results match your search query"
                        highlightOnHover
                        className="whitespace-nowrap table-hover relative"
                        records={triggerData}
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
                <div className='flex justify-center gap-3'>
                    <p className='mt-1.5 font-light text-base text-gray-600'>Automatically engage high-value customers by sending them a customized chat invite.</p>
                </div>
            </div>
        </>
    );
};

export default Triggers;