import logo from './logo.svg';
import './App.css';
import EmojiPicker from './component/EmojiPicker/EmojiPicker';
import EmojiPickerInput from './component/EmojiPickerInput';
import { useRef,forwardRef } from 'react';

function App() {
  const refInput=useRef(null)
  
  return (
    <div className="App">
       <h2>Escribi,busca y selecciona Emoticones </h2>
      <textarea style={{"height":"80px","width":"300px"}} ref={refInput}/>
      <br />
     <EmojiPicker refInput={refInput}/>
     
    </div>
  );
}

export default forwardRef(App) ;
