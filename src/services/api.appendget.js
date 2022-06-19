import axios from "axios";
import { toast, getCookie, getUrlParams } from '../helpers/utils.js';


const _api = axios.create({
  baseURL: hostPath,
  headers: {

  },
});

export const makeForm = (object) => {
  let form = new FormData();
  for (var key in object) {
    let value = object[key];
    if(Array.isArray(value) || typeof value === 'object')
      value = JSON.stringify(object[key]);

    form.append(`${key}`, value);
  }
  return form;
}

async function _process(metodo, url, data={}){
  data.skip = data.skip || 0;
  data.page = data.page || 1;

  if(metodo == 'get'){
    let params = data;
    let urlParams = url.split('?')[1];
    urlParams = urlParams.split('&');
    urlParams.map(item => {
      item = item.split('=');
      params[item[0]] = item[1];
    });

    params = new URLSearchParams(params);
    url = url.split('?')[0] + '?' + params;
    data = {};
  }

  let r = _api[metodo](url, makeForm(data));
  r.then(res => {
    let _toast = res.data.toast;
    if(_toast)
      toast(_toast.type, _toast.message);
  })
  .catch(res => {
    console.log('erro:', res);
  });
  return r;
}

function _get(url, data={}){
  return _process('get', url, data);
}
function _post(url, data={}){
  return _process('post', url, data);
}
function _put(url, data={}){
  return _process('put', url, data);
}
function _delete(url, data={}){
  return _process('delete', url, data);
}

const api = {
  get: _get,
  post: _post,
  put: _put,
  delete: _delete
}

export default api;