// @flow
import { type ElementConfig } from 'react';

import SelectBase from './Select';
import manageState from './stateManager';

export default manageState<ElementConfig<typeof SelectBase>>(SelectBase);

export { mergeStyles } from './styles';
export { defaultTheme } from './theme';
export { createFilter } from './filters';
export { components } from './components';
