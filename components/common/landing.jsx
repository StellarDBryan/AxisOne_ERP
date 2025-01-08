import Image from "next/image"; 
import { HeroSectionBtn } from "../ui/buttons";

const content = {
    project_name: "AxisOne", 
    heroSection: {
        title: "Gestiona tus inventarios de forma colaborativa y eficiente", 
        subtitle: "Empodera a tu equipo con una plataforma centralizada para un control total de tus recursos.", 
        btn_text: "Comenzar gestión", 
    }, 
    solutions: {
        title: "¿Tus equipos trabajan con datos desactualizados?\n¿El manejo individual de inventarios dificulta la colaboración?", 
        intro: {
            with: "Con ", 
            text: ", todos trabajan en el mismo flujo, con datos siempre actualizados.", 
        }, 
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

export function Solutions(){

    return (
        <>
            <section className="w-full h-screen bg-gradient-to-b from-neutral-800 to-neutral-600 flex flex-col items-center justify-center">
                <h2 className="text-h3 w-4/5 text-center font-bold text-cyan-200">{content.solutions.title}</h2>
                <div className="flex w-4/5 flex-row items-center justify-center gap-10">
                    <h5 className="text-h4 text-center w-1/2 font-semibold text-gray-50">
                        {content.solutions.intro.with}
                        <span className="text-cyan-200">
                            {content.project_name}
                        </span>
                        {content.solutions.intro.text}
                    </h5>
                    <div className="w-[300px] h-[300px] flex items-center justify-center text-gray-50 border border-solid border-white rounded-3xl">
                        Logo
                    </div>
                </div>
            </section>
        </>
    );
}