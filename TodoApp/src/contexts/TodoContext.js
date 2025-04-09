import { createContext, useContext} from 'react';

export const todoContext = createContext({

    todos: [

        //sample object
        {

            id: 1,
            todo: "todo message or task",
            completed: false
        }

    ],

    // to add todo task
    addTodo: (todo) => {

    },
    //to update a existing todo task
    updateTodo: (id, todo) => {

    },

    deleteTodo: (id) => {

    },

    toggleComplete: (id) => {

    }, 

   

})

//custom hooks for todocontext to use it without any elaboration
export const useTodo = () => {

    return useContext(todoContext);
}
export const TodoProvider = todoContext.Provider;

