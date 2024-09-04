import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState, Fragment } from 'react';
import sortBy from 'lodash/sortBy';
import ReactApexChart from 'react-apexcharts';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconBell from '../../components/Icon/IconBell';
import IconStar from '../../components/Icon/IconStar';
import IconPencil from '../../components/Icon/IconPencil';
import IconEye from '../../components/Icon/IconEye';
import IconTrashLines from '../../components/Icon/IconTrashLines';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Dialog, Transition,Tab } from '@headlessui/react';
import IconPlus from '../../components/Icon/IconPlus';
import Select from 'react-select';
import Swal from 'sweetalert2';
import IconMenuApps from '../../components/Icon/Menu/IconMenuApps';
import { t } from 'i18next';

const COAs = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Advanced Table'));
    });

    const rowData = [
        {
            id: 1,
            name: '11.11 SALE',
            arabicname: 'تخفيضات 11.11',
            type: 'Category',
            typedata: 'Tamkeen Sale',
            status: 'Enable',
        },
    ];

    useEffect(() => {
        dispatch(setPageTitle('COAs Listing'));
    });
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [15, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'id'));
    const [recordsData, setRecordsData] = useState(initialRecords);
    const [selectedRecords, setSelectedRecords] = useState<any>([]);
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });
    const [modal5, setModal5] = useState(false);

    const options4 = [
        { value: '1', label: 'Brands' },
        { value: '2', label: 'Screen' },

    ];
    const options5 = [
        { value: '1', label: 'About Us' },
        { value: '2', label: 'Promotion' },

    ];

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        setPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortStatus]);

    const randomColor = () => {
        const color = ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f', '#2196f3'];
        const random = Math.floor(Math.random() * color.length);
        return color[random];
    };

    const deleteRow = (id: any = null) => {
        // if (window.confirm('Are you sure want to delete selected row ?')) {
        //     if (id) {
        //         setRecords(items.filter((user) => user.id !== id));
        //         setInitialRecords(items.filter((user) => user.id !== id));
        //         setItems(items.filter((user) => user.id !== id));
        //         setSearch('');
        //         setSelectedRecords([]);
        //     } else {
        //         let selectedRows = selectedRecords || [];
        //         const ids = selectedRows.map((d: any) => {
        //             return d.id;
        //         });
        //         const result = items.filter((d) => !ids.includes(d.id as never));
        //         setRecords(result);
        //         setInitialRecords(result);
        //         setItems(result);
        //         setSearch('');
        //         setSelectedRecords([]);
        //         setPage(1);
        //     }
        // }
    };
    const showAlert = async (type: number) => {
        if (type === 11) {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-secondary',
                    cancelButton: 'btn btn-dark ltr:mr-3 rtl:ml-3',
                    popup: 'sweet-alerts',
                },
                buttonsStyling: false,
            });
            swalWithBootstrapButtons
                .fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true,
                    padding: '2em',
                })
                .then((result) => {
                    if (result.value) {
                        swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                        swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
                    }
                });
        }
    };

    return (
        <div>
            <div className="panel">
                <div className="mb-4.5 md:items-center md:flex-row flex-col gap-5">
                    <div className="flex items-center gap-2">
                        <button type="button" className="btn btn-danger gap-2" onClick={() => showAlert(11)}>
                            <IconTrashLines />
                        </button>
                        {/* Register */}
                        <button type="button" onClick={() => setModal5(true)} className="btn btn-primary gap-2">
                            <IconPlus />
                            Create COAs
                        </button>
                        <div className="flex gap-2 items-center ltr:ml-auto rtl:mr-auto">
                            {/* <button type="button" className="btn btn-secondary gap-2" onClick={() => showAlert(11)}>
                                <IconMenuApps className='shrink-0' />
                            </button> */}
                            <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e: any) => setSearch(e.target.value)} />
                        </div>
                        <Transition appear show={modal5} as={Fragment}>
                            <Dialog as="div" open={modal5} onClose={() => setModal5(false)}>
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
                                            <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-3xl my-8 text-black dark:text-white-dark">
                                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                                    <h5 className="font-bold text-lg">Create COAs</h5>
                                                    <button onClick={() => setModal5(false)} type="button" className="text-white-dark hover:text-dark">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="p-4">
                                                    <div className="flex items-center justify-between gap-3 mb-4">
                                                        <div className="w-full">
                                                            <label htmlFor="number" className="text-sm mb-1">
                                                                COAs Name - En
                                                            </label>
                                                            <input id="number" type="text" name="inv-num" className="text-sm form-input w-6/6" placeholder="COAs Name - En" />
                                                        </div>
                                                        <div className="w-full">
                                                            <label htmlFor="number" className="text-sm mb-1">
                                                                COAs Name - Ar
                                                            </label>
                                                            <input id="number" type="text" name="inv-num" className="text-sm form-input w-6/6 font-serif text-right" placeholder="دعوة للعمل (الاسم عربي)" />
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between gap-3 mb-4">
                                                        <div className="w-full">
                                                            <label htmlFor="number" className="text-sm mb-1">
                                                                Box Color
                                                            </label>
                                                            <input id="number" type="text" name="inv-num" className="text-sm form-input w-6/6" placeholder="#0000" />
                                                        </div>
                                                        <div className="w-full">
                                                            <label htmlFor="number" className="text-sm mb-1">
                                                                Text Colort
                                                            </label>
                                                            <input id="number" type="text" name="inv-num" className="text-sm form-input w-6/6" placeholder="#FFFF" />
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between gap-3 mb-5"> 
                                                        <div className="w-full">
                                                            <label className="text-sm" htmlFor="text">Select Type</label>
                                                            <Select className="text-sm" placeholder="Please Select Screen" options={options4} />
                                                        </div>
                                                        <div className="w-full">
                                                            <label className="text-sm" htmlFor="text">Screen</label>
                                                            <Select className="text-sm" placeholder="Please Select Screen" options={options5} />
                                                        </div>
                                                    </div>                
                                                    <div className="flex justify-end items-center mt-8">
                                                        <div className="w-full">
                                                            <label className="text-sm mb-0">
                                                                <input type="checkbox" className="form-checkbox" />
                                                                <span className="mb-0">Enable COAs</span>
                                                            </label>
                                                        </div>
                                                        <button onClick={() => setModal5(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                            Save
                                                        </button>
                                                    </div>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </div>
                <div className="datatables">
                    <DataTable
                        noRecordsText="No results match your search query"
                        highlightOnHover
                        className="whitespace-nowrap table-hover"
                        records={recordsData}
                        columns={[
                            {
                                accessor: 'id',
                                title: 'S.No',
                                sortable: true,
                                render: ({ id }: any) => <strong className="text-info">{id}</strong>,
                            },
                            {
                                accessor: 'name',
                                title: 'COAs Name - En',
                                sortable: true,
                                render: ({ name }: any) => <div className="font-semibold">{name}</div>,
                            },
                            {
                                accessor: 'arabicname',
                                title: 'COAs Name - Ar',
                                sortable: true,
                                render: ({ arabicname }: any) => <div className="font-semibold font-serif">{arabicname}</div>,
                            },
                            {
                                accessor: 'type',
                                title: 'Type',
                                sortable: true,
                                render: ({ type }: any) => <div className="font-semibold">{type}</div>,
                            },
                            {
                                accessor: 'typedata',
                                title: 'Type Data',
                                sortable: true,
                                render: ({ typedata }: any) => <div className="font-semibold">{typedata}</div>,
                            },
                            {
                                accessor: 'status',
                                title: 'Status',
                                sortable: true,
                                render: ({ status, id }: any) => <div className={`font-semibold ${id === 1 ? 'text-success' : 'text-danger'}`}>{status}</div>,
                            },
                            {
                                accessor: 'action',
                                title: 'Action',
                                titleClassName: '!text-center',
                                render: () => (
                                    <div className="flex items-center w-max mx-auto gap-2">
                                        <Tippy content="View">
                                            <Link to="/users/profile">
                                                <IconEye />
                                            </Link>
                                        </Tippy>
                                        <Tippy content="Edit">
                                            <button type="button">
                                                <IconPencil />
                                            </button>
                                        </Tippy>
                                        <Tippy content="Delete">
                                            <button type="button" onClick={() => showAlert(11)}>
                                                <IconTrashLines />
                                            </button>
                                        </Tippy>
                                    </div>
                                ),
                            },
                        ]}
                        totalRecords={initialRecords.length}
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
                        paginationText={({ from, to, totalRecords }) => `${t("showing")}  ${from} ${t("to")} ${to} ${t("of")} ${totalRecords} ${t("entries")}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default COAs;
