import sortBy from 'lodash/sortBy';
import { useDispatch } from 'react-redux';
import { useEffect, useState, Fragment } from 'react';
import { setPageTitle } from '../store/themeConfigSlice';
import Swal from 'sweetalert2';
import { Dialog, Transition, Tab } from '@headlessui/react';
import Tippy from '@tippyjs/react';
import { get, post } from "../pages/api/ApiCalls";
import 'tippy.js/dist/tippy.css';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { List } from 'lodash';
import { t } from 'i18next';

const ImageSelectionModal = (props: any) => {
    const dispatch = useDispatch();

    const rowData: List<any> | null | undefined = [];
    const [search, setSearch] = useState('');
    const [Success, setSuccess] = useState(false);
    const [SuccessMsg, setSuccessMsg] = useState('');
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [15, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'id'));
    const [recordsData, setRecordsData] = useState(initialRecords);
    const [selectedRecords, setSelectedRecords] = useState<any>([]);
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });
    const [MediaData, setMediaData] = useState<any>([]);
    const [Id, setId] = useState<any>('');
    const [MediaImages, setMediaImages] = useState<any>([]);
    const [Image, setImage] = useState<any>('');
    
    const coloredToast = (color: any, message: any) => {
        const toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
            customClass: {
                popup: `color-${color}`,
            },
        });
        toast.fire({
            title: message,
        });
    };

    useEffect(() => {
        getMedia()
        setId(false)
        setImage(false)
    }, [props]);

    const getMedia = () => {
        if(MediaData.length == 0) {
            get('media').then((responseJson: any) => {
                setInitialRecords(responseJson.data)
                setMediaData(responseJson.data)
            })
        }   
    }

    useEffect(() => {
        var filterData = MediaData.filter((item: any) => {
            return (
              item.title?.toString().toLowerCase().includes(search.toLowerCase()) ||
              item.title_arabic?.toString().toLowerCase().includes(search.toLowerCase()) ||
              item.alt?.toString().toLowerCase().includes(search.toLowerCase()) ||
              item.alt_arabic?.toString().toLowerCase().includes(search.toLowerCase())
            );
        });
        setInitialRecords(filterData);
    }, [search]);

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
    }, [sortStatus])

    const selectedDataStore = () => {
        if(Id != false) {
                props.onSelect(Id, Image)
                props.setModal(false)
        }   else {
            coloredToast('danger', 'Error! Please Select Image First successfully')
        }
    }

    const copyToClipboard = (e:any) => {
        navigator.clipboard.writeText(e)
        coloredToast('success', 'Success! Image Url copied successfully')
        setTimeout(() => {
            setSuccess(false)
            setSuccessMsg('')
        }, 3000);
    }

    return (
        <Transition appear show={props.modal} as={Fragment}>
                <Dialog as="div" open={props.modal} onClose={props.setModal} className="w-full">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div className="fixed inset-0 bg-[black]/60 z-[999]">
                        <div className="flex items-start justify-center min-h-screen max-w-full px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="panel border-0 p-0 rounded-lg w-full max-w-5xl my-8 text-black dark:text-white-dark">
                                    <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                        <h5 className="font-bold text-lg">Select Image</h5>
                                        <button onClick={props.setModal} type="button" className="text-white-dark hover:text-dark">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <div className="md:items-center md:flex-row flex-col gap-5">
                                            <div className="flex items-center gap-2 pb-5">
                                                <button type="button" className="btn btn-primary" onClick={() => selectedDataStore()}>
                                                    Select
                                                </button>
                                                <div className="ltr:ml-auto rtl:mr-auto">
                                                    <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e: any) => setSearch(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overflow-auto h-96 datatables">
                                            <DataTable
                                                noRecordsText="No results match your search query"
                                                highlightOnHover
                                                className="whitespace-nowrap table-hover"
                                                records={recordsData}
                                                columns={[
                                                    {
                                                        accessor: 'selected',
                                                        title: '',
                                                        sortable: false,
                                                        render: ({ id, file_url }) => 
                                                        <input type="checkbox" className="form-checkbox" checked={Id == id ? true : false} onClick={(e:any) => {
                                                            setId(e.target.checked == true ? id : false)
                                                            setImage(e.target.checked == true ? file_url : false)
                                                        }} />,
                                                    },
                                                    {
                                                        accessor: 'id',
                                                        title: 'S.No',
                                                        sortable: false,
                                                        render: ({ id }) => <strong className="text-info">{id}</strong>,
                                                    },
                                                    {
                                                        accessor: 'Image',
                                                        sortable: false,
                                                        cellsClassName: 'w-28 h-10',
                                                        render: ({ file_url }) => <img src={file_url + 'h=100'} />,
                                                    },
                                                    {
                                                        accessor: 'File Url',
                                                        sortable: false,
                                                        render: ({ file_url }) => (
                                                            <button type="button" className="btn btn-primary p-2" onClick={() => {
                                                                copyToClipboard(file_url + 'h=200')
                                                            }}>
                                                                Copy Link
                                                            </button>
                                                        ),
                                                    },
                                                    {
                                                        accessor: 'Image Title',
                                                        sortable: false,
                                                        render: ({ title }) => <div>{title}</div>,
                                                    },
                                                    {
                                                        accessor: 'Alt Text',
                                                        sortable: false,
                                                        render: ({ alt }) => <div>{alt}</div>,
                                                    },
                                                    {
                                                        accessor: 'Device',
                                                        sortable: false,
                                                        render: ({ desktop, mobile }) => 
                                                        <div>
                                                            {
                                                            desktop == 1 ? 'Desktop' : null
                                                            }
                                                            { desktop == 1 && mobile == 1 ? ', ' : null}
                                                            {
                                                                mobile == 1 ? 'Mobile' : null
                                                            }
                                                        </div>,
                                                    },
                                                    {
                                                        accessor: 'Details',
                                                        sortable: false,
                                                        render: ({ details }) => <div>{details}</div>,
                                                    }
                                                ]}
                                                totalRecords={initialRecords.length}
                                                recordsPerPage={pageSize}
                                                page={page}
                                                onPageChange={(p) => setPage(p)}
                                                recordsPerPageOptions={PAGE_SIZES}
                                                onRecordsPerPageChange={setPageSize}
                                                // selectedRecords={selectedRecords}
                                                // onSelectedRecordsChange={setSelectedRecords}
                                                minHeight={200}
                                                paginationText={({ from, to, totalRecords }) => `${t("showing")}  ${from} ${t("to")} ${to} ${t("of")} ${totalRecords} ${t("entries")}`}
                                            />
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
        </Transition>
    );
};

export default ImageSelectionModal;
