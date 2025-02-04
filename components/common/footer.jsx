import Image  from "next/image";
import Link from "next/link";

const content = {
    copyright: '© AxisOne. All rights reserved by StellarDBryan.', 
    contact: {
        title: "Contacto", 
        email_title: "Correo: ", 
        email: "support@axisone.com", 
        phone_title: "Teléfono: ", 
        phone: "+52 (614) 567-8901", 
    }, 
    legal: {
        title: "Legal", 
        terms: "Términos y condiciones", 
        privacy: "Política de Privacidad", 
    }, 
};

export function Footer(){

    return (
        <>
            <footer className="footer pb-12 p-5 h-auto md:h-[250px] bg-gradient-to-b from-neutral-800 to-neutral-500 drop-shadow-2xl flex flex-row flex-wrap items-center justify-around">
                <div className="flex flex-col items-center sm:items-start gap-3">
                    <Link href='/'>
                        <Image 
                            src="/images/logos/AxisOne_logoH2.png"
                            alt="AxisOne Logo"
                            width={100}
                            height={100}
                            className="filter brightness-150 w-[250px] h-auto"
                        />
                    </Link>
                    <span className="text-p text-center text-gray-50">
                        {content.copyright}
                    </span>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-3 text-p text-gray-50">
                    <h6 className="text-h6 font-bold text-cyan-300">
                        {content.contact.title}
                    </h6>
                    <p className="font-semibold whitespace-pre">
                        {content.contact.email_title} 
                        <span className="font-medium">
                            {content.contact.email}
                        </span>
                    </p>
                    <p className="font-semibold whitespace-pre">
                        {content.contact.phone_title} 
                        <span className="font-medium">
                            {content.contact.phone}
                        </span>
                    </p>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-3 text-p text-gray-50">
                    <h6 className="text-h6 font-bold text-cyan-300">
                        {content.legal.title}
                    </h6>
                    <Link href="#">
                        <p className="font-medium link-hover">
                            {content.legal.terms}
                        </p>
                    </Link>
                    <Link href="#">
                        <p className="font-medium link-hover">
                            {content.legal.privacy}
                        </p>
                    </Link>
                </div>
            </footer>
        </>
    );
}