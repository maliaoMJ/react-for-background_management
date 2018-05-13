import React, { Component } from 'react'
import {Logo, User, KeyIcon } from '../../components/icons/index'
import { getDataByPost, saveLocalStorage } from '../../util/rutil'
import './Login.scss'


class Login extends Component {
    constructor(props){
       super(props)
       this.state = {
           username:'',
           password:''
       }
    }
    render() {
        return (
            <div className="LoginView">
                <div className="silderLeft">
                    <Logo />
                </div>
                <div className="formBox" onKeyUp={this.onSubmit.bind(this)}>
                   <h5 className="LoginTitle">用户登录</h5>
                   <hr className="line"/>
                   <p>
                       <label><User/></label>
                        <input name="username" type="text" onChange={this.onInputChange.bind(this)} placeholder="用户名"/> 
                   </p>
                    <p>
                        <label><KeyIcon/></label>
                        <input type="password" onChange={this.onInputChange.bind(this)} placeholder="密码" name="password"/>
                    </p>
                    <p className="btn btn-success" onClick={this.onLogin.bind(this)}>
                      登录
                    </p>
                </div>
                <div className="power">
                  <p>©2014-2018 MaJian All Rights Reserved.</p>
                </div>
            </div>
        )
    }
    componentDidMount(){
 
    }
    onInputChange(e) {
    let key = e.target.name
    let value = e.target.value
    //   this.setState=({
    //       [key]: value
    //   })
    if(key === 'username'){
        this.setState({
            username: value
        })
    }else{
        this.setState({
            password: value
        })
    }
    }
    async onLogin(){
        // 校验输入内容，抽成工具类，这里简单校验
        let username = this.state.username.trim()
        let password = this.state.password.trim()
        if (username && password) {
            let { data } = await getDataByPost('/manage/user/login.do', { username, password })
            if (data.status === 0) {
                //登录成功，写入localStroage 跳转页面
                saveLocalStorage('userInfo', data.data)
                this.props.history.push('/index/home') 
            } else {
                alert(data.msg)
            }
        } else {
            alert('用户名或密码不能为空！')
        }
    }
    onSubmit(e){
        if (e.keyCode === 13) {
         this.onLogin()
        }
    }
}

export default Login