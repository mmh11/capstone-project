import tutCounterReducer from './tutCounter';
import {combineReducers} from 'redux';

const reduxReducers = combineReducers({
    tutCounter: tutCounterReducer
})

export default reduxReducers;