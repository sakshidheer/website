const IconLink = ({ link, icon, iconColor }) => {
    const style = {
        color: iconColor 
}
return (<a href={link} target="_blank" style={ style} title={link}>
    <i className={icon} ></i>
</a>)
}

export default IconLink;