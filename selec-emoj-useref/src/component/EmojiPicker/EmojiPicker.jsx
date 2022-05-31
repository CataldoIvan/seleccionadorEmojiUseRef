import { useRef, useState } from "react"
import {data as emojiList} from "./data"

const EmojiPicker=({refInput})=>{
 const [isOpen,setIsOpen]=useState(false)
 const [emojis,setEmojis]=useState(emojiList)


 const handleClickOpen=()=>{
     setIsOpen(!isOpen)
 }
 const handleSearchChange=(e)=>{
    let emojiSearching=e.target.value.trim().toLowerCase()
   
    if(emojiSearching){
        console.log(emojiSearching);
        const search=emojiList.filter((emoji)=>{
            
            return emoji.name.toLowerCase().includes(emojiSearching) ;
           })
       setEmojis(search)
    }else{
       setEmojis(emojiList)

    }
    
}
/*  const EmojiPickerContainer=()=>{
   
     const handleSearchChange=(e)=>{
         let emojiSearching=e.target.value.trim().toLowerCase()
        
         console.log(emojiSearching);
         if(!!emojiSearching){
             const search=emojiList.filter((emoji)=>{
                 return emoji.name.toLowerCase().includes(emojiSearching);
                })
            setEmojis(search)
         }else{
            setEmojis(emojiList)

         }
         
     } 
     return (
         <>
         <input ref={inputSearch} type="text" onChange={handleSearchChange} className="search" />
         <div>{emojis.map((emoji)=>(<div key={emoji.unicode}>{emoji.emoji}</div>)
         )}</div>
         </>
     )
 }*/
const handleClickEmoji=(e)=>{
  
    console.dir(e.target);
    console.dir(e.target.attributes[0].value.slice(0,-1).length);
    console.dir(e.target.attributes[0]);
    const cursorPo=refInput.current.selectionStart
    const text=refInput.current.value;
    const prev=text.slice(0,cursorPo)
    const next=text.slice(cursorPo)
    console.log(`previo es ${prev} ,siguiente es ${next} y el de la posicoin es ${cursorPo}`);
    refInput.current.value=prev+e.target.textContent+next;
    refInput.current.selectionStart=cursorPo+e.target.attributes[0].value.slice(0,-7).length
    refInput.current.selectionEnd=refInput.current.selectionStart
    refInput.current.focus()

}

return <>
<button onClick={handleClickOpen}>😊💎💋</button>

{isOpen?
 <>
 <input  type="text" onChange={handleSearchChange} className="search" />
 <div>{emojis.map((emoji,index)=>(
     <>
     {index<=18?
     <button key={emoji.html} dataHtml={emoji.html}
     onClick={handleClickEmoji}>
     {emoji.emoji}
     </button>
     :
     ""}
     </>)
    
 )}</div>
 </>
:""}
</>
}

export default EmojiPicker