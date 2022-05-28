export function Directions({ children }) {
    return (
        <div className="min-h-[100px] max-h-[100px] 
    overflow-y-scroll my-4 px-2 w-3/4
    flex flex-col justify-center items-start 
    bg-white border-[1px] border-neutral-300 
    shadow-md shadow-neutral-200 rounded-md"
        >

            {children}
        </div>
    )

}