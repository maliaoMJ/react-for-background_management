import React, { Component } from 'react'
import {Pagination, Icon } from 'element-react'
import { getDataByGet } from '../../util/rutil'
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
                                <Icon name="message" />
                                <span style={{ marginLeft: '5px' }}>
                                    {data.email}
                                </span>
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
                                <Icon name="time" />
                                <span style={{ marginLeft: '5px' }}>
                                  {data.createTime}
                                </span>
                            </span>
                        )
                    }
                },
                // {
                //     label: "最近登录",
                //     prop: "updateTime",
                //     render: function (data) {
                //         return (
                //             <span>
                //                 {data.updateTime}
                //             </span>
                //         )
                //     }
                // }
            ],
            data: [],
            currentPage: 1,
            size: 10,
            pageCount: 0

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
                <Pagination
                    layout="total, prev, pager, next, jumper" pageCount={this.state.pageCount} 
                    currentPage={this.state.currentPage}
                    onCurrentChange={this.changePageNumber.bind(this)}
                    />
            </div>
        )
    }
    componentDidMount () {
        //初始化
        this.loadUserList(1)
    }
    loadUserList (pageNumber) {
        getDataByGet(`/manage/user/list.do?pageNum=${pageNumber}`)
            .then(res => {
                 if(res.data.status === 0){
                     // 到底用不用moment.js 纠结
                  let data = res.data.data.list.map(item => {
                     item.createTime = new Date(item.createTime).toLocaleTimeString()
                    //  item.updateTime = new Date(item.updateTime).toLocaleTimeString()
                     return item
                 })
                     this.setState({
                         data: data,
                         currentPage: pageNumber,
                         pageCount: res.data.data.pages
                     })
                 }else{
                     alert(res.data.msg)
                     this.props.history.push('/login')
                 }
            })
            .catch(error => {
             alert('请求数据出错！')
            })
    }
    changePageNumber (value) {
        this.loadUserList(value)
    }
}


export default User