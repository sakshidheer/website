import { blog, infosection, tag, info } from './BlogLayout.module.css'
import Layout from './Layout';
require("prismjs/themes/prism-tomorrow.css");

function BlogLayout({ pageContext, children }) {
  let tags = pageContext.frontmatter.tags.split(',').map(item => {
    return '#'+item.trim();
  })
  return (
    <Layout cls={blog}>
      <h1>{pageContext.frontmatter.title}</h1>
      <div className={infosection}>
        <div className={tag}>
        {tags.join(' ')}
        </div>
        <div className={info}>
        <span><b>By </b> {pageContext.frontmatter.author}</span>
        <span><b>Posted on </b> {pageContext.frontmatter.date}</span>
        </div>
        
      </div>
      {children}
    </Layout>
  );
}

export default BlogLayout;