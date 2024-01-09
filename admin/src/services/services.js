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
  return request('/getTypeInfo', {
    header: {'Access-Control-Allow-Origin': '*'},
    withCredentials: true,
  })
}

export async function addArticle(data) {
  return request('/addArticle', {
    data: data,
    method: 'POST',
    header: {'Access-Control-Allow-Origin': '*'},
    withCredentials: true,
  })
}
