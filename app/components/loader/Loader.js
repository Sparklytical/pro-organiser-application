import React from 'react';
import './loader.scss';
import LoaderImg from '../common/assets/images/Blocks-1s-200px.svg';

export const Loader = () => (
  <div className="loader-container">
    <img src={LoaderImg} alt="loader" />
  </div>
);
