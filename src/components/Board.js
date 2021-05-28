import React, {useState} from 'react';
import {connect} from 'react-redux';
import Stage from './Stage';
import '../styles/components.css';
import uniqid from 'uniqid'
import EditField from './EditField';
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Board = (props) => {
    const {board} = props;
    const [addingStage, toggleAddingStage] = useState(true);

    const dragListener = ({source, destination, type}) => {
        if(!destination){
            return;
        }
        console.log(source, destination)
        const {dispatch} = props;
        if(type === 'COLUMN'){
            if(source.index !== destination.index){
                dispatch({
                    type: 'MOVE_STAGE',
                    payload: {
                        from: source.index, to: destination.index
                    }
                });
            }
            return ;
        }

        if (source.index !== destination.index || source.droppableId !== destination.droppableId) {
            dispatch({
              type: "MOVE_STAGE",
              payload: {
                source: source.droppableId,
                target: destination.droppableId,
                oldIndex: source.index,
                newIndex: destination.index
              }
            });
        }
        
    };
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
        <DragDropContext onDragEnd={dragListener}>
            <Droppable droppableId='board' direction='horizontal' type='COLUMN'>
                {(provided, _snapshot) => (
                    <div className='Board' ref={provided.innerRef}>
                        {board.stages.map((stage, index) => {
                            return <Stage stageId={stage} index={index} key={stage}/>
                        })}
                    {provided.placeholder}
                    <div>
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
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}


const mapStateToProps = (state) => ({board: state.board});
export default connect(mapStateToProps)(Board);