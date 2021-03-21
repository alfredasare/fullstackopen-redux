import noteService from "../services/notes";

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

        case 'INIT_NOTES':
            return action.payload;

        default:
            return state;
    }
};

// const generateId = () => Math.floor(Math.random() * 1000000);

//  Action creators
export const createNote = content => {
    return async dispatch => {
        const newNote = await noteService.createNew(content);
        dispatch({
            type: 'NEW_NOTE',
            payload: newNote
        });
    };
};

export const toggleImportanceOf = id => ({
    type: 'TOGGLE_IMPORTANCE',
    payload: {
        id
    }
});

export const initializeNotes = () => {
    return async dispatch => {
        const notes = await noteService.getAll();
        dispatch({
            type: 'INIT_NOTES',
            payload: notes
        });
    }
};

export default noteReducer;