
import './App.css';
import Header from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { NavMenu } from './NavMenu';
import { FormValidation } from './components/FormValidation';
import { ClickCounter } from './components/ClickCounter';
import { HideShow } from './components/hide&show';
import Effects from './components/Effects';
import { TodoApp } from "./components/todo-list-app";
// import Counter from './components/ClassComponent';
import Conditionalrendering from './components/Conditionalrendering';
import ReactList from './components/ReactList';
import SignupToggle from './components/SignupToggle';
import MapData from './components/MapData';
import Hooks from './Hooks';
import GetInputValues from './components/GetInputValues';
import { CounterNew } from './components/CounterNew';
import UseEffect from './components/UseEffect';
import Useref from './components/Useref';
import Usereducer from './components/Usereducer';
import UserefChangeColor from './components/UserefChangeColor';
import UsememoHook from './components/UsememoHook';
import { useState } from 'react';
import Parent from './Parent';
// const body = Header
// b()
// let {Body,Footer} ={ Body:Body,Footer:Footer}

import { counterContext } from './context/context';
function App() {
  const data = 'hello world'
  const newData = 'new hello world'
  const str = 'This is an String'

  const [num, setNum] = useState(0)
  return (
    <>
      <counterContext.Provider value={num} >
        {/* <Header/> */}
        {/* <Body/> */}
        {/* <Footer/> */}
        {/* <NavMenu/> */}

        {/* <ClickCounter name={data}/>  */}

        {/* <ClickCounter name={newData}/> */}

        {/* <HideShow  randomProp={str}/> */}
        {/* <TodoApp /> */}
        {/* <Effects/> */}
        {/* <Counter/> */}

        {/* <Conditionalrendering/> */}
        {/* <SignupToggle /> */}
        {/* <MapData/> */}

        {/* <Hooks/> */}
        {/* <MapData /> */}
        {/* <ReactList/> */}
        {/* <GetInputValues /> */}
        {/* <CounterNew /> */}
        {/* <UseEffect/> */}
        {/* <Useref/> */}
        {/* <UserefChangeColor /> */}
        {/* <Usereducer/> */}
        {/* <FormValidation /> */}
        {/* <UsememoHook /> */}

        {/* <button className='bg-gray-500 p-4 m-4' onClick={() => setNum(num + 1)}  >+</button>
        <button className='bg-gray-500 p-4 m-4' onClick={() => setNum(num - 1)} >-</button> */}

        <button onClick={() => setNum(num + 1)}>+</button>  {/* Basic Counters */}
        <button onClick={() => setNum(num - 1)}>-</button> {/* Basic Counters */}


        <Parent num={num} />
      </counterContext.Provider>
    </>
  );
}

export default App;
