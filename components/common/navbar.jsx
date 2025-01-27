import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { SignInBtn } from "../ui/buttons";
import { signOut } from "next-auth/react";

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

    const { data: session } = useSession();

    return(
        <>
            <nav className="bg-neutral-700/40 drop-shadow-2xl backdrop-blur-md flex flex-row justify-between items-center fixed top-0 w-full h-auto py-3 px-10 z-50">
                <Link href='/' className="w-auto inline-block">
                    <Image
                        src="/images/logos/AxisOne_logoH2.png"
                        alt="AxisOne logo"
                        width={200}
                        height={200}
                        className="object-contain brightness-150 w-[180px] transform hover:scale-90 transition-transform duration-200 ease-in-out"
                    />
                </Link>
                {!session 
                    ? 
                        <SignInBtn>
                            {content.signInBtn}
                        </SignInBtn>
                    : ''}
                {session 
                    ? 
                        <>
                            <input type="text" placeholder={content.inputPlaceholder} className="input input-bordered bg-neutral-100 text-h6 rounded-full focus:ring-offset-2 focus:ring-4 focus:ring-cyan-300 w-full max-w-xs" />
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ring-2 ring-gray-100 hover:ring-4 hover:ring-cyan-300 focus:ring-4 focus:ring-cyan-300">
                                    <div className="w-auto rounded-full">
                                        <Image
                                            width={200}
                                            height={200}
                                            alt="User profile image"
                                            className="object-contain w-[150px]"
                                            src={session.user.image} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm bg-neutral-700 text-gray-50 dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        <button className="bg-inherit hover:bg-gray-100 hover:text-neutral-800" onClick={() => signOut()}>
                                            {content.profileDropdown[0].name}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </>
                    : ''}
            </nav>
        </>
    );
};