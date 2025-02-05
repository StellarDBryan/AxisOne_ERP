import { motion } from 'motion/react'; 
import { useState, useEffect } from 'react'; 
import { usePathname } from 'next/navigation';
import Image from "next/image"; 
import Link from "next/link"; 
import { SidebarBtn } from './buttons';

const content = {
    pages: {
        dashboard: "Dashboard", 
        actives: "Activos", 
        movements: "Movimientos", 
        users: "Usuarios", 
        providers: "Proveedores", 
    }, 

};


export function Sidebar(){ 

    const pathname = usePathname();
    const [hover, setHover] = useState(false); 
    
    return (
        <>
            <motion.nav 
                initial={{
                    width: 100,
                    height: '100vh', 
                }}
                whileHover={{
                    width: 200, 

                }}
                transition={{
                    type: 'spring', 
                    duration: 0.5, 
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="flex fixed flex-col drop-shadow-2xl gap-5 z-50 h-screen items-center p-3 bg-neutral-800/70 backdrop-blur-md">
                <Link href='/dashboard'>
                    <Image 
                        src='/images/logos/AxisOne_icon1.png'
                        alt="AxisOne Logo"
                        width={70}
                        height={70}
                        className="filter brightness-150 w-[60px]"
                    />
                </Link> 
                <SidebarBtn redirectURL='/actives' pathname={pathname}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 1024 1024" className={`flex-shrink-0 transition-none ${hover ? 'ml-1' : 'ml-0'}`}>
                        <path fill="currentColor" fillRule="evenodd" d="M160 144h304c8.837 0 16 7.163 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V160c0-8.837 7.163-16 16-16m564.314-25.333l181.019 181.02c6.248 6.248 6.248 16.378 0 22.627l-181.02 181.019c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.378 0-22.627l181.02-181.019c6.248-6.248 16.378-6.248 22.627 0M160 544h304c8.837 0 16 7.163 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.837 7.163-16 16-16m400 0h304c8.837 0 16 7.163 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.837 7.163-16 16-16"/>
                    </svg>
                    <span 
                        className={`${hover ? 'ml-0' : 'ml-3'} transition-all duration-75 ease-in-out`}>
                            {content.pages.actives}
                    </span> 
                </SidebarBtn>
                <SidebarBtn redirectURL='/dashboard' pathname={pathname}>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 1024 1024" className={`flex-shrink-0 transition-none ${hover ? 'ml-1' : 'ml-0'}`}>
                        <path fill="currentColor" fillRule="evenodd" d="M160 144h304c8.837 0 16 7.163 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V160c0-8.837 7.163-16 16-16m564.314-25.333l181.019 181.02c6.248 6.248 6.248 16.378 0 22.627l-181.02 181.019c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.378 0-22.627l181.02-181.019c6.248-6.248 16.378-6.248 22.627 0M160 544h304c8.837 0 16 7.163 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.837 7.163-16 16-16m400 0h304c8.837 0 16 7.163 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.837 7.163-16 16-16"/>
                    </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 24 24" className={`flex-shrink-0 transition-none ${hover ? 'ml-1' : 'ml-0'}`}>
                        <path fill="currentColor" d="M16 20q-.425 0-.712-.288T15 19v-5q0-.425.288-.712T16 13h5q.425 0 .713.288T22 14v5q0 .425-.288.713T21 20zm-4-9q-.425 0-.712-.288T11 10V5q0-.425.288-.712T12 4h9q.425 0 .713.288T22 5v5q0 .425-.288.713T21 11zm-9 9q-.425 0-.712-.288T2 19v-5q0-.425.288-.712T3 13h9q.425 0 .713.288T13 14v5q0 .425-.288.713T12 20zm0-9q-.425 0-.712-.288T2 10V5q0-.425.288-.712T3 4h5q.425 0 .713.288T9 5v5q0 .425-.288.713T8 11z"/>
                    </svg>
                    <span 
                        className={`${hover ? '-ml-1' : 'ml-3'} transition-all duration-75 ease-in-out`}>
                            {content.pages.dashboard}
                    </span>
                </SidebarBtn>
            </motion.nav> 
        </>
    );
}