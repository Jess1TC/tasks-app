import {useState, useContext} from 'react'
import TaskContext from '../context/TaskContext'

function TaskForm() {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        
        createTask({
          title,
          des
        });
      setTitle('');
      setDes('');
    }
  return (
    <div className='max-w-md mx-auto'>
    <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
      <h1 className='text-lg text-indigo-300 pb-2'>Crea una tarea</h1>
      <input 
        placeholder='Escribe una tarea'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        className='bg-slate-300 p-3 w-full mb-2 text-indigo-800'
      />
      <textarea 
        placeholder='Escribe la descripción de la tarea' 
        onChange={(e) => setDes(e.target.value)}
        value={des}
        className='bg-slate-300 p-3 w-full mb-2  text-indigo-600 '  
      >
      </textarea>
      <button
        className='bg-indigo-400 px-3 py-2 text-white rounded-md hover:bg-indigo-700'
      >
        Guardar
      </button>
    </form>
    </div>
  )
}

export default TaskForm