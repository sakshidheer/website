import { blog, infosection, tag, info, blogSection } from './BlogLayout.module.css'
import Layout from './Layout';
require("prismjs/themes/prism-tomorrow.css");

function BlogLayout({ pageContext, children }) {
  let tags = pageContext.frontmatter.tags.split(',').map(item => {
    return '#' + item.trim();
  })
  return (
    <Layout cls={blog}>
      <div className={blogSection}>

        <h1>{pageContext.frontmatter.title}</h1>
        <div className={infosection}>
          <div className={tag}>
            {tags.join(' ')}
          </div>

        </div>

        {children}
      </div>
    </Layout>
  );
}

export default BlogLayout;
