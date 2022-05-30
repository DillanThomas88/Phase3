

export function UnitHint({
    from,
    to,
    spacesAway,
    animation
}) {
    return (
        <p className={`${animation} text-stone-800 font-sans text-sm w-full h-full flex items-center justify-center`}>
            <b className={`${from} mr-1`}>This</b> is {spacesAway} units away from <b className={`${to} ml-1`}>this.</b>
        </p>
    )
}