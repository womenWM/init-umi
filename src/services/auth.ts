import { extend } from 'umi-request';
import { headers } from './http';

export const auth = extend({
  prefix: `${process.env.BASEURL}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ZG9jdG9yX3dlYjo=',
  },
  // @ts-ignore
  auth: { username: 'doctor_web' },
});

export const ajax = extend({
  prefix: '',
  timeout: 10000,
  headers,
});

export default auth;
