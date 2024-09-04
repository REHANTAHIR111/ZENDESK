import { FC } from 'react';

interface IconMoreProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconMore: FC<IconMoreProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" focusable="false" viewBox="0 0 16 16" aria-hidden="true" data-garden-id="buttons.icon" data-garden-version="8.74.0">
                <g fill="currentColor">
                    <circle cx="2.5" cy="8" r="1.5"></circle>
                    <circle cx="8" cy="8" r="1.5"></circle>
                    <circle cx="13.5" cy="8" r="1.5"></circle>
                </g>
            </svg>
        </>
    );
};

export default IconMore;
