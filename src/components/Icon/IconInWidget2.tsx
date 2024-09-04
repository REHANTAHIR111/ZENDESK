import { FC } from 'react';

interface IconInWidget2Props {
    className?: string;
}

const IconInWidget2: FC<IconInWidget2Props> = ({ className }) => {
    return (
        <svg height='22' width='22' xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 26 26" className='hover:!text-[#EB4962]'>
            <path d="M7 7.8l6-6 6 6z"></path>
            <path fill="currentColor" d="M.5 23L13 10.4 25.5 23z"></path>
        </svg>
    );
};

export default IconInWidget2;
