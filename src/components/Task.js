import React, {useState} from 'react';
import {connect} from 'react-redux';
import '../styles/components.css';
import EditField from './EditField';
import { Draggable } from "react-beautiful-dnd";

const Task = (props) => {
    const {task, index} = props;
    const [editing, toggleEditing] = useState(false);

    const editTask = async (text) => {
        const {task, dispatch} = props;
        toggleEditing(!editing);
        dispatch({
            type: 'CHANGE_TASK_TEXT',
            payload: {taskId: task.id, taskText: text}
        });
    };

    const deleteTask = async () => {
        const {stageId, task, dispatch} = props;
        toggleEditing(!editing);

        dispatch({
            type: 'DELETE_TASK',
            payload: {stageId, taskId: task.id}
        });
    };

    if(!editing){
        return(
            <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className='Task' 
                onClick={() => toggleEditing(!editing)}
                > 
                {task.text}
                </div>
            )}
            </Draggable>
            
        );
    }
    else{
        return(
            <EditField onSave={editTask} onCancel={() => toggleEditing(!editing)} prevText={task.text} onDelete={deleteTask} isDeleting={true}/>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
  task: state.task[ownProps.taskId]
});

export default connect(mapStateToProps)(Task);