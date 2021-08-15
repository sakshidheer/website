import classes from './Author.module.css';
import CheckListItem from '../components/CheckListItem/CheckListItem';
import icon from '../images/female-5547206_640.jpg';
import emojiSmileUpsideDown from '@iconify-icons/bi/emoji-smile-upside-down';
import { Icon } from '@iconify/react';

const Author = props => {
    let url = "url(" + icon + ")";
    return <div className={classes.author} style={{ '--backIng1': url }}>
        <div className={classes.introSec}>
            <img src={icon} alt="smiley" />
            <div className={classes.name}>Sakshi Dheer</div>
        </div>
        <div className={classes.detailSec}>
            <CheckListItem>Working as a full stack developer from India</CheckListItem>
            <CheckListItem>More then 7 years of experience in Java, EXTJS, JS </CheckListItem>
            <CheckListItem>Learning React and python (my new love) </CheckListItem>
            <CheckListItem>Not so much a designer , constantly trying to improve <Icon icon={emojiSmileUpsideDown} />  </CheckListItem>
        </div>


    </div>
}

export default Author;