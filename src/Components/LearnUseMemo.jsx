import React, { useState,useMemo  } from 'react'

// const result=expensiveOperation(5);

const LearnUseMemo = () => {

    const [result,setResult]=useState(0);
    const expensiveOperation=useMemo(()=>{
        let sum=0;
        for(let i=0;i<1000000000;i++){
            sum+=i;
        }
        return sum+num;
    },[num]
    )
const calculate=()=>{
    console.log("calculating...");
    setResult(expensiveOperation(5));
}

  return (
    <div className='mt-16'>

        <h1>Result: {result}</h1>
        <button onClick={calculate} className='rounded p-2 bg-green-500 cursor-pointer border-2'>
            calculate Sum</button>
    </div>
  )
}

export default LearnUseMemo