const API = {
    get: jest.fn(() => Promise.resolve({
        data: {}, status: 'success',
    })),
    post: jest.fn(() => Promise.resolve({
        data: {}, status: 'success',
    })),
};
export default {
    ajax: API,
    auth: API,
}