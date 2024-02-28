import axios from 'axios';
import { baseInstance, defaultInstance } from './instance';
import { proxySuffix } from './proxy';
import { jointResponse } from '@/utils/responseHandler';

const apiMap = {
  async getPaginationPaperList(params: { page: number; pageSize: number }) {
    // const res = await baseInstance.post('/paper/getPaperListByPage', params);
    const res: jointResponse = await defaultInstance.post(
      proxySuffix + '/paper/getPaperListByPage',
      params
    );
    return res;
  },

  async getCategories() {
    // const res = await baseInstance.get('/tag/getCategories');
    const res: jointResponse = await defaultInstance.get(
      proxySuffix + '/tag/getCategories'
    );
    return res;
  },
  async getCategoriesBeforeMounted() {
    const res: jointResponse = await baseInstance.get('/tag/getCategories');
    return res;
  },
};

export default apiMap;
