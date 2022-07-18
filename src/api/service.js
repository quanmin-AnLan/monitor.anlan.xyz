import axios from 'axios';
import qs from 'qs';

const request = axios.create({
    timeout: 5000,
    baseURL: 'http://data.anlan.xyz',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

request.interceptors.response.use(
    (res) => {
        // 正确请求则返回，异常状态码抛出异常
        if (res.status === 200) {
            const { data } = res
            if (data) {
                return Promise.resolve(data);
            } else {
                return Promise.resolve(res);
            }
        }
    }, (err) => {
        return Promise.reject(err)
    }
);


class Http {
    static get(url, params) {
        return request.get(url, {
            params
        })
    }

    static post(url, params, contentType = 'json') {
        if (contentType === 'urlencoded') {
            return request.post(url, qs.stringify(params))
        } else {
            return request.post(url, params, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
    }
}

export default Http