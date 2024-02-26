import axios from 'axios';
import { baseInstance } from './instance';

const apiMap = {
  async getPaginationPaperList(params: {
    tag?: string;
    page: number;
    pageSize: number;
  }) {
    const res = await baseInstance.post('/paper/getPaperListByPage', params);
    return res;
  },
};

export default apiMap;
