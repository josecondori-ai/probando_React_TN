import React from 'react';
import './PostCard'
const PostCard = ({title,description}) => {
    return(
      <div className="rounded-lg p-6 hover:shadow-lg transition" style={{
        backgroundColor: 'var(--card-bg)',
        color: 'var(--text-primary)',
        boxShadow: 'var(--shadow)',
        border: '1px solid var(--border-color)'
      }}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p style={{ color: 'var(--text-secondary)' }}>{description}</p>
    </div>
    )
}

export { PostCard }