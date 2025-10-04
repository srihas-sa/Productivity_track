//import './Practice2.js'
import { useReducer, useState } from "react"

export default function Practice1(){

  const Reducer=(state,action)=>{
    if(action.type==="INCREMENT"){  
      console.log(state);
      return state+1;
    }   
    if(action.type==="DECREMENT"){
      return state-1;
    }   
    return state;
  }
  const [value,setValue]=useState(0);
  const [val1,dispatch]=useReducer(Reducer,0)
  const [name,setname]=useState(null);
  const ClickedIncrementfun=()=>{
    setValue(value+1);
    console.log(value); 
  }

  return(
    <div>
      <label for="Input">Give Name to the Task</label>
      <input type="text" placeholder="Add Soethig to DisplaY" value={setname} id="Input" />
      
      <button id="ClickedOnAddButton" onClick={ClickedIncrementfun} >Add Task cvvcb</button>
      <button id="ClickedOnAddButton1" onClick={()=>dispatch({type:"INCREMENT"})} >Add Task c33vvcb</button>
    </div>
  )
}
/*
let arr=["Task1","Task2"];
document.getElementById("ClickedOnAddButton").addEventListener("click",function (){
  let message=document.getElementById("Input").value;
  console.log(message)
  let parenList=document.getElementById("ItemsTobeAdded")
  {arr.map((ele)=>{
        let li=document.createElement("li");
        li.textContent=message;
        parenList.appendChild(li);
      })}
  document.getElementById("InputField").value="";
})
*/