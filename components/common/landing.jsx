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
        problems: [
            "¿Tus equipos trabajan con datos desactualizados?", 
            "¿El manejo individual de inventarios dificulta la colaboración?", 
            "¿Pierdes tiempo tratando de coordinar información entre departamentos?", 
        ], 
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
            <section className="w-full h-[700px] py-10 gap-5 bg-gradient-to-b from-neutral-800 to-neutral-600 flex items-center justify-center">
                <div className="w-3/4 flex flex-col gap-8 items-center justify-around">
                    <div className="flex flex-row gap-5">
                        {content.solutions.problems.map((problem, id) => (
                            <h2 key={id} className="text-h5 text-center font-semibold text-gray-50">{problem}</h2>
                        ))}
                    </div>
                    <div className="flex flex-row items-center justify-center gap-10">
                        <h5 className="text-h4 text-center w-1/2 font-semibold text-gray-50">
                            {content.solutions.intro.with}
                            <span className="text-cyan-300">
                                {content.project_name}
                            </span>
                            {content.solutions.intro.text}
                        </h5>
                        <div className="w-[250px] h-[250px] flex items-center justify-center text-gray-50 border border-solid border-white rounded-3xl">
                            Logo
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}