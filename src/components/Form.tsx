import { FormEvent, forwardRef, useRef } from "react"
import "./Form.style.scss"
import { RiDeleteBack2Fill } from "react-icons/ri"
import Input from "./side-components/Input"

interface Props {
    addHandler: Function,
    closeForm: Function,
}



const Form = forwardRef((props: Props, ref) => {
    const titleInp = useRef<HTMLInputElement>(null)
    const textInp = useRef<HTMLTextAreaElement>(null);

    function formSubmit(a: FormEvent) {
        a.preventDefault();
        if (titleInp.current!.value.trim() == "") {
            return null;
        }
        let msg = {
            "title": titleInp.current!.value,
            "text": textInp.current!.value,
        };

        props.addHandler(JSON.stringify(msg));
        titleInp.current!.value = "";
        textInp.current!.value = "";
        closeForm();
    };

    function closeForm() {
        props.closeForm(false);
    };

    return (
        <form onSubmit={formSubmit}>

            <div>
                <div className="buttons">
                    <RiDeleteBack2Fill onClick={closeForm} />
                </div>

                <label htmlFor="titleInp">Title</label>
                <Input ref={titleInp} placeholder="Add Todo" required={true} />

                <div className="text">

                    <label htmlFor="textInp"> body </label>
                    <textarea ref={textInp} />

                    <input type="submit" value="Add" className="submit" />

                </div>


            </div>

        </form>
    )
});

export default Form;