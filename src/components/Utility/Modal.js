

export function Modal({ close, children }) {
    return (
        <div className="fixed z-40 w-full mt-[50px] opacity-0 max-h-screen animate-open">
            <div className="relative h-[525px] bg-white overflow-y-scroll overflow-x-hidden">
                <div>{children}</div>

            </div>
            <div onClick={() => close()} className="bg-black w-full h-[844px] animate-backdrop"></div>

        </div>
    )
}