import React, { useState } from 'react'
import { useTodo } from '../contexts/index';

function TodoForm() {

    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();
    const add = (e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo({ todo, completed: false });
        setTodo("")
        
    }
    return (
        <form onSubmit={add} className='px-90 my-10 '>
            <div className='flex justify-center'>
                <input type="text"
                    placeholder='Write Todo task...'
                    className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-blue-200 py-1.5'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button type="submit"
                    className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
                >Add</button>
            </div>

        </form>
    )
}

export default TodoForm