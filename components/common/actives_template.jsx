import { data } from "@/pages/api/data";
import { ActiveCard } from "../ui/cards";


export function Page(){

    let actives = data.inventory1.actives;

    return (
        <>
            <section className="w-full bg-transparent z-10 py-20 p-10 h-screen flex flex-col">
                {actives.map((active, id) => (
                    <ActiveCard key={id} active={active} />
                ))}
            </section>
        </>
    );
}