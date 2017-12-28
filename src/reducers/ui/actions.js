import action from 'payload-action-creator';

export const UI_TOGGLE_LEFT_NAVIGATION = 'UI_TOGGLE_LEFT_NAVIGATION';
export const UI_TOGGLE_LEFT_NAVIGATION_PIN = 'UI_TOGGLE_LEFT_NAVIGATION_PIN';
export const UI_TOGGLE_RIGHT_NAVIGATION = 'UI_TOGGLE_RIGHT_NAVIGATION';

export const uiToggleLeftNavigation = action(UI_TOGGLE_LEFT_NAVIGATION);
export const uiToggleLeftNavigationPin = action(UI_TOGGLE_LEFT_NAVIGATION_PIN);
export const uiToggleRightNavigation = action(UI_TOGGLE_RIGHT_NAVIGATION);
