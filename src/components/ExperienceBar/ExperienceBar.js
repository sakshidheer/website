import classes from './ExperienceBar.module.css'
const ExperienceBar = (props) => {

    return (<div className={classes.ExperienceBar}>
        <div className={classes.barContainer}>
            <div className={classes.bar}></div>
        </div>
        <div></div>
    </div>)
}

export default ExperienceBar;