
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'



let reducers = combineReducers({
    form: formReducer
})

export default reducers