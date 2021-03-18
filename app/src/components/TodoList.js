import React from 'react';
import ToDo from './ToDo'
const TodoList = ({toDos,setToDos,filteredToDos}) =>{
    console.log(toDos);
    return(
        <div className="todo-container">
        <ul className="todo-list">
            {filteredToDos.map(todo=>(
                <ToDo 
                setToDos={setToDos} 
                toDos={toDos}
                key={todo.id} 
                text={todo.text} 
                todo={todo}
                id={todo.id}/>
            ))}
        </ul>
      </div>
    );
};
export default TodoList;