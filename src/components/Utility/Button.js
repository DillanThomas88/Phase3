import SVG from "../../SVG"


export function Button({
    click,
    detail,
    icon,
    id,
    state
}) {
    return (
        <button
            onClick={() => click()}
            id={id}
            className={`${detail && 'px-4 border rounded-md bg-red-300 uppercase '} ${state !== icon - 1 && 'font-normal'} flex justify-center text-center items-center font-medium w-[24px]`}>
            {icon && typeof icon === 'number' ? icon : <SVG title={icon} classes={`h-full ${detail && 'mr-2'}`} />}

            {detail && detail}
        </button>
    )
}