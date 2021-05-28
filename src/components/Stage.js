import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import Task from './Task';
import '../styles/components.css';
import uniqid from 'uniqid'
import TaskAdd from './TaskAdd';

const changeTitle = () => {

};


const Stage = (props) => {
    const {stage} = props;

    const [addingTask, toggleState] = useState(false);
    
    const toggleTaskAdd = () => {
        toggleState(!addingTask);
    }

    const addTask = async (taskText) => {
        const {stageId, dispatch} = props;
        toggleTaskAdd();
        const taskId = uniqid();
        dispatch({
            type: 'ADD_TASK',
            payload: {
                stageId, taskId, taskText
            }
        })
    };

    return(
        <div className="Stage">
            <div className="Stage-Title" onClick={changeTitle()} >{stage.title}</div>
            {stage.tasks && stage.tasks.map((taskId, index) => {
                return <Task stageId={stage.id} taskId={taskId} index={index} />
            })}
            {addingTask ? (
                    // console.log('djkf')
                    <TaskAdd onSave={addTask} onCancel={toggleTaskAdd}/>
                    ) : (
                    <div className="Toggle-Add-Task" onClick={() => toggleTaskAdd()}>
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