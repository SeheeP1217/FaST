import axios, { AxiosError, AxiosResponse } from 'axios';
import { TagType } from '../types/TagType';

const api = axios.create({
  baseURL: 'http://j8a402.p.ssafy.io:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 내 정보 조회
async function getMyData(toId: number) {
  try {
    const id = 2;
    const res = await api.get<number>(`/user/${id}`, { params: { id } });
    // console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// 게시물 수 조회
async function countArticle(userId: number) {
  try {
    const id = 2;
    const res = await api.get<number>(`/article/${userId}`, { params: { id } });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// 내 정보 수정
async function modifyData(
  id: number,
  imgPath: string,
  nickname: string,
  tags: Array<TagType>
) {
  try {
    const res = await api.put<any>(`/user/${id}/modify-user`, {
      imgPath,
      nickname,
      tags,
    });
    // console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default { getMyData, countArticle, modifyData };