import Tile from "../components/Phases/Tile"

export function createGrid(string, data){

    let res = parseInt(string.split('-')[2])
    // console.log(res);
    let grid = []
    for (let i = 0; i < res; i++) {
        for (let j = 0; j < res; j++) {
            if(data[0][0] == i + 1 && data[0][1] == j + 1){
                grid.push(<Tile key={i.toString() + j.toString()} style={'bg-violet-500'} />)
            } else if (data[1][0] == i + 1 && data[1][1] == j + 1) {
                grid.push(<Tile key={i.toString() + j.toString()} style={'bg-stone-500'} />)
            } else if (data[2][0] == i + 1 && data[2][1] == j + 1) {
                grid.push(<Tile key={i.toString() + j.toString()} style={'bg-white'} />)
            }else {
                grid.push(<Tile key={i.toString() + j.toString()} style={'bg-white'} />)
            }

            
        }
        
    }


    return(<div className={`grid ${string} gap-[2px] content-center justify-center`}>
        {grid}
    </div>)
}


export function getPhase(e, setState){

    setState(parseInt(e.target.getAttribute('id')))

}