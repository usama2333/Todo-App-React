
import './App.css';
import Header from './component/Header';
import Form from './component/Form';
import React, {useEffect, useState} from 'react';
import TodoList from './component/TodoList';

function App() {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  const [input , setInput] = useState('');
  const [todos , setTodos] = useState(initialState);
  const [editTodo , setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  return (
    <div className="container">
     <div className='wrapper'>

        <div>
          <Header/>
        </div>
        <div>
          <Form 
            input= {input}
            setInput = {setInput}
            todos = {todos}
            setTodos = {setTodos}
            editTodo = {editTodo}
            setEditTodo = {setEditTodo}
          />
        </div>
        <div>
          <TodoList 
          todos={todos} 
          setTodos = {setTodos} 
          setEditTodo = {setEditTodo}

          />
        </div>
     </div>
    </div>
  );
}

export default App;
