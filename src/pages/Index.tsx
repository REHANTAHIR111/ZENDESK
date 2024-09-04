import { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../store';
import ReactApexChart from 'react-apexcharts';
import { setPageTitle } from '../store/themeConfigSlice';
import IconShoppingCart from '../components/Icon/IconShoppingCart';
import IconEye from '../components/Icon/IconEye';
import IconCalendar from '../components/Icon/IconCalendar';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import { get, fetchData } from "./api/ApiCalls";
import { useNavigate } from 'react-router-dom';
import { Dialog, Transition, Tab } from '@headlessui/react';
import Select from 'react-select';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

const Index = (props: any) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [StatusData, setStatusData] = useState<any>([]);
    const [OrderCount, setOrderCount] = useState<any>(0);
    const [OrderPrice, setOrderPrice] = useState<any>(0);
    const [pendingChart, setpendingChart] = useState<any>([])
    const [allorderChart, setallorderChart] = useState<any>([])
    const [paymentmethodChart, setpaymentmethodChart] = useState<any>([])
    const [cityChart, setcityChart] = useState<any>([])
    const [overChartData, setoverChartData] = useState<any>([])
    const [pendingRevenue, setpendingRevenue] = useState<any>([])
    const [highestPending, sethighestPending] = useState<any>(0)
    const [salesRevenue, setsalesRevenue] = useState<any>([])
    const [highestSale, sethighestSale] = useState<any>(0)
    const [tabbyData, settabbyData] = useState([])
    const [tabbySale, settabbySale] = useState(0)
    const [tamaraData, settamaraData] = useState<any>([])
    const [tamaraSale, settamaraSale] = useState<any>(0)
    const [hyperpayData, sethyperpayData] = useState<any>([])
    const [hyperpaySale, sethyperpaySale] = useState<any>(0)
    const [applepayData, setapplepayData] = useState<any>([])
    const [applepaySale, setapplepaySale] = useState<any>(0)
    const [madapayData, setmadapayData] = useState<any>([])
    const [madapaySale, setmadapaySale] = useState<any>(0)
    const [tasheelData, settasheelData] = useState<any>([])
    const [tasheelSale, settasheelSale] = useState<any>(0)
    const [loader, setloader] = useState<any>(false)
    const [permissionsData, setpermissionsData] = useState<any>([])
    const [modal8, setModal8] = useState<any>(false);
    const [to_date, setto_date] = useState<any>('');
    const [from_date, setfrom_date] = useState<any>('');
    const [LoadingCalc, setLoadingCalc] = useState<any>(false);
    const [SelectedProduct, setSelectedProduct] = useState<any>([]);
    const [SelectedBrand, setSelectedBrand] = useState<any>([]);
    const [SelectedCat, setSelectedCat] = useState<any>([]);
    const [SelectedPaymentMethod, setSelectedPaymentMethod] = useState<any>([]);
    const [type, settype] = useState<any>('');
    const [ProductData, setProductData] = useState([]);
    const [product, setProduct] = useState<any>('');
    const [BrandData, setBrandData] = useState([]);
    const [brand, setBrand] = useState<any>('');
    const [CategoryData, setCategoryData] = useState([]);
    const [category, setCategory] = useState<any>('');
    const [BtnLoader, setBtnLoader] = useState<any>(true);

    // Market Place
    const [amazonSale, setamazonSale] = useState<any>(0)
    const [carefourSale, setcarefourSale] = useState<any>(0)
    const [homzmartSale, sethomzmartSale] = useState<any>(0)
    const [noonSale, setnoonSale] = useState<any>(0)
    const [centerpointSale, setcenterpointSale] = useState<any>(0)
    const [marketAll, setmarketAll] = useState<any>(0)

    const [topBrandsData, settopBrandsData] = useState<any>([])
    const [topBrandsNameData, settopBrandsNameData] = useState<any>([])
    const [topCatsData, settopCatsData] = useState<any>([])
    const [topCatsNameData, settopCatsNameData] = useState<any>([])
    const [topCitiesData, settopCitiesData] = useState<any>([])
    const [topCitiesNameData, settopCitiesNameData] = useState<any>([])

    const [totalOrderData, settotalOrderData] = useState<any>([])
    const [allDatesData, setallDatesData] = useState<any>([])
    const [totalReceivedData, settotalReceivedData] = useState<any>([])

    const [hyperpayQty, sethyperpayQty] = useState<any>(0)
    const [applepayQty, setapplepayQty] = useState<any>(0)
    const [madapayQty, setmadapayQty] = useState<any>(0)
    const [tasheelQty, settasheelQty] = useState<any>(0)
    const [tabbyQty, settabbyQty] = useState<any>(0)
    const [tamaraQty, settamaraQty] = useState<any>(0)

    const [pMethodOrders, setpMethodOrders] = useState<any>([])
    const [pMethodNames, setpMethodNames] = useState<any>([])
    const { t } = useTranslation();


    const selectType = [
        { value: '1', label: 'Products' },
        { value: '2', label: 'Brands' },
        { value: '3', label: 'Product Categories' },
        { value: '4', label: 'Payment Methods' },
    ];

    const Paymentmethods = [
        { value: 'tamara', label: 'Tamara' },
        { value: 'hyperpay', label: 'Hyperpay' },
        { value: 'tabby', label: 'Tabby' },
        { value: 'applepay', label: 'Applepay' },
        { value: 'madapay', label: 'Madapay' },
        { value: 'cod', label: 'COD' },
    ];

    const getAdditionalData = () => {
        get('door_step_delivery/create').then((responseJson: any) => {
            var data = responseJson.data
            setProductData(data.products)
            setBrandData(data.brands)
            setCategoryData(data.category)
        })
    }

    const [current, setCurrent] = useState(format(new Date(), 'yyyy-MM-dd'))
    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }
    useEffect(() => {
        dispatch(setPageTitle('Sales Dashboard'));
        var startdate = format(new Date(), 'yyyy-MM-dd')
        var enddate = format(new Date(), 'yyyy-MM-dd')
        getData(startdate + ' 00:00:00', enddate + ' 23:59:59')
        if (localStorage.getItem("permissions") != 'undefined' && localStorage.getItem("permissions") != null) {
            var permisssion = JSON?.parse(localStorage.getItem("permissions") || '{}')
            if (permisssion && permisssion?.length >= 1) {
                setpermissionsData(permisssion)
                if (permisssion?.filter((item: { module: { code: string; }; view: number; }) => item?.module?.code == "sales" && item?.view === 1).length <= 0) {
                    navigate(-1)
                }
            }
        } else {
            navigate('/admin/signin')
        }
    }, [props]);

    let totalAmountRecievedBox = 0;
    StatusData?.forEach((item: any, index: any) => {
        if (item.status == 0 || item.status == 1 || item.status == 2 || item.status == 3 || item.status == 4) {
            totalAmountRecievedBox += item?.totalamount; // Accumulate the totalAmountRecievedBox
        }
    });

    let totalOrderRecievedBox = 0;
    StatusData?.forEach((item: any, index: any) => {
        if (item.status == 0 || item.status == 1 || item.status == 2 || item.status == 3 || item.status == 4) {
            totalOrderRecievedBox += item?.totalorder; // Accumulate the totalAmountRecievedBox
        }
    });

    const getData = (start: string, end: string) => {
        // setDatePanel(false)
        setloader(true)
        get('sales-report/' + start + '_' + end).then((responseJson: any) => {
            setStatusData(responseJson?.data)
            setOrderCount(responseJson?.orderCount)
            setOrderPrice(responseJson?.orderPrice)
            setpendingChart(responseJson?.pendingChart)
            setallorderChart(responseJson?.allorderChart)
            setpaymentmethodChart(responseJson?.paymentmethod)
            setcityChart(responseJson?.cityChart)

            // market place
            setamazonSale(responseJson?.amazonesale.toLocaleString('EN-US'))
            setcarefourSale(responseJson?.carefoursale.toLocaleString('EN-US'))
            sethomzmartSale(responseJson?.homzmartsale.toLocaleString('EN-US'))
            setnoonSale(responseJson?.noonsale.toLocaleString('EN-US'))
            setcenterpointSale(responseJson?.centerpointsale.toLocaleString('EN-US'))
            setmarketAll(responseJson?.amazonesale + responseJson?.carefoursale + responseJson?.homzmartsale + responseJson?.noonsale + responseJson?.centerpointsale)

            let tOrderRecievedBox = 0;
            responseJson?.data?.forEach((item: any, index: any) => {
                if (item.status == 0 || item.status == 1 || item.status == 2 || item.status == 3 || item.status == 4) {
                    tOrderRecievedBox += item?.totalorder; // Accumulate the totalAmountRecievedBox
                }
            });

            // Overview chart
            var odata: any = []
            odata.push(responseJson?.orderCount)
            odata.push(tOrderRecievedBox)
            odata.push(responseJson?.data?.filter((item: { status: number; }) => item?.status == 4).length ? responseJson?.data?.filter((item: { status: number; }) => item?.status == 4)[0]?.totalorder : 0)
            odata.push(responseJson?.data?.filter((item: { status: number; }) => item?.status == 8).length ? responseJson?.data?.filter((item: { status: number; }) => item?.status == 8)[0]?.totalorder : 0)
            setoverChartData(odata)

            // pendingchart
            var pdata: any = []
            for (let index = 0; index < 12; index++) {
                var check = responseJson?.pendingChart?.filter((item: { ordermonth: number; }) => item?.ordermonth == index + 1)
                if (check?.length >= 1) {
                    pdata.push(check[0]?.totalamount)
                } else {
                    pdata.push(0)
                }
            }
            setpendingRevenue(pdata)
            let max = 0;
            var highestPending = ""
            for (let char in pdata) {
                if (pdata[char] > max) {
                    max = pdata[char];
                    highestPending = char
                }
            }
            sethighestPending(highestPending)

            // saleschart
            var sdata: any = []
            for (let index = 0; index < 12; index++) {
                var check = responseJson?.allorderChart?.filter((item: { ordermonth: number; }) => item?.ordermonth == index + 1)
                if (check?.length >= 1) {
                    sdata.push(check[0]?.totalamount)
                } else {
                    sdata.push(0)
                }
            }
            setsalesRevenue(sdata)
            let smax = 0;
            var highestsale = ""
            for (let char in sdata) {
                if (sdata[char] > smax) {
                    smax = sdata[char];
                    highestsale = char
                }
            }
            sethighestSale(highestsale)
            // tabbybox
            var tdata: any = []
            Object.entries(responseJson?.paymentmethod?.tabbychart).forEach((element: any) => {
                tdata.push(element[1]?.totalamount)
                settabbyQty(element[1]?.torder)
            });
            settabbyData(tdata)
            settabbySale(responseJson?.paymentmethod?.tabbysaale.toLocaleString('EN-US'))

            // tamarabox
            var tdata: any = []
            Object.entries(responseJson?.paymentmethod?.tamarachart).forEach((element: any) => {
                tdata.push(element[1]?.totalamount)
                settamaraQty(element[1]?.torder)
            });
            settamaraData(tdata)
            settamaraSale(responseJson?.paymentmethod?.tamarasaale.toLocaleString('EN-US'))

            // hyperpaybox
            var tdata: any = []
            Object.entries(responseJson?.paymentmethod?.hyperpaychart).forEach((element: any) => {
                tdata.push(element[1]?.totalamount)
                sethyperpayQty(element[1]?.torder)
            });
            sethyperpayData(tdata)
            sethyperpaySale(responseJson?.paymentmethod?.hyperpaysaale.toLocaleString('EN-US'))

            // applepaybox
            var tdata: any = []
            Object.entries(responseJson?.paymentmethod?.applepaychart).forEach((element: any) => {
                tdata.push(element[1]?.totalamount)
                setapplepayQty(element[1]?.torder)
            });
            setapplepayData(tdata)
            setapplepaySale(responseJson?.paymentmethod?.applepaysaale.toLocaleString('EN-US'))

            // madapaybox
            var tdata: any = []
            Object.entries(responseJson?.paymentmethod?.madapaychart).forEach((element: any) => {
                tdata.push(element[1]?.totalamount)
                setmadapayQty(element[1]?.torder)
            });
            setmadapayData(tdata)
            setmadapaySale(responseJson?.paymentmethod?.madapaysaale.toLocaleString('EN-US'))

            // tasheelbox
            var tdata: any = []
            Object.entries(responseJson?.paymentmethod?.tasheelchart).forEach((element: any) => {
                tdata.push(element[1]?.totalamount)
                settasheelQty(element[1]?.torder)
            });
            settasheelData(tdata)
            settasheelSale(responseJson?.paymentmethod?.tasheelsaale.toLocaleString('EN-US'))

            // topsellingbrands
            var tbrandsdata: any = []
            Object.entries(responseJson?.sellingbrand).forEach((element: any) => {
                tbrandsdata.push(element[1]?.selling_qty)
            });
            settopBrandsData(tbrandsdata)

            // topsellingbrandsnames
            var tbrandsnames: any = []
            Object.entries(responseJson?.sellingbrand).forEach((element: any) => {
                tbrandsnames.push(element[1]?.selling_name + ' [' + element[1]?.selling_qty + ']')
            });
            settopBrandsNameData(tbrandsnames)

            // topsellingcats
            var tcatsdata: any = []
            Object.entries(responseJson?.sellingcategory).forEach((element: any) => {
                tcatsdata.push(element[1]?.selling_qty)
            });
            settopCatsData(tcatsdata)

            // topsellingcatssnames
            var tcatssnames: any = []
            Object.entries(responseJson?.sellingcategory).forEach((element: any) => {
                tcatssnames.push(element[1]?.selling_cat + ' [' + element[1]?.selling_qty + ']')
            });
            settopCatsNameData(tcatssnames)

            // topsellingcities
            var tcitiesdata: any = []
            Object.entries(responseJson?.TopcityChart).forEach((element: any) => {
                tcitiesdata.push(element[1]?.totalqty)
            });
            settopCitiesData(tcitiesdata)

            // topsellingcitiessnames
            var tcitiessnames: any = []
            Object.entries(responseJson?.TopcityChart).forEach((element: any) => {
                tcitiessnames.push(element[1]?.city + ' [' + element[1]?.totalqty + ']')
            });
            settopCitiesNameData(tcitiessnames)

            // alldates data
            var allDates: any = []
            Object.entries(responseJson?.totalorderchart).forEach((element: any) => {
                allDates.push(element[1]?.date + ' GMT')
            });
            setallDatesData(allDates)

            // totalorders data
            var totalOrders: any = []
            Object.entries(responseJson?.totalorderchart).forEach((element: any) => {
                totalOrders.push(element[1]?.totalorder)
            });
            settotalOrderData(totalOrders)

            // recievedorders data
            var receivedOrders: any = []
            Object.entries(responseJson?.receivedorderchart).forEach((element: any) => {
                receivedOrders.push(element[1]?.totalorder)
            });
            settotalReceivedData(receivedOrders)

            // pmethodOrders data
            var pmethodOrders: any = []
            Object.entries(responseJson?.paymentmethodChart).forEach((element: any) => {
                pmethodOrders.push(element[1]?.torder)
            });
            setpMethodOrders(pmethodOrders)

            // pmethodNames data
            var pmethodNames: any = []
            Object.entries(responseJson?.paymentmethodChart).forEach((element: any) => {
                pmethodNames.push(element[1]?.paymentmethod + ' [' + element[1]?.torder + ']')
            });
            setpMethodNames(pmethodNames)

            setloader(false)
        })
    }

    const [datePanel, setDatePanel] = useState<Boolean>(false)
    const [dateData, setDateData] = useState<any>(selectionRange)
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const [dateOneShow, setDateOneShow] = useState<any>(format(new Date(), 'yyyy-MM-dd'))
    const [dateTwoShow, setDateTwoShow] = useState<any>(format(new Date(), 'yyyy-MM-dd'))
    const [year, setyear] = useState<any>(format(new Date(), 'yyyy'))
    const [loading] = useState(false);
    const handleSelect = (ranges: any) => {
        const selectionRange = {
            startDate: ranges.selection.startDate,
            endDate: ranges.selection.endDate,
            key: 'selection',
        }
        let dateOne = format(ranges.selection.startDate, 'yyyy-MM-dd');
        let dateTwo = format(ranges.selection.endDate, 'yyyy-MM-dd');

        let showdateOne = format(ranges.selection.startDate, 'yyyy-MM-dd');
        let showdateTwo = format(ranges.selection.endDate, 'yyyy-MM-dd');

        let finalyear = format(ranges.selection.endDate, 'yyyy');
        setDateData(selectionRange)
        setDateOneShow(showdateOne)
        setDateTwoShow(showdateTwo)
        setyear(finalyear)
        // if (dateOne && dateTwo) {
        // getData(dateOne + ' 00:00:00', dateTwo + ' 23:59:59')
        // }
    }

    const exportCitiesXlsxFun = () => {
        var data = {}
        fetchData('sales-cities-xlsx/' + year, data).then((responseJson: any) => {
            const url = window.URL.createObjectURL(responseJson);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            // the filename you want
            a.download = 'sales-cities.xlsx';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
    }

    //Revenue Chart
    const revenueChart: any = {
        series: [
            {
                name: t('sales'),
                data: salesRevenue,
            },
            {
                name: t('pendingOrders'),
                data: pendingRevenue,
            },
        ],
        options: {
            chart: {
                height: 325,
                type: 'area',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },

            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                curve: 'smooth',
                width: 2,
                lineCap: 'square',
            },
            dropShadow: {
                enabled: true,
                opacity: 0.2,
                blur: 10,
                left: -7,
                top: 22,
            },
            colors: isDark ? ['#2196F3', '#E7515A'] : ['#1B55E2', '#E7515A'],
            markers: {
                discrete: [
                    {
                        seriesIndex: 0,
                        dataPointIndex: parseInt(highestSale),
                        fillColor: '#1B55E2',
                        strokeColor: 'transparent',
                        size: 7,
                    },
                    {
                        seriesIndex: 1,
                        dataPointIndex: parseInt(highestPending),
                        fillColor: '#E7515A',
                        strokeColor: 'transparent',
                        size: 7,
                    },
                ],
            },
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            xaxis: {
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                crosshairs: {
                    show: true,
                },
                labels: {
                    offsetX: isRtl ? 2 : 0,
                    offsetY: 5,
                    style: {
                        fontSize: '12px',
                        cssClass: 'apexcharts-xaxis-title',
                    },
                },
            },
            yaxis: {
                tickAmount: 7,
                labels: {
                    formatter: (value: number) => {
                        return value / 1000 + 'K';
                    },
                    offsetX: isRtl ? -30 : -10,
                    offsetY: 0,
                    style: {
                        fontSize: '12px',
                        cssClass: 'apexcharts-yaxis-title',
                    },
                },
                opposite: isRtl ? true : false,
            },
            grid: {
                borderColor: isDark ? '#191E3A' : '#E0E6ED',
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                fontSize: '16px',
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -2,
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 5,
                },
            },
            tooltip: {
                marker: {
                    show: true,
                },
                x: {
                    show: false,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: isDark ? 0.19 : 0.28,
                    opacityTo: 0.05,
                    stops: isDark ? [100, 100] : [45, 100],
                },
            },
        },
    };

    //Orders Data Graph
    const salesByCategory: any = {
        // series: [23736, 46, 22817, 5847],
        options: {
            chart: {
                type: 'donut',
                height: 500,
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 8,
                colors: isDark ? '#0e1726' : '#fff',
            },
            colors: isDark ? ['#00243c', '#00ab55', '#e2a03f', '#f0660c'] : ['#e2a03f', '#00ab55', '#00243c', '#f0660c'],
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '14px',
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -2,
                },
                height: 24,
                offsetY: 10,
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '80%',
                        background: 'transparent',
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '24px',
                                offsetY: -10,
                            },
                            value: {
                                show: true,
                                fontSize: '26px',
                                fontWeight: 800,
                                color: isDark ? '#bfc9d4' : undefined,
                                offsetY: 2,
                                formatter: (val: any) => {
                                    return val;
                                },
                            },
                            total: {
                                show: true,
                                label: t('total'),
                                color: '#888ea8',
                                fontSize: '18px',
                                formatter: (w: any) => {
                                    return w.globals.seriesTotals.reduce(function (a: any, b: any) {
                                        return a + b;
                                    }, 0);
                                },
                            },
                        },
                    },
                },
            },
            labels: [t('total'), t('received'), t('delivered'), t('pending')],
            states: {
                hover: {
                    filter: {
                        type: 'none',
                        value: 0.15,
                    },
                },
                active: {
                    filter: {
                        type: 'none',
                        value: 0.15,
                    },
                },
            },
        },
    };

    //Total Orders
    const totalOrdersTabby: any = {
        series: [
            {
                name: t('sales'),
                data: tabbyData,
            },
        ],
        options: {
            chart: {
                height: 290,
                type: 'area',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: isDark ? ['#00243c'] : ['#00243c'],
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            yaxis: {
                min: 0,
                show: false,
            },
            grid: {
                padding: {
                    top: 95,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            fill: {
                opacity: 1,
                type: 'gradient',
                gradient: {
                    type: 'vertical',
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: 0.3,
                    opacityTo: 0.05,
                    stops: [100, 100],
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
            },
        },
    };

    const totalOrdersTamara: any = {
        series: [
            {
                name: 'Sales',
                data: tamaraData,
            },
        ],
        options: {
            chart: {
                height: 290,
                type: 'area',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: isDark ? ['#f0660c'] : ['#f0660c'],
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            yaxis: {
                min: 0,
                show: false,
            },
            grid: {
                padding: {
                    top: 95,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            fill: {
                opacity: 1,
                type: 'gradient',
                gradient: {
                    type: 'vertical',
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: 0.3,
                    opacityTo: 0.05,
                    stops: [100, 100],
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
            },
        },
    };

    const totalOrdersDebit: any = {
        series: [
            {
                name: 'Sales',
                data: hyperpayData,
            },
        ],
        options: {
            chart: {
                height: 290,
                type: 'area',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: isDark ? ['#00ab55'] : ['#00ab55'],
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            yaxis: {
                min: 0,
                show: false,
            },
            grid: {
                padding: {
                    top: 95,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            fill: {
                opacity: 1,
                type: 'gradient',
                gradient: {
                    type: 'vertical',
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: 0.3,
                    opacityTo: 0.05,
                    stops: [100, 100],
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
            },
        },
    };

    const totalOrdersApple: any = {
        series: [
            {
                name: 'Sales',
                data: applepayData,
            },
        ],
        options: {
            chart: {
                height: 290,
                type: 'area',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: isDark ? ['#000000'] : ['#000000'],
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            yaxis: {
                min: 0,
                show: false,
            },
            grid: {
                padding: {
                    top: 95,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            fill: {
                opacity: 1,
                type: 'gradient',
                gradient: {
                    type: 'vertical',
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: 0.3,
                    opacityTo: 0.05,
                    stops: [100, 100],
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
            },
        },
    };

    const totalOrdersMada: any = {
        series: [
            {
                name: 'Sales',
                data: madapayData,
            },
        ],
        options: {
            chart: {
                height: 290,
                type: 'area',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: isDark ? ['#00a1df'] : ['#00a1df'],
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            yaxis: {
                min: 0,
                show: false,
            },
            grid: {
                padding: {
                    top: 95,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            fill: {
                opacity: 1,
                type: 'gradient',
                gradient: {
                    type: 'vertical',
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: 0.3,
                    opacityTo: 0.05,
                    stops: [100, 100],
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
            },
        },
    };

    const totalOrdersTasheel: any = {
        series: [
            {
                name: 'Sales',
                data: tasheelData,
            },
        ],
        options: {
            chart: {
                height: 290,
                type: 'area',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: isDark ? ['#b224ef'] : ['#b224ef'],
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            yaxis: {
                min: 0,
                show: false,
            },
            grid: {
                padding: {
                    top: 95,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            fill: {
                opacity: 1,
                type: 'gradient',
                gradient: {
                    type: 'vertical',
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: 0.3,
                    opacityTo: 0.05,
                    stops: [100, 100],
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
            },
        },
    };

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

    // sales report
    const getSalesReport = () => {
        setLoadingCalc(true)
        // products
        var filterproducts = []
        for (let index = 0; index < SelectedProduct.length; index++) {
            const element: any = SelectedProduct[index];
            filterproducts.push(element.value)
        }

        // brands
        var filterbrands = []
        for (let index = 0; index < SelectedBrand.length; index++) {
            const element: any = SelectedBrand[index];
            filterbrands.push(element.value)
        }

        // category
        var filtercategory = []
        for (let index = 0; index < SelectedCat.length; index++) {
            const element: any = SelectedCat[index];
            filtercategory.push(element.value)
        }

        // pmethod
        var filterpmethod = []
        for (let index = 0; index < SelectedPaymentMethod.length; index++) {
            const element: any = SelectedPaymentMethod[index];
            filterpmethod.push(element.value)
        }

        var data = {
            to_date: to_date,
            from_date: from_date,
            products: filterproducts,
            brands: filterbrands,
            categories: filtercategory,
            pmethod: filterpmethod
        }

        if (!to_date || !from_date || !type) {
            coloredToast('danger', 'Error! Please select ' + (!to_date ? 'To Date, ' : '') + (!from_date ? 'From Date, ' : '') + (!type ? 'Type, ' : '') + '!')
            return false
        }

        if (type?.value == 1) {
            fetchData('sales-report-export-product', data).then((responseJson: any) => {
                const url = window.URL.createObjectURL(responseJson);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                // the filename you want
                a.download = 'sales-report-product.csv';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);

                setModal8(false)
                setto_date('')
                setfrom_date('')
                setSelectedProduct([])
                setLoadingCalc(false)
                setBtnLoader(true)
                settype('')
            })
        }

        if (type?.value == 2) {
            fetchData('sales-report-export-brand', data).then((responseJson: any) => {
                const url = window.URL.createObjectURL(responseJson);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                // the filename you want
                a.download = 'sales-report-brand.csv';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);

                setModal8(false)
                setto_date('')
                setfrom_date('')
                setSelectedBrand([])
                setLoadingCalc(false)
                setBtnLoader(true)
                settype('')
            })
        }

        if (type?.value == 3) {
            fetchData('sales-report-export-category', data).then((responseJson: any) => {
                const url = window.URL.createObjectURL(responseJson);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                // the filename you want
                a.download = 'sales-report-category.csv';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);

                setModal8(false)
                setto_date('')
                setfrom_date('')
                setSelectedCat([])
                setLoadingCalc(false)
                setBtnLoader(true)
                settype('')
            })
        }

        if (type?.value == 4) {
            fetchData('sales-report-export-pmethod', data).then((responseJson: any) => {
                const url = window.URL.createObjectURL(responseJson);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                // the filename you want
                a.download = 'sales-report-payment-method.csv';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);

                setModal8(false)
                setto_date('')
                setfrom_date('')
                setSelectedPaymentMethod([])
                setLoadingCalc(false)
                setBtnLoader(true)
                settype('')
            })
        }
    }

    // simpleColumnStackedOptions
    const simpleColumnStacked: any = {
        series: [
            {
                name: t('totalNumberOfOrders'),
                data: totalOrderData,
                // data: [44, 55, 41, 67, 22, 43],
            },
            {
                name: t('totalReceivedOrders'),
                data: totalReceivedData,
                // data: [13, 23, 20, 8, 13, 27],
            },
        ],
        options: {
            chart: {
                height: 300,
                type: 'bar',
                stacked: true,
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['#2196f3', '#3b3f5c'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 5,
                        },
                    },
                },
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                },
            },
            xaxis: {
                type: 'datetime',
                categories: allDatesData,
                // categories: ['05/09/2024 GMT', '05/10/2024 GMT', '05/11/2024 GMT', '05/12/2024 GMT', '05/13/2024 GMT', '05/14/2024 GMT'],
                axisBorder: {
                    color: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
            yaxis: {
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -20 : 0,
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
            },
            legend: {
                position: 'top',
                offsetY: 40,
            },
            tooltip: {
                theme: isDark ? 'dark' : 'light',
            },
            fill: {
                opacity: 0.8,
            },
        },
    };

    // uniqueBrandSeries
    const uniqueBrandSeries: any = {
        series: [
            {
                name: 'Sold Quantity',
                data: topBrandsData,
            },
        ],
        options: {
            chart: {
                height: 500,
                type: 'bar',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 2,
                colors: ['transparent'],
            },
            colors: ['#5c1ac3', '#ffbb44'],
            dropShadow: {
                enabled: true,
                blur: 3,
                color: '#515365',
                opacity: 0.4,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '45%',
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                },
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '8px',
                itemMargin: {
                    horizontal: 4,
                    vertical: 4,
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
                padding: {
                    left: 10,
                    right: 10,
                },
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
            },
            xaxis: {
                categories: topBrandsNameData,
                axisBorder: {
                    show: true,
                    color: isDark ? '#3b3f5c' : '#e0e6ed',
                },
            },
            yaxis: {
                tickAmount: 10,
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -10 : 0,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: isDark ? 'dark' : 'light',
                    type: 'vertical',
                    shadeIntensity: 0.3,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0.8,
                    stops: [0, 100],
                },
            },
            tooltip: {
                marker: {
                    show: true,
                },
            },
        },
    };

    // uniqueCategoriesSeries
    const uniqueCategoriesSeries: any = {
        series: [
            {
                name: 'Sold Quantity',
                data: topCatsData,
            },
        ],
        options: {
            chart: {
                height: 500,
                type: 'bar',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 2,
                colors: ['transparent'],
            },
            colors: ['#5c1ac3', '#ffbb44'],
            dropShadow: {
                enabled: true,
                blur: 3,
                color: '#515365',
                opacity: 0.4,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '45%',
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                },
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '8px',
                itemMargin: {
                    horizontal: 4,
                    vertical: 4,
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
                padding: {
                    left: 10,
                    right: 10,
                },
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
            },
            xaxis: {
                categories: topCatsNameData,
                axisBorder: {
                    show: true,
                    color: isDark ? '#3b3f5c' : '#e0e6ed',
                },
            },
            yaxis: {
                tickAmount: 10,
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -10 : 0,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: isDark ? 'dark' : 'light',
                    type: 'vertical',
                    shadeIntensity: 0.3,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0.8,
                    stops: [0, 100],
                },
            },
            tooltip: {
                marker: {
                    show: true,
                },
            },
        },
    };

    // uniqueCategoriesSeries
    const uniqueCitiesSeries: any = {
        series: [
            {
                name: 'Sold Quantity',
                data: topCitiesData,
            },
        ],
        options: {
            chart: {
                height: 500,
                type: 'bar',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 2,
                colors: ['transparent'],
            },
            colors: ['#5c1ac3', '#ffbb44'],
            dropShadow: {
                enabled: true,
                blur: 3,
                color: '#515365',
                opacity: 0.4,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '45%',
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                },
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '8px',
                itemMargin: {
                    horizontal: 4,
                    vertical: 4,
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
                padding: {
                    left: 10,
                    right: 10,
                },
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
            },
            xaxis: {
                categories: topCitiesNameData,
                axisBorder: {
                    show: true,
                    color: isDark ? '#3b3f5c' : '#e0e6ed',
                },
            },
            yaxis: {
                tickAmount: 10,
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -10 : 0,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: isDark ? 'dark' : 'light',
                    type: 'vertical',
                    shadeIntensity: 0.3,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0.8,
                    stops: [0, 100],
                },
            },
            tooltip: {
                marker: {
                    show: true,
                },
            },
        },
    };

    // uniquePmethodSeries
    const uniquePmethodsSeries: any = {
        series: [
            {
                name: t('totalOrders'),
                data: pMethodOrders,
            },
        ],
        options: {
            chart: {
                height: 500,
                type: 'bar',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 2,
                colors: ['transparent'],
            },
            colors: ['#5c1ac3', '#ffbb44'],
            dropShadow: {
                enabled: true,
                blur: 3,
                color: '#515365',
                opacity: 0.4,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '45%',
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                },
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '8px',
                itemMargin: {
                    horizontal: 4,
                    vertical: 4,
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
                padding: {
                    left: 10,
                    right: 10,
                },
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
            },
            xaxis: {
                categories: pMethodNames,
                axisBorder: {
                    show: true,
                    color: isDark ? '#3b3f5c' : '#e0e6ed',
                },
            },
            yaxis: {
                tickAmount: 10,
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -10 : 0,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: isDark ? 'dark' : 'light',
                    type: 'vertical',
                    shadeIntensity: 0.3,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0.8,
                    stops: [0, 100],
                },
            },
            tooltip: {
                marker: {
                    show: true,
                },
            },
        },
    };

    return (
        <div>
            <div className='panel py-2.5'>
                <div className='md:grid md:grid-cols-2 items-center justify-between gap-3'>
                    <h1 className='text-lg font-bold'>{t('filters')}</h1>
                    <div className='md:flex items-center gap-2 justify-end'>
                        <button className='btn btn-primary p-3 mt-3 max-md:w-full w-1/4 md:mt-0'
                            onClick={() => {
                                setModal8(true)
                                getAdditionalData()
                            }}
                        >
                            {t('exportSalesReport')}
                        </button>
                        <div className='flex items-center gap-2 shadow-none relative btn btn-primary p-3 max-md:w-full w-1/3 text-primary mt-2 md:mt-0'>
                            <IconCalendar className='shrink-0 text-white' />
                            <button className='text-sm font-bold text-white' onClick={() => {
                                setDatePanel(!datePanel)
                                if (datePanel) {
                                    getData(dateOneShow + ' 00:00:00', dateTwoShow + ' 23:59:59')
                                }
                            }
                            }>{dateOneShow} - {dateTwoShow}</button>
                            {datePanel ?
                                <DateRangePicker
                                    ranges={[dateData]}
                                    onChange={handleSelect}
                                    dateDisplayFormat='d MMM, yyyy'
                                    rangeColors={['#00243c']}
                                    maxDate={new Date()}
                                    className='absolute top-12 right-[-20px] z-10 rounded-md shadow-md'
                                    staticRanges={[]}
                                    inputRanges={[]}
                                />
                                : null}
                        </div>
                        <Transition appear show={modal8} as={Fragment}>
                            <Dialog as="div" open={modal8} onClose={() => setModal8(false)}>
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
                                            <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-2xl my-8 text-black dark:text-white-dark h-[30rem]">
                                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                                    <h5 className="font-bold text-lg">{t('exportSalesReport')}</h5>
                                                    <button onClick={() => {
                                                        setModal8(false)
                                                    }} type="button" className="text-white-dark hover:text-dark">
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
                                                <div className="p-4 flex">
                                                    <div className="w-full mr-5">
                                                        <label className="text-sm" htmlFor="to_date">
                                                            {t('toDate')}
                                                        </label>
                                                        <input id="to_date" type="date" name="to_date" className=" form-input" value={to_date} onChange={(e: any) => { setto_date(e.target.value) }} />
                                                    </div>
                                                    <div className="w-full justify-end">
                                                        <label className="text-sm" htmlFor="from_date">
                                                            {t('fromDate')}
                                                        </label>
                                                        <input id="from_date" type="date" name="from_date" className=" form-input" value={from_date} onChange={(e: any) => { setfrom_date(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className="p-4 flex items-center justify-between gap-3 mb-4">
                                                    <div className="w-full mb-4">
                                                        <label className="text-sm" htmlFor="currency mt-4">{t('selectType')}</label>
                                                        <Select className="text-sm" value={type} options={selectType} onChange={(e: any) => { settype(e) }} isSearchable={true} />
                                                    </div>
                                                    {type == 1 || type?.value == 1 ?
                                                        <div className="w-full mb-4">
                                                            <label className="text-sm" htmlFor="currency">{t('products')}</label>
                                                            <Select className="text-sm" options={ProductData} value={SelectedProduct} onChange={(e) => { setProduct(e), setSelectedProduct(e) }} isMulti isSearchable={true} />
                                                        </div>
                                                        :
                                                        null
                                                    }
                                                    {type == 2 || type?.value == 2 ?
                                                        <div className="w-full mb-4">
                                                            <label className="text-sm" htmlFor="currency">{t('brands')}</label>
                                                            <Select className="text-sm" options={BrandData} value={SelectedBrand} onChange={(e) => { setBrand(e), setSelectedBrand(e) }} isMulti isSearchable={true} />
                                                        </div>
                                                        :
                                                        null
                                                    }
                                                    {type == 3 || type?.value == 3 ?
                                                        <div className="w-full mb-4">
                                                            <label className="text-sm" htmlFor="currency">{t('productCategories')}</label>
                                                            <Select className="text-sm" options={CategoryData} value={SelectedCat} onChange={(e) => { setCategory(e), setSelectedCat(e) }} isMulti isSearchable={true} />
                                                        </div>
                                                        :
                                                        null
                                                    }
                                                    {type == 4 || type?.value == 4 ?
                                                        <div className="w-full mb-4">
                                                            <label className="text-sm" htmlFor="currency">{t('paymentMethods')}</label>
                                                            <Select className="text-sm" options={Paymentmethods} value={SelectedPaymentMethod} onChange={(e) => { setSelectedPaymentMethod(e) }} isMulti isSearchable={true} />
                                                        </div>
                                                        :
                                                        null
                                                    }
                                                </div>
                                                <div className="pr-4 pb-4 flex justify-end items-center absolute bottom-0 right-0">
                                                    {LoadingCalc == true ?
                                                        <>
                                                            <button disabled type="button" className="btn btn-primary text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:focus:ring-white-800 inline-flex items-center">
                                                                <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                                                </svg>
                                                                {t('loading')}
                                                            </button>
                                                        </>
                                                        :
                                                        <button onClick={() => {
                                                            getSalesReport()
                                                        }}
                                                            disabled={((to_date != '' && from_date != '' && type != '') ? false : true)}
                                                            type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                            {t('export')}
                                                        </button>
                                                    }
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </div>
            </div>
            {loader ?
                <>
                    <div className='text-center w-full mt-10'>
                        <span className="animate-spin border-4 border-transparent border-l-primary rounded-full w-10 h-10 inline-block align-middle mb-10"></span>
                    </div>
                </>
                :
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 text-white mt-3">
                        <Link to="" className="panel bg-gradient-to-r from-cyan-500 to-cyan-400">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">{t('grossSalesValue')}</div>
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3 mt-5"> {t('sr')} {OrderPrice?.toLocaleString('EN-US')} </div>
                            <div className="items-center font-bold text-lg mt-5">{t('sr')}{' '}{((OrderPrice) - (((OrderPrice) / 115) * 100))?.toLocaleString('EN-US')}{' '}<span className="font-semibold text-sm">{t('totalVAT')}</span></div>
                            <div className="flex items-center font-semibold">
                                <IconEye className="ltr:mr-2 rtl:ml-2 shrink-0" />
                                {t('averageOrderValue')}: {(OrderPrice && OrderCount) ? Math.round((OrderPrice / OrderCount))?.toLocaleString('EN-US') : 0}
                            </div>
                        </Link>
                        {/*  Time On-Site */}
                        <Link to={
                            to_date == from_date ?
                                `/sales/order?${(StatusData?.filter((item: { status: number; }) => item?.status == 6)[0] ? 'date=' + dateOneShow + '&status=6' : '')
                                }`
                                :
                                ''
                        }

                            className="panel bg-gradient-to-r from-blue-500 to-blue-400">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">{t('totalSalesValue')}</div>
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3 mt-5">{t('sr')}&nbsp;{(marketAll + totalAmountRecievedBox)?.toLocaleString('EN-US')}</div>
                            <div className="items-center font-bold text-lg mt-5">{t('sr')}{' '}{((marketAll + totalAmountRecievedBox) - (((marketAll + totalAmountRecievedBox) / 115) * 100))?.toLocaleString('EN-US')}{' '}<span className="font-semibold text-sm">{t('totalVAT')}</span></div>
                            <div className="flex items-center font-semibold">{t('salesIncludeMarketPlace')}</div>
                        </Link>
                        {/* Sessions */}
                        <Link
                            to={
                                to_date == from_date ?
                                    `/sales/order?${(StatusData?.filter((item: { status: number; }) => item?.status == 2)[0] && StatusData?.filter((item: { status: number; }) => item?.status == 0)[0]) ? 'date=' + dateOneShow + '&status=2,0' :
                                        (StatusData?.filter((item: { status: number; }) => item?.status == 2)[0] && !StatusData?.filter((item: { status: number; }) => item?.status == 0)[0]) ? 'date=' + dateOneShow + '&status=2' :
                                            (!StatusData?.filter((item: { status: number; }) => item?.status == 2)[0] && StatusData?.filter((item: { status: number; }) => item?.status == 0)[0]) ? 'date=' + dateOneShow + '&status=0' : ''
                                    }`
                                    :
                                    ''
                            } className="panel bg-gradient-to-r from-violet-500 to-violet-400">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">{t('totalReceivedValue')}</div>
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3 mt-5">{t('sr')}&nbsp;{totalAmountRecievedBox?.toLocaleString('EN-US')}</div>
                            <div className="items-center font-bold text-lg mt-5">{t('sr')}{' '}{((totalAmountRecievedBox) - (((totalAmountRecievedBox) / 115) * 100))?.toLocaleString('EN-US')}{' '}<span className="font-semibold text-sm">{t('totalVAT')}</span></div>
                            <div className="flex items-center font-semibold">
                                <IconEye className="ltr:mr-2 rtl:ml-2 shrink-0" />
                                {t('averageRecievedValue')}: {StatusData?.filter((item: { status: number; }) => item?.status == 0)[0]?.totalavg?.toLocaleString('EN-US')}
                            </div>
                        </Link>
                        <Link to={
                            to_date == from_date ?
                                `/sales/order?${(StatusData?.filter((item: { status: number; }) => item?.status == 2)[0] && StatusData?.filter((item: { status: number; }) => item?.status == 0)[0]) ? 'date=' + dateOneShow + '&status=2,0' :
                                    (StatusData?.filter((item: { status: number; }) => item?.status == 2)[0] && !StatusData?.filter((item: { status: number; }) => item?.status == 0)[0]) ? 'date=' + dateOneShow + '&status=2' :
                                        (!StatusData?.filter((item: { status: number; }) => item?.status == 2)[0] && StatusData?.filter((item: { status: number; }) => item?.status == 0)[0]) ? 'date=' + dateOneShow + '&status=0' : ''
                                }`
                                :
                                ''
                        }

                            className="panel bg-gradient-to-r from-slate-500 to-slate-400">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">{t('totalOrderReceived')}  </div>
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3 mt-5"> {totalOrderRecievedBox?.toLocaleString('EN-US')}</div>
                            <div className="flex items-center font-semibold mt-5">
                                <IconEye className="ltr:mr-2 rtl:ml-2 shrink-0" />
                                {t('averageOrderValue')}: {(OrderPrice && OrderCount) ? Math.round((OrderPrice / OrderCount))?.toLocaleString('EN-US') : 0}
                            </div>
                        </Link>
                        {/* Bounce Rate */}
                        <Link to={
                            to_date == from_date ?
                                `/sales/order?${(StatusData?.filter((item: { status: number; }) => item?.status == 8)[0] ? 'date=' + dateOneShow + '&status=8' : '')
                                }`
                                :
                                ''
                        }

                            className="panel bg-gradient-to-r from-fuchsia-500 to-fuchsia-400">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">{t('pendingPaymentOrder')}</div>
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3 mt-5"> {StatusData?.filter((item: { status: number; }) => item?.status == 8)[0]?.totalorder?.toLocaleString('EN-US')} </div>
                            <div className="flex items-center font-semibold mt-5">
                                <IconEye className="ltr:mr-2 rtl:ml-2 shrink-0" />
                                {/* {t('averageOrderValue')}: {StatusData?.filter((item: { status: number; }) => item?.status == 8)[0]?.totalavg?.toLocaleString('EN-US')} */}
                                {t('totalNumberOrder')}: {OrderCount?.toLocaleString('EN-US')}
                            </div>
                        </Link>
                        {/* Bounce Rate */}
                    </div>

                    {/* Market Place */}
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-3'>
                        <Link to="" className="panel h-full p-0">
                            <div className="flex items-center justify-between w-full p-3 absolute">
                                <h5 className="font-bold text-xl ltr:text-left rtl:text-right dark:text-white-light text-primary">
                                    {t('sr')} {amazonSale}
                                    <span className="block text-sm font-bold text-primary">{t('amazon')}</span>
                                </h5>
                                <div className="relative">
                                    <div className="text-[#00243c] dark:text-success-light bg-[#00243c30] dark:bg-success w-11 h-11 rounded-lg flex items-center justify-center">
                                        <IconShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="" className="panel h-full p-0">
                            <div className="flex items-center justify-between w-full p-3">
                                <h5 className="font-bold text-xl ltr:text-left rtl:text-right dark:text-white-light text-secondary">
                                    {t('sr')} {carefourSale}
                                    <span className="block text-sm font-bold text-secondary">{t('carefour')}</span>
                                </h5>
                                <div className="relative">
                                    <div className="text-[#f0660c] dark:text-success-light bg-[#f0660c30] dark:bg-success w-11 h-11 rounded-lg flex items-center justify-center">
                                        <IconShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="" className="panel h-full p-0">
                            <div className="flex items-center justify-between w-full p-3">
                                <h5 className="font-bold text-xl ltr:text-left rtl:text-right dark:text-white-light text-success">
                                    {t('sr')} {homzmartSale}
                                    <span className="block text-sm font-bold text-success">{t('homzmart')}</span>
                                </h5>
                                <div className="relative">
                                    <div className="text-success dark:text-success-light bg-success-light dark:bg-success w-11 h-11 rounded-lg flex items-center justify-center">
                                        <IconShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="" className="panel h-full p-0">
                            <div className="flex items-center justify-between w-full p-3">
                                <h5 className="font-bold text-xl ltr:text-left rtl:text-right dark:text-white-light">
                                    {t('sr')} {noonSale}
                                    <span className="block text-sm font-bold">{t('noon')}</span>
                                </h5>
                                <div className="relative">
                                    <div className="text-dark dark:text-success-light bg-dark-light dark:bg-success w-11 h-11 rounded-lg flex items-center justify-center">
                                        <IconShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="" className="panel h-full p-0">
                            <div className="flex items-center justify-between w-full p-3">
                                <h5 className="font-bold text-xl ltr:text-left rtl:text-right dark:text-white-light text-[#00a1df]">
                                    {t('sr')} {centerpointSale}
                                    <span className="block text-sm font-bold text-[#00a1df]">{t('centerPoint')}</span>
                                </h5>
                                <div className="relative">
                                    <div className="text-[#00a1df] dark:text-success-light bg-[#00a1df30] dark:bg-success w-11 h-11 rounded-lg flex items-center justify-center">
                                        <IconShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-3'>
                        <Link to="" className="panel h-full p-0">
                            <div className="flex items-center justify-between w-full p-3 absolute">
                                <h5 className="font-bold text-xl ltr:text-left rtl:text-right dark:text-white-light text-primary">
                                    {t('sr')} {tabbySale}
                                    <span className="block text-sm font-bold text-primary">{t('tabby')} <small className="font-normal">({t('totalNumberOrder')} {tabbyQty})</small></span>
                                </h5>
                                <div className="relative">
                                    <div className="text-[#00243c] dark:text-success-light bg-[#00243c30] dark:bg-success w-11 h-11 rounded-lg flex items-center justify-center">
                                        <IconShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="" className="panel h-full p-0">
                            <div className="flex items-center justify-between w-full p-3">
                                <h5 className="font-bold text-xl ltr:text-left rtl:text-right dark:text-white-light text-secondary">
                                    {t('sr')} {tamaraSale}
                                    <span className="block text-sm font-bold text-secondary">{t('tamara')} <small className="font-normal">({t('totalNumberOrder')} {tamaraQty})</small></span>
                                </h5>
                                <div className="relative">
                                    <div className="text-[#f0660c] dark:text-success-light bg-[#f0660c30] dark:bg-success w-11 h-11 rounded-lg flex items-center justify-center">
                                        <IconShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="" className="panel h-full p-0">
                            <div className="flex items-center justify-between w-full p-3">
                                <h5 className="font-bold text-xl ltr:text-left rtl:text-right dark:text-white-light text-success">
                                    {t('sr')} {hyperpaySale}
                                    <span className="block text-sm font-bold text-success">{t('creditCard')} <small className="font-normal">({t('totalNumberOrder')} {hyperpayQty})</small></span>
                                </h5>
                                <div className="relative">
                                    <div className="text-success dark:text-success-light bg-success-light dark:bg-success w-11 h-11 rounded-lg flex items-center justify-center">
                                        <IconShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="" className="panel h-full p-0">
                            <div className="flex items-center justify-between w-full p-3">
                                <h5 className="font-bold text-xl ltr:text-left rtl:text-right dark:text-white-light">
                                    {t('sr')} {applepaySale}
                                    <span className="block text-sm font-bold">{t('applePay')} <small className="font-normal">({t('totalNumberOrder')} {applepayQty})</small></span>
                                </h5>
                                <div className="relative">
                                    <div className="text-dark dark:text-success-light bg-dark-light dark:bg-success w-11 h-11 rounded-lg flex items-center justify-center">
                                        <IconShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="" className="panel h-full p-0">
                            <div className="flex items-center justify-between w-full p-3">
                                <h5 className="font-bold text-xl ltr:text-left rtl:text-right dark:text-white-light text-[#00a1df]">
                                    {t('sr')} {madapaySale}
                                    <span className="block text-sm font-bold text-[#00a1df]">{t('mada')} <small className="font-normal">({t('totalNumberOrder')} {madapayQty})</small></span>
                                </h5>
                                <div className="relative">
                                    <div className="text-[#00a1df] dark:text-success-light bg-[#00a1df30] dark:bg-success w-11 h-11 rounded-lg flex items-center justify-center">
                                        <IconShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="grid xl:grid-cols-3 gap-3 mb-6">
                        <div className="panel h-full p-0 mt-4 xl:col-span-2">
                            <div className="flex items-start justify-between dark:text-white-light p-5 border-b  border-white-light dark:border-[#1b2e4b]">
                                <h5 className="font-semibold text-lg ">{t("paymentMethod")}</h5>
                            </div>
                            <ReactApexChart options={uniquePmethodsSeries.options} series={uniquePmethodsSeries.series} type="bar" height={360} className="overflow-hidden" />
                            {/* <div className="flex items-center px-3 gap-8">
                                <Link to="" className="text-primary underline text-xs">Tamara [18]</Link>
                                <Link to="" className="text-primary underline text-xs">Tamara [18]</Link>
                                <Link to="" className="text-primary underline text-xs">Tamara [18]</Link>
                                <Link to="" className="text-primary underline text-xs">Tamara [18]</Link>
                            </div> */}
                        </div>
                        <div className="panel h-full p-0 mt-4 ">
                            <div className="flex items-start justify-between dark:text-white-light p-5">
                                <h5 className="font-semibold text-lg dark:text-white-light mb-4">{t("order'sOverview")}</h5>
                            </div>
                            <div className="bg-white dark:bg-black rounded-lg overflow-hidden">
                                {loading ? (
                                    <div className="min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ">
                                        <span className="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"></span>
                                    </div>
                                ) : (
                                    <ReactApexChart series={overChartData} options={salesByCategory.options} type="donut" height={360} />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="panel h-full p-0 mt-4">
                        <div className="flex items-start justify-between dark:text-white-light p-5 border-b  border-white-light dark:border-[#1b2e4b]">
                            <h5 className="font-semibold text-lg ">{t("topSellingBrand's")}</h5>
                        </div>
                        <ReactApexChart options={uniqueBrandSeries.options} series={uniqueBrandSeries.series} type="bar" height={360} className="overflow-hidden" />
                    </div>

                    <div className="panel h-full p-0 mt-4">
                        <div className="flex items-start justify-between dark:text-white-light p-5 border-b  border-white-light dark:border-[#1b2e4b]">
                            <h5 className="font-semibold text-lg ">{t("topSellingCategorie's")}</h5>
                        </div>
                        <ReactApexChart options={uniqueCategoriesSeries.options} series={uniqueCategoriesSeries.series} type="bar" height={360} className="overflow-hidden" />
                    </div>

                    <div className="panel h-full p-0 mt-4">
                        <div className="flex items-start justify-between dark:text-white-light p-5 border-b  border-white-light dark:border-[#1b2e4b]">
                            <h5 className="font-semibold text-lg ">{t('topSellingCities')}</h5>
                        </div>
                        <ReactApexChart options={uniqueCitiesSeries.options} series={uniqueCitiesSeries.series} type="bar" height={360} className="overflow-hidden" />
                    </div>

                    <ReactApexChart
                        series={simpleColumnStacked.series}
                        options={simpleColumnStacked.options}
                        className="rounded-lg bg-white dark:bg-black overflow-hidden mt-4 panel"
                        type="bar"
                        height={300}
                    />

                    <div className="mt-4">
                        <div className="grid gap-3 mb-6">
                            <div className="panel h-full xl:col-span-2">
                                <p className="text-lg dark:text-white-light/90">
                                    {t('totalRevenue')} <span className="text-primary ml-2">{t('sr')} {OrderPrice?.toLocaleString('EN-US')}</span>
                                </p>
                                <div className="relative">
                                    <div className="bg-white dark:bg-black rounded-lg overflow-hidden">
                                        {loading ? (
                                            <div className="min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ">
                                                <span className="animate-spin border-2 border-black dark:border-white !border-l-transparent  rounded-full w-5 h-5 inline-flex"></span>
                                            </div>
                                        ) : (
                                            <ReactApexChart series={revenueChart.series} options={revenueChart.options} type="area" height={325} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div >
    );
};

export default Index;
