import { author, noteSection, skills, skillsHeader, skillSection } from './Home.module.css';
import Note from '../components/Note/Note'
import Skill from '../components/Skill/Skill'
import ExperienceBar from '../components/ExperienceBar/ExperienceBar';
import Card from '../components/Card/Card';
import Layout from '../components/Layout';
import { Helmet } from "react-helmet"

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Sakshi Dheer</title>
                <link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet"></link>
            </Helmet>
            <Layout><div className={author}>
                <div className={noteSection}>
                    <Note>Hi There! My Name is Sakshi Dheer. I am a full stack Developer from India</Note>

                    <Card stylename={skills}>
                        <span className={skillsHeader}>Skills</span>
                        <div className={skillSection}>
                            <Note>
                                <Skill name="Java" percentage="70%" />
                            </Note>
                            <Note>
                                <Skill name="Python" percentage="10%" />
                            </Note>
                            <Note>
                                <Skill name="Js" percentage="70%" />
                            </Note>
                            <Note>
                                <Skill name="Css" percentage="70%" />
                            </Note>
                            <Note>
                                <Skill name="React" percentage="20%" />
                            </Note>
                        </div>

                    </Card>

                </div>
                <ExperienceBar />
            </div>
            </Layout>
        </>)
}

export default Home;