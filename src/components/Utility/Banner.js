export function Banner({
    name,
    index,
    difficulty,
    description,
    animation
}){
    return (
        <div className={`flex justify-between items-center w-full text-center h-10 border-b pr-4 ${animation && animation} ${index === 2 ?'text-rose-500':'text-stone-600'}`}>
            <div className={` ${index === 2 ?'bg-rose-500':'bg-stone-600'} ${index === 1 && 'opacity-50'} w-8 h-8 ml-2 
            border-l-[4px] border-b-[5px] border-[1px] border-neutral-800 rounded-sm rounded-tl-md rounded-br-md rounded shadow-sm shadow-zinc-500
            text-white flex items-center justify-center text-xl`}>{index && index}</div>
            <div className={`${index === 1 && 'opacity-50'}`}>{name && name}</div>
            <div className={`${index === 1 && 'opacity-50'}`}>{difficulty && difficulty}</div>
            <div className={`${index === 1 && 'opacity-50'} w-2/6`}>{description && description}</div>
        </div>
    )
}