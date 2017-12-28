import { about, home, join, root } from './urls';

test('The join() method joins up a URL', () => {
  const FIRST = 'FIRST';
  const SECOND = 'SECOND';
  const expected = `/${FIRST}/${SECOND}`;

  const actual = join(FIRST, SECOND);

  expect(actual).toBe(expected);
});

test('The join() method joins up a URL with no parameters', () => {
  const expected = '/';

  const actual = join();

  expect(actual).toBe(expected);
});

test('The about() method should build the about page URL', () => {
  const expected = '/about';

  const actual = about();

  expect(actual).toBe(expected);
});

test('The home() method should build the home page URL', () => {
  const expected = '/home';

  const actual = home();

  expect(actual).toBe(expected);
});

test('The root() method should build the root page URL', () => {
  const expected = '/';

  const actual = root();

  expect(actual).toBe(expected);
});
