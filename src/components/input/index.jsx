import { useEffect, useRef, useState } from "react";
import "./todo.style.scss";

export default function Todo() {
  const [tasks, setTask] = useState([]);
  let [maxId, setMaxId] = useState(0);
  const texto = useRef(null);

  useEffect(() => {
    if (window.localStorage.getItem("tasks") != "[]") {
      setTask(JSON.parse(window.localStorage.getItem("tasks")));
    }
  }, []);

  useEffect(() => {
    if (window.localStorage.getItem("maxId") != "0") {
      setMaxId(Number(window.localStorage.getItem("maxId")));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  useEffect(() => {
    window.localStorage.setItem("maxId", maxId);
  });

  function WrapTask(props) {
    return (
      <div className="tasks_todo">
        {!props.text.indexOf("https://") ? (
          <a href={props.text} target="_blank">
            {" "}
            {props.text}{" "}
          </a>
        ) : (
          <p> {props.text} </p>
        )}

        <button
          onClick={() => {
            deleteIt(props.arraykey);
          }}
        >
          Kill
        </button>
      </div>
    );
  }

  function deleteIt(target) {
    let newTasks = [...tasks];
    newTasks.splice(target, 1);

    setTask(newTasks);
  }

  function onAdd(target) {
    target.preventDefault();

    if (texto.current.value.trim() != "") {
      setMaxId(++maxId);
      let task = {};
      task.id = maxId;
      task.value = texto.current.value;
      setTask([...tasks, task]);

      texto.current.value = "";
    }
  }

  return (
    <div className="todos">
      <div>
        <form onSubmit={onAdd}>
          <input type="text" className="textInput" ref={texto} />
          <button type="submit" className="submitInput">
            Submit
          </button>
        </form>
      </div>

      <div className="tasks">
        {tasks.length == 0 ? (
          <h2>Tasks To Do: none!</h2>
        ) : (
          <h2> Tasks To Do: {tasks.length} </h2>
        )}

        {tasks.map((lol, key) => (
          <WrapTask key={key} arraykey={key} id={lol.id} text={lol.value} />
        ))}
      </div>
    </div>
  );
}
