import React, {Component} from 'react';
import {connect} from 'react-redux';
import Stage from './Stage';
import '../styles/components.css';

const Board = (props) => {
    const {board} = props;
    return(
        <div className='Board'>
            {board.stages.map((stage, index) => {
                return <Stage stageId={stage} index={index}/>
            })}
        </div>
    );
}


const mapStateToProps = (state) => ({board: state.board});
export default connect(mapStateToProps)(Board);