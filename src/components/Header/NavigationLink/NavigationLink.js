import { active, headerLink, materialUI } from './NavigationLink.module.css';
import Link from 'gatsby-link'

const NavigationLink = ({ iconName, name, toPath, exact }) => {
    return (<span>
        <Link
            exact={exact}
            activeClassName={active}
            className={headerLink}
            to={toPath}><span className={materialUI}>{iconName}</span>{name}
            </Link>
    </span>)
}

export default NavigationLink;