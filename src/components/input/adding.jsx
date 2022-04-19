export default function TheTask(props) {
    function killIt(comida) {
        
    }
    return (
        <div>
            <p> {props.text} </p>
            <button onClick={killIt(props.id)}>Kill</button>
        </div>
    )

}