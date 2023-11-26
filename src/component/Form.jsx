import { useRef } from 'react';
const Form = (props) => {
    let id = useRef();
    id.current.innerText = 'hello';
    return (
        <div>
            <form onClick={props.per} action="">
                <input type="text" />
                <button ref={id}>Submit</button>
            </form>
        </div>
    )
}
export default Form;