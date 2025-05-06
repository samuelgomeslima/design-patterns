import React from 'react';
import Card from './Card';

class CardBuilder {
  constructor() {
    this.title = null;
    this.content = null;
    this.footer = null;
    this.imageUrl = null;
    this.imageWidth = null;
    this.imageHeight = null;
  }

  setTitle(title) {
    this.title = title;
    return this;
  }

  setContent(content) {
    this.content = content;
    return this;
  }

  setFooter(footer) {
    this.footer = footer;
    return this;
  }

  setImageUrl(imageUrl) {
    this.imageUrl = imageUrl;
    return this;
  }

  setImageWidth(imageWidth) {
    this.imageWidth = imageWidth;
    return this;
  }

  setImageHeight(imageHeight) {
    this.imageHeight = imageHeight;
    return this;
  }

  build() {
    return (
      <Card
        title={this.title}
        content={this.content}
        footer={this.footer}
        imageUrl={this.imageUrl}
        imageWidth={this.imageWidth}
        imageHeight={this.imageHeight}
      />
    );
  }
}

export default CardBuilder;
