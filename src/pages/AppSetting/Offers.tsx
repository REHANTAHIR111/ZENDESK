import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState, Fragment} from 'react';
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
import IconPlus from '../../components/Icon/IconPlus';
import Swal from 'sweetalert2';
import { Dialog, Transition,Tab } from '@headlessui/react';
import Select from 'react-select';
import IconMenuApps from '../../components/Icon/Menu/IconMenuApps';
import { t } from 'i18next';

const Offers = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Advanced Table'));
    });

    const rowData = [
        {
            id: 1,
            name: 'Shop By Brand',
            arabicname: 'تسوق حسب الماركة	',
            type: 'Brand',
            viewtype: 'Horizontal',
            position: 'Second',
            status: 'Enable',
        },
    ];

    useEffect(() => {
        dispatch(setPageTitle('Offers Listing'));
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

     // Select type Start
    const [viewdata, setviewdata] = useState<any>(false);
    const [type, settype] = useState<any>('');
    const [productData, setProductData] = useState([]);
    const [brandData, setbrandData] = useState([]);
    const [categoryData, setcategoryData] = useState([]);
    const [product, setProduct] = useState<any>('');
    const [brand, setBrand] = useState<any>('');
    const [category, setCategory] = useState<any>('');
     // Select type end

    const options4 = [
        { value: '0', label: 'Product' },
        { value: '1', label: 'Brand' },
        { value: '2', label: 'Product Categories' },
    ];
    const options5 = [
        { value: '1', label: 'Vertical' },
        { value: '2', label: 'Horizontal' },

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
                            Create Offer
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
                                                    <h5 className="font-bold text-lg">Create Offer</h5>
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
                                                                Offer Name - En
                                                            </label>
                                                            <input id="number" type="text" name="inv-num" className="text-sm form-input w-6/6" placeholder="Offer Name - En" />
                                                        </div>
                                                        <div className="w-full">
                                                            <label htmlFor="number" className="text-sm mb-1">
                                                                Offer Name - Ar
                                                            </label>
                                                            <input id="number" type="text" name="inv-num" className="text-sm form-input w-6/6 font-serif text-right" placeholder="Offer Name - Ar" />
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between gap-3 mb-4">
                                                        <div className="w-full">
                                                            <label htmlFor="number" className="text-sm mb-1">
                                                                Subtitle Name - En
                                                            </label>
                                                            <input id="number" type="text" name="inv-num" className="text-sm form-input w-6/6" placeholder="Subtitle Name" />
                                                        </div>
                                                        <div className="w-full">
                                                            <label htmlFor="number" className="text-sm mb-1">
                                                                Subtitle Name - Ar
                                                            </label>
                                                            <input id="number" type="text" name="inv-num" className="text-sm form-input w-6/6" placeholder="Subtitle Arabic" />
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between gap-3 mb-4">
                                                        <div className="w-full">
                                                            <label htmlFor="number" className="text-sm mb-1">
                                                                Button Title - En
                                                            </label>
                                                            <input id="number" type="text" name="inv-num" className="text-sm form-input w-6/6" placeholder="Button title" />
                                                        </div>
                                                        <div className="w-full">
                                                            <label htmlFor="number" className="text-sm mb-1">
                                                                Button Title - Ar
                                                            </label>
                                                            <input id="number" type="text" name="inv-num" className="text-sm form-input w-6/6" placeholder="Button title arabic" />
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between gap-3 mb-2"> 
                                                        <div className="w-full">
                                                            <label className="text-sm" htmlFor="text">View Type </label>
                                                            <Select className="text-sm" placeholder="Please Select Screen" options={options5} />
                                                        </div>
                                                        <div className="w-full">
                                                            <label className="text-sm" htmlFor="text">Select Type</label>
                                                            <Select className="text-sm" placeholder="Please Select Type" isDisabled={viewdata} value={ type } options={options4}
                                                            onChange={(e: any) => {settype(e)}} />
                                                        </div>
                                                    </div> 
                                                    <div className=""> 
                                                        <div className="flex items-center justify-between gap-3 mb-2">
                                                            <div className="w-full">
                                                                {type?.value == 0 || type == 0 ? 
                                                                    <div className="w-full">
                                                                        <label className="text-sm" htmlFor="currency">Products</label>
                                                                        <Select className="text-sm" placeholder="Please Select Products" options={productData} onChange={(e: any) => { setProduct(e) }} isMulti isSearchable={true}  />
                                                                    </div>
                                                                :
                                                                null
                                                                }
                                                            </div>
                                                            <div className="w-full">
                                                                {type?.value == 0 || type == 0 ? 
                                                                    <div className="w-full">
                                                                        <label htmlFor="number" className="text-sm mb-1">
                                                                            Button Title - Ar
                                                                        </label>
                                                                        <input id="number" type="text" name="inv-num" className="text-sm form-input w-6/6" placeholder="Button title arabic" />
                                                                    </div>
                                                                :
                                                                null
                                                                }
                                                            </div>
                                                            
                                                        </div>
                                                        <div className="flex items-center justify-between gap-3 mb-2">
                                                            <div className="w-full">
                                                                {type?.value == 1 || type == 1 ? 
                                                                    <div className="w-full">
                                                                        <label className="text-sm" htmlFor="currency">Brand</label>
                                                                        <Select className="text-sm" placeholder="Please Select Brand" options={brandData} onChange={(e: any) => { setBrand(e) }} isMulti isSearchable={true} />
                                                                    </div>
                                                                :
                                                                null
                                                                }
                                                            </div>
                                                            <div className="w-full">
                                                                {type?.value == 1 || type == 1 ? 
                                                                    <div className="w-full">
                                                                        <label htmlFor="number" className="text-sm mb-1">
                                                                            Button Title - Ar
                                                                        </label>
                                                                        <input id="number" type="text" name="inv-num" className="text-sm form-input w-6/6" placeholder="Button title arabic" />
                                                                    </div>
                                                                :
                                                                null
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between gap-3 mb-3">
                                                            <div className="w-full">
                                                                {type?.value == 2 || type == 2 ? 
                                                                    <div className="w-full">
                                                                        <label className="text-sm" htmlFor="currency">Product Categories</label>
                                                                        <Select className="text-sm" placeholder="Please Select Categories" options={categoryData} onChange={(e: any) => { setCategory(e) }}  isMulti isSearchable={true}  />
                                                                    </div>
                                                                :
                                                                null
                                                                }
                                                            </div>
                                                            <div className="w-full">
                                                                {type?.value == 2 || type == 2 ? 
                                                                    <div className="w-full">
                                                                        <label htmlFor="number" className="text-sm mb-1">
                                                                            Button Title - Ar
                                                                        </label>
                                                                        <input id="number" type="text" name="inv-num" className="text-sm form-input w-6/6" placeholder="Button title arabic" />
                                                                    </div>
                                                                :
                                                                null
                                                                }
                                                            </div>
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
                                title: 'Offer Name - En',
                                sortable: true,
                                render: ({ name }: any) => <div className="font-semibold">{name}</div>,
                            },
                            {
                                accessor: 'arabicname',
                                title: 'Offer Name - Ar',
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
                                accessor: 'viewtype',
                                title: 'View Type',
                                sortable: true,
                                render: ({ viewtype }: any) => <div className="font-semibold">{viewtype}</div>,
                            },
                            {
                                accessor: 'position',
                                title: 'Position',
                                sortable: true,
                                render: ({ position }: any) => <div className="font-semibold">{position}</div>,
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

export default Offers;
