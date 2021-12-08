import reactIcon from '@iconify-icons/logos/react';
import reduxIcon from '@iconify-icons/logos/redux';
import css3 from '@iconify-icons/logos/css-3';
import reactRouter from '@iconify-icons/logos/react-router';
import { Icon } from '@iconify/react';
import pythonIcon from '@iconify/icons-logos/python';
import javaIcon from '@iconify/icons-logos/java';
import javascriptIcon from '@iconify/icons-logos/javascript';
import Gatsby_Monogram from '../pages/images/Gatsby_Monogram.png'

const IconByLang = (lang) => {
    switch (lang.toLowerCase()) {
        case 'react':
            return <Icon icon={reactIcon} />;
        case 'css':
            return <Icon icon={css3} />;
        case 'react-router':
            return <Icon icon={reactRouter} />;
        case 'redux':
            return <Icon icon={reduxIcon} />;
        case 'python':
            return <Icon icon={pythonIcon} />
        case 'java':
            return <Icon icon={javaIcon}/>
        case 'js':
        case 'javascript':
            return <Icon icon={javascriptIcon} />
        case 'gatsby':
            return <img src={Gatsby_Monogram} width="19px" height="18px"/>
        default:
            return <Icon icon={reduxIcon} />;
    }
}

export default IconByLang;