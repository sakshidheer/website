import {projects, cardContainer} from './Projects.module.css';
import ProductCard from '../components/ProductCard/ProductCard';
import calImg from './images/calculator.png';
import ifocuz from './images/ifocuz.png';
import website from './images/website.png';
import Layout from '../components/Layout'

const Projects = props => {


    return <Layout><div className={projects}>
        <div className={cardContainer}>
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
            <ProductCard
                img={website}
                title="Website"
                description="This is the website you are on .Work in Progress "
                githubUrl="https://github.com/sakshidheer/website"
                liveDemo="/"
                langs={['React','Redux','css','Gatsby']}
                status="WIP" />
        </div>
    </div>
    </Layout>
}

export default Projects;