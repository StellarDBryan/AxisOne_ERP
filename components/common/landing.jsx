import Image from "next/image"; 
import { HeroSectionBtn } from "../ui/buttons";

const content = {
    heroSection: {
        title: "Gestiona tus inventarios de forma colaborativa y eficiente", 
        subtitle: "Empodera a tu equipo con una plataforma centralizada para un control total de tus recursos.", 
        btn_text: "Comenzar gestión", 
    }, 
};

export default function HeroSection(){

    return (
        <>
            <section className="relative flex items-center justify-center w-full h-screen bg-neutral-800/75 overflow-hidden">
                <Image 
                    src='/images/backgrounds/heroSection_bg.jpg'
                    alt="ERP image"
                    fill
                    className="object-cover absolute inset-0 -z-10"
                /> 
                <div className="w-3/5 gap-5 flex flex-col items-center text-gray-50 z-20">
                    <h1 className="text-h3 font-extrabold text-center ">{content.heroSection.title}</h1>
                    <p className="w-4/5 text-h5 font-semibold text-center">{content.heroSection.subtitle}</p>
                    <HeroSectionBtn>
                        {content.heroSection.btn_text}
                    </HeroSectionBtn>
                </div> 
            </section> 
        </>
    );
}