import { combineReducers } from 'redux'
import board from './board'
import stage from './stage'
import task from './task'

export default combineReducers({
  board,
  stage,
  task
})