

export function UnitHint({
    from,
    to,
    spacesAway
}) {
    return (
        <p className='px-2 text-stone-800 font-sans text-sm'>
            - <b className={from}>This</b> is {spacesAway} units away from <b className={to}>this.</b>
        </p>
    )
}