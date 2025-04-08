import Image from "next/image"; 
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const content = {
    activeCard: {
        sku: 'SKU', 
        category: 'Categoría',
        stock: 'Stock', 
    },
};


export function ActiveCard({ active, seeCard, id }){

    const [stock, setStock] = useState(active.quantity);

    useEffect(() => {
        setStock(active.quantity);
    }, [active.quantity]); 

    const MotionImage = motion.create(Image);

    return(
        <>
            <motion.div 
            layoutId={`card-${active.active}-${id}`}
            className="card flex flex-row items-center justify-around gap-5 md:gap-5 w-full h-[150px] sm:w-[265px] sm:h-[150px] md:w-[310px] md:h-[175px] lg:w-[425px] lg:h-[160px] bg-neutral-600 rounded-md drop-shadow-lg transition-all duration-200 ease-in-out">
                {active.image 
                    ? <MotionImage 
                        src={active.image}
                        alt={`${active.active} Image`}
                        width={100}
                        height={100}
                        className="rounded-l-md object-contain p-3 w-[80px] h-full sm:w-[80px] md:w-[90px] lg:w-[110px] bg-gray-200" />
                    : <MotionImage 
                        src="/images/products/product_icon.png"
                        alt= "Product Icon"
                        width={100}
                        height={100}
                        className="rounded-l-md object-contain p-3 w-[80px] h-full sm:w-[80px] md:w-[90px] lg:w-[110px] bg-gray-200" />}
                <div 
                className="flex flex-col w-full pr-5 text-gray-50 gap-1 items-start overflow-hidden">
                    <motion.span 
                    layoutId={`title-${active.active}-${id}`}
                    className="text-[0.9rem] truncate sm:text-sm1 md:text-p lg:text-[1.1rem] text-cyan-200 font-extrabold">
                        {active.active}
                    </motion.span> 
                    <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-5">
                        <motion.div layoutId={`sku-${active.active}-${id}`} className="flex flex-row items-center flex-nowrap gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16" className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]">
                                <path fill="currentColor" fillRule="evenodd" d="M1 13V3h2v10zm3 0V3h1v10zm2.5 0V3h1v10zm2 0V3H11v10zm3.5 0V3h1v10zm2 0V3h1v10z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-sm1 md:text-p lg:text-[1.1rem] font-bold whitespace-pre-line">{active.sku}</span>
                        </motion.div>
                        <motion.div layoutId={`quantity-${active.active}-${id}`} className="flex flex-row items-center gap-1">
                            {(stock > active.low_stock_alert) 
                                ?   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]">
                                        <path fill="currentColor" d="M12 6V0H4v6H0v7h16V6zm-5 6H1V7h2v1h2V7h2zM5 6V1h2v1h2V1h2v5zm10 6H9V7h2v1h2V7h2zM0 16h3v-1h10v1h3v-2H0z"/>
                                    </svg>
                                :   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512" className="text-yellow-400 w-[20px] h-[20px] md:w-[25px] md:h-[25px]">
                                        <path fill="currentColor" d="M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0 0 80 446.25h340.89a32 32 0 0 0 28.18-47.17m-198.6-1.83a20 20 0 1 1 20-20a20 20 0 0 1-20 20m21.72-201.15l-5.74 122a16 16 0 0 1-32 0l-5.74-121.95a21.73 21.73 0 0 1 21.5-22.69h.21a21.74 21.74 0 0 1 21.73 22.7Z"/>
                                    </svg>} 
                            <span className="text-gray-50 font-bold md:font-extrabold text-p md:text-[1.1rem] lg:text-[1.3rem]">{active.quantity}</span>
                        </motion.div>
                    </div>
                    <div className="flex flex-col gap-[2px]">
                        <motion.div layoutId={`category-${active.active}-${id}`} className="flex flex-row text-gray-50/70 items-center flex-nowrap gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20" className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]">
                                <path fill="currentColor" d="M19.388.405a.605.605 0 0 0-1.141.399c.929 2.67-.915 4.664-2.321 5.732l-.568-.814c-.191-.273-.618-.5-.95-.504l-3.188.014a2.16 2.16 0 0 0-1.097.338L.729 12.157a1.01 1.01 0 0 0-.247 1.404l4.269 6.108c.32.455.831.4 1.287.082l9.394-6.588c.27-.191.582-.603.692-.918l.998-3.145c.11-.314.043-.793-.148-1.066l-.346-.496c1.888-1.447 3.848-4.004 2.76-7.133m-4.371 9.358a1.61 1.61 0 0 1-2.24-.396a1.614 1.614 0 0 1 .395-2.246a1.61 1.61 0 0 1 1.868.017c-.272.164-.459.26-.494.275a.606.606 0 0 0 .259 1.153q.13 0 .257-.059q.292-.137.619-.33a1.62 1.62 0 0 1-.664 1.586"/>
                            </svg>
                            <span className="text-sm1 truncate md:text-[0.9rem] lg:text-p font-medium max-w-[80%]">{active.category}</span>
                        </motion.div>
                        <motion.div layoutId={`provider-${active.active}-${id}`} className="flex flex-row text-gray-50/70 items-center flex-nowrap gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]">
                                <path fill="currentColor" d="m9.564 8.73l.515 1.863c.485 1.755.727 2.633 1.44 3.032c.713.4 1.618.164 3.428-.306l1.92-.5c1.81-.47 2.715-.705 3.127-1.396c.412-.692.17-1.57-.316-3.325l-.514-1.862c-.485-1.756-.728-2.634-1.44-3.033c-.714-.4-1.619-.164-3.429.307l-1.92.498c-1.81.47-2.715.706-3.126 1.398c-.412.691-.17 1.569.315 3.324"/>
                                <path fill="currentColor" d="M2.277 5.247a.75.75 0 0 1 .924-.522l1.703.472A2.71 2.71 0 0 1 6.8 7.075l2.151 7.786l.158.547a2.96 2.96 0 0 1 1.522 1.267l.31-.096l8.87-2.305a.75.75 0 1 1 .378 1.452l-8.837 2.296l-.33.102c-.006 1.27-.883 2.432-2.21 2.776c-1.59.414-3.225-.502-3.651-2.044s.518-3.129 2.108-3.542q.119-.03.237-.052L5.354 7.474a1.21 1.21 0 0 0-.85-.831L2.8 6.17a.75.75 0 0 1-.523-.923"/>
                            </svg>
                            <span className="text-sm1 md:text-[0.9rem] lg:text-p truncate font-medium max-w-[80%]">{active.provider}</span>
                        </motion.div>
                    </div>
                    <motion.button
                    layoutId={`button-${active.active}-${id}`} 
                    onClick={() => seeCard(active)}
                    className="btn absolute ring-2 ring-neutral-500 bottom-3 sm:bottom-16 md:bottom-3 lg:bottom-3 right-4 md:right-3 lg:right-4 btn-circle border-none bg-neutral-700/70 hover:bg-neutral-800/80 text-gray-50 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16" className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]">
                            <path fill="currentColor" fillRule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM4 6h6V5H4zm7 0h1V5h-1zm-1 2.5H4v-1h6zm1 0h1v-1h-1zM10 11H4v-1h6zm1 0h1v-1h-1z" clipRule="evenodd"/>
                        </svg>
                    </motion.button>
                </div>
                
            </motion.div>
        </>
    );
}