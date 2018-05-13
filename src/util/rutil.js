import Axios from 'axios'
// 对请求进行简单封装

// GET 其实可以不用这 动态指定method 即可
//曾经沧海难为水~
function formatData (params) {
 //  真不知道是谁设计的接口竟然是字符串类型，搞得我还以为我代理有问题呢
 //   username=admin&password=admin
 if(['string','boolean','number'].indexOf(typeof params) >= 0){
     return params
 }else{
     let paramsStr = ''
      Object.keys(params).forEach(key => {
          paramsStr = paramsStr + `${key}=${params[key]}&`
      })
      let str = paramsStr.substr(0,paramsStr.length - 1)
      return str
 }

  
}
// 理因try{}catch(){}
function getDataByPost (url, data) {
  let  dataStr = formatData(data)
  return  Axios.post(url,dataStr)

}

export {
    getDataByPost
}
