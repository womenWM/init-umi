// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

jest.mock('@/services/auth', () => {
  const API = {
    get: jest.fn(() =>
      Promise.resolve({
        data: {},
        status: 'success',
      }),
    ),
    post: jest.fn(() =>
      Promise.resolve({
        data: {},
        status: 'success',
      }),
    ),
  };
  return {
    ajax: API,
    auth: API,
  };
});

jest.mock('@/services/http', () => {
  const API = {
    get: jest.fn(() =>
      Promise.resolve({
        data: {},
        status: 'success',
      }),
    ),
    post: jest.fn(() =>
      Promise.resolve({
        data: {},
        status: 'success',
      }),
    ),
    setAuthorizationToken: jest.fn(),
  };
  const http = API;
  return http;
});
