import "./todo.style.scss";
import { useState, useRef, useEffect } from "react";


export default function Todo() {
    const [tasks, setTask] = useState([]);
    const texto = useRef(null);
    const localStorage = window.localStorage;
    let taskChange = tasks;

    
    useEffect( () => {
        localStorage.setItem("key", tasks)
    });


    function WrapTask(props) {



            
        return (
            <div className="tasks_todo">
                { !(props.text).indexOf("https://") ? <a href={props.text} target="_blank"> {props.text} </a> : <p> {props.text} </p> }

                <button onClick={ () => { 
                    deleteIt(props.name);
                } }>Kill</button>
            </div>
        )
    
    }


    function deleteIt(target) {
        let newTasks = [...tasks];

        newTasks.splice(target, 1);

        setTask(newTasks);

        taskChange = tasks.toString();

    }

    function onAdd(target) {
        target.preventDefault();


        if ( texto.current.value.trim() != "") {

            setTask([...tasks, texto.current.value ]);

            texto.current.value="";
        }

    }   

    // localStorage.setItem("key", taskChange);


    return (

        <div className="todos">

            <div>
                <form onSubmit={ onAdd }>
                    <input type="text" className="textInput" ref={texto} />
                    <button type="submit" className="submitInput">Submit</button>
                </form>
            </div>


            <div className="tasks">
            <h2>Tasks To Do:</h2>
            {tasks.map(
                (e, key) => { return <WrapTask key={key} name={key} text={e} /> } 
            )
            }
            </div>
        </div>
    )
};