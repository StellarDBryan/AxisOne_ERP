import Image from "next/image"; 
import { HeroSectionBtn } from "../ui/buttons";

const solutionsIcons = {
    solution1: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" className="text-cyan-300 w-[70px] md:w-[100px]"><path fill="currentColor" d="M12 21q-1.875 0-3.512-.712t-2.85-1.925t-1.925-2.85T3 12t.713-3.512t1.924-2.85t2.85-1.925T12 3q2.05 0 3.888.875T19 6.35V5q0-.425.288-.712T20 4t.713.288T21 5v4q0 .425-.288.713T20 10h-4q-.425 0-.712-.288T15 9t.288-.712T16 8h1.75q-1.025-1.4-2.525-2.2T12 5Q9.075 5 7.038 7.038T5 12t2.038 4.963T12 19q2.375 0 4.25-1.425t2.475-3.675q.125-.4.45-.6t.725-.15q.425.05.675.362t.15.688q-.725 2.975-3.15 4.888T12 21m1-9.4l2.5 2.5q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-2.8-2.8q-.15-.15-.225-.337T11 11.975V8q0-.425.288-.712T12 7t.713.288T13 8z"/></svg>
    ),
    solution2: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" className="text-cyan-300 w-[70px] md:w-[100px]"><path fill="currentColor" d="M14.754 10c.966 0 1.75.784 1.75 1.75v4.749a4.501 4.501 0 0 1-9.002 0V11.75c0-.966.783-1.75 1.75-1.75zm0 1.5H9.252a.25.25 0 0 0-.25.25v4.749a3.001 3.001 0 0 0 6.002 0V11.75a.25.25 0 0 0-.25-.25M3.75 10h3.381a2.74 2.74 0 0 0-.618 1.5H3.75a.25.25 0 0 0-.25.25v3.249a2.5 2.5 0 0 0 3.082 2.433c.085.504.24.985.453 1.432Q6.539 18.999 6 19a4 4 0 0 1-4-4.001V11.75c0-.966.784-1.75 1.75-1.75m13.125 0h3.375c.966 0 1.75.784 1.75 1.75V15a4 4 0 0 1-5.03 3.866c.214-.448.369-.929.455-1.433q.277.066.575.067a2.5 2.5 0 0 0 2.5-2.5v-3.25a.25.25 0 0 0-.25-.25h-2.757a2.74 2.74 0 0 0-.618-1.5M12 3a3 3 0 1 1 0 6a3 3 0 0 1 0-6m6.5 1a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m6.5.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m6.5 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-13 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2"/></svg>    
    ),
    solution3: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" className="text-cyan-300 w-[70px] md:w-[100px]"><path fill="currentColor" d="M5.075 12H8q.275 0 .525.138t.375.412l1.1 2.2l3.1-6.2q.275-.575.9-.575t.9.575L16.625 12h2.3Q18.55 9.45 16.6 7.725T12 6T7.4 7.725T5.075 12M12 20q2.65 0 4.6-1.725T18.925 14H16q-.275 0-.525-.137t-.375-.413l-1.1-2.2l-3.1 6.2q-.275.575-.9.575t-.9-.575L7.375 14h-2.3q.375 2.55 2.325 4.275T12 20m0 2q-1.85 0-3.487-.712T5.65 19.35t-1.937-2.863T3 13h2q0 2.9 2.05 4.95T12 20t4.95-2.05T19 13h2q0 1.85-.712 3.488T18.35 19.35t-2.863 1.938T12 22m-9-9q0-1.85.713-3.488T5.65 6.65t2.863-1.937T12 4q1.55 0 2.975.5t2.675 1.45l.7-.7q.275-.275.7-.275t.7.275t.275.7t-.275.7l-.7.7Q20 8.6 20.5 10.025T21 13h-2q0-2.9-2.05-4.95T12 6T7.05 8.05T5 13zm7-10q-.425 0-.712-.288T9 2t.288-.712T10 1h4q.425 0 .713.288T15 2t-.288.713T14 3zm2 17q-2.9 0-4.95-2.05T5 13t2.05-4.95T12 6t4.95 2.05T19 13t-2.05 4.95T12 20m0-7"/></svg> 
    ),
};

const content = {
    project_name: "AxisOne", 
    heroSection: {
        title: "Gestiona tus inventarios de forma colaborativa y eficiente", 
        subtitle: "Empodera a tu equipo con una plataforma centralizada para un control total de tus recursos.", 
        btn_text: "Comenzar gestión", 
    }, 
    solutions: {
        problems: [
            {
                name: "Datos actualizados", 
                icon: <solutionsIcons.solution1 key={0} />, 
            }, 
            {
                name: "Manejo Colaborativo",
                icon: <solutionsIcons.solution2 key={1} />, 
            }, 
            {
                name: "Mejora de tiempos", 
                icon: <solutionsIcons.solution3 key={2} />, 
            }, 
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
            <section className="relative flex items-center w-full h-screen bg-neutral-800/55 md:bg-gradient-to-r lg:bg-gradient-to-r md:from-neutral-800/30 lg:from-neutral-800/40 overflow-hidden">
                <Image 
                    src='/images/backgrounds/bg2.jpg'
                    alt="ERP image"
                    fill
                    className="object-cover absolute inset-0 opacity-40"
                /> 
                <div className="w-[85%] mx-auto md:mx-0 md:ml-10 lg:w-3/5 gap-5 flex flex-col items-start text-gray-50 z-20">
                    <h1 className="text-h5 md:text-h4 lg:text-h3 font-extrabold ">{content.heroSection.title}</h1>
                    <p className="md:w-4/5 text-h6 lg:text-h5 font-semibold">{content.heroSection.subtitle}</p>
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
            <section className="w-full px-auto h-auto py-10 gap-3 sm:gap-8 bg-gradient-to-b from-neutral-800 to-neutral-600 flex flex-col items-center justify-center overflow-hidden">
                <Image 
                    src="/images/logos/AxisOne_logoH2.png"
                    alt="AxisOne Logo"
                    width={300}
                    height={100}
                    className="filter brightness-150 w-[250px] md:w-[300px] lg:w-[400px]"
                /> 
                <h5 className="text-h5 lg:text-h4 w-4/5 lg:w-3/5 text-center font-semibold text-gray-50">
                    {content.solutions.intro.with}
                    <span className="text-cyan-300">
                        {content.project_name}
                    </span>
                    {content.solutions.intro.text}
                </h5>
                <div className="flex flex-row items-center justify-around flex-wrap gap-y-1 gap-x-5 md:gap-10">
                    {content.solutions.problems.map((problem, id) => (
                        <div key={id} className="flex flex-col items-center gap-0 md:gap-2">
                            {problem.icon}
                            <h2 className="text-h6 lg:text-h5 text-center font-semibold text-gray-50">{problem.name}</h2>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}