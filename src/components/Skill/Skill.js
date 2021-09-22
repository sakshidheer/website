import classes from './Skill.module.css';
import IconByLang from '../../util/IconByLang';

const skill =(props)=>{

return (<div>
   <div className={classes.nameandicon}>
       {props.name}
    {IconByLang(props.name)}</div> 
    <div className={classes.progressbar} 
    style={{
        '--progressParcentage':props.percentage
    }}></div>
</div>)
}

export default skill;