import http from '@/services/http';

export default {
  // 登录
  token(formData: CommonData): Promise<any> {
    return http.post('user/token', {
      data: formData,
    });
  },
};
