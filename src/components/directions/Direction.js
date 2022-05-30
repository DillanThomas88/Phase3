export function Directions({ children }) {
    return (
        <div className="relative h-[125px] mt-4
    overflow-y-scroll overflow-x-hidden w-11/12
    flex flex-col justify-start items-start 
    bg-white border-[1px] border-neutral-300 
     rounded-md"
        >
            <div className="absolute w-full h-full flex justify-center items-center"></div>

            {children}
        </div>
    )

}