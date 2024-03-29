import { Helmet } from 'react-helmet';
import { blog, infosection, tag, info, blogSection, shareSection, back } from './BlogLayout.module.css'
import BlogShareSection from './BlogShareSection';
import IconLink from './IconLink';
import Layout from './Layout';
import { navigate } from "gatsby"
require("prismjs/themes/prism-tomorrow.css");

function BlogLayout({ pageContext, children, location }) {
  let tags = pageContext.frontmatter.tags.split(',').map(item => {
    return '#' + item.trim();
  });
  //let history = useHistory();
  
  let onBackClick = ()=>{
    debugger;
    navigate("/blog/"); //do not use location.origin before path!!! Does not work
  }
  return (
    <>
      <Helmet>
        <title>Sakshi Dheer</title>
        <link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet" ></link>
      </Helmet>
      <Layout cls={blog}>
        <div className={blogSection}>
        <IconLink onClick={onBackClick}
            icon="fas fa-arrow-left"
            title="Go Back to blog" />
          <h1>{pageContext.frontmatter.title}</h1>
          <div className={infosection}>
            <div className={tag}>
              {tags.join(' ')}

            </div>
            <div className={shareSection}>
              <BlogShareSection
                pageContext={pageContext} location={location} />
            </div>
          </div>

          {children}
        </div>
      </Layout>
    </>
  );
}

export default BlogLayout;
