import { FC } from 'react';

interface IconInWidget3Props {
    className?: string;
}

const IconInWidget3: FC<IconInWidget3Props> = ({ className }) => {
    return (
        <svg width='22' height='22' xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 26 26" className='hover:!text-[#EB4962]'>
            <path d="M19 3c0 2.94-2.69 6-6 6S7 5.926 7 3h12z"></path>
            <path fill="currentColor" d="M24 12c0 6.708-4.923 11-10.993 11S2.015 18.708 2 12h22z"></path>
        </svg>
    );
};

export default IconInWidget3;
