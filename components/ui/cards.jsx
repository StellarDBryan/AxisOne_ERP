import Image from "next/image"; 
import { useState, useEffect } from "react";

const content = {
    activeCard: {
        sku: 'SKU', 
        category: 'Categoría',
        stock: 'Stock', 
    },
};


export function ActiveCard({ active }){

    const [stock, setStock] = useState(active.quantity);

    useEffect(() => {
        setStock(active.quantity);
    }, [active.quantity]); 

    return(
        <>
            <div className="card flex flex-row items-center justify-around w-[350px] h-[250px] bg-neutral-600 rounded-2xl drop-shadow-lg transition-all duration-200 ease-in-out">
                {active.image 
                    ? <Image 
                        src={active.image}
                        alt={`${active.active} Image`}
                        width={100}
                        height={100}
                        className="rounded-2xl object-contain p-3 h-[130px] w-[130px] bg-gray-200" />
                    : <Image 
                        src="/images/products/product_icon.png"
                        alt= "Product Icon"
                        width={100}
                        height={100}
                        className="rounded-2xl object-contain p-3 h-[140px] w-[140px] bg-gray-200" />}
                <div className="flex flex-col w-2/5 gap-1 text-gray-50 items-start">
                    <span className="text-h6 text-cyan-200 font-extrabold">{active.active}</span>
                    <span className="text-[0.9rem] font-medium whitespace-pre-line">{content.activeCard.sku}: {active.sku}</span>
                    <span className="text-[0.9rem] font-medium whitespace-pre-line">{active.category}</span>
                    <span className="text-[0.9rem] font-medium whitespace-pre-line">{active.provider}</span>
                    <span className="text-[1.1rem] flex items-center gap-1 flex-nowrap font-semibold whitespace-pre">
                        {content.activeCard.stock}: {active.quantity} {(stock <= active.low_stock_alert) && <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512" className="text-yellow-400"><path fill="currentColor" d="M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0 0 80 446.25h340.89a32 32 0 0 0 28.18-47.17m-198.6-1.83a20 20 0 1 1 20-20a20 20 0 0 1-20 20m21.72-201.15l-5.74 122a16 16 0 0 1-32 0l-5.74-121.95a21.73 21.73 0 0 1 21.5-22.69h.21a21.74 21.74 0 0 1 21.73 22.7Z"/></svg>}
                    </span>
                    <div className="flex flex-row w-full py-1  items-center justify-around">
                        <button className="btn btn-circle border-none bg-neutral-700/70 hover:bg-neutral-800/80 text-gray-50 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></g></svg>
                        </button>
                        <button className="btn btn-circle border-none bg-neutral-700/70 hover:bg-neutral-800/80 text-gray-50 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1792 384h-128v1472q0 40-15 75t-41 61t-61 41t-75 15H448q-40 0-75-15t-61-41t-41-61t-15-75V384H128V256h512V128q0-27 10-50t27-40t41-28t50-10h384q27 0 50 10t40 27t28 41t10 50v128h512zM768 256h384V128H768zm768 128H384v1472q0 26 19 45t45 19h1024q26 0 45-19t19-45zM768 1664H640V640h128zm256 0H896V640h128zm256 0h-128V640h128z"/></svg> 
                        </button>
                    </div>
                </div>
                
            </div>
        </>
    );
}