// 'use client';
// import { usePathname, useRouter } from 'next/navigation';

// interface CustomMobileLinkProps {
//     href: string;
//     title: string;
//     className?: string;
// }

// const CustomMobileLink: React.FC<CustomMobileLinkProps> = ({
//     href,
//     title,
//     className,
// }) => {
//     const pathname = usePathname();
//     const router = useRouter();

//     const handleClick = () => {
//         router.push(href);
//     };

//     return (
//         <button
//             className={`${className} relative group`}
//             onClick={() => handleClick()}
//         >
//             {title}

//             <span
//                 className={`
//                 h-[1px] inline-block bg-dark
//                 absolute left-0 -bottom-0.5
//                 group-hover:w-full transition-[width] ease duration-300
//                 ${pathname === href ? 'w-full' : 'w-0'}
//                 dark:bg-light
//             `}
//             >
//                 &nbsp;
//             </span>
//         </button>
//     );
// };

// export default CustomMobileLink;
