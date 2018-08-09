import orderBy from 'lodash.orderby';
import {
    IDEAS_HAS_ERRORED,
    IDEAS_IS_LOADING,
    IDEAS_FETCH_DATA_SUCCESS,
    ADD_IDEA,
    REMOVE_IDEA,
    NEW_IDEA_FETCH_SUCCESS,
    SORT_BY
} from '../actions/ideas';

export function ideasHasErrored(state = false, action) {
    switch (action.type) {
    case IDEAS_HAS_ERRORED:
        return action.hasErrored;

    default:
        return state;
    }
}

export function ideasIsLoading(state = false, action) {
    switch (action.type) {
    case IDEAS_IS_LOADING:
        return action.isLoading;

    default:
        return state;
    }
}

export function ideas(state = [], action) {
    switch (action.type) {
    case IDEAS_FETCH_DATA_SUCCESS:
        return action.ideas;
    case ADD_IDEA:
        return [
            ...state,
            ...action.idea
        ];
    case REMOVE_IDEA:
        return state.filter(el => el.id !== action.id);
    case SORT_BY:
        return orderBy(state, [action.field]);
    default:
        return state;
    }
}

export function ideaBeingEditied(state = {}, action) {
    switch (action.type) {
    case NEW_IDEA_FETCH_SUCCESS:
        return action.idea;

    default:
        return state;
    }
}
