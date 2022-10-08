import {projects, cardContainer} from './Projects.module.css';
import ProductCard from '../components/ProductCard/ProductCard';
import calImg from './images/calculator.png';
import ifocuz from './images/ifocuz.png';
import website from './images/website.png';
import Layout from '../components/Layout';
import weatherApp from './images/weatherApp.png';

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
            <ProductCard
                img={website}
                title="Python practice"
                description="Project I started to practice python and understand it at deeper level"
                githubUrl="https://github.com/sakshidheer/practicepython"
                liveDemo="https://github.com/sakshidheer/practicepython/blob/main/README.md"
                langs={['Python']}
                status="WIP" />
            <ProductCard
                img={weatherApp}
                title="weather-app"
                description="A simple weather app with static data for now. My first Angular application"
                githubUrl="https://github.com/sakshidheer/weather-app"
                liveDemo="/weather-app" 
                langs={['Angular','css']}
                status='WIP'/>
        </div>
    </div>
    </Layout>
}

export default Projects;