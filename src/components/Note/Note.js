import classes from './Note.module.css';

const Note = props => {
    return <div className={classes.note}>
        {props.children}
        </div>
}

export default Note;