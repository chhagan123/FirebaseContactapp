import { useState } from 'react'
import Navbar from './components/Navbar'
import { IoMdAdd } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import './App.css'
import { Addcontact } from './components/Addcontact';
import { Modal } from './components/modal';

function App() {

  const [isopen,setopen] = useState(false);

  const open = () => {
      setopen(true);
      console.log("open")
  }
  const close = () => {
      setopen(false);
  }
  return (
    <>
     <div className="mx-auto max-w-[370px] px-4" >
    
    <Navbar/>
   
    <div className='relative flex items-center '>
    <HiMagnifyingGlass className=' cursor-pointer absolute ml-1 text-white text-3xl'/>
    <input type='text'  className='h-10 flex-grow rounded-md bg-transparent border border-white text-white pl-9'/>
   
    <div className=' border rounded-full bg-white w-[45px] h-[45px] flex items-center justify-center ml-2'>
    <IoMdAdd onClick={open}   className='w-[30px] h-[30px] cursor-pointer' />
    </div>
    
    </div>

    <div>
        <Addcontact/>
       </div>

       <div>
              <Modal isopen={isopen} close={close}/>
            </div>

          
       </div>
       
       

    </>
   
    
        
 


    
  
  )
 
}

export default App;
