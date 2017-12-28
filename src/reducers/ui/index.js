import { LOCATION_CHANGE } from 'react-router-redux';

import {
  UI_TOGGLE_LEFT_NAVIGATION,
  UI_TOGGLE_LEFT_NAVIGATION_PIN,
  UI_TOGGLE_RIGHT_NAVIGATION,
} from './actions';

export const defaultState = {
  fixedAdjustElement: undefined,
  leftNavigationActive: false,
  leftNavigationPinned: false,
  rightNavigationActive: false,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case UI_TOGGLE_LEFT_NAVIGATION:
      return {
        ...state,
        leftNavigationActive: !state.leftNavigationActive,
      };

    case UI_TOGGLE_LEFT_NAVIGATION_PIN:
      return {
        ...state,
        leftNavigationPinned: !state.leftNavigationPinned,
      };

    case UI_TOGGLE_RIGHT_NAVIGATION:
      return {
        ...state,
        rightNavigationActive: !state.rightNavigationActive,
      };
    case LOCATION_CHANGE:
      return {
        ...state,
        leftNavigationActive: false,
      };
    default:
      return state;
  }
};
