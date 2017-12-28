import { LOCATION_CHANGE } from 'react-router-redux';

import {
  UI_TOGGLE_LEFT_NAVIGATION,
  UI_TOGGLE_LEFT_NAVIGATION_PIN,
  UI_TOGGLE_RIGHT_NAVIGATION,
  uiToggleLeftNavigation,
  uiToggleLeftNavigationPin,
  uiToggleRightNavigation,
} from './actions';
import reducer, { defaultState } from './index';

const locationChange = () => ({
  type: LOCATION_CHANGE,
});

test('Reducers / UI / default', () => {
  expect(reducer()).toEqual(defaultState);
});

test(`Reducers / UI / ${UI_TOGGLE_LEFT_NAVIGATION} - Activates`, () => {
  const expected = {
    ...defaultState,
    leftNavigationActive: true,
  };
  expect(reducer(undefined, uiToggleLeftNavigation())).toEqual(expected);
});

test(`Reducers / UI / ${UI_TOGGLE_LEFT_NAVIGATION} - Deactivates`, () => {
  const initial = {
    ...defaultState,
    leftNavigationActive: true,
  };
  expect(reducer(initial, uiToggleLeftNavigation())).toEqual(defaultState);
});


test(`Reducers / UI / ${UI_TOGGLE_LEFT_NAVIGATION_PIN} - Pins`, () => {
  const expected = {
    ...defaultState,
    leftNavigationPinned: true,
  };
  expect(reducer(undefined, uiToggleLeftNavigationPin())).toEqual(expected);
});

test(`Reducers / UI / ${UI_TOGGLE_LEFT_NAVIGATION_PIN} - Unpins`, () => {
  const initial = {
    ...defaultState,
    leftNavigationPinned: true,
  };
  const expected = {
    ...defaultState,
    leftNavigationPinned: false,
  };
  expect(reducer(initial, uiToggleLeftNavigationPin())).toEqual(expected);
});

test(`Reducers / UI / ${UI_TOGGLE_RIGHT_NAVIGATION} - Activates`, () => {
  const expected = {
    ...defaultState,
    rightNavigationActive: true,
  };
  expect(reducer(undefined, uiToggleRightNavigation())).toEqual(expected);
});

test(`Reducers / UI / ${UI_TOGGLE_RIGHT_NAVIGATION} - Deactivates`, () => {
  const initial = {
    ...defaultState,
    rightNavigationActive: true,
  };
  expect(reducer(initial, uiToggleRightNavigation())).toEqual(defaultState);
});


test(`Reducers / UI / ${LOCATION_CHANGE} - Deactivates`, () => {
  const expected = {
    leftNavigationActive: false,
    leftNavigationPinned: false,
    rightNavigationActive: false,
  };
  expect(reducer(undefined, locationChange())).toEqual(expected);
});

test(`Reducers / UI / ${LOCATION_CHANGE} - Deactivates`, () => {
  const initial = {
    leftNavigationActive: true,
    leftNavigationPinned: false,
    rightNavigationActive: false,
  };
  const expected = {
    leftNavigationActive: false,
    leftNavigationPinned: false,
    rightNavigationActive: false,
  };
  expect(reducer(initial, locationChange())).toEqual(expected);
});
