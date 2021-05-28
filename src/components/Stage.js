import React, {useState} from 'react';
import {connect} from 'react-redux';
import Task from './Task';
import '../styles/components.css';
import uniqid from 'uniqid'
import EditField from './EditField';
import { Droppable, Draggable } from "react-beautiful-dnd";

const Stage = (props) => {
    const {stage, index} = props;
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
    };


    return(
        <Draggable draggableId={stage.id} index={index}>
        {(provided, snapshot) => (
            <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="Stage"
            >
            {!editingTitle ? (
                    <div className="Stage-Title" onClick={() => toggleEditingTitle(!editingTitle)} >{stage.title}</div>
                    ) : (
                    <EditField onSave={editStageTitle} onCancel={() => toggleEditingTitle(!editingTitle)} onDelete={deleteStage} isDeleting={true} prevText={stage.title}/>
            )}
            <Droppable droppableId={stage.id}>
            {(provided, _snapshot) => (
                <div ref={provided.innerRef}>
                {stage.tasks && stage.tasks.map((taskId, index) => {
                return <Task stageId={stage.id} taskId={taskId} index={index} key={taskId}/>
                })}
                {provided.placeholder}
                </div>
            )}
            </Droppable>
            
            {addingTask ? (
                    // console.log('djkf')
                    <EditField onSave={addTask} onCancel={() => toggleAddingTask(!addingTask)}/>
                    ) : (
                    <div className="Toggle-Add-Task" onClick={() => toggleAddingTask(!addingTask)}>
                        Add a Task
                    </div>
                    )}
        </div>
        )}
        </Draggable>
    );
}


const mapStateToProps = (state, ownProps) => ({
  stage: state.stage[ownProps.stageId]
});

export default connect(mapStateToProps)(Stage);