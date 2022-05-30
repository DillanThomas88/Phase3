
import React, { useEffect, useState } from 'react';
import './output.css'
import { setGrid } from './helpers/app.helpers';
import { Hint, UnitHint } from './components/directions/Hint';
import { Directions } from './components/directions/Direction';
import { Divider } from './components/Details/Divider';
import { Label } from './components/Details/Label';
import { Board, Phase } from './components/Phases/Phase';

import { UtilityButton } from './components/Utility/UtilityButton';
import { Header } from './components/Utility/Header';
import { Modal } from './components/Utility/Modal';
import { Banner } from './components/Utility/Banner';
import { Footer } from './components/Utility/Footer';
import { puzzleList } from './helpers/app.puzzlelist';



function App() {


  const pZ = process.env.REACT_APP_PUZZLES.split('/').map(x => x.split('-').map(y => y.split(',')))

  // console.log(process.env.REACT_APP_TESTING);
  const buttonStyles = {
    default: 'opacity-0 animate-appear',
    pressed: ' text-rose-500 -mb-1 -ml-1 px-2 rounded-sm',
    not: ' shadow-sm shadow-zinc-500 border-zinc-900 border-[1px] border-l-[4px] border-b-[5px] rounded-sm rounded-tl-md rounded-br-md px-2'
  }
  // console.log(puzzleList);

  const [state, setState] = useState(0)
  const [phase, setPhase] = useState('animate-appear')
  const [modal, setModal] = useState(false)
  const [modalpage, setModalPage] = useState(0)
  const [puzzleNumber, setPuzzleNumber] = useState(0)
  const puzzles = puzzleList


  const getModalPage = (e) => {
    let name = e.target.textContent.toLowerCase()

    switch (name) {
      case 'puzzles':
        setModalPage(1)
        break;
      case 'contact':
        setModalPage(2)
        break;

      default:
        setModalPage(0)
        break;
    }
  }

  const handlePhase = (e) => {

    // console.log(e.target);
    setState(parseInt(e.target.textContent) - 1)

  }
  const handleOpen = () => {
    if (modal) return
    setModal(true)
  }



  return (
    <div style={{ height: window.innerHeight }} className="font-sans  overflow-y-scroll overflow-x-hidden">
      <Header modal={modal}
        open={() => handleOpen()}
        close={() => setModal(false)} />

      {modal &&
        <Modal close={() => setModal(false)}>
          <div className='flex justify-around pb-6 pt-6 items-center text-zinc-800 text-center text-lg'>
            <b onClick={(e) => getModalPage(e)} className={`w-24 ${buttonStyles.default} ${modalpage === 0 ? buttonStyles.pressed : buttonStyles.not}`}>Info</b>
            <b onClick={(e) => getModalPage(e)} className={`w-24 ${buttonStyles.default} ${modalpage === 1 ? buttonStyles.pressed : buttonStyles.not}`}>Puzzles</b>
            <b onClick={(e) => getModalPage(e)} className={`w-24 ${buttonStyles.default} ${modalpage === 2 ? buttonStyles.pressed : buttonStyles.not}`}>Contact</b>
          </div>
          <Divider />
          {modalpage === 0 && <div className='px-4 text-xs'>
            <p className='italic text-xs text-center animate-slideleft my-1 opacity-0'>* Phase-Three is a hand-crafted logic based puzzler for all ages. *</p>
            <Label label={'How to Play'} indent={true} css={'text-lg animate-slideleft '} />
            <Divider />
            <p className='my-3 animate-slideleft opacity-0 animation-delay-100'>Each Puzzle has <span className='text-rose-500 font-medium'>three seperate grids</span>. All of which <span className='text-rose-500 font-medium'>relate</span> to one another.</p>
            <Divider />

            <p className='my-3 animate-slideleft opacity-0 animation-delay-200'>Below the grid, Statements are given and <span className='text-rose-500 font-medium'>All statements are true unless said otherwise!</span></p>
            <Divider />

            <p className='my-3 animate-slideleft opacity-0 animation-delay-300'>The goal is to make <span className='text-rose-500 font-medium'>all Statements true</span> by changing the grid using the tools given to you:
              <ul className='mt-3 ml-1 flex justify-between px-[38px] font-medium text-center  animate-slideleft opacity-0 animation-delay-300'>
                <li>Pencil</li>
                <li className='ml-1'>Target</li>
                <li>Remove</li>
              </ul>
              <ul className='flex justify-around my-3  animate-slideleft opacity-0 animation-delay-300'>
                <UtilityButton type={'edit'} />
                <UtilityButton type={'not'} />
                <UtilityButton type={'close'} />
              </ul></p>
            <Divider />

            <p className='my-3 animate-slideleft opacity-0 animation-delay-400'>If you think your grids match up with all statments, you can submit the puzzle to see if your solution is correct.</p>
            <Divider />
            <p className='mt-3 animate-slideleft opacity-0 animation-delay-500'><span className='text-rose-500 font-bold mr-2'>NOTICE</span> All puzzles have only one solution. And every puzzle as been tested for integrity.</p>
          </div>}
          {modalpage === 1 &&
            <div>
              <Banner name={'Puzzle 1'} index={1} difficulty={'3/5'} description={'Solved'} animation={'opacity-0 animate-slideleft animation-delay-0'} />
              <Banner name={'Puzzle 2'} index={2} difficulty={'4/5'} description={'In Progress'} animation={'opacity-0 animate-slideleft animation-delay-100'} />
              <Banner name={'Puzzle 3'} index={3} difficulty={'5/5'} description={'No Status'} animation={'opacity-0 animate-slideleft animation-delay-200'} />
              <Banner name={'Puzzle 4'} index={4} difficulty={'3/5'} description={'No Status'} animation={'opacity-0 animate-slideleft animation-delay-300'} />
              <Banner name={'Puzzle 5'} index={5} difficulty={'2/5'} description={'No Status'} animation={'opacity-0 animate-slideleft animation-delay-400'} />
              <Banner name={'Puzzle 6'} index={6} difficulty={'2/5'} description={'Incomplete'} animation={'opacity-0 animate-slideleft animation-delay-500'} />
            </div>}
          {modalpage === 2 &&
            <div>
              <div className='mt-10 flex flex-col justify-center items-center text-zinc-500 px-4'>

                <p className='text-lg text-rose-500 font-medium animate-appear opacity-0 animation-delay-200'>Got Bugs!?</p>
                <p className=' font-thin text-center animate-appear opacity-0 animation-delay-200'>Please be as descriptive as possible so i can find it and squash it!</p>
                <p className='text-rose-500 my-5 animate-slideup opacity-0 animation-delay-500'>Having issues with the App?</p>
              </div>
              <div className='flex justify-center w-full animate-appear  opacity-0 animation-delay-1000'>

                <form className='w-5/6'>
                  <label className='text-zinc-400 text-sm'>Your Email:
                    <input type={'text'} className={'resize-none form-control block w-full px-3 py-1.5 bg-clip-padding border border-solid rounded-sm border-zinc-300 transition ease-in-out m-0 focus:text-zinc-700 focus:bg-white focus:border-rose-500 focus:outline-none mb-4'}></input>
                  </label>
                  <label className='text-zinc-400 text-sm'> Message:
                    <span class="sr-only">Input field</span>
                    <textarea
                      class="resize-none form-control block w-full px-3 py-1.5 bg-clip-padding border border-solid rounded-sm border-zinc-300 transition ease-in-out m-0 focus:text-zinc-700 focus:bg-white focus:border-rose-500 focus:outline-none"
                      id="contact-text"
                      rows="3"
                      placeholder=""
                    ></textarea>
                  </label>

                  <button type='submit' className='px-4 py-2 border border-zinc-300 text-zinc-400 rounded md mt-4 float-right'>Send</button>

                </form>
              </div>

            </div>}
        </Modal>}

      <main className='flex flex-col h-full w-full justify-start items-center text-center text-stone-700 bg-stone-100 pt-[45px] animate-appear '>
        <Phase>
          {setGrid(puzzleList[puzzleNumber], state)}
        </Phase>

        <Footer footer={'Edited by THE_POET'} />


        <div className='flex justify-between w-full px-4 my-4'>
          <div className='flex justify-center items-center font-default '>
            <UtilityButton value={1} click={handlePhase} state={state} />
            <UtilityButton value={2} click={handlePhase} state={state} />
            <UtilityButton value={3} click={handlePhase} state={state} />

          </div>
          <div className='flex flex-row-reverse'>
            <UtilityButton type={'close'} />
            <UtilityButton type={'not'} />
            <UtilityButton type={'edit'} />
          </div>


        </div>

        <Divider />

        {/* <Label label={'Directions'} /> */}
        <Directions>
          <UnitHint
            from={'text-rose-500'}
            to={'text-violet-500'}
            spacesAway={'three'}
            animation={'opacity-0 animate-slideleft animation-delay-200'} />
          <UnitHint
            from={'text-green-500'}
            to={'text-rose-500'}
            spacesAway={'four'}
            animation={'opacity-0 animate-slideleft animation-delay-300'} />
          <UnitHint
            from={'text-violet-500'}
            to={'text-green-500'}
            spacesAway={'three'}
            animation={'opacity-0 animate-slideleft animation-delay-400'} />

        </Directions>

      </main>
    </div>
  );


}

export default App;
