import { blog, infosection, tag, info } from './BlogLayout.module.css'
import Layout from './Layout';
require("prismjs/themes/prism-tomorrow.css");

function BlogLayout({ pageContext, children }) {
  return (
    <Layout cls={blog}>
      <h1>{pageContext.frontmatter.title}</h1>
      <div className={infosection}>
        <div className={tag}>
          #jhjhj
        </div>
        <div className={info}>
        <span><b>By </b> {pageContext.frontmatter.author}</span>
        <span>Posted on {pageContext.frontmatter.date}</span>
        </div>
        
      </div>
      {children}
    </Layout>
  );
}

export default BlogLayout;
