import instance from './index'

//登录
const login = {
  r: (params) => {
    return instance.post('/app/login', params)
  },
}

//退出
const logOut = {
  r: (params) => {
    return instance.post('logout', params)
  },
}

export { login, logOut }
