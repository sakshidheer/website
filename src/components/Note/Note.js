import {note} from './Note.module.css';

const Note = props => {
    return <div className={note}>
        {props.children}
        </div>
}

export default Note;