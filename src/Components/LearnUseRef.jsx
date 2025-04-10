import React, { useState ,useEffect } from 'react';
import {useRef} from 'react';

const LearnUseRef = () => {

  // const h1Ref=useRef(null);
  // const changeStyle=()=>{
  //   h1Ref.current.style.color="red";
  //   h1Ref.current.style.backgroundColor="yellow";
  // }
  const [num1,setNum1]=useState(0);
  const num2=useRef(0);

  useEffect(()=>{
    console.log("component rendered",num1,num2);
  })

  const incrementNum2=()=>{
    num2.current+=1;
  }
  return (
  <div className=' mt-16'>
      {/* <h1 ref={h1Ref} className='mt-16'>Lorem ipsum dolor sit amet consectetur, adipisicing eliore rem nam unde similique?</h1>
      <button className='rounded p-2 bg-green-500 cursor-pointer border-2' onClick={changeStyle}>Change Style</button> */}
      
     <h1 className='text-3xl'> Num1: {num1}</h1>
     <h1 className='text-3xl'> Num2:{num2.current}</h1>
      
      <button className='rounded p-2 bg-green-500 cursor-pointer border-2' onClick={()=>setNum1(num1+1)}>Increment</button>
      <button className='rounded p-2 bg-green-500 cursor-pointer border-2' onClick={incrementNum2}>Increment Num2</button>

  </div>
  )
}

export default LearnUseRef
