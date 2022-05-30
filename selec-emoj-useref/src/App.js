import logo from './logo.svg';
import './App.css';
import EmojiPicker from './component/EmojiPicker/EmojiPicker';
import EmojiPickerInput from './component/EmojiPickerInput';
import { useRef,forwardRef } from 'react';

function App() {
  const refInput=useRef(null)
  const handleOnClick=()=>{
    refInput.current.focus()
  }
  return (
    <div className="App">
      <input ref={refInput}/>
      <button onClick={handleOnClick}>Click</button>
     <EmojiPicker refInput={refInput}/>
     
    </div>
  );
}

export default forwardRef(App) ;
