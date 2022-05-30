export function Label({label, indent, css}){
    return <label className={`${indent && 'indent-5'} ${css && css} uppercase my-2 w-full flex justify-start font-semibold`}>{label}</label>
}