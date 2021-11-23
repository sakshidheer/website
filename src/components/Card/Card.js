import {card} from './Card.module.css';

const Card = props => {
    let classList = [card, props.stylename]
    return <div className={classList.join(' ')}>
        {props.children}
        </div>
}

export default Card;