import SVG from "../../SVG";

export function UtilityButton({
    type,
    value,
    click,
    state
}){ return(
    <button onClick={(e) => click(e)} className={
        `${state === value - 1 && 'text-white bg-stone-800'}
        mx-2 rounded-sm border-[1px]   border-stone-800 w-[28px] h-[28px] flex justify-center items-center`
    }>
        { type && <SVG title={type} classes={'p-1 text-stone-800'} />}
        {value && value}
    </button>
)

}