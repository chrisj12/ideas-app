import {expect} from 'chai';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import {API_BASE_URL} from '../../src/config/config';

import {IDEAS_FETCH_DATA_SUCCESS, IDEAS_HAS_ERRORED, IDEAS_IS_LOADING, ideasHasErrored, ideasFetchData} from '../../src/actions/ideas';

const mockStore = configureMockStore( [thunk]);

describe('Ideas Action', () => {

    describe('ideasHasErrored', () => {
        it('should return an expected action', () => {
            const hidden = false;
            const actionResult = ideasHasErrored(hidden);
            expect(actionResult).to.deep.equal({
                type: IDEAS_HAS_ERRORED, hasErrored: hidden
            });
        });
    });
});
