import request from '@/utils/request'

export default {
    // 获取Echart数据
    getList() {
        return request({
            url: '/demo1/list',
            method: 'get'
        })
    },
    getListLine() {
        return request({
            url: '/demo1/list_zhuzhuang',
            method: 'get'
        })
    },
    getListBar() {
        return request({
            url: '/demo1/list_bar',
            method: 'get'
        })
    },
    getListMap() {
        return request({
            url: '/demo1/list_map',
            method: 'get'
        })
    },
    //获取滚动
    getItemlist() {
        return request({
            url: '/item/list',
            method: 'get'
        })
    },
    
}