import React from "react";
import '../styles/components.css';

const Button = (props) => {
    console.log(props);
    return (
        <div className='Edit-Buttons'>
            <div
                tabIndex='0'
                className='Edit-Button'
                onClick={props.onSave}
                style={{backgroundColor: "green"}}
            >Save
            </div>
            <div
                tabIndex='0'
                className='Edit-Button'
                onClick={props.onCancel}
                style={{backgroundColor: "red"}}
            >Cancel
            </div>
            {props.isDeleting && 
                <div
                    tabIndex='0'
                    className='Edit-Button'
                    onClick={props.onDelete}
                    style={{backgroundColor: "red"}}
                >Delete
                </div>
            }
        </div>
    );
};

export default Button;

