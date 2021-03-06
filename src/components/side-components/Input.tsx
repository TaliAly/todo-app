import { forwardRef } from "react";

interface Props {
    placeholder: string,
    required: boolean,
}

const Input = forwardRef((props: Props, ref:any) => {
    if (props.required) {
        return (
            <input type="text" ref={ref} className="input" placeholder={props.placeholder} required />
        )
    }
    else {
        return (
            <input type="text" ref={ref} className="input" placeholder={props.placeholder} />
        )
    }
});

export default Input;