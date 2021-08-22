import classes from './Card.module.css';

const Card = props => {
    let classList = [classes.card, props.stylename]
    return <div className={classList.join(' ')}>
        {props.children}
        </div>
}

export default Card;