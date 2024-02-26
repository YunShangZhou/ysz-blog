import axios from 'axios';

const env = process.env.NODE_ENV === 'development' ? 'dev' : 'prod';

export const baseInstance = axios.create({
  baseURL: `/${env}`,
  timeout: 3000, // 3s
});
