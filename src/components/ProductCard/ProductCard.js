import Card from '../Card/Card';
import classes from './ProductCard.module.css';
import Button from '../Button/Button';
// npm install --save-dev @iconify/react @iconify-icons/logos
import { Icon } from '@iconify/react';
import aiStatusInProgress from '@iconify-icons/carbon/ai-status-in-progress';
import aiStatusComplete from '@iconify-icons/carbon/ai-status-complete';
import IconByLang from '../../util/IconByLang';

const ProductCard = props => {

    const langs = props.langs.map(item => {
        return <span key={item}
            className={classes.lang}  title={item}>{IconByLang(item)}</span>
    });
    const onButtonClick = (url) => {
        window.open(url, '_blank');
    }

    let icon = null;
    if (props.status === 'WIP')
        icon = <Icon icon={aiStatusInProgress} />;
    else
        icon = <Icon icon={aiStatusComplete} />;

    return <Card>
        <div className={classes.title}>
            <span>{props.title}</span>
            {icon}
        </div>
        <div className={classes.content}>
            <div className={classes.discription}>{props.description}</div>
            <div className={classes.imgCon}>
                <img src={props.img} alt={classes.title} />
            </div>
            <div className={classes.lanContainer}>{langs}</div>
        </div>
        <div className={classes.btnContainer}>
            <Button onClick={() => onButtonClick(props.githubUrl)}>Github</Button>
            <Button onClick={() => onButtonClick(props.liveDemo)}>Live Demo</Button>
        </div>
    </Card>
}

export default ProductCard;