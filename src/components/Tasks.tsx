import { useState, useEffect } from "react"
import "./Tasks.style.scss"
import jsonTasks from "./../../public/json/tasks.json"
import {gsap } from "gsap"

// *** Import Components
import TasksMap from "./side-components/TasksMap"
import TasksMenu from "./TasksMenu"
import Form from "./Form"



function Tasks() {


    const [countTasks, setCountTasks] = useState([{}]);
    const [activeForm, setActiveForm] = useState(false)
    const localStorage = window.localStorage;

    useEffect(() => {
        
        if (localStorage.getItem("key") != null) {
            let set = JSON.parse(localStorage.getItem("key") || "");
            setCountTasks(set);
        }
        else {
            setCountTasks(jsonTasks);
        }

    }, []);

    const addHandler = (input: string) => {
        let set = [...countTasks, JSON.parse(input)]

        setCountTasks(set);
        localStorage.setItem("key", JSON.stringify(set));

    }

    async function removeHandler(element:HTMLDivElement, id: number) {
        await gsap.to(element, {rotation: "+=360"});

        let Hllo = countTasks;
        Hllo.splice(id, 1);

        setCountTasks([...Hllo]);
        localStorage.setItem("key", JSON.stringify(countTasks));
    }

    const showForm = (a: string) => {
        setActiveForm(!!a);

    }

    // *** JSX 
    return (
        <div className="holder">

            <TasksMenu func={showForm} />

            {activeForm && <Form addHandler={addHandler} closeForm={showForm} />}

            <div className="tasks">
                {countTasks.map((target:any, id) => {
                    return <TasksMap
                        onClick={(element:HTMLDivElement, id:number) => removeHandler(element, id)}
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