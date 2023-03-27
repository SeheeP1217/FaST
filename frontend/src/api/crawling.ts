import axios from 'axios';

const api = axios.create({
  baseURL: 'http://j8a402.p.ssafy.io:4000',
  headers: {
    'Content-Type': 'application/json',
  },
});

async function crawling(landmark: string) {
  try {
    const res = await api.get(`/crawling/${landmark}`);
    return res;
  } catch (error: any) {
    return error;
  }
}

export default { crawling };