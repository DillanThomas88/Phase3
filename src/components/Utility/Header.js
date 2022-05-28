import SVG from "../../SVG";
import { Label } from "../Details/Label";

export function Header(){
    return (
        <header className="
        fixed z-50 top-0 left-0 min-h-[50px] w-full bg-white shadow-md shadow-zinc-200
        flex justify-between items-center px-2">
            <SVG title={'help'} classes={'text-zinc-800 w-8 h-8'} />
            <Label label={'Phase-three'} />
            <SVG title={'menu'} classes={'text-zinc-800 w-8 h-8'} />
        </header>
    )
}