import { combineReducers } from 'redux';
import {
    ideas, ideasHasErrored, ideasIsLoading, ideaBeingEditied
} from './ideas';
import { isAddMode } from './editing';

export default combineReducers({
    ideas,
    ideasHasErrored,
    ideasIsLoading,
    isAddMode,
    ideaBeingEditied
});
