import { useState, useRef, FormEvent } from "react"
import "./Tasks.style.scss"
import jsonTasks from "./../../public/json/tasks.json"

// *** Import Components
import TasksMap from "./side-components/TasksMap"
import TasksMenu from "./TasksMenu"
import Form from "./Form"


function Tasks() {
    
    const [countTasks, setCountTasks] = useState(jsonTasks);
    const [activeForm, setActiveForm] = useState(false)

    const addHandler = (input: string) => {
        setCountTasks([...countTasks, JSON.parse(input)])
    }
    
    const removeHandler = (id: number) => {
        let Hllo = countTasks;
        Hllo.splice(id, 1);

        setCountTasks([...Hllo]);
    }

    const showForm = (a:string) => {
        setActiveForm(!!a);

    }

    // *** JSX 
    return (
        <div className="holder">
            
            <TasksMenu func={showForm} />
            
            { activeForm && <Form addHandler={addHandler} closeForm={showForm} />}

            <div className="tasks">
                {countTasks.map((target, id) => {
                    return <TasksMap
                        onClick={(id: number) => removeHandler(id)}
                        title={target.title}
                        text={target.text}
                        num={id}
                        key={id}
                    />
                })
                }
            </div>
        </div>

    )
};

export default Tasks;