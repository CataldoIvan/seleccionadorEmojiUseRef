import { useEffect, useRef, useState } from "react";
import { data as emojiList } from "./data";
import "./emojiPicker.css"
const EmojiPicker = ({ refInput }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState(emojiList);
  const containerRef=useRef(null)

  useEffect(()=>{
      window.addEventListener("click",(e)=>{
        if(!containerRef.current.contains(e.target)){
            setIsOpen(false)
            setEmojis(emojiList)
        }
      })
  },[])

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleSearchChange = (e) => {
    let emojiSearching = e.target.value.trim().toLowerCase();

    if (emojiSearching) {
     
      const search = emojiList.filter((emoji) => {
        return emoji.name.toLowerCase().includes(emojiSearching);
      });
      setEmojis(search);
    } else {
      setEmojis(emojiList);
    }
  };
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
  const handleClickEmoji = (e) => {
    const cursorPo = refInput.current.selectionStart;
    const text = refInput.current.value;
    const prev = text.slice(0, cursorPo);
    const next = text.slice(cursorPo);
    refInput.current.value = prev + e.target.textContent + next;
    refInput.current.selectionStart = cursorPo + e.target.textContent.length;

    refInput.current.selectionEnd = refInput.current.selectionStart;
    refInput.current.focus();
  };

  return (
    <div ref={containerRef} className="emojiContainer">
       
      <button onClick={handleClickOpen}>😊</button>

      {isOpen ? (
        <>
          <div className="emojiList">
          <input placeholder="Search emoticons here!" type="text" onChange={handleSearchChange} className="search" />
            {emojis.map((emoji, index) => (
              <>
                {index <= 18 ? (
                  <button
                    key={emoji.html}
                    datahtml={emoji.html}
                    onClick={handleClickEmoji}
                  >
                    {emoji.emoji}
                  </button>
                ) : (
                  ""
                )}
              </>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default EmojiPicker;
