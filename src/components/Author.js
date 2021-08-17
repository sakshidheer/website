import classes from './Author.module.css';
import CheckListItem from '../components/CheckListItem/CheckListItem';
import icon from '../images/female-5547206_640.jpg';
import emojiSmileUpsideDown from '@iconify-icons/bi/emoji-smile-upside-down';
import { Icon } from '@iconify/react';
import Note from './Note/Note'

const Author = props => {
    let url = "url(" + icon + ")";
    return <div className={classes.author} style={{ '--backIng1': url }}>
        <Note>Hi There! My Name is Sakshi Dheer. I am a full stack Developer from India</Note>
        <Note>Skills: <br/>TEst</Note>


    </div>
}

export default Author;