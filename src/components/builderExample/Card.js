import React from 'react';

const Card = ({ title, content, footer, imageUrl, imageWidth, imageHeight }) => {
  return (
    <div className="card">
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {content && <p className="card-text">{content}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title || 'Card image'}
            className="card-img-top"
            style={{ width: imageWidth, height: imageHeight }}
          />
        )}
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
