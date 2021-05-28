import React, {useState} from 'react';
import {connect} from 'react-redux';
import '../styles/components.css';
import EditField from './EditField';

const Task = (props) => {
    const {task} = props;
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
            <div className='Task' onClick={() => toggleEditing(!editing)}> 
                {task.text}
            </div>
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