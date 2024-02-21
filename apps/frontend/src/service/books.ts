import axios from 'axios';

const booksInstance = axios.create({
  baseURL: '/',
  timeout: 3000, // 3s
});

// booksInstance.interceptors.request(requestHandler)

const apiMap = {
  async getPaginationPaperList(params: {
    type: string;
    page: number;
    pageSize: number;
  }) {
    const res = await booksInstance.post("",params);
    return res;
  },
};

export default apiMap;
