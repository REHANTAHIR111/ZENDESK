import { FC } from 'react';

interface IconInWidget4Props {
    className?: string;
}

const IconInWidget4: FC<IconInWidget4Props> = ({ className }) => {
    return (
        <svg height='22' width='22' xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 26 26" className={className}>
            <path fill="#F79A3E" d="M9.3 5.4c4.9 4.9 4.9 12.7 0 17.6L.5 14.2l8.8-8.8z"></path>
            <path d="M19.2 15.4c-3.4-3.4-3.4-9 0-12.4l6.2 6.2-6.2 6.2z"></path>
        </svg>
    );
};

export default IconInWidget4;
