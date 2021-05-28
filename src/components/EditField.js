import React, {useState} from "react";
import TextareaAutosize from "react-textarea-autosize";
import '../styles/components.css';
import Button from './Button';

const EditField = (props) => {
    const [text, setText] = useState(props.prevText || "");

    const onCarriage = (key) => {
        if(key.keyCode === 13){
            key.preventDefault();
            props.onSave(text);
        }
    }
    return(
        <div className='Edit-Task'>
            <div className='Task'>
                <TextareaAutosize 
                    autoFocus
                    placeholder={"Enter the task"}
                    value={text}
                    onKeyDown={onCarriage}
                    onChange={(ev) => setText(ev.target.value)}
                    className="Edit-Task-Textarea"
                />
            </div>
            <Button onSave={() => props.onSave(text)} onCancel={props.onCancel} onDelete={props.onDelete} isDeleting={props.isDeleting}/>
        </div>
    );
};

export default EditField;


