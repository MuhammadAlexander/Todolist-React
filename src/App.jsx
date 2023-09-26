import { useState } from 'react'
import { BsPlus,BsFillTrashFill } from 'react-icons/bs';

function Menu(){
const [input,setInput] = useState('')
const [card,setCard] = useState([])


function handleClick(){
 if(card.length < 7){
  setCard([
  ...card,{
    value: input,
    id: crypto.randomUUID()
  }
 ])
 console.log(card)
}
}

function removeItem(){
}


function textInput(e){
  const isi = e.target.value
  setInput(isi)
}

return <>
  <div className='flex justify-center m-3'>
  <input type="text" className='w-[400px] h-[40px] my-auto' onChange={textInput} value={input}></input>
  <button onClick={handleClick}><BsPlus size={50}/> </button>
  </div>
  <div className=' mx-auto w-[500px] h-[300px] bg-purple-300 text-left pl-5 flex-col flex gap-5'>
  {card.map(card=>{
    return <div key={card.id} className='flex justify-between'>{card.value}
    <button onClick={removeItem} className='pr-5'><BsFillTrashFill/> </button>
    </div>
  })} 
  </div>
  </>
}




export default function App() {

  return (
    <>
    <div className='container text-center h-screen bg-[#608782]'>
     <h1 className=''>ToDoListApp</h1>
     <Menu />
    </div>
    </>
  )
}

