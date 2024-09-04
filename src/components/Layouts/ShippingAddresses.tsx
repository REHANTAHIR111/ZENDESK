import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import IconX from '../Icon/IconX';
import IconTrash from '../Icon/IconTrash';
import IconHome from '../Icon/IconHome';
import { get, post } from "../../pages/api/ApiCalls";
import Swal from 'sweetalert2';

const ShippingAddresses = (props: any) => {

    // setUserid(props?.userid)
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();
    const [showCustomizer, setShowCustomizer] = useState(props.btnClick);

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


    const DeleteAddress = (id: any) => {
        get('address/' + id + '/delete').then((responseJson: any) => {
            if (responseJson.success === true) {
                coloredToast('success', 'Success! Address Deleted Successfully!')
            }
            else {
                coloredToast('error', 'Something Went Wrong!')
            }
        })
    }

    return (
        <div>
            {/* {props.button} */}
            <div className={`${(props.btnClick && '!block') || ''} fixed inset-0 bg-[black]/60 z-[51] px-4 hidden transition-[display]`} onClick={() => {
                props.btnClickClose(false)
            }}></div>

            <nav
                className={`${(props.btnClick && 'ltr:!right-0 rtl:!left-0') || ''
                    } bg-white fixed ltr:-right-[400px] rtl:-left-[400px] top-0 bottom-0 w-full max-w-[400px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-[right] duration-300 z-[51] dark:bg-black p-4`}
            >
                <button
                    type="button"
                    className="bg-primary ltr:rounded-tl-full rtl:rounded-tr-full ltr:rounded-bl-full rtl:rounded-br-full absolute ltr:-left-12 rtl:-right-12 top-0 bottom-0 my-auto w-12 h-10 flex justify-center items-center text-white cursor-pointer"
                    onClick={() => props.btnClickClose(false)}
                >
                    <IconX className="animate-[spin_3s_linear_infinite] w-5 h-5" />
                </button>

                <div className="overflow-y-auto overflow-x-hidden perfect-scrollbar h-full">
                    <div className="text-center relative pb-5">
                        <button type="button" className="absolute top-0 ltr:right-0 rtl:left-0 opacity-30 hover:opacity-100 dark:text-white" onClick={() => props.btnClickClose(false)}>
                            <IconX className="w-5 h-5" />
                        </button>

                        <h4 className="mb-1 dark:text-white font-bold">Address Book</h4>
                        <p className="text-white-dark">The below mentioned address is saved inside the <span className='font-bold'>Address Book</span> of the <span className='font-serif font-bold'>{props?.username}</span></p>
                    </div>
                    <hr className='mb-5 border-dashed border-dark' />
                    {props?.address?.map((item: any, i: any) => (
                        
                        <div className="border border-dashed border-white-light dark:border-[#1b2e4b] rounded-md mb-3 p-3" key={item}>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-x-2 text-md text-success font-bold'><IconHome className='shirnk-0 h-5 w-5' /> {item?.address_label == 0 ? 'Home' : 'Office'}</div>
                                <button className='' type='button'  onClick={() => DeleteAddress(item?.id)}><IconTrash className='shrink-0 text-red-600' /></button>
                            </div>
                            <div className='mt-4'>{item?.address}</div>
                            <div className='font-bold mt-1'>{item?.state_data?.name}, Saudi Arabia</div>
                                <div className='font-bold mt-4 text-xs text-slate-400'>Total: <span className='text-red-600 '>{item?.orders_count} orders</span> delivered in this address.</div>
                        </div>
                    ))}
                </div>
            </nav>
        </div >
    );
};

export default ShippingAddresses;
