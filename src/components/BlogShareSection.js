import IconLink from './IconLink';

function BlogShareSection({ pageContext, location }) {
    return (<>
        <IconLink link={'https://twitter.com/intent/tweet?text=' +
            pageContext.frontmatter.title + ' ' + location.href + '&hashtags=' + pageContext.frontmatter.tags}
            icon="fab fa-twitter" iconColor="#00acee"
            title="Share on twitter" />
        <IconLink link={'https://www.facebook.com/sharer/sharer.php?u=' +
            location.href}
            icon="fab fa-facebook" iconColor="#3b5998" 
            title="Share on facebook"/>
        <IconLink link={'https://www.linkedin.com/sharing/share-offsite/?url=' +
            location.href}
            icon="fab fa-linkedin" iconColor="#0077b5" 
            title="Share on linkedin"/>
        <IconLink icon="fa fa-link" iconColor="#0077b5" 
        onClick={() => navigator.clipboard.writeText(location.href)} 
        title="Copy link"/>
    </>)
}

export default BlogShareSection;
