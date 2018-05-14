import React, { Component } from 'react'
import ImTable from '../../components/Table/Table'
import './User.scss'

class User extends Component {
    constructor(props){
        super(props)
        this.state = {
            columns: [
                {
                    label: "ID",
                    prop: "id",
                    render: function (data) {
                        return (
                            <span>
                            {data.id}
                            </span>
                        )
                    }
                },
                {
                    label: "用户名",
                    prop: "username",
                    render: function (data) {
                        return (
                            <span>
                                {data.username}
                            </span>
                        )
                    }
                },
                {
                    label: "邮箱",
                    prop: "email",
                    render: function (data) {
                        return (
                            <span>
                                {data.email}
                            </span>
                        )
                    }
                },
                {
                    label: "联系方式",
                    prop: "phone",
                    render: function (data) {
                        return (
                            <span>
                                {data.phone}
                            </span>
                        )
                    }
                },
                {
                    label: "注册时间",
                    prop: "createTime",
                    render: function (data) {
                        return (
                            <span>
                                {data.createTime}
                            </span>
                        )
                    }
                },
                {
                    label: "最近登录",
                    prop: "updateTime",
                    render: function (data) {
                        return (
                            <span>
                                {data.updateTime}
                            </span>
                        )
                    }
                }
            ],
            data: [{
                id: '111111',
                username: '王小虎',
                email: '1302151931@qq.com',
                phone: '13213832373',
                createTime: '2017-08-18 09:32:68',
                updateTime: '2017-08-18 09:32:68',

            },
        {
                id: '111111',
                username: '王小虎',
                email: '1302151931@qq.com',
                phone: '13213832373',
                createTime: '2017-08-18 09:32:68',
                updateTime: '2017-08-18 09:32:68',

            },
        {
                id: '111111',
                username: '王小虎',
                email: '1302151931@qq.com',
                phone: '13213832373',
                createTime: '2017-08-18 09:32:68',
                updateTime: '2017-08-18 09:32:68',

            },
        {
                id: '111111',
                username: '王小虎',
                email: '1302151931@qq.com',
                phone: '13213832373',
                createTime: '2017-08-18 09:32:68',
                updateTime: '2017-08-18 09:32:68',

            },
        {
                id: '111111',
                username: '王小虎',
                email: '1302151931@qq.com',
                phone: '13213832373',
                createTime: '2017-08-18 09:32:68',
                updateTime: '2017-08-18 09:32:68',

            },
        {
                id: '111111',
                username: '王小虎',
                email: '1302151931@qq.com',
                phone: '13213832373',
                createTime: '2017-08-18 09:32:68',
                updateTime: '2017-08-18 09:32:68',

            },   {
                id: '111111',
                username: '王小虎',
                email: '1302151931@qq.com',
                phone: '13213832373',
                createTime: '2017-08-18 09:32:68',
                updateTime: '2017-08-18 09:32:68',

            },
        {
                id: '111111',
                username: '王小虎',
                email: '1302151931@qq.com',
                phone: '13213832373',
                createTime: '2017-08-18 09:32:68',
                updateTime: '2017-08-18 09:32:68',

            },
        {
                id: '111111',
                username: '王小虎',
                email: '1302151931@qq.com',
                phone: '13213832373',
                createTime: '2017-08-18 09:32:68',
                updateTime: '2017-08-18 09:32:68',

            },
        {
                id: '111111',
                username: '王小虎',
                email: '1302151931@qq.com',
                phone: '13213832373',
                createTime: '2017-08-18 09:32:68',
                updateTime: '2017-08-18 09:32:68',

            }]
        }
    }
    render() {
        return (
            <div className="UserPage">
                <ImTable
                  data= {this.state.data}
                  columns= {this.state.columns}
                  data= {this.state.data}
                />
            </div>
        )
    }
}


export default User