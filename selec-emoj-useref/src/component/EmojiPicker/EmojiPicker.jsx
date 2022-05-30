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
  
    console.dir(e.target.childNodes[0]);
    const cursorPo=refInput.current.selectionStart
    const text=refInput.current.value;
    const prev=text.slice(0,cursorPo)
    const next=text.slice(cursorPo)
    refInput.current.value=prev+e.target.innerText+next;
    refInput.current.selectionStart=prev+e.target.innerText.length
    refInput.current.selectionEnd=prev+e.target.innerText.length;
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
     <button key={emoji.html}
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