import React, { forwardRef, useRef, useState } from "react";
import "./TasksMap.style.scss"
import { FaTrash } from "react-icons/fa"

interface Props {
    title?: string,
    text: string,
    img?: string,
    num?: number,
    onClick?: Function,

};
interface Event {
    target: HTMLButtonElement
}

const TasksMap = forwardRef((props: Props, ref) => {

    const Button = useRef<HTMLButtonElement>(null);
    const [taskDone, setTaskDone] = useState(false);

    function handlerRemove(event: React.MouseEvent<HTMLButtonElement>) {

        props.onClick?.(event.currentTarget.id);
        
    }
    function handlerChecked() {
        setTaskDone(!taskDone);
    }

    return (
        <div className="taskwrap">

            <div className="content">

                <div>
                <input type="checkbox" onChange={handlerChecked}/>
                {(!!props.title?.length && taskDone)
                    ? <p className="title"><span>{props.title}</span></p>
                    : <p className="title">{props.title}</p>
                }
                </div>

                {!!props.text.length ? <p className="text">{props.text}</p> : null}

                {!!props.img?.length ? <img src={props.img} alt="todo img" /> : null}

            </div>
            <div className="options">
                <button ref={Button} id={props?.num?.toString()} onClick={handlerRemove}> <FaTrash /> </button>
            </div>
        </div>
    )
});

export default TasksMap;