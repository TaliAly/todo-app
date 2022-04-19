import "./todo.style.scss";
import { useState, useRef } from "react";


export default function Todo() {
    const [tasks, setTask] = useState([]);
    const texto = useRef(null);

    function onAdd(target) {
        target.preventDefault();


        if ( texto.current.value.trim() != "") {

            setTask([...tasks, texto.current.value ]);
    
            texto.current.value="";
        }

    }


    function WrapTask(props) {
        function deleteIt(target) {
            let newTasks = [...tasks];

            newTasks.splice(target, 1);

            setTask(newTasks);
        }
            
        return (
            <div className="tasks_todo">
                <p> {props.text} </p>
                <button onClick={ () => { deleteIt(props.name)} }>Kill</button>
            </div>
        )
    
    }

    // *** diria que ando bien con esto, solo creo otro function para darle un modelo al .map e ez creo 
    return (
        <div className="todos">

            <div>
                <form onSubmit={onAdd}>
                    <input type="text" className="textInput" ref={texto} />
                    <button type="submit" className="submitInput">Submit</button>
                </form>
            </div>


            <div className="tasks">
            <h2>Tasks To Do:</h2>
            {tasks.map(
                (e, key) => { return <WrapTask key={key} name={key} text={e} /> } 
            )}
            </div>
        </div>
    )
};