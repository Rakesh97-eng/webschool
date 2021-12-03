import {useContext, useState} from 'react';
import App from './App';
import './App.css';

const Addtask=(props)=>{
    const [value,updvalue]= useState('')
   const Handle=(e)=>{
       e.preventDefault();
       if (value != '')
       {
          props.addtask(value);
           updvalue('');
       }
   }

    return(
        <form>
        <input
         type='text'
         value = {value}
         placeholder = "Entet the task"
         onChange={(e)=>updvalue(e.target.value)}
        >
        </input>
        <button onClick={Handle}>Submit</button>
        </form>
    )
}





const Todo = ()=>{

    const addtask = (text)=>{
        settasks([...tasks,{text}])
     }

   const [tasks,settasks]=useState([ {text:"WakeUp" ,iscompleted:false},
   {text:"eat" ,iscompleted:false},
   {text:"Docoding" ,iscompleted:false}
])
    
const toggleTask = (index)=>{
    let newTask = [...tasks]
    if (newTask[index].iscompleted){
        newTask[index].iscompleted = false
       
    }
   else {
        newTask[index].iscompleted = true;
       // alert('noftcomplete')
    }
    settasks(newTask);
}

 

    return(
        <div style={{textAlign:'center',backgroundColor:'slateblue',width:'50%',margin:'10px',justifyItems:'center',border:"solid black 2px"}}>
        <div>React To do list
        </div>
        {tasks.map((task,index)=>(
            <div>
                <span onClick={()=>{toggleTask(index)}} 
                className={task.iscompleted?"completed":"notcompleted"}>
                {index}
                {task.text}
                </span>
            </div>

        ))}

        <Addtask addtask={addtask}/>
        
        </div>
        
    )
}
export default Todo;