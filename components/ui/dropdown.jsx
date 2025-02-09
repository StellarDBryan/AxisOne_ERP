



export function FilterDropdown({ title, filters }) {

    return (
        <>
            <div  type="button" className="dropdown dropdown-bottom dropdown-end">
                <button  type="button" tabIndex={0} role="button" className="btn group px-4 py-2 gap-3 rounded-md bg-neutral-600 hover:bg-neutral-600/40 focus:bg-neutral-600/40 border-none text-p text-gray-50 m-1">
                    {title}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024" className="ml-auto transform transition-transform duration-150 ease-in-out group-focus:rotate-180">
                        <path fill="currentColor" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"/>
                    </svg> 
                </button> 
                <ul tabIndex={0} className="dropdown-content bg-neutral-600 menu rounded-md z-[50] w-52 p-2 shadow">
                    {filters.map((filter, id) => (
                        <label key={id} className="cursor-pointer label p-2 hover:bg-neutral-500/50 rounded-md">
                            <span className="label-text font-medium text-gray-50 text-p">{filter.name}</span>
                            <input type="checkbox" className="checkbox border-gray-50 [--chkbg:theme(colors.cyan.200)] [--chkfg:theme(colors.neutral.700)] checked:border-cyan-300" />
                        </label>
                    ))}
                </ul>
            </div> 
        </>
    );
}