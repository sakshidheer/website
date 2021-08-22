import classes from './Skill.module.css';
import IconByLang from '../../util/IconByLang';

const skill =(props)=>{

return (<div>
    {props.name}
    {IconByLang(props.name)}
    <div className={classes.progressbar} 
    style={{
        '--progressParcentage':props.percentage
    }}></div>
</div>)
}

export default skill;