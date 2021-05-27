import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/components.css';

const Task = (props) => {
    const {task} = props;
    return(
        <div className='Task'> 
            {task.text}
        </div>
    );
}


const mapStateToProps = (state, ownProps) => ({
  task: state.task[ownProps.taskId]
});

export default connect(mapStateToProps)(Task);