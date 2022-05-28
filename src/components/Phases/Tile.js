import SVG from "../../SVG"

function Tile({
    style,
    status
}) {



    switch (status) {
        case "not":
            return (
                <div className={`h-12 w-12 flex items-center 
                justify-center opacity-25 bg-transparent 
                border-t-[1px] border-r-[1px]  border-stone-500 rounded-2xl ${style}`}>
                </div>
            )
        case "selected":
            return (
                <div className={
                    `h-12 w-12 border-[3px] border-l-[4px] border-b-[5px] 
                    border-stone-900 rounded-sm border-t-[1px] border-r-[1px] 
                    rounded-bl-sm rounded-tl-md rounded-br-md shadow-sm  shadow-neutral-500 bg-zinc-100`}>
                        <SVG title={'not'} classes={'h-full w-full text-stone-800'} />
                </div>
            )
            

        default:
            return (
            <div className={
                `h-12 w-12 border-[3px] border-l-[4px] border-b-[5px] 
                border-stone-900 rounded-sm border-t-[1px] border-r-[1px] 
                rounded-bl-sm rounded-tl-md rounded-br-md shadow-sm  shadow-neutral-500 ${style}`}>
            </div>)

    }
}

export default Tile