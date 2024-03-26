"use client"
import { useState } from "react"

export default function(){
  const [text,setText]=useState("");
  const [number,setNumber]=useState(true);
  const [result,setResult]=useState([]);
  //let d= db;

  const generate = (e:any) =>{
    e.preventDefault();
    let farray  =text.toLocaleLowerCase().split(" ") as [];
    //.trim().toLocaleLowerCase().replace(",", "").replace("',","").replace(".", "")
    let prossece =[] as [];
    farray.map((t)=>{
     // let index = text.indexOf(t);
      if(prossece.indexOf(t)==-1){ 
       // d.indexOf(t)
        //  console.log(d)
        prossece.push(t)
     }
      
     
    })
    setResult(prossece.sort())
   
  }
  return(
   <div className="w-full min-h-screen bg-transparent bg-red-300">
     <div className="mx-auto mt-6 w-[300px] h-[400px] bg-transparent">
       <form className="w-full h-full" onSubmit={generate}>
        <textarea onChange={(e)=>setText(e.target.value)} className="w-full h-4/5 text-black p-2">

        </textarea>
        <button  >Show</button>
       </form>
     </div>
     <div className="mx-auto mt-6 w-[300px] h-auto bg-red-300">
      <button onClick={()=>setNumber(!number)}>Number {number&& "X"}</button>
       {result.map((res,index)=>{
        return(<div key={index}>{number && index} {res}</div>)
       })}
     </div>
   </div>
  )
}


