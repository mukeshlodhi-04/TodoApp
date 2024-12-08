import {createContext,useContext} from 'react';

const Todo = createContext({
    todos : [
        {
            id:1,
            todo: 'something',
            completed: Boolean
        }
    ],
    addTodo : (todos) => {},
    updateTodo : (todos,id) => {},
    removeTodo : (todos) => {},
    toggleCompleted : (id) => {}

});

const TodoProvider = Todo.Provider
export default TodoProvider

const  useTodo = () =>{
    return useContext(Todo);
}
export {useTodo};

