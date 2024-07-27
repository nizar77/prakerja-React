import { useState } from "react"

function Todo(){
    const [todo, setTodo] = useState("")
    const[todos, setTodos]=useState([])
    const handleChange = (e)=>{
        setTodo(e.target.value)
        // console.log(todo)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setTodos([...todos, {id:`${todo}-${Date.now()}`,todo}])
        setTodo("")
        console.log(todo)
    }


    return(
        <>
        <div className="row text-center">

        <div className="container col-md-6 ">
            <form onSubmit={handleSubmit}>
                <input className="form-control" type="text" placeholder="masukan task"  onChange={handleChange}  value={todo}/>
                <button className="btn btn-primary mt-4">Add Task</button>
            </form>
        </div>
        <div>
           {
            todos.map((t)=>{
                return(
                    <>
                   <div className="text-center mt-4">
                   
                                <p className="display-6">{t.todo}</p>
                                <td className=""><button className="btn btn-danger btn-sm">delete</button></td>                          
         
                   </div>
                    </>
                    );
            })
           }
        </div>
        </div>
        
        </>

    );
}
export default Todo