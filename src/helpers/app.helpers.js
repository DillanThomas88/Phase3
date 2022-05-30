import Tile from "../components/Phases/Tile"


export function setGrid(data, index) {

    const { givens, colors, size } = data
    const given = givens[index]
    const gridSize = size[index]
    const res = parseInt(gridSize.split('-')[2])

    let allTiles = []

    for (let i = 0; i < res; i++) {
        for (let j = 0; j < res; j++) {

            let add = 0

            given.forEach((element, k) => {
                if (element[0] - 1 === i && element[1] - 1 === j) {
                    allTiles.push(<Tile key={i.toString() + j.toString()} style={colors[k]} />)
                    add++
                }
            })

            if (add === 0) allTiles.push(<Tile key={i.toString() + j.toString()} style={'bg-white'} />)
        }
    }

    return (
        <div className={`grid ${gridSize} gap-[2px]`}>{allTiles}</div>
    )

}


export function getPhase(e, setState) {

    setState(parseInt(e.target.getAttribute('id')))

}

export function animate(x) {
    switch (x) {
        case 0:
            return
        case 1:
            return
        case 2:
            return

        default:
            break;
    }
}


