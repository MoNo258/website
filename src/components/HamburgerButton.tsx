'use client';
import { useState } from 'react';

const HamburgerButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <button
            className="flex flex-col justify-center items-center hidden lg:flex"
            onClick={handleClick}
        >
            <span
                className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                    -translate-y-0.5 ${
                        isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
            ></span>
            <span
                className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                    my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            ></span>
            <span
                className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                    translate-y-0.5 ${
                        isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
            ></span>
        </button>
    );
};

export default HamburgerButton;
