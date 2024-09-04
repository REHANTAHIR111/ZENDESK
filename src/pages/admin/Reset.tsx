import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { setPageTitle } from "../../store/themeConfigSlice";
import IconLockDots from "../../components/Icon/IconLockDots";
import { get, post } from "../api/ApiCalls";
import Swal from 'sweetalert2';
import { useTranslation } from "react-i18next";

const Reset = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const { token } = useParams();
    const [errorMsg, seterrorMsg] = useState('');
    const didMount = useRef(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState<any>(null);
    const [password, setPassword] = useState<any>(null);
    const [error, setError] = useState<any>('');
    const [passwordError, setpasswordError] = useState(false);
    const [forgot, setForgot] = useState<any>(false);
    const [matchError, setmatchError] = useState<any>('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [PasswordErrorMsg, setPassworderrorMsg] = useState('');
    const [CheckPassError, setCheckPassError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setPageTitle('Reset Password'));
        checkPage()
    }, [token]);

    const checkPage = () => {
        get("reset-request-check/" + token).then((responseJson: any) => {
            if (responseJson.success === false) {
                navigate("/admin/signin");
            }
            // localStorage.removeItem("email")
        })
    }

    function submitData() {
        var sendData = {
            email: localStorage.getItem("email"),
            password: password,
            password_confirmation: confirmPassword,
            token: token,
        }

        if (!confirmPassword || !password) {
            coloredToast(t('danger'), `${t('errorPleaseAdd')} ` + (!email ? `${t('email')}, ` : '') + (!confirmPassword ? `${t('confirmPassword')}, ` : '') + (!password ? `${t('password')}, ` : '') + '!')
            if (!password) {
                setpasswordError(true)
                setTimeout(function () {
                    setpasswordError(false)
                }, 3000)
            }
            var str = password;
            if (str.length < 6 || str.length > 20 || str.search(/\d/) == -1 || str.search(/[a-zA-Z]/) == -1 || str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) != -1) {
                setPassworderrorMsg("Password requirements: 6-20 characters, 1 number, 1 letter, 1 symbol.")
                setCheckPassError(true)
                setTimeout(function () {
                    setCheckPassError(false)
                }, 5000)
            }
            if (!confirmPassword && password != confirmPassword) {
                setmatchError(true)
                setTimeout(function () {
                    setmatchError(false)
                }, 3000)
            }
            return false
        }

        post("user/reset-password", sendData).then((responseJson: any) => {
            if (responseJson.success === true) {
                navigate("/admin/signin");
                localStorage.removeItem("email")
                coloredToast(t('success'), t('passwordSetupSuccesfull'))
            }
            else {
                coloredToast(t('danger'), `${t("error")} ` + responseJson.message)
            }
        })
    }

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


    return (
        <div>
            <div className="absolute inset-0">
                <img
                    src='/assets/images/auth/bg-login.webp'
                    alt="image"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16 shadow-lg shadow-white">
                <div className="absolute inset-0 me-auto">
                    <img
                        src='/assets/images/auth/logo-white.png'
                        alt="image"
                        className="h-24 ml-auto mr-auto mt-24"
                    />
                </div>
                <div className="relative w-full max-w-[500px] rounded-md bg-[linear-gradient(45deg,#f2d0ba_0%,rgba(240,102,12,1)_25%,rgba(240,102,12,1)_75%,_#f2d0ba_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
                    <div className="relative flex flex-col justify-center rounded-md bg-primary/90 backdrop-blur-lg dark:bg-primary/50 px-3 lg:min-h-[450px] py-5">
                        <div className="mx-auto w-full max-w-[440px]">
                            <div className="mb-10">
                                <h1 className="text-3xl font-extrabold uppercase !leading-snug text-white md:text-4xl">{t('resetPassword')}</h1>
                                <p className="text-base font-bold leading-normal text-white-light">{t('enterPasswordReset')}</p>
                            </div>
                            <form className="space-y-5 text-white">
                                <div>
                                    <label htmlFor="Password">{t('password')}</label>
                                    <div className="relative text-white-dark">
                                        <input
                                            id="Password"
                                            type="password"
                                            placeholder="Enter Password"
                                            className="form-input ps-10 placeholder:text-white-dark"
                                            value={password}
                                            onChange={(e: any) => { setPassword(e.target.value) }}
                                        />
                                        {passwordError ? (
                                            <label
                                                htmlFor="invalid"
                                                className="d-block fs-9 mt-0 text-danger">
                                                {t('passwordCondition')}
                                            </label>
                                        ) : null}
                                        {CheckPassError ?
                                            <label
                                                htmlFor="invalid"
                                                className="d-block fs-9 mt-0 text-danger">
                                                {PasswordErrorMsg}
                                            </label>
                                            : null}
                                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                            <IconLockDots fill={true} />
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="Password">{t('confirmPassword')}</label>
                                    <div className="relative text-white-dark">
                                        <input id="confirm_password" type="password" name="confirm_password" value={confirmPassword} className="form-input ps-10 placeholder:text-white-dark" placeholder={t('confirmPassword')} onChange={(e: any) => {
                                            setconfirmPassword(e.target.value)
                                            password != e.target.value && e.target.value != '' ? setmatchError(true) : setmatchError(false)
                                        }} />
                                        {matchError ? (
                                            <label
                                                htmlFor="invalid"
                                                className="d-block fs-9 mt-0 text-danger">
                                                {t('pleaseAddSamePassword')}
                                            </label>
                                        ) : null}
                                        <span className="absolute start-4 top-7 -translate-y-4.5">
                                            <IconLockDots fill={true} />
                                        </span>
                                    </div>
                                </div>
                                {/* {loading == false ? */}
                                <button
                                    type="button"
                                    className="btn btn-secondary !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
                                    onClick={() => { submitData() }}
                                >
                                    {t('signIn')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reset;
