import {createStore} from "redux";
import noteReducer from "./reducers/noteReducer";


const store = createStore(noteReducer);

store.dispatch({
    type: 'NEW_NOTE',
    payload: {
        content: 'the app state is in redux store',
        important: true,
        id: 1
    }
});

store.dispatch({
    type: 'NEW_NOTE',
    payload: {
        content: 'state changes are made with actions',
        important: false,
        id: 2
    }
});

function App() {

    return (
        <div>
            <ul>
                {
                    store.getState().map(note => (
                        <li key={note.id}>
                            {note.content} <strong>{note.important ? 'important': ''}</strong>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default App;
