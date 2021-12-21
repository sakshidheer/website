import { Helmet } from 'react-helmet';
import { blog, infosection, tag, info, blogSection } from './BlogLayout.module.css'
import IconLink from './IconLink';
import Layout from './Layout';
require("prismjs/themes/prism-tomorrow.css");

function BlogLayout({ pageContext, children }) {
  let tags = pageContext.frontmatter.tags.split(',').map(item => {
    return '#' + item.trim();
  })
  return (
    <>
      <Helmet>
        <title>Sakshi Dheer</title>
        <link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet" ></link>
      </Helmet>
      <Layout cls={blog}>
        <div className={blogSection}>

          <h1>{pageContext.frontmatter.title}</h1>
          <div className={infosection}>
            <div className={tag}>
              {tags.join(' ')}

            </div>
            <IconLink link={'https://twitter.com/intent/tweet?text=' + 
            pageContext.frontmatter.title + ' ' + location.href+'&hashtags='+pageContext.frontmatter.tags}
              icon="fab fa-twitter" iconColor="#00acee" />
          </div>

          {children}
        </div>
      </Layout>
    </>
  );
}

export default BlogLayout;
