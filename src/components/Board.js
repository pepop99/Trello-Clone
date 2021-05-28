import React, {useState} from 'react';
import {connect} from 'react-redux';
import Stage from './Stage';
import '../styles/components.css';
import uniqid from 'uniqid'
import EditField from './EditField';


const Board = (props) => {
    const {board} = props;
    const [addingStage, toggleAddingStage] = useState(true);

    const createStage = async (text) => {
        const {dispatch} = props;
        const stageId = uniqid();
        toggleAddingStage(!addingStage);
        dispatch({
            type: 'ADD_STAGE',
            payload: {
                stageId, stageTitle: text
            }
        });
    }
    return(
        <div className='Board'>
            {board.stages.map((stage, index) => {
                return <Stage stageId={stage} index={index}/>
            })}
            {addingStage ? (
                // <Task />
                <div className="Stage">
                    <div className="Stage-Title" onClick={() => toggleAddingStage(!addingStage)}>Add a stage </div>
                </div>
                ) : (
                <EditField onSave={createStage} onCancel={() => toggleAddingStage(!addingStage)} placeholder={'Add new Stage Title'}/>
                )
            }
        </div>
    );
}


const mapStateToProps = (state) => ({board: state.board});
export default connect(mapStateToProps)(Board);