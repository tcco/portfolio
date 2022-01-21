import React from 'react';

import { useParams } from 'react-router-dom';

const PortfolioItem = () => {
  return <div> Portfolio item {useParams().id};</div>;
};

export default PortfolioItem;
