import React from "react";
//import components
import Todo from "./Todo";


const List = ({setTodos, todos, filteredTodos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo setTodos={setTodos} todos={todos} text={todo.text} key={todo.id} todo={todo}/>
                ))}
            </ul>
        </div>
    );
}

export default List;