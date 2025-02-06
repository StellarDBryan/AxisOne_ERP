import { motion } from 'motion/react'; 
import { signIn, signOut } from 'next-auth/react'; 
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function HeroSectionBtn({ children }){

    return (
        <>
            <motion.button 
                whileTap={{scale: 0.95}}
                className="px-6 py-2 w-auto mx-auto sm:mx-0 flex flex-row items-center gap-2 font-semibold flex-nowrap group bg-transparent text-inherit hover:text-cyan-300 hover:bg-neutral-800/50 transition-colors ease-in-out duration-200 text-h6 lg:text-h5 rounded-full">
                {children}
                <svg xmlns="http://www.w3.org/2000/svg" width="39.12" height="22" viewBox="0 0 16 9" className="transform group-hover:translate-x-2 transition-transform ease-in-out duration-200">
                    <path fill="currentColor" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/>
                    <path fill="currentColor" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/>
                </svg>
            </motion.button>
        </>
    );
} 

export function SignInBtn({ children }){

    return( 
        <>
            <button
                onClick={() => signIn()} 
                className='btn btn-outline bg-transparent text-gray-50 hover:text-neutral-800 hover:border-cyan-200 hover:bg-cyan-200 rounded-full text-p'>
                {children}
            </button>
        </>
    );
} 

export function SidebarBtn({ children, redirectURL }){ 

    const pathname = usePathname();

    return (
        <Link href={redirectURL} className='w-full'>
            <motion.button 
                animate={{
                    backgroundColor: 'transparent', 
                    color: (pathname === redirectURL) ? '#67e8f9' : '#f9fafb', 
                }}
                whileHover={{
                    backgroundColor: '#67e8f9', 
                    color: '#171717', 
                }} 
                transition={{
                    type: 'spring', 
                    duration: 0.3, 
                }}
                className="btn group gap-4 px-4 py-4 flex flex-row items-center justify-start overflow-hidden flex-nowrap drop-shadow-none hover:drop-shadow-none w-full border-none bg-transparent rounded-md text-[1.1rem] text-gray-50 hover:text-neutral-800">
                {children}
            </motion.button>
        </Link>
    );
}