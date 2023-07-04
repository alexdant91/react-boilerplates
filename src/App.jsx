import { useState } from "react";

function App() {
  const [toDos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const handleInput = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos((_toDos) => {
      _toDos.push({ id: new Date().getTime(), title: title, completed: false });
      console.log(_toDos);
      return _toDos;
    });
  };

  const changeToDoStatus = (id, status) => {
    setTodos((_toDos) => {
      const index = _toDos.findIndex((item) => item.id == id);
      _toDos[index].completed = status;
      return _toDos;
    });
  };

  const deleteToDo = (id) => {
    setTodos((_toDos) => {
      return _toDos.filter((item) => item.id != id);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onInput={handleInput}
          required={true}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {toDos.map((item) => {
          return (
            <div key={item.id}>
              <input
                type="checkbox"
                defaultValue={item.completed}
                onChange={() => changeToDoStatus(item.id, !item.completed)}
              />
              <span
                className={[item.completed ? "line-through" : ""].join(" ")}
              >
                {item.title}
              </span>
              <button onClick={() => deleteToDo(item.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
