import { DEFAULT_THEME_MODE } from '../constants';
export default function getTheme(props) {
  if (props && props.theme && props.theme.__ATLASKIT_THEME__) {
    // $FlowFixMe - cannot narrow type between input types
    return props.theme.__ATLASKIT_THEME__;
  }

  if (props && props.theme && props.theme.mode) {
    // $FlowFixMe - cannot narrow type between input types
    return props.theme;
  }

  return {
    mode: DEFAULT_THEME_MODE
  };
}