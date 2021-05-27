import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import Task from './Task';
import '../styles/components.css';


const changeTitle = () => {

};
const Stage = (props) => {
    const {stage} = props;
    const [addingTask, toggleState] = useState(false);
    return(
        <div className="Stage">
            <div className="Stage-Title" onClick={changeTitle()} >{stage.title}</div>
            {stage.tasks && stage.tasks.map((taskId, index) => {
                return <Task stageId={stage.id} taskId={taskId} index={index} />
            })}
            {addingTask ? (
                    console.log(1)
                    ) : (
                    <div className="Toggle-Add-Stage" onClick={() => toggleState(!addingTask)}>
                        Add a card
                    </div>
                    )}
        </div>
    );
}


const mapStateToProps = (state, ownProps) => ({
  stage: state.stage[ownProps.stageId]
});

export default connect(mapStateToProps)(Stage);