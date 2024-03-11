import React, {useState, useEffect} from 'react';
import './App.css';

// importing components
import Form from './Components/Forms';
import List from './Components/List';

function App() {
  

  const [inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState("all");
  const[filteredTodos, setFilteredTodos] = useState([]);



  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  
  const getLocal = () => {
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocal();
  }, [todos, status]);


  



  return (
    <div className="App">
      <header>
        <h1>Toodoo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} setStatus={setStatus} />
      <List setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
