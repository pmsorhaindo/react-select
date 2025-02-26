// @flow
import React, { type ElementConfig } from 'react';

// Assistive text to describe visual elements. Hidden for sighted users.
const A11yText = (props: ElementConfig<'span'>) => (
  <span
    style={{
      label: 'a11yText',
      zIndex: 9999,
      border: 0,
      clip: 'rect(1px, 1px, 1px, 1px)',
      height: 1,
      width: 1,
      position: 'absolute',
      overflow: 'hidden',
      padding: 0,
      whiteSpace: 'nowrap',
    }}
    {...props}
  />
);

export default A11yText;
