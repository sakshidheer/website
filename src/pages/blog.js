import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { container } from './blog.module.css'
import BlogItem from '../components/blogitem/BlogItem'
import { Helmet } from 'react-helmet'

const Blog = ({ data }) => {
  let blogItems = data.allMdx.nodes.map(element => {
    let path = "/blogs/" + element.slug;
    return <BlogItem key={element.id} path={path} data={element}></BlogItem>
  });
  return (
    <>
      <Helmet>
        <title>Sakshi Dheer</title>
        <link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet"></link>
      </Helmet>
      <Layout>
        <div className={container}>{blogItems}</div>

      </Layout>
    </>)
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