import { FC } from 'react';

interface IconClockProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconClock: FC<IconClockProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <>
            {!fill ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#A7B4B5" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <circle  cx="12" cy="12" r="10"  />
                    <path d="M12 8V12L14.5 14.5" fill="black" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#A7B4B5" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"  stroke='gray' stroke-width='1.5' />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
                         stroke='gray' stroke-width='1.5'
                    />
                </svg>
            )}
        </>
    );
};

export default IconClock;
