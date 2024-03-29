'use client';
import { MouseEventHandler } from 'react';

interface HamburgerButtonProps {
    isOpen: boolean;
    handleClick: MouseEventHandler<HTMLButtonElement>;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
    isOpen,
    handleClick,
}) => {
    return (
        <button
            className="flex flex-col justify-center items-center hidden lg:flex"
            onClick={handleClick}
        >
            <span
                className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                     ${
                         isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                     }`}
            ></span>
            <span
                className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                    my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            ></span>
            <span
                className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                     ${
                         isOpen
                             ? '-rotate-45 -translate-y-1'
                             : 'translate-y-0.5'
                     }`}
            ></span>
        </button>
    );
};

export default HamburgerButton;
