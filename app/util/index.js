export default {
  get(url, data = {}, success = {}) {
    axios({
      url: url,
      params: data,
      method: 'GET',
      headers: {
        'X-SESSIONID': localStorage.sessionid
      }
    }).then(res => success(res.data)).catch(() => alert('网络请求失败'))
  },
  post(url, data = {}, success = {}) {
    axios({
      url: url,
      data: data,
      method: 'POST',
      headers: {
        'X-SESSIONID': localStorage.sessionid
      }
    }).then(res => success(res.data)).catch(() => alert('网络请求失败'))
  },
  put(url, data = {}, success = {}) {
    axios({
      url: url,
      data: data,
      method: 'PUT',
      headers: {
        'X-SESSIONID': localStorage.sessionid
      }
    }).then(res => success(res.data)).catch(() => alert('网络请求失败'))
  }
}