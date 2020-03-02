import React from 'react';
import { storiesOf } from '@storybook/react';

import { Category } from '../../stories/storiesHierarchy';
import StickyTableExample from './StickyTableExample';

storiesOf(Category.PLAYGROUND, module).add('Sticky Table', () => (
  <StickyTableExample />
));
