import classes from './CheckListItem.module.css';

const CheckListItem = props => {
    let classList = ["material-icons"];
    classList.push(classes.icon);
    return (<div className={classes.checklistitem} >
        <span className={classList.join(' ')}>
            check_circle
</span>{props.children}
    </div >
    );
}

export default CheckListItem;