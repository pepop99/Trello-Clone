import React, {Component} from 'react';
import {connect} from 'react-redux';
import Task from './Task';
import '../styles/components.css';


const Stage = (props) => {
    const {stage} = props;

    return(
        <div className="Stage">
            <div className="Stage-Title">{stage.title}</div>
            {stage.tasks && stage.tasks.map((taskId, index) => {
                return <Task stageId={stage.id} taskId={taskId} index={index} />
            })}
        </div>
    );
}


const mapStateToProps = (state, ownProps) => ({
  stage: state.stage[ownProps.stageId]
});

export default connect(mapStateToProps)(Stage);