import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import {container} from './blog.module.css'
import BlogItem from '../components/blogitem/BlogItem'

const Blog = ({ data }) => {
    let blogItems = data.allMdx.nodes.map(element => {
        let path = "/blogs/" + element.slug;
       return <BlogItem key={element.id} path={path} data={element}></BlogItem>
    });
    return <Layout>
        <div className={container}>{blogItems}</div>
        
    </Layout>
}


export const query = graphql`
  query HomePageQuery {
    allMdx {
        nodes {
          frontmatter {
            title
          }
          id
          slug
          excerpt(pruneLength: 100)
        }
      }
  }
`

export default Blog;