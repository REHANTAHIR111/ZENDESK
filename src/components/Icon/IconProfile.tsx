import { FC } from 'react';

interface IconProfileProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconProfile: FC<IconProfileProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="9" r="3" stroke="#1C274C" stroke-width="1.5" />
            <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="0.5" fill='#EEEEEE'/>
            <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
        </svg>
    );
};

export default IconProfile;
