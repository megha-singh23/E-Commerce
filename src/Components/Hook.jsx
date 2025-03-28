import React,{useState,useEffect} from 'react'

const Hook = () => {

    const [price,setPrice]=useState(1000);
    const[count,setCount]=useState(0);
    const[num,setNum]=useState(0);
    const [datetime,setDateTime]=useState(new Date());
    const [intervalId,setIntervalId]=useState(null);

    // console.log('price:',price);
    // console.log('Count: ',count);

    useEffect(()=>{
      console.log("component mounted");
      showDateTime();
    },[])    // will run only when component is mounted or load

    // useEffect(()=>{
    //   console.log("count "+count);
    // },[count])     // runs everytime when dependency is updated 


    // useEffect(()=>{
    //   console.log("count "+count+",price "+ price);
    // },[count,price])      //runs everytime when dependency list states is updated


    useEffect(()=>{
      console.log("count "+count+",price "+ price);

    return()=>{
      clearInterval(intervalId);
        console.log("component unmounted");
      }
      
    },[count,price,intervalId]);

      // useEffect(()=>{
      //   console.log("component rendered");
        
      // })    //runs on every side-effect or when a component's state or props updated

    // useEffect(()=>{
    //     setPrice(price+10);
    // },[])

    const showDateTime=()=>{
      setIntervalId(setInterval(()=>{
          setDateTime(new Date());
          console.log("updating time.....")
      },1000));
    }

  return (
    <>
    <h1>{datetime.toString()}</h1>
    <h2>Price: {price.toFixed(2)}</h2>
    <h2>Count: {count}</h2>
    <h2>Num: {num}</h2>

    <button onClick={()=>setPrice(price*1.10)} className='rounded bg-blue-500 cursor-pointer p-3 my-3 mx-3'>Increase_Price</button>
    <button onClick={()=>setCount(count+1)} className=' rounded bg-blue-500 cursor-pointer p-3 my-3 mx-3'>
      Increase_Count</button>
    <button onClick={()=>setNum(num+1)} className=' rounded bg-blue-500 cursor-pointer p-3 my-3 mx-3'>
    Increase_Num</button>
  </>
  )
}

export default Hook