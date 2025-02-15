import { motion } from 'motion/react'; 
import { useState, useEffect } from 'react'; 
import { usePathname } from 'next/navigation';
import { useSession  } from 'next-auth/react'; 
import { signOut } from 'next-auth/react';
import Image from "next/image"; 
import Link from "next/link"; 
import { SidebarBtn } from './buttons'; 

const content = {
    pages: {
        dashboard: "Panel", 
        actives: "Activos", 
        movements: "Movimientos", 
        users: "Usuarios", 
        providers: "Proveedores", 
    }, 
    profileDropdown: [
        {
            name: 'Cerrar Sesión', 
        }
    ], 
};


export function Sidebar(){ 

    const { data: session } = useSession(); 
    const [hover, setHover] = useState(false); 
    
    return (session && 
        <>
            <motion.nav 
                initial={{
                    width: 100,
                    height: '100vh', 
                }}
                whileHover={{
                    width: 225, 

                }}
                transition={{
                    type: 'spring', 
                    duration: 0.5, 
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="hidden md:flex fixed flex-col drop-shadow-2xl py-5 gap-10 z-50 h-screen items-center p-3 bg-neutral-800/50 backdrop-blur-md">
                <Link href='/'>
                    <Image 
                        src='/images/logos/AxisOne_icon1.png'
                        alt="AxisOne Logo"
                        width={70}
                        height={70}
                        className="filter brightness-150 w-[60px]"
                    />
                </Link> 
                <div className='flex flex-col w-full items-center gap-5'>
                    <SidebarBtn redirectURL='/dashboard'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className={`flex-shrink-0 transition-all duration-75 ease-in-out `}>
                            <path fill="currentColor" d="M16 20q-.425 0-.712-.288T15 19v-5q0-.425.288-.712T16 13h5q.425 0 .713.288T22 14v5q0 .425-.288.713T21 20zm-4-9q-.425 0-.712-.288T11 10V5q0-.425.288-.712T12 4h9q.425 0 .713.288T22 5v5q0 .425-.288.713T21 11zm-9 9q-.425 0-.712-.288T2 19v-5q0-.425.288-.712T3 13h9q.425 0 .713.288T13 14v5q0 .425-.288.713T12 20zm0-9q-.425 0-.712-.288T2 10V5q0-.425.288-.712T3 4h5q.425 0 .713.288T9 5v5q0 .425-.288.713T8 11z"/>
                        </svg>
                        <span 
                            className={`${hover ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ease-in-out`}>
                                {content.pages.dashboard}
                        </span>
                    </SidebarBtn>
                    <SidebarBtn redirectURL='/actives' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className={`flex-shrink-0 transition-all duration-75 ease-in-out `}>
                            <path fill="currentColor" d="M2 10.96a.985.985 0 0 1-.37-1.37L3.13 7c.11-.2.28-.34.47-.42l7.83-4.4c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.19.1.35.26.44.46l1.45 2.52c.28.48.11 1.09-.36 1.36l-1 .58v4.96c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-5.54c-.3.17-.68.18-1 0m10-6.81v6.7l5.96-3.35zM5 15.91l6 3.38v-6.71L5 9.21zm14 0v-3.22l-5 2.9c-.33.18-.7.17-1 .01v3.69zm-5.15-2.55l6.28-3.63l-.58-1.01l-6.28 3.63z"/>
                        </svg>
                        <span 
                            className={`${hover ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ease-in-out`}>
                                {content.pages.actives}
                        </span> 
                    </SidebarBtn>
                    <SidebarBtn redirectURL='/movements'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20" className={`flex-shrink-0 transition-all duration-75 ease-in-out `}>
                            <path fill="currentColor" fillRule="evenodd" d="M13.2 2.24a.75.75 0 0 0 .04 1.06l2.1 1.95H6.75a.75.75 0 0 0 0 1.5h8.59l-2.1 1.95a.75.75 0 1 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 0 0-1.06.04m-6.4 8a.75.75 0 0 0-1.06-.04l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 1 0 1.02-1.1l-2.1-1.95h8.59a.75.75 0 0 0 0-1.5H4.66l2.1-1.95a.75.75 0 0 0 .04-1.06" clipRule="evenodd"/>
                        </svg>
                        <span 
                            className={`${hover ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ease-in-out`}>
                                {content.pages.movements}
                        </span>
                    </SidebarBtn>
                    <SidebarBtn redirectURL='/users' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className={`flex-shrink-0 transition-all duration-75 ease-in-out `}>
                            <g fill="currentColor">
                                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m7.5 3a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-13.5 0a3 3 0 1 1 6 0a3 3 0 0 1-6 0m4.06 5.368A6.75 6.75 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498a.75.75 0 0 1-.372.568A12.7 12.7 0 0 1 12 21.75a12.7 12.7 0 0 1-6.337-1.684a.75.75 0 0 1-.372-.568a6.8 6.8 0 0 1 1.019-4.38" clipRule="evenodd"/>
                                <path d="m5.082 14.254l-.036.055a8.3 8.3 0 0 0-1.271 5.08a9.7 9.7 0 0 1-1.765-.44l-.115-.04a.56.56 0 0 1-.373-.487l-.01-.121Q1.5 18.15 1.5 18a3.75 3.75 0 0 1 3.582-3.746m15.144 5.135a8.3 8.3 0 0 0-1.308-5.135a3.75 3.75 0 0 1 3.57 4.047l-.01.121a.56.56 0 0 1-.373.486l-.115.04q-.851.302-1.764.441"/>
                            </g>
                        </svg>
                        <span 
                            className={`${hover ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ease-in-out`}>
                                {content.pages.users}
                        </span> 
                    </SidebarBtn>
                    <SidebarBtn redirectURL='/providers' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className={`flex-shrink-0 transition-all duration-75 ease-in-out `}>
                            <path fill="currentColor" d="m9.564 8.73l.515 1.863c.485 1.755.727 2.633 1.44 3.032c.713.4 1.618.164 3.428-.306l1.92-.5c1.81-.47 2.715-.705 3.127-1.396c.412-.692.17-1.57-.316-3.325l-.514-1.862c-.485-1.756-.728-2.634-1.44-3.033c-.714-.4-1.619-.164-3.429.307l-1.92.498c-1.81.47-2.715.706-3.126 1.398c-.412.691-.17 1.569.315 3.324"/>
                            <path fill="currentColor" d="M2.277 5.247a.75.75 0 0 1 .924-.522l1.703.472A2.71 2.71 0 0 1 6.8 7.075l2.151 7.786l.158.547a2.96 2.96 0 0 1 1.522 1.267l.31-.096l8.87-2.305a.75.75 0 1 1 .378 1.452l-8.837 2.296l-.33.102c-.006 1.27-.883 2.432-2.21 2.776c-1.59.414-3.225-.502-3.651-2.044s.518-3.129 2.108-3.542q.119-.03.237-.052L5.354 7.474a1.21 1.21 0 0 0-.85-.831L2.8 6.17a.75.75 0 0 1-.523-.923"/>
                        </svg>
                        <span 
                            className={`${hover ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ease-in-out`}>
                                {content.pages.providers}
                        </span> 
                    </SidebarBtn>
                </div>
                <div tabIndex={0} role="button" className=' dropdown dropdown-top flex flex-row group justify-around items-center hover:bg-gray-500/40 focus:bg-gray-500/40 rounded-md gap-4 w-full px-2 py-4 mt-auto transition-colors duration-100 ease-in-out'>
                    <div className="btn btn-ghost btn-circle w-[55px] h-[55px] avatar ring-2 ring-gray-100 group-hover:ring-4 group-hover:ring-cyan-300 group-focus:ring-4 group-focus:ring-cyan-300">
                        <div className="w-auto rounded-full">
                            <Image
                                width={200}
                                height={200}
                                alt="User profile image"
                                className="object-contain w-[200px]"
                                src={session?.user?.image || "/images/defaultAvatar.png"} />
                        </div>
                    </div> 
                    <div className={`flex flex-col justify-around w-full transition-opacity duration-100 ease-in-out ${hover ? 'opacity-100' : 'opacity-0'}`}>
                        <p className='text-p text-gray-50 text-nowrap font-semibold'>{session?.user?.name}</p>
                        <p className='text-p text-gray-50 text-nowrap font-medium'>Administrador</p>
                    </div> 
                    <ul
                        tabIndex={0}
                        className="menu menu-sm bg-neutral-700 text-gray-50 dropdown-content rounded-md drop-shadow-xl mt-3 w-52 p-2 shadow">
                        <li>
                            <button className="bg-inherit hover:bg-gray-100 hover:text-neutral-800" onClick={() => signOut()}>
                                {content.profileDropdown[0].name}
                            </button>
                        </li>
                    </ul>
                </div>
            </motion.nav> 
        </>
    );
}