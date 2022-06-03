import { GrFormAdd } from "react-icons/gr"
import "./TasksMenu.style.scss"

interface Props {
    func: Function
}

export default function TasksMenu(props:Props) {

    function showForm() {
        let a = "a"
        props.func(a);
    }
    
    return (
        <div className="tasksmenu">
            <GrFormAdd onClick={showForm} />
        </div>
    )
}