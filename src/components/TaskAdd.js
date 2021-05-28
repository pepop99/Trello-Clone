import React, { Component, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import '../styles/components.css';

const TaskAdd = (props) => {
    const [text, setText] = useState("");

    const onCarriage = (key) => {
        if(key.keyCode === 13){
            key.preventDefault();
            props.onSave(text);
        }
    }
    return(
        <div>
            <div>
                <TextareaAutosize 
                    autoFocus
                    placeholder="Enter the text"
                    value={text}
                    onKeyDown={onCarriage}
                    onChange={(ev) => setText(ev.target.value)}
                />
            </div>
        </div>
    );
};

export default TaskAdd;


