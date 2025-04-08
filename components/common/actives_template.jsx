import { data } from "@/pages/api/data";
import { ActiveCard } from "../ui/cards";
import { useState, useEffect } from "react";
import { SearchActiveForm } from "../ui/forms"; 
import { ExpandableActiveCard } from "../ui/expandableCards";

export function Page(){

    const [order, setOrder] = useState(true);
    const [actives, setActives] = useState([]);

    useEffect(() => {
      const sortedActives = order
        ? [...data.inventory1.actives] 
        : [...data.inventory1.actives].reverse(); 
  
      setActives(sortedActives);
    }, [order, data]);

    return (
        <>
            <section className="w-[90%] md:w-[87%] lg:w-[90%] h-[2000px] mx-auto md:mx-0 md:ml-auto bg-transparent z-10 px-3 py-12 pt-32 gap-10 flex flex-col items-center"> 
                <SearchActiveForm order={order} setOrder={setOrder} />
                <ExpandableActiveCard content={actives} />
            </section>
        </>
    );
} 