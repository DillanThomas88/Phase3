
import React, { useEffect, useState } from 'react';
import './output.css'
import { createGrid } from './helpers/app.helpers';
import { Hint, UnitHint } from './components/directions/Hint';
import { Directions } from './components/directions/Direction';
import { Divider } from './components/Details/Divider';
import { Label } from './components/Details/Label';
import { Board, Phase } from './components/Phases/Phase';
import { Button } from './components/Utility/Button';
import SVG from './SVG';



function App() {


  const puzzleList = process.env.REACT_APP_PUZZLES.split('/').map(x => x.split('-').map(y => y.split(',')))
  // console.log(puzzleList);

  const [state, setState] = useState(0)


  const getGridSize = () => {
    switch (state) {
      case 1:
        return (createGrid('grid-cols-6', puzzleList[state]))
      case 2:
        return (createGrid('grid-cols-7', puzzleList[state]))
      default:
        return (createGrid('grid-cols-5', puzzleList[state]))
    }

  }


  return (
    <div style={{ height: window.innerHeight }} className="font-sans bg-stone-100">
      <main className='flex flex-col h-full w-full justify-start items-center text-center text-stone-700'>


        <Divider />

        <Label label={`Phase ${state + 1}`} />
        <Phase>
          {getGridSize()}
        </Phase>

        <div className='flex w-2/3 justify-around font-default'>
          <Button icon={1} id={'first'} click={() => setState(0)} state={state} />
          <SVG title={'next'} />
          <Button icon={2} id={'second'} click={() => setState(1)} state={state} />
          <SVG title={'next'} />
          <Button icon={3} id={'third'} click={() => setState(2)} state={state} />
        </div>

        {/* <div className='my-2 text-sm text-stone-500'>Edited by THE_POET</div> */}

        <Divider />

        <Label label={'Directions'} />
        <Directions>
          <UnitHint
            from={'text-stone-500'}
            to={'text-violet-500'}
            spacesAway={'three'} />
          <UnitHint
            from={'text-green-500'}
            to={'text-stone-500'}
            spacesAway={'four'} />
          <UnitHint
            from={'text-violet-500'}
            to={'text-green-500'}
            spacesAway={'three'} />

        </Directions>

        <Divider />

      </main>
    </div>
  );


}

export default App;
