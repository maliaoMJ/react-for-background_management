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
async function getDataByPost (url, data = '') {
  let  dataStr = formatData(data)
  return await Axios.post(url,dataStr)

}
async function getDataByGet(url, data = ''){
   let dataStr =  formatData(data)
   if(!dataStr){
       return await  Axios.get(url)
   }else{
   return await Axios.get(url,data)
   } 
}
// async function getDataByPut (url, data) {}
// async function getDataByDelete (url, data) {}




// 游览器支持情况 ，我就没有见过不支持的
function isSupportStorage () {
    if(window.localStorage){
        return true
    }else{
        alert('您的电脑该换了！')
        return false
    }
}
// 写入localstorage
function saveLocalStorage (name, value) {
  if(!isSupportStorage()) return false
  if(['string','number','boolean'].indexOf(typeof value) >= 0){
   window.localStorage.setItem(name, value)   
  }else if(typeof value === 'object') {
   window.localStorage.setItem(name, JSON.stringify(value))
  }else{
      alert('出入写进的localStorage值类型有错误！')
  }
}
//读取localStorage
function readLocalStorage (name) {
  return window.localStorage.getItem(name) || ''
}
// 删除localStorage
function deleteLocalStorage (name) {
  window.localStorage.removeItem(name)
}
//设置cookie 好像看见httpOnly了 GG
/*设置cookie*/
function setCookie(name, value, iDay) {
      var oDate = new Date();
      oDate.setDate(oDate.getDate() + iDay);
      document.cookie = name + '=' + value + ';expires=' + oDate;
};
//----------COOKIE---------------
/*使用方法：setCookie('user', 'simon', 11);*/
/*获取cookie*/
function getCookie(name) {
      var arr = document.cookie.split('; '); //多个cookie值是以; 分隔的，用split把cookie分割开并赋值给数组
      for (var i = 0; i < arr[i].length; i++) //历遍数组
      {
            var arr2 = arr[i].split('='); //原来割好的数组是：user=simon，再用split('=')分割成：user simon 这样可以通过arr2[0] arr2[1]来分别获取user和simon 
            if (arr2[0] == name) //如果数组的属性名等于传进来的name
            {
                  return arr2[1]; //就返回属性名对应的值
            }
            return ''; //没找到就返回空
      }
};
/*使用方法：getCookie('user')*/
/*删除cookie*/
function removeCookie(name) {
      setCookie(name, 1, -1); //-1就是告诉系统已经过期，系统就会立刻去删除cookie
};
/*使用方法：removeCookie('user')*/














export {
    getDataByPost,
    getDataByGet,
    saveLocalStorage,
    readLocalStorage,
    deleteLocalStorage
}
