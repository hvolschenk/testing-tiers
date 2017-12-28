import {
  UI_TOGGLE_LEFT_NAVIGATION,
  UI_TOGGLE_LEFT_NAVIGATION_PIN,
  UI_TOGGLE_RIGHT_NAVIGATION,
  uiToggleLeftNavigation,
  uiToggleLeftNavigationPin,
  uiToggleRightNavigation,
} from './actions';

test('Reducers / UI / Actions / uiToggleLeftNavigation()', () => {
  const expected = { type: UI_TOGGLE_LEFT_NAVIGATION };
  expect(uiToggleLeftNavigation()).toEqual(expected);
});

test('Reducers / UI / Actions / uiToggleLeftNavigationPin()', () => {
  const expected = { type: UI_TOGGLE_LEFT_NAVIGATION_PIN };
  expect(uiToggleLeftNavigationPin()).toEqual(expected);
});

test('Reducers / UI / Actions / uiToggleRightNavigation()', () => {
  const expected = { type: UI_TOGGLE_RIGHT_NAVIGATION };
  expect(uiToggleRightNavigation()).toEqual(expected);
});
