

import {ReactComponent as Exclamation} from './exclamation.svg'
import {ReactComponent as Completed} from './complete.svg'
import {ReactComponent as Delete} from './delete.svg'
import {ReactComponent as Help} from './help.svg'
import {ReactComponent as Next} from './next.svg'
import {ReactComponent as Close} from './close.svg'
import {ReactComponent as Not} from './not.svg'
import {ReactComponent as Edit} from './edit.svg'
import {ReactComponent as Menu} from './menu.svg'
import {ReactComponent as Puzzle} from './puzzle.svg'
import {ReactComponent as Contact} from './contact.svg'


function SVG({title, classes}) {
    const svg = {
        exclamation: <Exclamation className={classes} />,
        exclamationx: <Exclamation className={classes} />,
        complete: <Completed className={classes} />,
        delete: <Delete className={classes} />,
        help: <Help className={classes} />,
        next: <Next className={classes} />,
        close: <Close className={classes} />,
        not: <Not className={`${classes} scale-125`} />,
        edit: <Edit className={classes} />,
        menu: <Menu className={classes}  />,
        puzzle: <Puzzle className={classes} />,
        contact: <Contact className={classes} />,
    }
    return(<>
        {svg[title]}
    </>)
}
export default SVG