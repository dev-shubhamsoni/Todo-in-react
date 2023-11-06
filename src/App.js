import { useState } from 'react';
import './App.css';

function App() {

  const [item, setItem] = useState('');
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodo(currentTodos => {
      return [
        ...currentTodos, {
          id: crypto.randomUUID(),
          title: item,
          completed: false
        }
      ]
    })
    setItem('')
  }

  const toggleTodo = (id, completed) => {
    setTodo(currentTodos => {
      return currentTodos.map(todo => {

        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo;

      })
    })
  }

  const deleteTodo = (id) => {

    
      setTodo(currentTodos => {
        return currentTodos.filter(todo => todo.id !== id)
      })



  }

  console.log(todo);
  return (
    <>
      <form className='new-tem-form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='item'> New Item</label>
          <input type='text' id='item' value={item} onChange={(e) => setItem(e.target.value)}></input>
          <button className='btn'> Add Item</button>
        </div>
      </form>

      <h1 className='header'>Todo List</h1>

      <ul className='list'>

        {todo.map((todo) => {
          return <li key={todo.id}>
            <label>
              <input type='checkbox' checked={todo.completed}
                onChange={e => toggleTodo(todo.id, e.target.checked)} />
              {todo.title}
            </label>
            <button onClick={() => deleteTodo(todo.id)} className='btn btn-danger'>Delete</button>
          </li>
        })}


      </ul>

    </>
  );
}

export default App;
