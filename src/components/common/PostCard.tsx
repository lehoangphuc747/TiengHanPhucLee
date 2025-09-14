import React from 'react';
import type { BlogPost } from '../../types';

// Component hiển thị card bài viết
// Tuân thủ SRP - chỉ hiển thị thông tin bài viết
interface PostCardProps {
  post: BlogPost;
  className?: string;
}

const PostCard: React.FC<PostCardProps> = ({ post, className = '' }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <article className={`post-card ${className}`}>
      <div className="post-card__header">
        <span className="post-card__category">{post.category.name}</span>
        <time className="post-card__date">
          {formatDate(post.publishedAt)}
        </time>
      </div>
      
      <h3 className="post-card__title">
        <a href={`/blog/${post.slug}`} className="post-card__link">
          {post.title}
        </a>
      </h3>
      
      <p className="post-card__description">
        {post.description}
      </p>
      
      <div className="post-card__footer">
        <div className="post-card__tags">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="post-card__tag">
              #{tag}
            </span>
          ))}
        </div>
        <span className="post-card__reading-time">
          {post.readingTime} phút đọc
        </span>
      </div>
    </article>
  );
};

export default PostCard;
