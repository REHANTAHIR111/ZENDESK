import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex mt-20 justify-center">
      <div className="bg-white px-10 pt-8 pb-10 rounded-md w-full max-w-[25rem] border-[6px] border-[#E5E5E5]">
        <form action="">
            <h2 className="text-center text-[1.1rem] font-normal text-gray-700 mb-4">
            Sign in to Inoviotech Team 1
            </h2>
            <p className="text-center text-sm text-blue-900 mb-7">
            <a href="#" className="hover:underline">
                Switch to customer sign-in
            </a>
            </p>
            <div className="mb-4">
            <label className="block text-sm mb-1" htmlFor="email">
                Email
            </label>
            <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>

            <div className="mb-4 relative">
            <label className="block text-sm mb-1" htmlFor="password">
                Password
            </label>
            <input
                type={showPassword ? "text" : "password"}
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-0 px-3 top-9"
            >
                {showPassword ?
                    <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" id="fi_8275675"><g fill="#8b8f99"><path clip-rule="evenodd" d="m20.5303 4.53033c.2929-.29289.2929-.76777 0-1.06066s-.7677-.29289-1.0606 0l-16.00003 16.00003c-.29289.2929-.29289.7677 0 1.0606s.76777.2929 1.06066 0l2.8469-2.8469c1.3663.6432 2.93997 1.0666 4.62277 1.0666 2.684 0 5.0903-1.0771 6.8206-2.405.8668-.6653 1.5826-1.4074 2.0883-2.1361.4917-.7086.8411-1.4862.8411-2.2089s-.3494-1.5003-.8411-2.20885c-.5057-.72871-1.2215-1.47087-2.0883-2.13612-.2621-.20118-.5398-.39661-.8316-.5834zm-3.6308 3.6308-1.7708 1.77083c.3926.59284.6213 1.30374.6213 2.06804 0 2.0711-1.6789 3.75-3.75 3.75-.7643 0-1.4752-.2287-2.06804-.6213l-1.41672 1.4167c1.06553.4341 2.24686.7046 3.48476.7046 2.2865 0 4.3802-.9229 5.9073-2.095.7619-.5847 1.3641-1.2176 1.7693-1.8014.4191-.6039.5734-1.0763.5734-1.3536s-.1543-.7497-.5734-1.3536c-.4052-.5838-1.0074-1.21668-1.7693-1.80143-.3132-.24036-.6502-.47025-1.0078-.68384zm-5.8696 5.86957c.2938.1406.6227.2193.9701.2193 1.2426 0 2.25-1.0074 2.25-2.25 0-.3474-.0787-.6763-.2193-.9701z" fill-rule="evenodd"></path><path d="m12 5.25c1.0323 0 2.0236.15934 2.9511.43101.1785.05227.2316.27561.1002.40709l-.8246.82455c-.0619.06186-.1515.08663-.2367.06702-.6394-.1471-1.3061-.22967-1.99-.22967-2.28655 0-4.38022.92292-5.90733 2.09497-.76189.58475-1.3641 1.21763-1.76924 1.80143-.41912.6039-.57343 1.0763-.57343 1.3536s.15431.7497.57343 1.3536c.35382.5099.85795 1.0571 1.48748 1.5771.11586.0957.1269.2708.02065.3771l-.70891.7089c-.09031.0903-.23442.0982-.33228.0162-.69298-.5812-1.27135-1.2074-1.69927-1.824-.49173-.7086-.8411-1.4862-.8411-2.2089s.34937-1.5003.8411-2.20885c.50571-.72871 1.22152-1.47087 2.08831-2.13612 1.73024-1.32795 4.13657-2.40503 6.82059-2.40503z"></path><path d="m12 8.25c.1185 0 .2357.00549.3513.01624.1969.01829.2681.25367.1283.39346l-1.2122 1.21226c-.6533.22484-1.1706.74214-1.39544 1.39544l-1.21226 1.2122c-.13979.1398-.37517.0686-.39346-.1283-.01075-.1156-.01624-.2328-.01624-.3513 0-2.07107 1.67893-3.75 3.75-3.75z"></path></g></svg>
                    :
                    <svg id="fi_11502607" enable-background="new 0 0 512 512" height="20" viewBox="0 0 512 512" fill="#8b8f99" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m460.465 264.803c-41.315 74.193-119.667 120.282-204.438 120.282-84.826 0-163.177-46.089-204.493-120.282-3.182-5.761-3.182-11.851 0-17.607 41.316-74.192 119.667-120.276 204.493-120.276 84.771 0 163.122 46.084 204.438 120.276 3.238 5.756 3.238 11.846 0 17.607zm26.392-32.317c-46.638-83.767-135.085-135.798-230.83-135.798-95.8 0-184.247 52.031-230.885 135.798-8.34 14.946-8.34 32.081 0 47.016 46.638 83.767 135.085 135.809 230.885 135.809 95.745 0 184.192-52.042 230.83-135.809 8.34-14.934 8.34-32.07 0-47.016zm-230.83 85.528c34.183 0 62.001-27.818 62.001-62.017s-27.818-62.017-62.001-62.017c-34.238 0-62.056 27.818-62.056 62.017s27.819 62.017 62.056 62.017zm0-154.266c-50.918 0-92.288 41.387-92.288 92.25 0 50.874 41.371 92.244 92.288 92.244 50.863 0 92.233-41.371 92.233-92.244 0-50.863-41.37-92.25-92.233-92.25z" fill-rule="evenodd"></path></svg>
                }
            </button>
            </div>

            <div className="mb-6">
            <a href="#" className="text-sm text-blue-700 underline">
                Forgot password?
            </a>
            </div>

            <button
                type="submit"
                onClick={() => {!email || !password ? '' : localStorage.setItem('header','Home'), navigate('/')}}
                className="w-full hover:bg-[#144A75] duration-300 bg-[#1F73B7] text-white font-bold py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                Sign in
            </button>
         </form>   
      </div>
    </div>
  );
};

export default SignIn;