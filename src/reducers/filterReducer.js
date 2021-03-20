const filterReducer = (state = 'ALL', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.payload;

        default:
            return state;
    }
};

export const filterChange = payload => ({
    type: 'SET_FILTER',
    payload
});

export default filterReducer;