import { useEffect, useRef, useState } from "react";
import "./todo.style.scss";


// *** Import Icons
import { IoIosAddCircle } from "react-icons/io"
import { IoArrowRedo } from "react-icons/io5"
import { FaPencilAlt, FaTrashAlt, FaGithubAlt } from "react-icons/fa"





export default function Todo() {
  const [tasks, setTask] = useState([]);
  let [maxId, setMaxId] = useState(0);
  const InputRef = useRef(null)
  const hideRef = useRef(null)
  const RootRef = useRef(null)
  let showed = false;


  useEffect(() => {
    if (
      window.localStorage.getItem("tasks") != "[]" &&
      window.localStorage.getItem("tasks") != null
    ) {
      setTask(JSON.parse(window.localStorage.getItem("tasks")));
    }
  }, []);

  useEffect(() => {
    if (
      window.localStorage.getItem("maxId") != "0" &&
      window.localStorage.getItem("maxId") != null
    ) {
      setMaxId(Number(window.localStorage.getItem("maxId")));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  useEffect(() => {
    window.localStorage.setItem("maxId", maxId);
  });



  // TODO ↓ replace it with these
  // *** This are the functions which are for Components ( HTML )

  function ComponentInput() {
    // ** This is being refered by the function handleInput()
    return (
      <div className="hide" ref={hideRef}>


        <div className="box">

          <h2> Add Todo</h2>
          <form onSubmit={handleInput}>

            <input type="text" className="text-input" ref={InputRef} autoComplete="no" autoCapitalize="yes" placeholder="add Todo" />


            <div className="box-inputs">
              <input type="submit" value="Add" />
              <input type="button" value="Cancel" className="cancel" />
            </div>
          </form>

        </div>


      </div>
    )
  }

  function ComponentTask(props) {
    return (
      <div className="Component-task">

        {
          (props.text.toLowerCase().includes("https://"))
            ?
            (<p> <a href={props.text.toLowerCase()} target="_blank">{props.text}</a> (URL)</p>)
            :
            (<p> {props.text} </p>)
        }
        <div className="Component-task_inputs">
          <button onClick={() => handleInputRemove(props.arraykey)}> <FaTrashAlt /> </button>

          {/* <button onClick={() => handleInputEdit(props.arraykey)}> <FaPencilAlt /> </button>
            something for the next versión, don't worry about it
        */}

        </div>


      </div>
    )
  }



  // *** Functions to make the components works ( Javascript)

  function handleShow(a) {

    // ** If you say this is poorly optimised then tell me how to do it with pseudo code 

    if (!showed) {

      if (
        a.target.className.includes("adding")
        &&
        hideRef.current.className.includes("hide") && !showed) {
        hideRef.current.className = "Component-input";
        InputRef.current.focus()
        showed = true;
      }

    }

    else if (
      showed
      &&
      (a.target.className.includes("Component-input")
        ||
        a.target.className.includes("cancel")
      )
    ) {
      hideRef.current.className = "hide"
      InputRef.current.value = ""
      showed = false;
    }
  }

  // TODO edit the tasks!

  function handleInput(target) {
    // ** This calls the ComponentInput() function!

    target.preventDefault()

    if (InputRef.current.value.trim() != "") {

      setMaxId(++maxId);
      let task = {};
      task.id = maxId;
      task.value = InputRef.current.value;
      setTask([...tasks, task]);



      // ** hide the window again don't worry about this
      hideRef.current.className = "hide"

    }


  }

  function handleInputRemove(target) {
    // ** This calls the ComponentInput() function!

    let newTasks = [...tasks];
    newTasks.splice(target, 1);

    setTask(newTasks);

  }

  function handleShareBtn() {
    navigator.clipboard.writeText("https://todo-app-cyan-five.vercel.app/");
  }

  // *** Something for the next ver :þ
  // function handleInputEdit(target) {

  //   console.log(target)
  // }



  // *** The Main Content of the ToDo / the Todo desktop if you want to call it like that

  return (


    <div className="todos" onClick={handleShow} ref={RootRef}>

      <div className="todos_bar">

        <div className="adding button"> <IoIosAddCircle /> </div>
        <div className="button"> <a href="https://github.com/TaliAly/todo-app"> <FaGithubAlt /></a></div>
        <div className="button"> <IoArrowRedo /> </div>

      </div>



      <div className="todos_desktop">
        {tasks.length == 0 ? (
          <h2>Tasks To Do: none!</h2>
        ) : (
          <h2> Tasks To Do: {tasks.length} </h2>
        )}

        {tasks.map((lol, key) => (
          <ComponentTask key={key} arraykey={key} id={lol.id} text={lol.value} />
        ))}
      </div>

      <ComponentInput />

    </div>
  );
}
