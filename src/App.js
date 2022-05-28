
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
import { UtilityButton } from './components/Utility/UtilityButton';
import { Header } from './components/Utility/Header';



function App() {


  const puzzleList = process.env.REACT_APP_PUZZLES.split('/').map(x => x.split('-').map(y => y.split(',')))
  // console.log(puzzleList);

  const [state, setState] = useState(0)
  const [phase, setPhase] = useState('animate-appear')


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

  const handlePhase = (e) => {

    // console.log(e.target);
    setState(parseInt(e.target.textContent) - 1)

  }



  return (
    <div style={{ height: window.innerHeight }} className="font-sans ">
      <Header />
      <main className='flex flex-col h-full w-full justify-start items-center text-center text-stone-700 bg-stone-100 pt-[45px]'>

        <Phase>
          {getGridSize()}
        </Phase>



        <div className='flex justify-between w-full px-8 my-4'>
          <div className='flex justify-center items-center font-default '>
          <UtilityButton value={1} click={handlePhase} state={state} />
          <UtilityButton value={2} click={handlePhase} state={state} />
          <UtilityButton value={3} click={handlePhase} state={state} />
            
          </div>
          <div className='flex flex-row-reverse'>
            <UtilityButton type={'edit'} />
            <UtilityButton type={'close'} />
          </div>


        </div>

        {/* <div className='my-2 text-sm text-stone-500'>Edited by THE_POET</div> */}

        <Divider />

        {/* <Label label={'Directions'} /> */}
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
            <UnitHint
            from={'text-violet-500'}
            to={'text-green-500'}
            spacesAway={'three'} />
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
