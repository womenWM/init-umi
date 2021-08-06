// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import 'jest';
// import axios from 'axios';
// import '@testing-library/jest-dom/extend-expect';

// Enzyme.configure({ adapter: new Adapter() });

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

// jest.mock('@/services/api', () => {
//     const API = {
//         get: jest.fn(() => Promise.resolve({
//             data: {}, status: 'success',
//         })),
//         post: jest.fn(() => Promise.resolve({
//             data: {}, status: 'success',
//         })),
//         setAuthorizationToken: jest.fn(),
//     };
//     const http = API;
//     return http;
// })
