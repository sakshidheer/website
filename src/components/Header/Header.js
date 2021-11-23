import React from 'react';
import {header,logoSection,navSection} from './Header.module.css';
import NavigationLink from './NavigationLink/NavigationLink'

const Header = props => {
    return <div className={header}>
        <div className={logoSection}>Sakshi Dheer</div>
        <nav className={navSection}>
            <NavigationLink toPath="/" exact iconName="home" name="Home"/>
            <NavigationLink toPath="/projects" iconName="assignment" name="Projects"/>
            <NavigationLink toPath="/blog" iconName="face" name="Blog"/>
        </nav>
    </div>
};

export default Header;