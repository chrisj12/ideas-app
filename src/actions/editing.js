export const IS_ADD_MODE = 'IS_ADD_MODE';

export function toggleAddEditPanel(bool) {
    return {
        type: IS_ADD_MODE,
        isAddMode: bool
    };
}
