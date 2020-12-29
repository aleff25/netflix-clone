import React from 'react';
import { useContent } from '../../hooks';
import selectionFilter from '../../utils/selection-filter';

import BrowseContainer from '../../containers/Browse';

function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');

  const slides = selectionFilter({ series, films });

  return (
    <BrowseContainer slides={slides} >
      Heelo
    </BrowseContainer>
  );
}

export default Browse;
