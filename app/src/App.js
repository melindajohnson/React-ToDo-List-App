import React,{useState, useEffect} from "react";
import './App.css';
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  //states
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredToDos, setFilteredToDos] = useState([]);
  //run once when the app starts
  useEffect(() =>{
    getLocalTodos();
  },[]);
  //use effect
  useEffect(() =>{
    filterHandler();
    saveLocalTodos();
  },[toDos,status]);
  //functions
  const filterHandler = () =>{
    switch(status){
      case `completed`:
        setFilteredToDos(toDos.filter(todo => todo.completed === true))
        break;
      case `uncompleted`:
        setFilteredToDos(toDos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredToDos(toDos);
        break;
    }
  }
  //save to local
const saveLocalTodos = () =>{
    localStorage.setItem('todos',JSON.stringify(toDos));
};
const getLocalTodos = () =>{
  if(localStorage.getItem('todos')===null){
    localStorage.setItem('todos',JSON.stringify([]));
  }else{
    let todoLocal = JSON.parse(localStorage.getItem('todos'));
    setToDos(todoLocal);
  }
};
  return (
    <div className="App">
     <header>
      <h1>Melinda's Todo List</h1>
    </header>
    <Form 
    toDos={toDos} 
    setToDos={setToDos} 
    inputText= {inputText} 
    setInputText={setInputText}
    setStatus={setStatus}
    />
    <TodoList 
    filteredToDos={filteredToDos} 
    setToDos={setToDos} 
    toDos={toDos}
    />
    </div>
  );
}

export default App;
