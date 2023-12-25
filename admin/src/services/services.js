import request from 'utils/request';



export async function checkLogin(username, password) {
  return request(`/checkLogin`, {
    data: {
      username: username,
      password:password
    },
    method: 'POST'
  });
}