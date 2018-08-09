import { IS_ADD_MODE } from '../actions/editing';

export function isAddMode(state = false, action) {
    switch (action.type) {
    case IS_ADD_MODE:
        return action.isAddMode;

    default:
        return state;
    }
}
