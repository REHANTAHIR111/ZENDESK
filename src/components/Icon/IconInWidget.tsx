import { FC } from 'react';

interface IconInWidgetProps {
    className?: string;
}

const IconInWidget: FC<IconInWidgetProps> = ({ className }) => {
    return (
        <svg width='22' height='22' xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 26 26" className='hover:!text-[#EB4962]'>
            <path fill="currentColor" d="M14.3 5.2L5.4 2.7l-2.5 8.9-2.5 8.9 8.9 2.4 2.5-8.8z"></path>
            <path d="M14.223 14.131l8.853-2.503 2.503 8.853-8.853 2.503z"></path>
        </svg>

    );
};

export default IconInWidget;
