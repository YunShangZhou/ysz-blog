import responseHandler from '@/utils/responseHandler';
import axios from 'axios';

const env = process.env.NODE_ENV === 'development' ? 'dev' : 'prod';

export const baseInstance = axios.create({
  // baseURL: `/${env}`,
  baseURL: `/dev`,
  timeout: 3000, // 3s
});

baseInstance.interceptors.response.use(responseHandler)