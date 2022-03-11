import request from './request';
//拿到推荐二手物品列表
export function getRecommendItemList(params){
    return request({
        url:'/recommendList',
        method:'get',
        params
        
    })
}
export function postNew(data){
    return request({
        url:'/post',
        method:'post',
        data
    })
}
export function getItemDetail(id){
    return request({
        url:'/getItemDetail',
        method:'get',
        params:id
    })
}