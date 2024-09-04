import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
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
import IconMenuApps from '../../components/Icon/Menu/IconMenuApps';
import { t } from 'i18next';

const BrandSpotlight = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Advanced Table'));
    });

    const rowData = [
        {
            id: 1,
            brand: 'Samsung',
            name: 'Get access devices and services',
            arabicname: 'احصل على أجهزة الوصول والخدمات',
            type: 'Product',
            position: 'First',
            status: 'Disable',
        },
    ];

    useEffect(() => {
        dispatch(setPageTitle('Brand Spotlight Listing'));
    });
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [15, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'id'));
    const [recordsData, setRecordsData] = useState(initialRecords);
    const [selectedRecords, setSelectedRecords] = useState<any>([]);
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });

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
                <div className="mb-4.5 flex md:items-center md:flex-row flex-col gap-5">
                    <div className="flex items-center gap-2">
                        <button type="button" className="btn btn-danger gap-2" onClick={() => showAlert(11)}>
                            <IconTrashLines />
                        </button>
                        <Link to="/discountrules/newrule" className="btn btn-primary gap-2">
                            <IconPlus />
                            Create Brand Spotlight
                        </Link>
                    </div>
                    <div className="flex gap-2 items-center ltr:ml-auto rtl:mr-auto">
                        {/* <button type="button" className="btn btn-secondary gap-2" onClick={() => showAlert(11)}>
                            <IconMenuApps className='shrink-0' />
                        </button> */}
                        <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e: any) => setSearch(e.target.value)} />
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
                                render: ({ id }: any ) => <strong className="text-info">{id}</strong>,
                            },
                            {
                                accessor: 'brand',
                                title: 'Brand',
                                sortable: true,
                                render: ({ brand }: any) => <div className="font-semibold">{brand}</div>,
                            },
                            {
                                accessor: 'name',
                                title: 'BS Name - En',
                                sortable: true,
                                render: ({ name }: any) => <div className="font-semibold">{name}</div>,
                            },
                            {
                                accessor: 'arabicname',
                                title: 'BS Name - Ar',
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
                                accessor: 'status',
                                title: 'Status',
                                sortable: true,
                                render: ({ status, id }: any) => <div className={`font-semibold ${id === 1 ? 'text-success' : 'text-danger'}`}>{status}</div>,
                            },
                            {
                                accessor: 'position',
                                title: 'Position',
                                sortable: true,
                                render: ({ position }: any) => <div className="font-semibold">{position}</div>,
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

export default BrandSpotlight;
