import 'jest';
import Auth from '@/services/api/auth';

describe('测试Services: auth', () => {
  it('auth: token 返回正确', () => expect(Auth.token({})).resolves.toMatchObject({
    data: {}, status: 'success',
  }));

  // it('auth: getVCode 返回正确', async () => {
  //   const res = await Auth.getVCode({});
  //   expect(res).toEqual({
  //     data: {}, status: 'success',
  //   })
  // })
});
