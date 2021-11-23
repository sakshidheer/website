import {nameandicon,progressbar} from './Skill.module.css';
import IconByLang from '../../util/IconByLang';

const skill =(props)=>{

return (<div>
   <div className={nameandicon}>
       {props.name}
    {IconByLang(props.name)}</div> 
    <div className={progressbar} 
    style={{
        '--progressParcentage':props.percentage
    }}></div>
</div>)
}

export default skill;