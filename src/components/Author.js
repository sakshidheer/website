import classes from './Author.module.css';
import icon from '../images/female-5547206_640.jpg';
import Note from './Note/Note'
import Skill from './Skill/Skill'
import ExperienceBar from './ExperienceBar/ExperienceBar';
import Card from './Card/Card';

const Author = props => {
    let url = "url(" + icon + ")";
    return <div className={classes.author} style={{ '--backIng1': url }}>
        <div className={classes.noteSection}>
            <Note>Hi There! My Name is Sakshi Dheer from India. I am a full stack Developer from India</Note>

            <Card stylename={classes.skills}>
                <span className={classes.skillsHeader}>Skills</span>
                <div className={classes.skillSection}>
                    <Note>
                        <Skill name="Java" percentage="70%" />
                    </Note>
                    <Note>
                        <Skill name="Python" percentage="10%" />
                    </Note>
                    <Note>
                        <Skill name="Js" percentage="70%" />
                    </Note>
                    <Note>
                        <Skill name="Css" percentage="70%" />
                    </Note>
                    <Note>
                        <Skill name="React" percentage="20%" />
                    </Note>
                </div>

            </Card>

        </div>
<ExperienceBar/>

        

    </div>
}

export default Author;