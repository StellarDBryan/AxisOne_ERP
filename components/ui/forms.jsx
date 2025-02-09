import { FilterDropdown } from "./dropdown"; 
import { data } from "@/pages/api/data";


export function SearchActiveForm({ order, setOrder }){ 

    let categories = data.inventory1.activeCategories;

    return (
        <form action='submit' className="flex fixed top-5 ml-auto flex-row drop-shadow-lg flex-nowrap p-3 z-40 bg-neutral-800/60 backdrop-blur-md rounded-md items-center w-[80%] gap-3" >
            <label className="input outline-none rounded-md text-p bg-neutral-600 text-gray-50 flex items-center gap-2">
                <input type="text" className="grow bg-inherit focus:outline-none" placeholder="Search" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-5 w-5 opacity-70 text-gray-50">
                    <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>
            </label>
            <button type="button" onClick={() => setOrder(!order)}
                className="btn group px-4 py-2 gap-3 rounded-md bg-neutral-600 hover:bg-neutral-600/40 border-none text-p text-gray-50 m-1">
                Orden
                {order
                    ?   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14">
                            <path fill="currentColor" fillRule="evenodd" d="M3.75 0a1 1 0 0 1 1 1v9h1.5a.75.75 0 0 1 .53 1.28l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5A.75.75 0 0 1 1.25 10h1.5V1a1 1 0 0 1 1-1m8.167.75a.75.75 0 0 0-1.5 0a.5.5 0 0 1-.5.5H9.5a.75.75 0 0 0 0 1.5h.417q.259 0 .5-.063V5H9.5a.75.75 0 0 0 0 1.5h3.334a.75.75 0 0 0 0-1.5h-.917zm-.839 9.344h-.656a.672.672 0 0 1 0-1.344h.656c.37 0 .67.298.672.667v.01a.67.67 0 0 1-.672.667m0-2.844c1.11 0 2.027.833 2.157 1.909q.015.074.015.153v2.627a2.06 2.06 0 0 1-2.062 2.062h-.875c-.9 0-1.662-.575-1.945-1.375a.75.75 0 1 1 1.414-.5c.078.22.287.375.53.375h.876c.31 0 .562-.252.562-.563v-.45a2.2 2.2 0 0 1-.672.107h-.656a2.172 2.172 0 0 1 0-4.344z" clipRule="evenodd"/>
                        </svg> 
                    :   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14">
                            <path fill="currentColor" fillRule="evenodd" d="M11.078 2.844h-.656a.672.672 0 0 1 0-1.344h.656c.37 0 .67.298.672.667v.01a.67.67 0 0 1-.672.667m0-2.844c1.11 0 2.027.833 2.157 1.909q.015.074.015.153v2.625c0 1.14-.923 2.063-2.062 2.063h-.875c-.9 0-1.662-.575-1.945-1.375a.75.75 0 1 1 1.414-.5c.078.22.287.375.53.375h.876c.31 0 .562-.252.562-.563v-.45a2.2 2.2 0 0 1-.672.107h-.656a2.172 2.172 0 0 1 0-4.344zm.839 8.25a.75.75 0 0 0-1.5 0a.5.5 0 0 1-.5.5H9.5a.75.75 0 0 0 0 1.5h.417q.259 0 .5-.063V12.5H9.5a.75.75 0 0 0 0 1.5h3.334a.75.75 0 0 0 0-1.5h-.917zM3.75 0a1 1 0 0 1 1 1v9h1.5a.75.75 0 0 1 .53 1.28l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5A.75.75 0 0 1 1.25 10h1.5V1a1 1 0 0 1 1-1" clipRule="evenodd"/>
                        </svg>}
            </button> 
            <FilterDropdown title='Categorías' filters={categories} />
            <FilterDropdown title='Stock' filters={[{ name: 'Stock bajo'}, { name: 'Stock decente'}]} />
        </form>
    );
}