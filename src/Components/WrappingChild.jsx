import React, { useState } from 'react'

const WrappingChild = () => {

    const [users]=useState([
        {
            id: 1,
            Name:"Megha Singh",
            MobileNo:9911672328,
            age:20,
            skills:["Java","Html","CSS","Servlet","JSP"]
        },
        {
            id: 2,
            Name:"Shradha Singh",
            MobileNo:8851934520,
            age:20,
            skills:["Java","Html","CSS","Servlet","JSP"]
        },
        {
            id: 3,
            Name:"Jharna Thapa",
            MobileNo:9718963172,
            age:20,
            skills:["Java","Html","CSS","Servlet","JSP"]
        },
        {
            id: 4,
            Name:"Mansi Shakaya",
            MobileNo:9803451672,
            age:20,
            skills:["Java","Html","CSS","Servlet","JSP"]
        },
        {
            id: 5,
            Name:"Neeru Jhankra",
            MobileNo:8034721658,
            age:20,
            skills:["Java","Html","CSS","Servlet","JSP"]
        }
    ]);
  return (
    <> 
    <ShowTable data={users}>
    {
         users.map(user=><GenerateRow key={user.id} user={user}/>)
    }
    </ShowTable>
    </>
  )
}

export default WrappingChild


const ShowTable=({children,data})=>{
    return(
        <table className='border-2 border-black mx-auto mt-20'>
            <caption className='font-semibold'>User Details</caption>
            <thead>
                {
                    Object.keys(data[0]).map((k,i)=><th key={i} 
                    className='border-2 border-black mx-auto mt-20'>{k}</th>)
                }
                <th>Actions</th>
            </thead>
            <tbody>
                {children}
            </tbody>
            <tfoot>{
                    Object.keys(data[0]).map((k,i)=><th key={i} 
                    className='border-2 border-black mx-auto mt-20'>{k}</th>)
                }
                <th className='w-11'>Actions</th>
                </tfoot>
        </table>
    );
}

const GenerateRow=({user})=>{
    return(

        <tr className='border-2 border-black'>
            {
                Object.values(user).map((v,i)=><td key={i} 
                className='border-2 border-black p-3'>
                {
                    typeof v==="object"? JSON.stringify(v) : v
                }
                </td>)
            }
            <td className='flex gap-4 my-5 mx-5'>
                    <button className='rounded p-2 bg-blue-500 cursor-pointer hover: bg-blue-700'>Edit</button>
                    <button className='rounded p-2 bg-red-500 cursor-pointer hover: bg-red-700'>Delete</button>

            </td>
        </tr>
    );
}