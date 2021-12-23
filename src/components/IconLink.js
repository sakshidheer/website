const IconLink = ({ link, icon, iconColor ,onClick, title}) => {
    const style = {
        color: iconColor 
}
return (<a href={link} target="_blank" style={ style} title={title} onClick={onClick}>
    <i className={icon} ></i>
</a>)
}

export default IconLink;