import React from 'react';
import '../App.css';
import { FaTrash , FaRegEdit, FaCheckCircle } from 'react-icons/fa';


const TodoList = ({todos , setTodos , setEditTodo}) => {
    const handleDelete = ({id}) => {
        console.log('Delete function is clicked!');
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }
    

   const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed : !item.completed};
                }

                return item;
            })
        );

   } 

  

  return (
    <div>
       
       {todos.map((todo) => (

        <li className='list-items' key={todo.id}>
          <input 
            type="text"
            value = {todo.title}
            className={`list ${todo.completed ? 'complete' : ''}`}
            onChange={(event) => event.preventDefault()}
          />

          <div>
              <button className='button-complete task-button' onClick={()=> handleComplete(todo)}>
              <FaCheckCircle />

              </button>
              <button className='button-edit task-button' onClick={()=> handleEdit(todo)}>
              <FaRegEdit />

              </button>
              <button className='button-delete task-button' onClick={()=> handleDelete(todo)}>
              <FaTrash />

              </button>
          </div>

        </li>
       ))}
    </div>
  )
}

export default TodoList;
