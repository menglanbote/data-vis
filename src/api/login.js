import request from '@/utils/request'

//账号登录
export function login(username,password){
    return request({
        url:'/user/login',
        method:'post',
        data:{
            username,password
        }
    })
}
//获取用户信息
export function getUserInfo(token){
    return request({
        url:`/user/login/${token}`,
        method:'get',
    })
}

//退出
export function logout(token){
    return request({
        url:`/user/logout`,
        method:'post',
        data:{
            token
        }
    })
}