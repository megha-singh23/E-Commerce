import React,{useState,useEffect} from 'react'

const Hook = () => {

    const [price,setPrice]=useState(0);
    // const[count]=useState(0);

    console.log('price:',price);
    // console.log('Count: ',count);

    useEffect(()=>{
        setPrice(price+10);
    },[])
    

  return (
    <>
    <h2>Price: {price}</h2>
    {/* <h2>Count: {count}</h2> */}
    <button  className='border-4 bg-blue-500 p-3 my-3 mx-3'>Increase_Price</button>
    {/* <button onClick={()=>count} className='border-4 bg-blue-500 p-3 my-3 mx-3'>Increase_Count</button> */}
    </>
  )
}

export default Hook