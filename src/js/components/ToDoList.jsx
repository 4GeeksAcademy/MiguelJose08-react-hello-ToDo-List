import { useState } from "react";

function ToDoList() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && task.trim() !== "") {
      setList([...list, task]);
      setTask("");
    }
  };

  const eliminarTarea = (posicionAborrar) => {
    const nuevaLista = list.filter((item, index) => index !== posicionAborrar);
    setList(nuevaLista);
  };

  return (
    <div className="todo-container">
      <h1>todos</h1>
      <div className="todo-box">
        <input
          type="text"
          value={task}
          placeholder="What needs to be done?"
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <ul>
          {list.length === 0 ? (
            <li className="empty">No hay tareas, añadir tareas</li>
          ) : (
            list.map((item, index) => (
              <li key={index} className="todo-item">
                {item}
                <button
                  onClick={() => eliminarTarea(index)}
                  className="delete-btn"
                >
                  x
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
