import axios from 'axios';
import { baseInstance } from './instance';

const apiMap = {
  async getPaginationPaperList(params: {
    page: number;
    pageSize: number;
  }) {
    const res = await baseInstance.post('/paper/getPaperListByPage', params);
    return res;
  },

  async getCategories() {
    const res = await baseInstance.get('/tag/getCategories');
    return res;
  },
  async getCategoriesBeforeMounted() {
    const res = await baseInstance.get('/tag/getCategories');
    return res;
  }
};


export default apiMap;
