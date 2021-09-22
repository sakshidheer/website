import classes from './ExperienceBar.module.css'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Work as WorkIcon , School as SchoolIcon, Star as StarIcon } from '@material-ui/icons';

const ExperienceBar = (props) => {

  return (<div>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#04c4ff',color:'white' }}
        contentArrowStyle={{ borderRight: '7px solid  #04c4ff' }}
        date="Aug 2017 - present"
        iconStyle={{ background: '#04c4ff', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Technical Leader Development</h3>
        <h4 className="vertical-timeline-element-subtitle">MYCOM OSI, Gurugram, India</h4>
        <p>
          
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Aug 2020"
        iconStyle={{ background: '04c4ff', color: '#fff' }}
        icon={<WorkIcon />}
        contentStyle={{boxShadow: '1px 0 4px #04c4ff'}}
        contentArrowStyle={{ borderRight: '7px solid  #04c4ff' }}
      >
        <h3 className="vertical-timeline-element-title">Started self learning React</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jul 2017 - Aug 2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">MYCOM OSI, Gurugram, India</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Nov 2016 - Jul 2017"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Incedo Inc., Gurugram, India</h4>
        <p>
          User Experience, Visual Design
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Sep 2013 - Nov 2016"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Adeptia India Pvt lmd., Noida, India</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2009 - 2013"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Bachelor of Technology</h3>
        <h4 className="vertical-timeline-element-subtitle">Guru Gobind Singh Indraprastha University</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>    </div>)
}

export default ExperienceBar;