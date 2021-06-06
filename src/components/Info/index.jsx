import React from 'react';
import './style.scss';

const Info = () => {
  return (
    <div className="info">
      <h1 className="info__title">INFO</h1>
      <p className="info__text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <p className="info__text">
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using &#39;Content here, content
        here&#39;, making it look like readable English.
      </p>
    </div>
  );
};

export default Info;
