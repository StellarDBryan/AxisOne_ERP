import Image from "next/image";
import Link from "next/link";
import { SignInBtn } from "../ui/buttons";

const content = {
    signInBtn: "Iniciar sesión", 
    inputPlaceholder: 'Buscar activo...', 
    profileDropdown: [
        {
            name: 'Cerrar Sesión', 
        }
    ], 
};

export function Navbar(){

    return(
        <>
            <nav className="bg-neutral-700/30 drop-shadow-2xl backdrop-blur-md flex flex-row justify-between items-center fixed top-0 w-full h-auto py-3 px-10 z-50">
                <Link href='/' className="w-auto inline-block">
                    <Image
                        src="/images/logos/AxisOne_logoH2.png"
                        alt="AxisOne logo"
                        width={200}
                        height={200}
                        className="object-contain brightness-150 w-[180px] transform hover:scale-90 transition-transform duration-200 ease-in-out"
                    />
                </Link>
                <SignInBtn>
                    {content.signInBtn}
                </SignInBtn>
            </nav> 
        </>
    );
};