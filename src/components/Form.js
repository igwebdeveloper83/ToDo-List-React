import React from "react";

const Form = ({ setText, todos, setTodo, inputText }) => {
    const inputTextValue = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
    }
    const submitTodo = (e) => {
        e.preventDefault();
        setTodo([
            ...todos,{text: inputText, completed: false, id: Math.random()}
        ]);
        setText("");
    };
    return (
        <form>
       <input value={inputText} onChange={inputTextValue} type="text" className="todo-input"/>
       <input onClick={submitTodo} id="lesen" className="todo-button" type="submit"  name="submit" value="Einfügen"/>
	   

</form>
    )
}
export default Form;