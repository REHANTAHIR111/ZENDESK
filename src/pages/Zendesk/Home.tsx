import React, { useState, useEffect } from 'react'
import ReactApexChart from 'react-apexcharts';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';

export default function Home() {

    const dispatch = useDispatch();
    const [hourly, setHourly] = useState<any>(false)
    const [daily, setDaily] = useState<any>(false)
    const [weekly, setWeekly] = useState<any>(false)
    const [monthly, setMonthly] = useState<any>(false)

    useEffect(() => {
        dispatch(setPageTitle('Home'));
      }, []);

    // lineChartOptions
    const lineChart: any = {

        series: [
            {
                name: 'Sales',
                data: [45, 55, 75, 25, 45, 110],
            },
        ],
        options: {
            chart: {
                height: 300,
                type: 'line',
                toolbar: false,
            },
            colors: ['#4361EE'],
            tooltip: {
                marker: false,
                y: {
                    formatter(number: number) {
                        return '$' + number;
                    },
                },
            },
            stroke: {
                width: 2,
                curve: 'smooth',
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
                axisBorder: {
                    color: '#e0e6ed',
                },
            },
            yaxis: {
                opposite: false,
                labels: {
                    offsetX: 0,
                },
            },
            grid: {
                borderColor: '#e0e6ed',
            },
        },

    };

    const areaChart: any = {
        series: [
            {
                name: 'Income',
                data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
            },
        ],
        options: {
            chart: {
                type: 'area',
                height: 300,
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['#805dca'],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 2,
                curve: 'smooth',
            },
            xaxis: {
                axisBorder: {
                    color: '#e0e6ed',
                },
            },
            yaxis: {
                opposite: false,
                labels: {
                    offsetX: 0,
                },
            },
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            legend: {
                horizontalAlign: 'left',
            },
            grid: {
                borderColor: '#E0E6ED',
            },
            tooltip: {
                theme: 'light',
            },
        },
    };

    const mixedChart: any = {
        series: [
            {
                name: 'TEAM A',
                type: 'column',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
            },
            {
                name: 'TEAM B',
                type: 'area',
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
            },
            {
                name: 'TEAM C',
                type: 'line',
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
            },
        ],
        options: {
            chart: {
                height: 300,
                // stacked: false,
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
            colors: ['#2196f3', '#00ab55', '#4361ee'],
            stroke: {
                width: [0, 2, 2],
                curve: 'smooth',
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%',
                },
            },
            fill: {
                opacity: [1, 0.25, 1],
            },

            labels: ['01/01/2022', '02/01/2022', '03/01/2022', '04/01/2022', '05/01/2022', '06/01/2022', '07/01/2022', '08/01/2022', '09/01/2022', '10/01/2022', '11/01/2022'],
            markers: {
                size: 0,
            },
            xaxis: {
                type: 'datetime',
                axisBorder: {
                    color: '#e0e6ed',
                },
            },
            yaxis: {
                title: {
                    text: 'Points',
                },
                min: 0,
                opposite: false,
                labels: {
                    offsetX: 0,
                },
            },
            grid: {
                borderColor: '#e0e6ed',
            },
            tooltip: {
                shared: true,
                intersect: false,
                theme: 'light',
            },
            legend: {
                itemMargin: {
                    horizontal: 4,
                    vertical: 8,
                },
            },
        },
    };

    const columnChart: any = {
        series: [
            {
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            },
            {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            },
        ],
        options: {
            chart: {
                height: 300,
                type: 'bar',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['#805dca', '#e7515a'],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                },
            },
            grid: {
                borderColor: '#e0e6ed',
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                axisBorder: {
                    color: '#e0e6ed',
                },
            },
            yaxis: {
                opposite: false,
                labels: {
                    offsetX: 0,
                },
            },
            tooltip: {
                theme: 'light',
                y: {
                    formatter: function (val: any) {
                        return val;
                    },
                },
            },
        },
    };

    return (
        <div className='flex'>
            <div className='w-[70%]'>
                <h2 className='text-xl text-[#4A4A4A] font-bold pb-1'>Hello, Elizabeth!</h2>
                <div className='flex'>
                    <hr className='bg-blue-500 h-0.5 w-40' />
                    <hr className='bg-gray-200 h-0.5 w-full' />
                </div>
                <div className='grid grid-cols-3 mt-4 gap-4'>
                    <div className='border border-gray-300 rounded relative p-6 h-48'>
                        {/* <span>// icon</span> */}
                        <span className='font-semibold'>Widget</span>
                        <p className='text-gray-500 mt-3'>
                            Embed and customize the widget on your website.
                        </p>
                        <a href="" className='text-blue-500 hover:underline absolute bottom-3'>Manage widget</a>
                    </div>
                    <div className='border border-gray-300 rounded relative p-6 h-48'>
                        {/* <span>// icon</span> */}
                        <span className='font-semibold'>Visitors</span>
                        <p className='text-gray-500 mt-3'>
                            See a list of visitors to your website and start a conversation.
                        </p>
                        <a href="" className='text-blue-500 hover:underline absolute bottom-3'>View visitors list</a>
                    </div><br />
                    <div className='border border-gray-300 rounded relative p-6 h-48'>
                        {/* <span>// icon</span> */}
                        <span className='font-semibold'>Analytics</span>
                        <p className='text-gray-500 mt-3'>
                            Track the conversations you have with customers.
                        </p>
                        <a href="" className='text-blue-500 hover:underline absolute bottom-3'>View analytics</a>
                    </div>
                    <div className='border border-gray-300 rounded relative p-6 h-48'>
                        {/* <span>// icon</span> */}
                        <span className='font-semibold'>Triggers</span>
                        <p className='text-gray-500 mt-3'>
                            Proactively start conversations or send custom messages to leads.
                        </p>
                        <a href="" className='text-blue-500 hover:underline absolute bottom-3'>Manage triggers</a>
                    </div>
                </div>
                <hr className='w-full h-0.5 mt-6' />
                <div className='flex justify-between mt-5'>
                    <h3 className='text-[16px] text-text-[#4A4A4A]'>Website analytics</h3>
                    <div className='flex'>
                        <button className={`btn bg-g btn-sm shadow-none rounded-r-none rounded-sm menu nav-item focusable focus:ring-2 ${!daily && !weekly && !monthly ? 'bg-gray-200' : ''} focus:bg-gray-200 focus:outline-none focus:ring-blue-300`} onClick={() => {
                            setHourly(true),
                                setDaily(false),
                                setWeekly(false),
                                setMonthly(false)
                        }}>
                            Hourly
                        </button>
                        <button className={`btn btn-sm rounded-none shadow-none menu nav-item focus:ring-2 focus:outline-none focus:ring-blue-300 ${daily ? 'bg-gray-200' : ''}`} onClick={() => {
                            setDaily(true),
                                setHourly(false),
                                setWeekly(false),
                                setMonthly(false)
                        }}>
                            Daily
                        </button>
                        <button className={`btn bg00 btn-sm shadow-none rounded-none menu nav-item focus:ring-2 focus:outline-none focus:ring-blue-300 ${weekly ? 'bg-gray-200' : ''}`} onClick={() => {
                            setWeekly(true),
                                setMonthly(false),
                                setDaily(false),
                                setHourly(false)
                        }}>
                            Weekly
                        </button>
                        <button className={`btn bg-g btn-sm shadow-none rounded-l-none rounded-sm focus:ring-2 focus:outline-none focus:ring-blue-300 ${monthly ? 'bg-gray-200' : ''}`} onClick={() => {
                            setMonthly(true),
                                setDaily(false),
                                setHourly(false),
                                setWeekly(false)
                        }}>
                            Monthly
                        </button>
                    </div>
                </div>
                {hourly ?
                    <ReactApexChart series={lineChart.series} options={lineChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="line" height={350} />
                    : monthly ?
                    <ReactApexChart series={mixedChart.series} options={mixedChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bar" height={350} /> 
                    : weekly ?
                    <ReactApexChart series={columnChart.series} options={columnChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bar" height={350} /> 
                    : daily ?
                    <ReactApexChart series={areaChart.series} options={areaChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="area" height={350} /> 
                    :
                    <ReactApexChart series={lineChart.series} options={lineChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="line" height={350} />
                }
                <div className='flex justify-center mt-5 gap-4'>
                    <div className='flex gap-1.5'>
                        <input type="checkbox" name="view" id="view" className='h-[14px] mt-0.5 w-[14px] rounded-full'/>
                        <p className='bg-info h-2 w-2 rounded-full mt-1'>&nbsp;</p>
                        <label className='text-xs' htmlFor='view'>Page views</label>
                    </div>
                    <div className='flex gap-1.5'>
                        <input type="checkbox" name="Total" id="Total" className='h-[14px] mt-0.5 w-[14px] rounded-full'/>
                        <p className='bg-info h-2 w-2 rounded-full mt-1'>&nbsp;</p>
                        <label className='text-xs' htmlFor='Total'>Total visirs</label>
                    </div>
                    <div className='flex gap-1.5'>
                        <input type="checkbox" name="Unique" id="Unique" className='h-[14px] mt-0.5 w-[14px] rounded-full'/>
                        <p className='bg-cyan-400 h-2 w-2 rounded-full mt-1'>&nbsp;</p>
                        <label className='text-xs' htmlFor='Unique'>Unique visitors</label>
                    </div>
                    <div className='flex gap-1.5'>
                        <input type="checkbox" name="Chats" id="Chats" className='h-[14px] mt-0.5 w-[14px] rounded-full'/>
                        <p className='bg-[#BFDD70] h-2 w-2 rounded-full mt-1'>&nbsp;</p>
                        <label className='text-xs' htmlFor='Chats'>Chats</label>
                    </div>
                </div>
            </div>
            <div className='w-[25%] '>
                <div className='w-full ml-14'>
                    <a href="" className='hover:underline'>Latest Zendesk Chat updates</a>
                    <hr className='bg-gray-200 h-0.5 w-full mt-5' />
                    <div className='flex mt-4 gap-6 text-gray-500'>
                        <div>
                            <img src="https://dashboard-latest.zopim.com/dashboard/images/tags_ipm@2x.png" alt="" width='65' height='65' className='ml-3 mt-8' />
                        </div>
                        <div className='w-44'>
                            <p>
                                Organize your conversations with tags
                            </p>
                            <p className='text-xs mt-3'>
                                Understand the types of <br />problems that your customers are <br /> facing
                            </p>
                            <button className="btn btn-sm btn-light mt-2 rounded shadow-sm">Learn more</button>
                        </div>
                    </div>
                    <hr className='bg-gray-200 h-0.5 w-full mt-7 mb-5' />
                    <a href="" className='hover:underline font-light text-sm '>Recent website activity</a>
                    <div className='mt-3 flex'>
                        <p className={`w-1.5 h-1.5 mt-2.5 rounded-full bg-[#1EB848]`}>&nbsp;</p>
                        <p className='font-medium text-xs ml-4 mt-[3.2px]'>You are now</p>
                        <span className='text-sm ml-1'>Online</span>
                    </div>
                    <div className='mt-1 flex'>
                        <p className={`w-1.5 h-1.5 mt-2.5 rounded-full bg-[#FFB24D]`}>&nbsp;</p>
                        <p className='font-medium text-xs ml-4 mt-[3.2px]'>You are now</p>
                        <span className='text-sm ml-1'>Away</span>
                    </div>
                    <div className='mt-1 flex'>
                        <p className={`w-1.5 h-1.5 mt-2.5 rounded-full bg-[#999999]`}>&nbsp;</p>
                        <p className='font-medium text-xs ml-4 mt-[3.2px]'>You are now</p>
                        <span className='text-sm ml-1'>Invisible</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
