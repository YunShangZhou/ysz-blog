import { jointResponse } from '@/utils/responseHandler';
import { baseInstance } from './instance';
import { paginationDataSourceByTagProps } from '@/type/books';

const apiMap = {
  async getPaperListByPage(params: {
    tag?: string;
    page: number;
    pageSize: number;
  }) {
    const { tag } = params;

    const requestUrl = tag
      ? '/tag/getPaperListByTagAndCount'
      : '/paper/getPaperListByPage/';

    let res: jointResponse = await baseInstance.post(requestUrl, params);

    if (tag) {
      const { items } = res.data as paginationDataSourceByTagProps;
      res.data.items = items.map((item) => {
        return item.paper;
      });
    }

    return res;
  },
};

export default apiMap;
