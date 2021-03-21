import {connect} from "react-redux";
import {createNote} from "../reducers/noteReducer";

const NewNote = ({createNote}) => {

    const addNote = async e => {
        e.preventDefault();
        const content = e.target.note.value;
        e.target.note.value = '';
        createNote(content);
    };

    return (
        <form onSubmit={addNote}>
            <input type="text" name="note"/>
            <button type="submit">add</button>
        </form>
    );
};

const mapDispatchToProps = {
    createNote
};

export default connect(null, mapDispatchToProps)(NewNote);