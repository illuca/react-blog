import request from 'utils/request';

export const apiUrl = 'http://127.0.0.1:7001/default'


export async function getArticlesByTypeId(typeId) {
  if (!typeId) {
    typeId = '0';
  }
  return request(`/articles?typeId=${typeId}`);
}

export async function getTypes() {
  return request(`/types`);
}

export async function getArticleById(id) {
  return request(`/article?id=${id}`);
}
