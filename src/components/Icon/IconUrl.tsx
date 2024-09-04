import { FC } from 'react';

interface IconUrlProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconUrl: FC<IconUrlProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable="false" viewBox="0 0 14 14" data-garden-id="buttons.icon" data-garden-version="8.74.0">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 4.6v5c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1V2.7C8.2 1.5 7.2.5 6 .5s-2.2 1-2.2 2.2v7.5c0 1.8 1.5 3.3 3.3 3.3s3.3-1.5 3.3-3.3V4.6"></path>
            </svg>
        </>
    );
};

export default IconUrl;
