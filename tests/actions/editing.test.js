import { expect } from 'chai';
import { IS_ADD_MODE, toggleAddEditPanel } from '../../src/actions/editing';

describe('Editing Action', () => {
    describe('const IS_ADD_MODE', () => {
        it('should have a corresponding value', () => {
            expect(IS_ADD_MODE).to.equal('IS_ADD_MODE');
        });
    });

    describe('set add section visibility', () => {
        it('should return an expected action', () => {
            const hidden = false;
            const actionResult = toggleAddEditPanel(hidden);
            expect(actionResult).to.deep.equal({
                type: IS_ADD_MODE, isAddMode: hidden
            });
        });
    });
});
