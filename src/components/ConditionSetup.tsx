import { useState, useEffect, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import Select, { GroupBase, OptionsOrGroups } from 'react-select';
import IconPlus from './Icon/IconPlus';
import IconX from './Icon/IconX';
import { useTranslation } from 'react-i18next';


const ConditionSetup = (props: any) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [conditionRule, setConditionRule] = useState('0');

    const quantityData = [
        { value: '0', label: 'Please Select Discount Type', isDisabled: 'option--is-disabled' },
        { value: '1', label: 'Less than (<)' },
        { value: '2', label: 'Less than or equal (< =)' },
        { value: '3', label: 'Equal (=)' },
        { value: '4', label: 'Greater than (>)' },
        { value: '5', label: 'Greater than or equal (> =)' },
    ];

    const conditionOptions = [
        { value: '0', label: 'Product, Categoreis, Brands, Sub Tags', isDisabled: 'option--is-disabled' },
        { value: '01', label: 'Brands' },
        { value: '02', label: 'Products' },
        { value: '03', label: 'Sub Tags' },
        { value: '04', label: 'Categories' },
        { value: 'cartandcheckout', label: 'Cart & Checkout', isDisabled: 'option--is-disabled' },
        { value: '05', label: 'Payment Method' },
        // { value: '06', label: 'Shipping Method' },
        { value: '07', label: 'Minimum & Maxumum Order Amount' },
        // { value: '08', label: 'Minimum & Maxumum Product Amount' },
        { value: 'dateandtime', label: 'Date & Time', isDisabled: 'option--is-disabled' },
        { value: '09', label: 'Date' },
        { value: '10', label: 'Time' },
        { value: 'userdata', label: 'User Data', isDisabled: 'option--is-disabled' },
        { value: '11', label: 'Email' },
        { value: '12', label: 'First Order' },
        { value: '13', label: 'Phone Number' },
        { value: '14', label: 'Date of Birth' },
        { value: '15', label: 'Total Number of Order Made' },
        { value: 'location', label: 'Location', isDisabled: 'option--is-disabled' },
        { value: '16', label: 'City' },
    ];

    const includeExclude = [
        { value: '0', label: 'Select InList / Not InList', isDisabled: 'option--is-disabled' },
        { value: '1', label: 'In List' },
        { value: '2', label: 'Not In List' },
    ];


    const paymentMethods = [
        { value: '0', label: 'Select Payment Methods', isDisabled: 'option--is-disabled' },
        { value: 'hyperpay', label: 'Hyper Pay' },
        { value: 'madapay', label: 'Mada Pay' },
        { value: 'applepay', label: 'Apple Pay' },
        { value: 'cod', label: 'COD' },
        { value: 'tamara', label: 'Tamara' },
        { value: 'tabby', label: 'Tabby' },
        { value: 'tasheel', label: 'Tasheel' },
    ];

    const [conditiontype, setconditiontype] = useState<any>(1);
    const [editdata, seteditdata] = useState<any>(true);

    const [conditionlisting, setconditionlisting] = useState<any>([1]);
    const [conditiondata, setconditiondata] = useState<any>([{ type: [], list: [], qtytype: [], qty: '', min: '', max: '', brand: [], product: [], category: [], tag: [], paymentMethods: [], date: '', starttime: '', endtime: '', email: '', phone: '', dob: '', order: '', city: [] }]);

    useEffect(() => {
        // console.log(props)
        // if(props.conditiontype && editdata){

        // }
        if (props.conditiondata) {
            setconditiontype(props.conditiontype)
            seteditdata(false)
            setconditionlisting([...Array(props.conditiondata?.length)])
            setconditiondata(props.conditiondata)
        }
    }, [props.conditiondata]);

    useEffect(() => {
        //console.log(conditiondata)
        props.setConditionData(conditiondata, conditiontype)
    }, [conditiondata, conditiontype]);

    const addkeyf = () => {
        var k = [...conditionlisting]
        var kd = [...conditiondata]
        k.push(1)
        kd.push({ type: [], list: [], qtytype: [], qty: '', min: '', max: '', brand: [], product: [], category: [], tag: [], paymentMethods: [], date: '', starttime: '', endtime: '', email: '', phone: '', dob: '', order: '', city: [] })
        setconditionlisting(k)
        setconditiondata(kd)
    }

    const removekeyf = (i: number) => {
        var k = [...conditionlisting]
        var kd = [...conditiondata]
        k.splice(i, 1)
        kd.splice(i, 1)
        setconditionlisting(k)
        setconditiondata(kd)
    }

    return (
        <div className="panel mt-4">
            <div className="flex items-center justify-between">
                <h5 className="text-lg font-bold">{t('conditionsSetup')}</h5>
                <div className="flex items-center gap-3">
                    <label className="inline-flex m-0">
                        <input type="radio" name="default_text_color" disabled={props?.disabled} className="form-radio peer" checked={conditiontype == 1 ? true : false} onChange={(e: any) => setconditiontype(1)} />
                        <span className="peer-checked:text-primary">{t('matchAll')}</span>
                    </label>
                    <div>|</div>
                    <label className="inline-flex m-0">
                        <input type="radio" name="default_text_color" disabled={props.disabled} className="form-radio peer" checked={conditiontype == 2 ? true : false} onChange={(e: any) => setconditiontype(2)} />
                        <span className="peer-checked:text-primary">{t('matchAny')}</span>
                    </label>
                    <button type="button" className="btn btn-primary w-10" disabled={props.disabled} onClick={addkeyf}>
                        <IconPlus className="shrink-0" />
                    </button>
                </div>
            </div>
            <hr className="border-white-light dark:border-[#1b2e4b] my-2" />
            {conditionlisting?.map(function (a: any, i: number,) {
                return (
                    <>
                        <div className="flex items-start gap-x-3">
                            <div className="w-full mt-2">
                                <label htmlFor="currency">{t('chooseConditionType')}</label>
                                <Select
                                    options={conditionOptions}
                                    isSearchable={false}
                                    value={conditiondata[i].type}
                                    onChange={(e: any) => {
                                        var kd = [...conditiondata]
                                        kd[i].type = e
                                        setconditiondata(kd)
                                    }}
                                    isDisabled={props.disabled}
                                // onChange={(e: any) => {
                                //     if (e?.value) setConditionRule(e.value);
                                // }}
                                />
                            </div>
                            {(conditiondata[i].type.value > '0' && conditiondata[i].type.value < '07') || conditiondata[i].type.value == '11' || conditiondata[i].type.value == '13' || conditiondata[i].type.value == '16' ? (
                                <div className="w-1/2 mt-2">
                                    <label htmlFor="currency">{t('inList/NotInList')}</label>
                                    <Select options={includeExclude} isSearchable={false}
                                        value={conditiondata[i].list}
                                        onChange={(e: any) => {
                                            var kd = [...conditiondata]
                                            kd[i].list = e
                                            setconditiondata(kd)
                                        }}
                                        isDisabled={props.disabled}
                                    />
                                </div>
                            ) : null}
                        </div>
                        <div className="flex items-center gap-x-3">
                            <div className="mt-3 w-full">
                                {conditiondata[i].type.value && conditiondata[i].type.value != 12 && conditiondata[i].type.value != '07' && conditiondata[i].type.value != '08' ?
                                    <label htmlFor="currency">
                                        {t('select')}{' '}
                                        {conditiondata[i].type.value == '01'
                                            ? t('brands')
                                            : conditiondata[i].type.value == '02'
                                                ? t('products')
                                                : conditiondata[i].type.value == '03'
                                                    ? t('subTags')
                                                    : conditiondata[i].type.value == '04'
                                                        ? t('categories')
                                                        : conditiondata[i].type.value == '05'
                                                            ? t('paymentMethods')
                                                            : conditiondata[i].type.value == '06'
                                                                ? t('shippingMethods')
                                                                : conditiondata[i].type.value == '07'
                                                                    ? t('minimumMaximumOrderAmount')
                                                                    : conditiondata[i].type.value == '08'
                                                                        ? t('minimumMaximumProductAmount')
                                                                        : conditiondata[i].type.value == '09'
                                                                            ? t('date')
                                                                            : conditiondata[i].type.value == '10'
                                                                                ? t('time')
                                                                                : conditiondata[i].type.value == '11'
                                                                                    ? t('email')
                                                                                    : conditiondata[i].type.value == '12'
                                                                                        ? t('firstOrder')
                                                                                        : conditiondata[i].type.value == '13'
                                                                                            ? t('phoneNumber')
                                                                                            : conditiondata[i].type.value == '14'
                                                                                                ? t('dateOfBirth')
                                                                                                : conditiondata[i].type.value == '15'
                                                                                                    ? t('numberOfOrderMade')
                                                                                                    : conditiondata[i].type.value == '16'
                                                                                                        ? t('city')
                                                                                                        : null}
                                    </label>
                                    : null}
                                {conditiondata[i].type.value == '14' ? (
                                    <div className="w-full">
                                        <input id="shipping-charge" type="date" disabled={props.disabled} name="shipping-charge" className="form-input rounded" defaultValue="unlimited" placeholder={t("unlimited")}
                                            value={conditiondata[i].dob}
                                            onChange={(e: any) => {
                                                var kd = [...conditiondata]
                                                kd[i].dob = e.target.value
                                                setconditiondata(kd)
                                            }}
                                        />
                                    </div>
                                ) : conditiondata[i].type.value == '09' ? (
                                    <div className="w-full">
                                        <input id="shipping-charge" type="date" disabled={props.disabled} name="shipping-charge" className="form-input rounded" defaultValue="unlimited" placeholder={t("unlimited")}
                                            value={conditiondata[i].date}
                                            onChange={(e: any) => {
                                                var kd = [...conditiondata]
                                                kd[i].date = e.target.value
                                                setconditiondata(kd)
                                            }}
                                        />
                                    </div>
                                ) : conditiondata[i].type.value == '10' ? (
                                    <div className='flex gap-3'>
                                        <div className="w-full">
                                            <input id="shipping-charge" type="time" disabled={props.disabled} name="shipping-charge" className="form-input rounded" defaultValue="unlimited" placeholder={t("unlimited")}
                                                value={conditiondata[i].starttime}
                                                onChange={(e: any) => {
                                                    var kd = [...conditiondata]
                                                    kd[i].starttime = e.target.value
                                                    setconditiondata(kd)
                                                }}
                                            />
                                        </div>
                                        <div className="w-full">
                                            <input id="shipping-charge" type="time" disabled={props.disabled} name="shipping-charge" className="form-input rounded" defaultValue="unlimited" placeholder={t("unlimited")}
                                                value={conditiondata[i].endtime}
                                                onChange={(e: any) => {
                                                    var kd = [...conditiondata]
                                                    kd[i].endtime = e.target.value
                                                    setconditiondata(kd)
                                                }}
                                            />
                                        </div>
                                    </div>
                                ) : conditiondata[i].type.value == '11' ? (
                                    <div className="w-full">
                                        <input id="shipping-charge" type="text" disabled={props.disabled} name="shipping-charge" className="form-input rounded" defaultValue="unlimited" placeholder={t("unlimited")}
                                            value={conditiondata[i].email}
                                            onChange={(e: any) => {
                                                var kd = [...conditiondata]
                                                kd[i].email = e.target.value
                                                setconditiondata(kd)
                                            }}
                                        />
                                    </div>
                                ) : conditiondata[i].type.value == '13' ? (
                                    <div className="w-full">
                                        <input id="shipping-charge" type="text" disabled={props.disabled} name="shipping-charge" className="form-input rounded" defaultValue="unlimited" placeholder={t("unlimited")}
                                            value={conditiondata[i].phone}
                                            onChange={(e: any) => {
                                                var kd = [...conditiondata]
                                                kd[i].phone = e.target.value
                                                setconditiondata(kd)
                                            }}
                                        />
                                    </div>
                                ) : conditiondata[i].type.value == '15' ? (
                                    <div className="w-full">
                                        <input id="shipping-charge" type="number" disabled={props.disabled} name="shipping-charge" className="form-input rounded" defaultValue="unlimited" placeholder={t("unlimited")}
                                            value={conditiondata[i].order}
                                            onChange={(e: any) => {
                                                var kd = [...conditiondata]
                                                kd[i].order = e.target.value
                                                setconditiondata(kd)
                                            }}
                                        />
                                    </div>
                                ) : (
                                    null
                                )}
                                {conditiondata[i].type.value == '01' ?
                                    <Select options={props.brand} isMulti isSearchable={true}
                                        value={conditiondata[i].brand}
                                        onChange={(e: any) => {
                                            var kd = [...conditiondata]
                                            kd[i].brand = e
                                            setconditiondata(kd)
                                        }}
                                        isDisabled={props.disabled}
                                    />
                                    : null}
                                {conditiondata[i].type.value == '02' ?
                                    <Select options={props.product} isMulti isSearchable={true}
                                        value={conditiondata[i].product}
                                        onChange={(e: any) => {
                                            var kd = [...conditiondata]
                                            kd[i].product = e
                                            setconditiondata(kd)
                                        }}
                                        isDisabled={props.disabled}
                                    />
                                    : null}
                                {conditiondata[i].type.value == '03' ?
                                    <Select options={props.tag} isMulti isSearchable={true}
                                        value={conditiondata[i].tag}
                                        onChange={(e: any) => {
                                            var kd = [...conditiondata]
                                            kd[i].tag = e
                                            setconditiondata(kd)
                                        }}
                                        isDisabled={props.disabled}
                                    />
                                    : null}
                                {conditiondata[i].type.value == '04' ?
                                    <Select options={props.category} isMulti isSearchable={true}
                                        value={conditiondata[i].category}
                                        onChange={(e: any) => {
                                            var kd = [...conditiondata]
                                            kd[i].category = e
                                            setconditiondata(kd)
                                        }}
                                        isDisabled={props.disabled}
                                    />
                                    : null}
                                {conditiondata[i].type.value == '05' ?
                                    <Select options={paymentMethods} isMulti isSearchable={true}
                                        value={conditiondata[i].paymentMethods}
                                        onChange={(e: any) => {
                                            var kd = [...conditiondata]
                                            kd[i].paymentMethods = e
                                            setconditiondata(kd)
                                        }}
                                        isDisabled={props.disabled}
                                    />
                                    : null}
                                {conditiondata[i].type.value == '16' ?
                                    <Select options={props.city} isMulti isSearchable={true}
                                        value={conditiondata[i].city}
                                        onChange={(e: any) => {
                                            var kd = [...conditiondata]
                                            kd[i].city = e
                                            setconditiondata(kd)
                                        }}
                                        isDisabled={props.disabled}
                                    />
                                    : null}
                                {conditiondata[i].type.value != '0' && conditiondata[i].type.value < '05' ? (
                                    <>
                                        <div className="flex mt-3 gap-3">
                                            <div className="w-full">
                                                <label htmlFor="currency">
                                                    {t('selectCondition')}
                                                    {/* {conditiondata[i].type.value == '01' ? 'Brands' : conditiondata[i].type.value == '02' ? 'Products' : conditiondata[i].type.value == '03' ? 'Sub Tags' : conditiondata[i].type.value == '04' ? 'Categories' : null} */}
                                                </label>
                                                <Select options={quantityData} isSearchable={false}
                                                    value={conditiondata[i].qtytype}
                                                    onChange={(e: any) => {
                                                        var kd = [...conditiondata]
                                                        kd[i].qtytype = e
                                                        setconditiondata(kd)
                                                    }}
                                                    isDisabled={props.disabled}
                                                />
                                            </div>
                                            <div className="w-full">
                                                <label htmlFor="number" className="">
                                                    {t('quantity')}
                                                </label>
                                                <input id="number" type="number" min="0" disabled={props.disabled} name="inv-num" className="form-input w-6/6" placeholder="0"
                                                    value={conditiondata[i].qty}
                                                    onChange={(e: any) => {
                                                        var kd = [...conditiondata]
                                                        kd[i].qty = e.target.value
                                                        setconditiondata(kd)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-3 flex items-center gap-3">
                                            <div className="w-full">
                                                <label htmlFor="shipping-charge">{t('min')} {conditiondata[i].type.value != '08' ? t('products') : t('order')} {t('value')}</label>
                                                <input id="shipping-charge" disabled={props.disabled} min="0" type="number" name="shipping-charge" className="form-input" defaultValue="unlimited" placeholder={t("unlimited")}
                                                    value={conditiondata[i].min}
                                                    onChange={(e: any) => {
                                                        var kd = [...conditiondata]
                                                        kd[i].min = e.target.value
                                                        setconditiondata(kd)
                                                    }}
                                                />
                                            </div>
                                            <div className="w-full">
                                                <label htmlFor="shipping-charge">{t('max')} {conditiondata[i].type.value != '08' ? t('products') : t('order')} {t('value')}</label>
                                                <input id="shipping-charge" disabled={props.disabled} min="0" type="number" name="shipping-charge" className="form-input" defaultValue="unlimited" placeholder={t("unlimited")}
                                                    value={conditiondata[i].max}
                                                    onChange={(e: any) => {
                                                        var kd = [...conditiondata]
                                                        kd[i].max = e.target.value
                                                        setconditiondata(kd)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </>
                                ) : conditiondata[i].type.value == '07' || conditiondata[i].type.value == '08' ? (
                                    <div className="flex items-center gap-3">
                                        <div className="w-full">
                                            <label htmlFor="shipping-charge">{t('min')} {conditiondata[i].type.value == '08' ? "Product" : "Order"} {t('value')}</label>
                                            <input id="shipping-charge" disabled={props.disabled} type="number" name="shipping-charge" className="form-input" defaultValue="unlimited" placeholder={t("unlimited")}
                                                value={conditiondata[i].min}
                                                onChange={(e: any) => {
                                                    var kd = [...conditiondata]
                                                    kd[i].min = e.target.value
                                                    setconditiondata(kd)
                                                }}
                                            />
                                        </div>
                                        <div className="w-full">
                                            <label htmlFor="shipping-charge">{t('max')} {conditiondata[i].type.value == '08' ? "Product" : "Order"} {t('value')}</label>
                                            <input id="shipping-charge" disabled={props.disabled} type="number" name="shipping-charge" className="form-input" defaultValue="unlimited" placeholder={t("unlimited")}
                                                value={conditiondata[i].max}
                                                onChange={(e: any) => {
                                                    var kd = [...conditiondata]
                                                    kd[i].max = e.target.value
                                                    setconditiondata(kd)
                                                }}
                                            />
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                            {i != 0 ?
                                <button type="button" className="btn btn-danger p-1.5 mt-6" disabled={props.disabled} onClick={() => removekeyf(i)}>
                                    <IconX className="shrink-0" />
                                </button>
                                : null}
                        </div>
                        {i + 1 === conditionlisting.length ?
                            null
                            :
                            <hr className="border-white-light dark:border-[#1b2e4b] mt-6 mb-3" />
                        }
                    </>
                )
            })}
        </div>
    );
};

export default ConditionSetup;
