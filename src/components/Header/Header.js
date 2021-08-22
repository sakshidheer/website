import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = props => {
    return <div className={classes.header}>
        <div className={classes.logoSection}>Sakshi Dheer</div>
        <nav className={classes.navSection}>
            <span>
            
                <NavLink
                    exact
                    activeClassName={classes.active}
                    className={classes.headerLink}
                    to="/"><span className="material-icons">home</span>Home</NavLink>
            </span>
            <span><NavLink
                activeClassName={classes.active}
                className={classes.headerLink}
                to="/projects"><span className="material-icons">assignment</span>Projects</NavLink></span>
            <span><NavLink className={classes.headerLink}
                activeClassName={classes.active}
                to="/author"><span className="material-icons">face</span>Author</NavLink></span>
        </nav>
    </div>
};

export default Header;