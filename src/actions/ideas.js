import { toggleAddEditPanel } from './editing';

export const IDEAS_HAS_ERRORED = 'IDEAS_HAS_ERRORED';
export const IDEAS_IS_LOADING = 'IDEAS_IS_LOADING';
export const IDEAS_FETCH_DATA_SUCCESS = 'IDEAS_FETCH_DATA_SUCCESS';
export const NEW_IDEA_FETCH_SUCCESS = 'NEW_IDEA_FETCH_SUCCESS';
export const ADD_IDEA = 'ADD_IDEA';
export const REMOVE_IDEA = 'REMOVE_IDEA';
export const SORT_BY = 'SORTY_BY';

export function ideasHasErrored(bool) {
    return {
        type: IDEAS_HAS_ERRORED,
        hasErrored: bool
    };
}

export function ideasIsLoading(bool) {
    return {
        type: IDEAS_IS_LOADING,
        isLoading: bool
    };
}

export function ideasFetchDataSuccess(ideas) {
    return {
        type: IDEAS_FETCH_DATA_SUCCESS,
        ideas
    };
}

export function newIdeaFetchSuccess(idea) {
    return {
        type: NEW_IDEA_FETCH_SUCCESS,
        idea
    };
}

export function addIdea(idea) {
    return {
        type: ADD_IDEA,
        idea: [idea]
    };
}

export function removeIdea(id) {
    return {
        type: REMOVE_IDEA,
        id
    };
}

export function sortByField(field) {
    return {
        type: SORT_BY,
        field
    };
}


export function ideasFetchData(url) {
    return (dispatch) => {
        dispatch(ideasIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(ideasIsLoading(false));

                return response;
            })
            .then(response => response.json())
            .then(ideas => dispatch(ideasFetchDataSuccess(ideas)))
            .catch(() => dispatch(ideasHasErrored(true)));
    };
}

export function ideaFetchNew(url) {
    return (dispatch) => {
        dispatch(ideasIsLoading(true));

        fetch(url, { method: 'POST' })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(ideasIsLoading(false));

                return response;
            })
            .then(response => response.json())
            .then(newIdea => dispatch(newIdeaFetchSuccess(newIdea)))
            .then(() => dispatch(toggleAddEditPanel(true)))
            .catch(() => dispatch(ideasHasErrored(true)));
    };
}

export function ideaDelete(url) {
    return (dispatch) => {
        dispatch(ideasIsLoading(true));

        fetch(url, { method: 'DELETE' })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(ideasIsLoading(false));

                return response;
            })
            .then(response => response.json())
            .then(newIdea => dispatch(removeIdea(newIdea.id)))
            .catch(() => dispatch(ideasHasErrored(true)));
    };
}

export function ideaUpdate(url, idea) {
    return (dispatch) => {
        dispatch(ideasIsLoading(true));

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: Object.keys(idea).map(key => `${key}=${idea[key]}`).join('&')
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(ideasIsLoading(false));

                return response;
            })
            .then(response => response.json())
            .then(newIdea => dispatch(addIdea(newIdea)))
            .then(() => dispatch(toggleAddEditPanel(false)))
            .catch(() => dispatch(ideasHasErrored(true)));
    };
}
