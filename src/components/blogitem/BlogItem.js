import { linkStyle, blogWrapper ,card, read} from './BlogItem.module.css'
import Card from '../Card/Card'

const { Link } = require("gatsby")


const BlogItem = ({ data, path }) => {
    return (<Card stylename={card}><Link className={linkStyle} to={path}>
        <h3>{data.frontmatter.title}</h3>
        <div>{data.excerpt}</div>
        <div className={read}>Read more</div>
    </Link></Card>)
}

export default BlogItem;