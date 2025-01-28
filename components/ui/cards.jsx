import Image from "next/image";

const content = {
    activeCard: {
        sku: 'SKU', 
        category: 'Categoría',
        stock: 'Stock', 
    },
};


export function ActiveCard({ active }){

    return(
        <>
            <div className="card flex flex-row items-center justify-around w-[350px] h-[175px] bg-neutral-600 rounded-2xl drop-shadow-lg hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
                {active.image 
                    ? <Image 
                        src={active.image}
                        alt={`${active.active} Image`}
                        width={100}
                        height={100}
                        className="rounded-2xl" />
                    : <Image 
                        src="/images/products/product_icon.png"
                        alt= "Product Icon"
                        width={100}
                        height={100}
                        className="rounded-2xl object-contain p-3 h-[120px] w-[120px] bg-gray-200" />}
                <div className="flex flex-col gap-1 text-gray-50 items-start">
                    <span className="text-h6 text-cyan-200 font-extrabold">{active.active}</span>
                    <span className="text-p font-medium whitespace-pre-line">{content.activeCard.sku}: {active.sku}</span>
                    <span className="text-p font-medium whitespace-pre-line">{active.category}</span>
                    <span className="text-[1.1rem] font-semibold whitespace-pre-line">{content.activeCard.stock}: {active.quantity}</span>
                </div>
            </div>
        </>
    );
}