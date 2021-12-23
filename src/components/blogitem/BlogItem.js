import { linkStyle, blogWrapper, card, read } from './BlogItem.module.css'
import Card from '../Card/Card'


const { Link } = require("gatsby")


const BlogItem = ({ data, path }) => {
    return (<div className={card}>
        <Link className={linkStyle} to={path}>
            <h1>{data.frontmatter.title}</h1>
            <div>{data.excerpt}</div>
            <div className={read}>Read more</div>
        </Link>
    </div>)
}

export default BlogItem;