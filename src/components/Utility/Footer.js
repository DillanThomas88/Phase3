export function Footer({
    footer, animation, style
}){
    return (
        <div className={`${animation && animation } ${style && style} w-full text-center pt-2 text-zinc-500 text-xs animate-appear`}>
            {footer}
            </div>
    )
}