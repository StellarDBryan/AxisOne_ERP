import { data } from "@/pages/api/data";
import { ActiveCard } from "../ui/cards";


export function Page(){

    let actives = data.inventory1.actives;

    return (
        <>
            <section className="w-4/5 ml-[20%] bg-transparent z-10 py-20 p-10 h-auto flex flex-col">
                <div className="w-full h-auto flex flex-row flex-wrap gap-5 items-center justify-around">
                    {actives.map((active, id) => (
                        <ActiveCard key={id} active={active} />
                    ))}
                </div>
            </section>
        </>
    );
}