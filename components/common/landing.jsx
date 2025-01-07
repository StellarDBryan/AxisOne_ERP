import Image from "next/image";

export default function HeroSection(){

    return (
        <>
            <section className="relative w-full h-screen bg-neutral-800/95 overflow-hidden">
                <Image 
                    src='/images/backgrounds/heroSection_bg.jpg'
                    alt="ERP image"
                    fill
                    className="object-cover absolute inset-0 opacity-50"
                /> 
                <div className="flex flex-col">
                    
                </div>
            </section> 
        </>
    );
}