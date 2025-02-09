import { data } from "@/pages/api/data";
import { ActiveCard } from "../ui/cards";
import { FilterDropdown } from "../ui/dropdown"; 
import { useState } from "react";
import { SearchActiveForm } from "../ui/forms"; 

export function Page(){

    const [order, setOrder] = useState(true);

    let actives = data.inventory1.actives; 

    return (
        <>
            <section className="w-[93%] h-[2000px] ml-[100px] bg-transparent z-10 py-12 pt-32 gap-10 p-10 flex flex-col items-center"> 
                <SearchActiveForm order={order} setOrder={setOrder} />
                <div className={`w-full h-auto flex ${order ? 'flex-row' : 'flex-row-reverse'} flex-wrap gap-5 items-center justify-around`}> 
                    {actives.map((active, id) => (
                        <ActiveCard key={id} active={active} />
                    ))}
                </div>
            </section>
        </>
    );
} 