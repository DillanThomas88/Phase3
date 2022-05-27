function Tile(props) {
    return (<div className={
        `h-12 w-12 border-[3px] border-l-[5px] border-b-[5px] 
        border-stone-900 rounded-sm border-t-[1px] border-r-[1px] 
        rounded-bl-sm rounded-tl-md rounded-br-md shadow-sm  shadow-neutral-500 ${props.style}`}>

    </div>)
}

export default Tile