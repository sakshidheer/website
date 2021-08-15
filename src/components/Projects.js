import classes from './Projects.module.css';
import ProductCard from './ProductCard/ProductCard';
import calImg from '../images/calculator.PNG';
import ifocuz from '../images/ifocuz.png';


const Projects = props => {


    return <div className={classes.projects}>
        <div className={classes.cardContainer}>
            <ProductCard
                img={calImg}
                title="Calculator"
                description="A simple calculator application created using flexbox, css and React. My first React application ever "
                githubUrl="https://github.com/sakshidheer/calculator"
                liveDemo="/calculator" 
                langs={['React','css']}
                status='Completed'/>
            <ProductCard
                img={ifocuz}
                title="IFocuz"
                description="An application to add your to-do task that helps you focus. Work in Progress "
                githubUrl="https://github.com/sakshidheer/ifocuz"
                liveDemo="/ifocuz"
                langs={['React','Redux','css','React-router']}
                status="WIP" />
        </div>
    </div>
}

export default Projects;