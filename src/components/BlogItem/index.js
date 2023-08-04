import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogItem} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogItem
  return (
    <Link to={`/blogs/${id}`} className="blog-item" testid="loader">
      <div className="item-container">
        <img src={imageUrl} alt={`item${id}`} className="content-image" />
        <div className="name-head-container">
          <p className="topic-text">{topic}</p>
          <h1 className="title-text">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar-image" />
            <p className="avatar-text">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
