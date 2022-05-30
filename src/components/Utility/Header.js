import SVG from "../../SVG";
import { Label } from "../Details/Label";

export function Header({
    open, close, modal
}) {
    return (
        <header onClick={() => open()} className="
        fixed z-50 top-0 left-0 min-h-[50px] w-full bg-white
        flex justify-between items-center px-2">
            <SVG title={'help'} classes={'w-10 h-10'} />

            <Label label={'Phase-three'} indent={true} />
            <div className="flex items-center">
                <SVG title={'contact'} classes={'w-6 h-6 mr-2'} />
                <SVG title={'puzzle'} classes={'w-6 h-6 mr-2'} />
                {modal
                    ? <button onClick={() => close()}><SVG title={'close'} classes={'text-rose-500 w-8 h-8 pointer-events-none'} /></button>
                    : <SVG title={'menu'} classes={'text-zinc-800 w-8 h-8'} />
                }
            </div>
        </header>
    )
}