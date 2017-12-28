const ABOUT = 'about';
const HOME = 'home';
const ROOT = '/';

export const join = (...sections) => `${ROOT}${(sections).join('/')}`;

export const about = () => join(ABOUT);
export const home = () => join(HOME);
export const root = () => join();
