import {useEffect} from 'react';
import {useDispatch} from "react-redux";
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";
import VisibilityFilter from "./components/VisibilityFilter";
import noteService from "../src/services/notes";
import {initializeNotes} from "./reducers/noteReducer";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        noteService
            .getAll()
            .then(notes => {
                dispatch(initializeNotes(notes))
            })
    }, [dispatch]);

    return (
        <div>
            <NewNote />
            <VisibilityFilter />
            <Notes />
        </div>
    );
}

export default App;
