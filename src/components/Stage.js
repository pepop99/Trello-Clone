import React, {useState} from 'react';
import {connect} from 'react-redux';
import Task from './Task';
import '../styles/components.css';
import uniqid from 'uniqid'
import EditField from './EditField';

const Stage = (props) => {
    const {stage} = props;
    const [editingTitle, toggleEditingTitle] = useState(false);
    const [addingTask, toggleAddingTask] = useState(false);


    const addTask = async (taskText) => {
        const {stageId, dispatch} = props;
        toggleAddingTask(!addingTask);
        const taskId = uniqid();
        dispatch({
            type: 'ADD_TASK',
            payload: {
                stageId, taskId, taskText
            }
        })
    };

    const editStageTitle = async (newTitle) => {
        const {stageId, dispatch} = props;
        toggleEditingTitle(!editingTitle);

        dispatch({
            type: 'RENAME_STAGE',
            payload: {
                stageId, stageTitle: newTitle
            }
        });
    };

    const deleteStage = async () => {
        const {stageId, stage, dispatch} = props;
        toggleEditingTitle(!editingTitle);

        dispatch({
            type: 'DELETE_STAGE',
            payload: {
                stageId, tasks: stage.tasks
            }
        })
    }
    return(
        <div className="Stage">
            {!editingTitle ? (
                    <div className="Stage-Title" onClick={() => toggleEditingTitle(!editingTitle)} >{stage.title}</div>
                    ) : (
                    <EditField onSave={editStageTitle} onCancel={() => toggleEditingTitle(!editingTitle)} onDelete={deleteStage} isDeleting={true} prevText={stage.title}/>
                    )}
            
            {stage.tasks && stage.tasks.map((taskId, index) => {
                return <Task stageId={stage.id} taskId={taskId} index={index} />
            })}
            {addingTask ? (
                    // console.log('djkf')
                    <EditField onSave={addTask} onCancel={() => toggleAddingTask(!addingTask)}/>
                    ) : (
                    <div className="Toggle-Add-Task" onClick={() => toggleAddingTask(!addingTask)}>
                        Add a Task
                    </div>
                    )}
        </div>
    );
}


const mapStateToProps = (state, ownProps) => ({
  stage: state.stage[ownProps.stageId]
});

export default connect(mapStateToProps)(Stage);