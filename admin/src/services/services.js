import request from 'utils/request';

export async function checkLogin(username, password) {
  return request(`/checkLogin`, {
    data: {
      username: username,
      password: password
    },
    method: 'POST',
    withCredentials: true,
  });
}

export async function getTypeInfo() {
  return request('/typeInfo', {
    header: {'Access-Control-Allow-Origin': '*'},
    withCredentials: true,
  })
}

export async function getArticleList() {
  return request('/article/list', {
    header: {'Access-Control-Allow-Origin': '*'},
    withCredentials: true,
  })
}

export async function getArticleById(id) {
    return request(`/getArticleById/${id}`,{
      withCredentials: true,
      header:{ 'Access-Control-Allow-Origin':'*' }
    })
}

export async function deleteArticle(id) {
  return request(`/article/delete/${id}`, {
    header: {'Access-Control-Allow-Origin': '*'},
    withCredentials: true,
  })
}

export async function addArticle(data) {
  return request('/article/add', {
    data: data,
    method: 'POST',
    header: {'Access-Control-Allow-Origin': '*'},
    withCredentials: true,
  })
}

export async function updateArticle(data) {
  return request('/article/update', {
    data: data,
    method: 'POST',
    header: {'Access-Control-Allow-Origin': '*'},
    withCredentials: true,
  })
}