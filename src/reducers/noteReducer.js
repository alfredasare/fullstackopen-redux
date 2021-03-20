const noteReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_NOTE':
            return [...state, action.payload];

        case 'TOGGLE_IMPORTANCE': {
            const id = action.payload.id;
            const noteToChange = state.find(n => n.id === id);
            const changedNote = {
                ...noteToChange,
                important: !noteToChange.important
            };
            return state.map(note => (
                note.id !== id ? note : changedNote
            ));
        }

        default:
            return state;
    }
};

const generateId = () => Math.floor(Math.random() * 1000000);

//  Action creators
export const createNote = content => ({
    type: 'NEW_NOTE',
    payload: {
        content,
        important: false,
        id: generateId()
    }
});

export const toggleImportanceOf = id => ({
    type: 'TOGGLE_IMPORTANCE',
    payload: {
        id
    }
});

export default noteReducer;